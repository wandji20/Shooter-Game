import Phaser from 'phaser';
import Entity from './Entity';
import PlayerBullet from './PlayerBullet';

export default class Player extends Entity {
  constructor(scene, x, y, key, type) {
    super(scene, x, y, key, 'Player');
    this.setData('speed', 200);
    this.setData('isShooting', false);
    this.setData('timerShootDelay', 5);
    this.setData('timerShootTick', this.getData('timerShootDelay') - 0.5);
  }

  moveUp() {
    this.body.velocity.y = -this.getData('speed');
  }

  moveDown() {
    this.body.velocity.y = this.getData('speed');
  }

  moveLeft() {
    this.body.velocity.x = -this.getData('speed');
  }

  moveRight() {
    this.body.velocity.x = this.getData('speed');
  }

  update() {
    this.body.setVelocity(0, 0);
    if (this.getData('isShooting')) {
      if (this.getData('timerShootTick') < this.getData('timerShootDelay')) {
        this.setData('timerShootTick', this.getData('timerShootTick') + 1);
      } else {
        const bullet = new PlayerBullet(this.scene, this.x, this.y);
        this.scene.playerBullets.add(bullet);

        this.setData('timerShootTick', 0);
      }
    }
  }

  onDestroy(){
    this.scene.time.addEvent({ // go to game over scene
      delay: 1000,
      callback: function() {
        this.scene.scene.start("GameOverScene");
      },
      callbackScope: this,
      loop: false
    });
  }
}