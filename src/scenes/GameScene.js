import Phaser from 'phaser';
import Player from '../Entities/Player';
import Enemy1 from '../Entities/Enemy1';
import Enemy2 from '../Entities/Enemy2';
import Enemy3 from '../Entities/Enemy3';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  init() {
    this.score = 0;
  }

  create() {
    this.background = this.add.image(240, 310, 'background');
    this.background.scale = 1.4;

    this.scoreBoard = this.add.sprite(240, 20, 'user');
    this.scoreBoard.depth = 100;
    this.scoreBoard.scale = 0.75;

    this.scoreValue = this.add.text(0, 0, `Score: ${this.score}`, { fontSize: '25px', fill: '#fff' });
    this.scoreValue.depth = 101;
    Phaser.Display.Align.In.Center(this.scoreValue, this.scoreBoard);

    this.player = new Player(this, 240, 579, 'player');
    this.player.scale = 0.3;
    this.player.body.setCollideWorldBounds(true);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.enemies = this.add.group();
    this.enemyBullets = this.add.group();
    this.playerBullets = this.add.group();

    this.anims.create({
      key: 'explosion1',
      frames: this.anims.generateFrameNumbers('explosion1', { start: 0, end: 10 }),
      frameRate: 20,
      repeat: 0,
    });
    this.anims.create({
      key: 'explosion2',
      frames: this.anims.generateFrameNumbers('explosion2', { start: 3, end: 5 }),
      frameRate: 20,
      repeat: 0,
    });

    this.time.addEvent({
      delay: 1200,
      callback() {
        let enemy = null;

        if (Phaser.Math.Between(0, 10) >= 3) {
          enemy = new Enemy1(
            this,
            Phaser.Math.Between(11, this.game.config.width - 11),
            0,
          );
          enemy.angle = 180;
        } else if ((Phaser.Math.Between(0, 10) < 3) && this.score >= 50) {
          if (this.getEnemiesByType('Enemy2').length < 3) {
            enemy = new Enemy2(
              this,
              Phaser.Math.Between(13, this.game.config.width - 13),
              0,
            );
            enemy.angle = 180;
          }
        } else if (this.score >= 100) {
          enemy = new Enemy3(
            this,
            Phaser.Math.Between(20, this.game.config.width - 20),
            0,
          );
          enemy.angle = 180;
          enemy.scale = 0.5;
        }

        if (enemy !== null) {
          this.enemies.add(enemy);
        }
      },
      callbackScope: this,
      loop: true,
    });

    this.physics.add.collider(this.playerBullets, this.enemies, (playerBullet, enemy) => {
      if (enemy) {
        if (enemy.onDestroy !== undefined) {
          this.score += enemy.points;
          this.scoreValue.setText(`Score: ${this.score}`);
          enemy.onDestroy();
        }
        enemy.explode(true);
        playerBullet.destroy();
      }
    });

    this.physics.add.collider(
      this.playerBullets,
      this.enemyBullets,
      (playerBullet, enemyBullet) => {
        if (enemyBullet && playerBullet) {
          enemyBullet.destroy();
          playerBullet.destroy();
        }
      },
    );

    this.physics.add.overlap(this.player, this.enemyBullets, (player, bullet) => {
      if (!player.getData('isDead')
          && !bullet.getData('isDead')) {
        localStorage.setItem('MyShooterGamePlayerScore', `${this.score}`);
        const highScore = localStorage.getItem('MyShooterGameHighScore');
        if (highScore) {
          const newHighScore = parseInt(highScore, 10) < this.score
            ? this.score : parseInt(highScore, 10);
          localStorage.setItem('MyShooterGameHighScore', newHighScore);
        } else {
          localStorage.setItem('MyShooterGameHighScore', this.score);
        }
        player.explode(false);
        player.onDestroy();
      }
    });
    this.physics.add.overlap(this.player, this.enemies, (player, enemy) => {
      if (!player.getData('isDead')
          && !enemy.getData('isDead')) {
        player.explode(false);
        localStorage.setItem('MyShooterGamePlayerScore', `${this.score}`);
        player.onDestroy();
      }
    });
  }

  update() {
    if (!this.player.getData('isDead')) {
      this.player.update();
      if (this.cursors.up.isDown) {
        this.player.moveUp();
      } else if (this.cursors.down.isDown) {
        this.player.moveDown();
      }

      if (this.cursors.left.isDown) {
        this.player.moveLeft();
      } else if (this.cursors.right.isDown) {
        this.player.moveRight();
      }
      if (this.keySpace.isDown) {
        this.player.setData('isShooting', true);
      } else {
        this.player.setData('timerShootTick', this.player.getData('timerShootDelay') - 1);
        this.player.setData('isShooting', false);
      }
    }

    this.removeSprites(this.playerBullets);
    this.removeSprites(this.enemyBullets);
    this.removeSprites(this.enemies);
  }

  removeSprites(parent) {
    for (let i = 0; i < parent.getChildren().length; i += 1) {
      const child = parent.getChildren()[i];

      if (child.x < -child.displayWidth
        || child.x > this.game.config.width + child.displayWidth
        || child.y < -child.displayHeight * 4
        || child.y > this.game.config.height + child.displayHeight) {
        if (child) {
          if (child.onDestroy !== undefined) {
            child.onDestroy();
          }

          child.destroy();
        }
      }
    }
  }

  getEnemiesByType(type) {
    const arr = [];
    for (let i = 0; i < this.enemies.getChildren().length; i += 1) {
      const enemy = this.enemies.getChildren()[i];
      if (enemy.getData('type') === type) {
        arr.push(enemy);
      }
    }
    return arr;
  }
}