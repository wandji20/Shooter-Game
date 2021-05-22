import Phaser from 'phaser';
import Button from '../objects/user';
import bg2 from '../assets/bg2.png';
import ScrollingBackground from '../Entities/ScrollingBackground';

import { getData, postData } from '../Score/score';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dyuOo2a4JQFxlzJCOAvy/scores';

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

    this.myName = localStorage.getItem('MyShooterGamePlayerName');
    this.myScore = parseInt(localStorage.getItem('MyShooterGamePlayerScore'), 10);
    this.myHighScore = parseInt(localStorage.getItem('MyShooterGameHighScore'), 10);

    this.highScore = this.add.text(
      this.game.config.width * 0.5, 200, `HIGH SCORE ${this.myHighScore}`,
      {
        fontFamily: 'monospace',
        fontSize: 30,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center',
      },
    );
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

    async function createPlayerScore(scene) {
      const response = await postData(url, { user: scene.myName, score: scene.myScore });
      return response;
    }

    if (this.myName && this.myScore) {
      createPlayerScore(this);
    }

    async function getplayers(url) {
      const data = await getData(url);
      const players = data.result;
      return players;
    }
    getplayers(url);
  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
    }
  }
}
