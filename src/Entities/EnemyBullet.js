import Entity from './Entity';

export default class EnemyBullet extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'bullet1');
    this.body.velocity.y = 200;
  }
}