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
import sound_active from '../assets/sound_active.png' 
import sound_inactive from '../assets/sound_inactive.png' 


export default class PreloaderScene extends Phaser.Scene {
  constructor () {
    super('Preloader');
  }
 
  preload () {
    // display progress bar
    let progressBar = this.add.graphics();
    let progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);
  
    let width = this.cameras.main.width;
    let height = this.cameras.main.height;
    let loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });
    loadingText.setOrigin(0.5, 0.5);
  
    let percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    percentText.setOrigin(0.5, 0.5);
  
    let assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    assetText.setOrigin(0.5, 0.5);
  
    // update progress bar
    this.load.on('progress', function (value) {
      percentText.setText(parseInt(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });
  
    // update file progress text
    this.load.on('fileprogress', function (file) {
      assetText.setText('Loading asset: ' + file.key);
    });
  
    // remove progress bar when complete
    this.load.on('complete', function () {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    }.bind(this));
     
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
    this.load.image('sound_active', sound_active)
    this.load.image('sound_inactive', sound_inactive)
    

    this.load.spritesheet('explosion1', explosion1, {
      frameWidth: 90,
      frameHeight: 89,
    });
    this.load.spritesheet('explosion2', explosion2, {
      frameWidth: 57,
      frameHeight: 45,
    });
  }

  init () {
    this.readyCount = 0;
  }
  
  ready () {
    	
   	
    this.scene.start('Options');
    this.readyCount+=1;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
 
  create () {
    // this.title = this.add.text(this.game.config.width * 0.5, 128, 'Preload', {
    //   fontFamily: 'monospace',
    //   fontSize: 48,
    //   fontStyle: 'bold',
    //   color: '#ffffff',
    //   align: 'center',
    // });
    // this.title.setOrigin(0.5);
  }


};