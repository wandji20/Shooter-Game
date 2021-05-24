import Phaser from 'phaser';
import ScrollingBackground from '../Entities/ScrollingBackground';
import { getData } from '../Score/score';
import Button from '../objects/user';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dyuOo2a4JQFxlzJCOAvy/scores';

export default class PlayerScores extends Phaser.Scene {
  constructor() {
    super('PlayerScores');
  }

  create() {
    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) {
      const keys = ['bg2', 'bg2'];
      const key = keys[Phaser.Math.Between(0, keys.length - 1)];
      const bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }

    const title = this.add.text(
      240, 100, 'Leader Board',
      {
        fontFamily: 'monospace',
        fontSize: 40,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center',
      },
    );
    title.setOrigin(0.5, 0.5);

    this.menu = new Button(
      this,
      240,
      550,
      'user',
      'Menu',
      'Title',
    );

    const getplayers = async (url) => {
      try {
        const players = await getData(url);
        let y = 200;
        for (let i = 0; i < players.length; i += 1) {
          const text = this.add.text(
            this.game.config.width * 0.5, y += 50, `${players[i].user}: ${players[i].score}`,
            {
              fontFamily: 'monospace',
              fontSize: 30,
              fontStyle: 'bold',
              color: '#ffffff',
              align: 'center',
            },
          );
          text.setOrigin(0.5, 0.5);
        }
        return players;
      } catch (error) {
        return error;
      }
    };

    getplayers(url);
  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
    }
  }
}