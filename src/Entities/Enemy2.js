import Entity from './Entity'
export default class Enemy2 extends Entity{
  constructor(scene, x,y,key, type){
    super(scene, x, y, key, 'Enemy')

    this.body.velocity.y = Phaser.Math.Between(10, 60);
  }
}