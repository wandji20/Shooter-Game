import Phaser from 'phaser';
import Entity from './Entity';
import EnemyBullet from './EnemyBullet';

export default class Enemy2 extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'enemy2', 'Enemy2');
    this.body.velocity.y = Phaser.Math.Between(50, 100);
    this.points = 7

    this.shootTimer = this.scene.time.addEvent({
      delay: 1200,
      callback() {
        const bullet = new EnemyBullet(
          this.scene,
          this.x,
          this.y,
        );
        bullet.setScale(this.scaleX);
        this.scene.enemyBullets.add(bullet);
      },
      callbackScope: this,
      loop: true,
    });
  }
}
