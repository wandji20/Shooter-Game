import Phaser from 'phaser';
import sprBtnPlay from '../assets/sprBtnPlay.png';
import bg2 from '../assets/bg2.png';
import ScrollingBackground from '../Entities/ScrollingBackground';

export default class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StartScene' });
  }
  
  preload() {
    this.load.image('sprBtnPlay', sprBtnPlay);
    this.load.image('bg2', bg2);

  }

  create() {
    
    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      "sprBtnPlay"
    );


    this.btnPlay.setInteractive();

    this.btnPlay.on("pointerover", function() {
      // this.btnPlay.setTexture("sprBtnPlayHover"); // set the button texture to sprBtnPlayHover
      // this.sfx.btnOver.play(); // play the button over sound
      this.scene.start("GameScene");
    }, this);

    this.title = this.add.text(this.game.config.width * 0.5, 100, "SPACE SHOOTER", {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center'
    });
    this.title.setOrigin(0.5);

    this.backgrounds = [];
    for (var i = 0; i < 5; i++) {
      var keys = ["bg2", "bg2"];
      var key = keys[Phaser.Math.Between(0, keys.length - 1)];
      var bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }
  }

  update(){
    for (var i = 0; i < this.backgrounds.length; i++) {
      this.backgrounds[i].update();
    }
  }
}