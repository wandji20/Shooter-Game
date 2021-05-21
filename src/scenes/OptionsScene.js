import Phaser from 'phaser';
 
export default class OptionsScene extends Phaser.Scene {
  constructor () {
    super('Options');
  }
 
  preload () {
  }
 
  create () {
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

    this.musicButton = this.add.image(150, 200, 'sound_active');
    this.musicButton.scale = 0.3
    this.musicText = this.add.text(200, 185, 'Music Enabled', { fontSize: 24 });
    
    this.soundButton = this.add.image(150, 300, 'sound_active');
    this.soundText = this.add.text(200, 285, 'Sound Enabled', { fontSize: 24 });
    this.soundButton.scale = 0.3
    this.musicButton.setInteractive();
    this.soundButton.setInteractive();
    
    this.musicButton.on('pointerdown', function () {
      this.model.musicOn = !this.model.musicOn;
      this.updateAudio();
    }.bind(this));
    
    this.soundButton.on('pointerdown', function () {
      this.model.soundOn = !this.model.soundOn;
      this.updateAudio();
    }.bind(this));
    
    this.updateAudio();

    this.menuButton = this.add.sprite(240, 500, 'user').setInteractive();
    this.menuText = this.add.text(0, 0, 'Menu', { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.menuText, this.menuButton);
    
    this.menuButton.on('pointerdown', function (pointer) {
      this.scene.start('Title');
    }.bind(this));
  }

  updateAudio() {
    if (this.model.musicOn === false) {
      this.musicButton.setTexture('sound_inactive');
      this.sys.game.globals.bgMusic.stop();
      this.model.bgMusicPlaying = false;
    } else {
      this.musicButton.setTexture('sound_active');
      if (this.model.bgMusicPlaying === false) {
        this.sys.game.globals.bgMusic.play();
        this.model.bgMusicPlaying = true;
      }
    }
     
    if (this.model.soundOn === false) {
      this.soundButton.setTexture('sound_inactive');
    } else {
      this.soundButton.setTexture('sound_active');
    }
  }
};