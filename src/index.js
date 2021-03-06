import './config/style.css';
import Phaser from 'phaser';
import config from './config/config';
import GameScene from './scenes/GameScene';
import GameOverScene from './scenes/GameOverScene';
import BootScene from './scenes/BootScene';
import PreloaderScene from './scenes/PreloaderScene';
import TitleScene from './scenes/TitleScene';
import OptionsScene from './scenes/OptionsScene';
import CreditsScene from './scenes/CreditsScene';
import PlayerScores from './scenes/PlayerScores';
import PlayerInput from './scenes/PlayerInput';
import Model from './Model/SoundModel';

class MyShooterGame extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('GameScene', GameScene);
    this.scene.add('PlayerInput', PlayerInput);
    this.scene.add('PlayerScores', PlayerScores);
    this.scene.add('GameOverScene', GameOverScene);
    this.scene.start('Boot');

    const model = new Model();
    this.globals = { model };
  }
}

window.game = new MyShooterGame();
