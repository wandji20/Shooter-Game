import Entity from './Entity'
export default class Enemy3 extends Entity{
  constructor(scene, x,y,key, type){
    super(scene, x, y, key, 'Enemy3')

    this.body.velocity.y = Phaser.Math.Between(20, 30);
  }
}