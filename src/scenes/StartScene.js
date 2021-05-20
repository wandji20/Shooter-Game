import Phaser from 'phaser';
import sprBtnPlay from '../assets/sprBtnPlay.png';

export default class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StartScene' });
  }
  
  preload() {
    this.load.image('sprBtnPlay', sprBtnPlay);

  }

  create() {
    // this.scene.start("GameScene");
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
  }
}