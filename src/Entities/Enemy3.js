import Phaser from 'phaser';
import Entity from './Entity';
import EnemyBullet from './EnemyBullet';

export default class Enemy3 extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'enemy3', 'Enemy3');
    this.body.velocity.y = Phaser.Math.Between(50, 100);

    this.shootTimer = this.scene.time.addEvent({
      delay: 1500,
      callback() {
        const bullet = new EnemyBullet(
          this.scene,
          this.x,
          this.y,
        );
        bullet.setScale(this.scaleX);
        this.scene.Bullets.add(bullet);
      },
      callbackScope: this,
      loop: true,
    });
  }
}
