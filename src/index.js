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
import PlayerInput from './scenes/PlayerInput'
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
    this.scene.add('GameOverScene', GameOverScene);
    this.scene.start('Boot');

    const model = new Model();
    this.globals = { model };
  }
}

window.game = new MyShooterGame();
console.log(window.game.scene);


// For creating the game 


let url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dyuOo2a4JQFxlzJCOAvy/scores'
let data = {name: 'Shooter Game'}
let otherParams = {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=UTF-8"
  },
  mode: 'no-cors',
  body: JSON.stringify(data),
}

// gameId = dyuOo2a4JQFxlzJCOAvy NosIbGwhhnEPkq9KZLfj


// fetch(url, {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });

// fetch (url)
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });

