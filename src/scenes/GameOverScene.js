import Phaser from 'phaser';
import Button from '../objects/user';
import ScrollingBackground from '../Entities/ScrollingBackground';

import { postData } from '../Score/score';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dyuOo2a4JQFxlzJCOAvy/scores';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOverScene' });
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

    this.highScores = new Button(
      this,
      240,
      500,
      'user',
      'HighScores',
      'PlayerScores',
    );
    
    // console.log([this.myScore, this.myName])
    const createPlayerScore = async () => {
    
      try{
        const response = await postData(url, { user: this.myName, score: this.myScore });
        // console.log(response)
        return response;
      }catch (error){
        return error
        // console.log(error)
      }
    }
    
      createPlayerScore();
    // async function getplayers(url) {
    //   try{
    //     const data = await getData(url);
    //     const players = data.result;
    //     return players;

    //   }catch(error) {
    //     console.log(error)
    //     return error
    //   }
    // }
    // getplayers(url);
  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
    }
  }
}
