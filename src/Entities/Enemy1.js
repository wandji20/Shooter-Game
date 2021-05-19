import Entity from './Entity'
export default class Enemy1 extends Entity{
  constructor(scene, x,y,key, type){
    super(scene, x, y, key, 'Enemy1')

    this.body.velocity.y = Phaser.Math.Between(10, 60);
  }
}