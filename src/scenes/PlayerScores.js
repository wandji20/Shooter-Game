import Phaser, { Display } from 'phaser';
import { create } from 'yallist';
import ScrollingBackground from '../Entities/ScrollingBackground';
import {getData} from './../Score/score'
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

    const title = this.add.text(240, 100, 'Leader Board', { fontSize: '40px', fill: '#fff' });
    title.setOrigin(0.5, 0.5);

    function displayScore(player, scene){
      let details = this.add.text(
        scene.game.config.width * 0.5, 200, `${player.user}: ${player.score}`,
        {
          fontFamily: 'monospace',
          fontSize: 30,
          fontStyle: 'bold',
          color: '#ffffff',
          align: 'center',
        },
      );
      details.setOrigin(0.5);
    }


    async function getplayers(url, scene) {
      const data = await getData(url);
      const players = data.result;
      let y = 200
      for( let i = 0; i <= 3; i += 1){
        let text = scene.add.text(
          scene.game.config.width * 0.5, y += 50, `${players[i].user}: ${players[i].score}`,
          {
            fontFamily: 'monospace',
            fontSize: 30,
            fontStyle: 'bold',
            color: '#ffffff',
            align: 'center',
          },
        );
        text.setOrigin(0.5, 0.5)
      }
        
    }
    getplayers(url, this)
  }

  update(){
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
    }
  }
}