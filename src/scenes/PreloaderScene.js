import Phaser from 'phaser';

import background from '../assets/bg1.jpg';
import bullet1 from '../assets/bullet1.png';
import bullet2 from '../assets/bullet2.png';
import enemy1 from '../assets/enemy1.png';
import enemy2 from '../assets/enemy2.png';
import enemy3 from '../assets/enemy3.png';
import player from '../assets/player.png';
import explosion1 from '../assets/explosion1.png';
import explosion2 from '../assets/explosion2.png';
import bg2 from '../assets/bg2.png';
import bg3 from '../assets/bg3.png';
import user from '../assets/user.png';
import soundActive from '../assets/sound_active.png';
import soundInactive from '../assets/sound_inactive.png';

import bgMusic from '../assets/bgMusic.mp3';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    // display progress bar
    const progressBar = this.add.graphics({ x: 240, y: 270 });
    const progressBox = this.add.graphics({ x: 240, y: 370 });
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100, 10)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    // update file progress text
    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    // remove progress bar when complete
    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

    // load assets needed in our game
    this.load.image('background', background);
    this.load.image('player', player);
    this.load.image('enemy1', enemy1);
    this.load.image('enemy2', enemy2);
    this.load.image('enemy3', enemy3);
    this.load.image('bullet1', bullet1);
    this.load.image('bullet2', bullet2);
    this.load.image('bg2', bg2);
    this.load.image('bg3', bg3);
    this.load.image('user', user);
    this.load.image('soundActive', soundActive);
    this.load.image('soundInactive', soundInactive);
    this.load.audio('bgMusic', bgMusic);

    this.load.spritesheet('explosion1', explosion1, {
      frameWidth: 90,
      frameHeight: 89,
    });
    this.load.spritesheet('explosion2', explosion2, {
      frameWidth: 57,
      frameHeight: 45,
    });
  }

  init() {
    this.readyCount = 0;
  }

  ready() {
    if (localStorage.getItem('MyShooterGamePlayerName')) {
      this.readyCount += 1;
      if (this.readyCount === 1) {
        this.scene.start('Title');
      }
    } else {
      this.scene.start('PlayerInput');
    }
  }
}