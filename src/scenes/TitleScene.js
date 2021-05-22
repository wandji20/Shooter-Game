import Phaser from 'phaser';
import ScrollingBackground from '../Entities/ScrollingBackground';
import Button from '../objects/user';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    this.background = this.add.image(240, 310, 'bg3');
    this.background.scale = 1.1;
    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) {
      const keys = ['bg2', 'bg2'];
      const key = keys[Phaser.Math.Between(0, keys.length - 1)];
      const bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }

    this.gameButton = new Button(
      this,
      240,
      200,
      'user',
      'Play',
      'GameScene',
    );

    this.optionsButton = new Button(
      this,
      240,
      300,
      'user',
      'Options',
      'Options',
    );

    this.creditsButton = new Button(
      this,
      240,
      400,
      'user',
      'Credits',
      'Credits',
    );

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
    }
  }
}