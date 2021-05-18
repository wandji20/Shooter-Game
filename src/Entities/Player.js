import Entity from './Entity'

export default class Player extends Entity {
  constructor(scene, x, y, key, type){
    super(scene, x, y, key, 'Player')
    this.setData("speed", 200);
  }

  moveUp() {
    this.body.velocity.y = -this.getData("speed");
  }
  
  moveDown() {
    this.body.velocity.y = this.getData("speed");
  }
  
  moveLeft() {
    this.body.velocity.x = -this.getData("speed");
  }
  
  moveRight() {
    this.body.velocity.x = this.getData("speed");
  }

  update(){
    this.body.setVelocity(0, 0);
  }
  
}