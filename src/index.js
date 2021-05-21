import './config/style.css';
import Phaser from 'phaser';
import config from './config/config';
import StartScene from './scenes/StartScene';
import GameScene from './scenes/GameScene';
import GameOverScene from './scenes/GameOverScene';

class MyShooterGame extends Phaser.Game {
  constructor() {
    super(config);

    this.scene.add('StartScene', StartScene);
    this.scene.add('GameScene', GameScene);
    this.scene.add('GameOverScene', GameOverScene);
    this.scene.start('StartScene');
  }
}

window.game = new MyShooterGame();
// console.log(window.game.scene);