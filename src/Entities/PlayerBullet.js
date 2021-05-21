import Entity from './Entity';

export default class EnemyBullet extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'bullet2');
    this.body.velocity.y = -250;
    this.scale = 2;
  }
}