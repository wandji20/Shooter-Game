import Phaser from 'phaser';
import Player from '../Entities/Player';
import Enemy1 from '../Entities/Enemy1';
import Enemy2 from '../Entities/Enemy2';
import Enemy3 from '../Entities/Enemy3';
// import ScrollingBackground from '../Entities/ScrollingBackground';

import background from '../assets/bg1.jpg';
import bullet1 from '../assets/bullet1.png';
import bullet2 from '../assets/bullet2.png';
import enemy1 from '../assets/enemy1.png';
import enemy2 from '../assets/enemy2.png';
import enemy3 from '../assets/enemy3.png';
import player from '../assets/player.png';
import explosion1 from '../assets/explosion1.png';
import explosion2 from '../assets/explosion2.png';
import bg2 from '../assets/bg2.png';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {
    this.load.image('background', background);
    this.load.image('player', player);
    this.load.image('enemy1', enemy1);
    this.load.image('enemy2', enemy2);
    this.load.image('enemy3', enemy3);
    this.load.image('bullet1', bullet1);
    this.load.image('bullet2', bullet2);
    this.load.image('bg2', bg2);

    this.load.spritesheet('explosion1', explosion1, {
      frameWidth: 90,
      frameHeight: 89,
    });
    this.load.spritesheet('explosion2', explosion2, {
      frameWidth: 57,
      frameHeight: 45,
    });
  }

  create() { // 480, 620
    this.background = this.add.image(240, 310, 'background');
    this.background.scale = 1.4;

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
      delay: 1000,
      callback() {
        let enemy = null;

        if (Phaser.Math.Between(0, 10) >= 3) {
          enemy = new Enemy1(
            this,
            Phaser.Math.Between(11, this.game.config.width - 11),
            0,
          );
          enemy.angle = 180;
        } else if (Phaser.Math.Between(0, 10) >= 5) {
          if (this.getEnemiesByType('Enemy2').length < 3) {
            enemy = new Enemy2(
              this,
              Phaser.Math.Between(13, this.game.config.width - 13),
              0,
            );
            enemy.angle = 180;
          }
        } else {
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
        player.explode(false);
        player.onDestroy();
      }
    });
    this.physics.add.overlap(this.player, this.enemies, (player, enemy) => {
      if (!player.getData('isDead')
          && !enemy.getData('isDead')) {
        player.explode(false);
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