import Phaser from 'phaser'
import sprBtnPlay from '../assets/sprBtnPlay.png';
import bg2 from '../assets/bg2.png';
import ScrollingBackground from '../Entities/ScrollingBackground';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameOverScene" });
  }

  preload() {
    this.load.image('sprBtnPlay', sprBtnPlay);
    this.load.image('bg2', bg2);
    
  }

  create() {
    this.title = this.add.text(this.game.config.width * 0.5, 128, "GAME OVER", {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center'
    });
    this.title.setOrigin(0.5);

    this.btnRestart = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      "sprBtnPlay"
    );

    this.btnRestart.setInteractive();

    // this.btnRestart.on("pointerup", function() {
    //   this.btnRestart.setTexture("sprBtnRestart");
    // }, this);
    
    this.btnRestart.on("pointerover", function() {
      this.scene.start("SceneMain");
      // this.btnRestart.setTexture("sprBtnRestartHover"); // set the button texture to sprBtnPlayHover
      // this.sfx.btnOver.play(); // play the button over sound
    }, this);

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

