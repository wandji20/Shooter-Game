import Phaser from 'phaser';
import Button from '../objects/user';

export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Options');
  }

  create() {
    this.background = this.add.image(240, 310, 'bg3');
    this.background.scale = 1.1;

    this.model = this.sys.game.globals.model;

    this.text = this.add.text(this.game.config.width * 0.5, 100, 'Options', {
      fontFamily: 'monospace',
      fontSize: 40,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.text.setOrigin(0.5);

    this.musicButton = this.add.image(150, 200, 'soundActive');
    this.musicButton.scale = 0.3;
    this.musicText = this.add.text(200, 185, 'Music Enabled', { fontSize: 24 });

    this.soundButton = this.add.image(150, 300, 'soundActive');
    this.soundText = this.add.text(200, 285, 'Sound Enabled', { fontSize: 24 });
    this.soundButton.scale = 0.3;
    this.musicButton.setInteractive();
    this.soundButton.setInteractive();

    this.musicButton.on('pointerdown', () => {
      this.model.musicOn = !this.model.musicOn;
      this.updateAudio();
    });

    this.soundButton.on('pointerdown', () => {
      this.model.soundOn = !this.model.soundOn;
      this.updateAudio();
    });

    this.updateAudio();

    this.menuButton = new Button(this, 240, 500, 'user', 'Menu', 'Title');
  }

  updateAudio() {
    if (this.model.musicOn === false) {
      this.musicButton.setTexture('soundInactive');
      this.sys.game.globals.bgMusic.stop();
      this.model.bgMusicPlaying = false;
    } else {
      this.musicButton.setTexture('soundActive');
      if (this.model.bgMusicPlaying === false) {
        this.sys.game.globals.bgMusic.play();
        this.model.bgMusicPlaying = true;
      }
    }

    if (this.model.soundOn === false) {
      this.soundButton.setTexture('soundInactive');
    } else {
      this.soundButton.setTexture('soundActive');
    }
  }
}