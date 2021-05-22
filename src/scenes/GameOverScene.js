import Phaser from 'phaser';
import Button from './../objects/user'
import bg2 from '../assets/bg2.png';
import ScrollingBackground from '../Entities/ScrollingBackground';


import {getData, postData} from './../Score/score'

let url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dyuOo2a4JQFxlzJCOAvy/scores'


export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOverScene' });
  }

  preload() {
    // this.load.image('sprBtnPlay', sprBtnPlay);
    this.load.image('bg2', bg2);
  }
  
  create() {
    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) {
      const keys = ['bg2', 'bg2'];
      const key = keys[Phaser.Math.Between(0, keys.length - 1)];
      const bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }

    this.title = this.add.text(this.game.config.width * 0.5, 128, 'GAME OVER', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.title.setOrigin(0.5);


    this.myName = localStorage.getItem('MyShooterGamePlayerName')
    this.myScore = parseInt(localStorage.getItem('MyShooterGamePlayerScore'))
    this.myHighScore = parseInt(localStorage.getItem('MyShooterGameHighScore'))

    this.highScore = this.add.text(this.game.config.width * 0.5, 200, `HIGH SCORE ${this.myHighScore}`, {
      fontFamily: 'monospace',
      fontSize: 30,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.highScore.setOrigin(0.5);

    this.score = this.add.text(this.game.config.width * 0.5, 300, `SCORE ${this.myScore}`, {
      fontFamily: 'monospace',
      fontSize: 30,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.score.setOrigin(0.5);

    this.playAgainButton = new Button(
      this,
      240,
      400,
      'user',
      'Play Again',
      'GameScene',
    );

    let data = { 
      "user": "John Doe",
      "score": 42
    }

    
    async function createPlayerScore(scene){
      if (scene.myName && scene.myScore){
        const response = await postData(url, {'user': scene.myName , 'score': scene.myScore })
        console.log(response)
      }
    }
    createPlayerScore(this)

    async function getplayers(){
      let data = await getData(url)
      let players = data.result
      console.log(players)
    }
    getplayers()

  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
    }
  }
}
