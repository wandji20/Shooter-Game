// import player from './../../assets/player.png'
import bg1 from './../../assets/bg1.jpg'
// import enemy1 from './../../assets/enemy1.png'
// import enemy0 from './../../assets/enemy0.jpg'



export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }
  
  preload(){
    this.load.image('test-img', bg1)
    // this.load.image('player', player)
    // this.load.image('enemy1', enemy1)
  }

  create(){   // 480, 620
    this.bg = this.add.image(240, 310,'test-img')
    this.bg.scale = 1.29
    console.log(this.bg)

    // this.player = this.add.image(320, 394, 'player' )
    // this.player.scale = 0.5
    // this.enemy0 = this.add.image(320, 90, 'enemy1' )
    // this.enemy0.setFlip = (true, true)
    // this.enemy0.angle = -30
    // this.enemy0.scale = 1.3
    console.log(this)
  
  }
  
  update(){

  }

}