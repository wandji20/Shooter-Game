import Entity from './SampleEntity'

export default class Player extends Entity {
  constructor(scene, x, y, key, type){
    super(scene, x, y, key, 'Player')
    this.setData("speed", 200);
  }

  moveUp() {
    this.body.velocity.y = -this.getData("speed");
    // this.body.y -= 2;
  }
  
  moveDown() {
    this.body.velocity.y = this.getData("speed");
    // this.body.y += 2
  }
  
  moveLeft() {
    this.body.velocity.x = -this.getData("speed");
    // this.body.x -= 2
  }
  
  moveRight() {
    this.body.velocity.x = this.getData("speed");
    // this.body.x += 2
  }

  update(){
    this.body.setVelocity(0, 0);
  }
  
}