import Phaser from 'phaser';
import ScrollingBackground from '../Entities/ScrollingBackground';
import { getData } from '../Score/score';

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
    function getFilteredList(arr) {
      let result = [];
      arr.forEach((player) => {
        const item = result.find((obj) => obj.user === player.user);
        if (!item) {
          result.push(player);
        } else if (item) {
          item.score = item.score > player.score ? item.score : player.score;
        }
      });
      result = result.sort((a, b) => b.score - a.score);
      return result;
    }

    async function getplayers(url, scene) {
      const data = await getData(url);
      const players = data.result;
      const filteredList = getFilteredList(players);
      let y = 200;
      for (let i = 0; i < filteredList.length; i += 1) {
        const text = scene.add.text(
          scene.game.config.width * 0.5, y += 50, `${filteredList[i].user}: ${filteredList[i].score}`,
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
    }

    getplayers(url, this);
  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
    }
  }
}