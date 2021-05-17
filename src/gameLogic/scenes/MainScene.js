import testimg from './../../assets/test-img.png'



export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: "MainScene" });
  }
  
  preload(){
    // this.load.spritesheet('test-img', testimg, {
    //   frameWidth: 16,
    //   frameHeight: 16
    // });
    this.load.image('test-img', testimg)
  }

  create(){
    this.add.image(100,100,'test-img')
    // this.add.image(100,200,'test-img')
    // this.player = new Player(
    //   this,
    //   this.game.config.width * 0.5,
    //   this.game.config.height * 0.5,
    //   "sprPlayer",
    // );
  }

}