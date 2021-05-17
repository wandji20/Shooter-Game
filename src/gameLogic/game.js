import '../style.css';
import Phaser, { AUTO } from 'phaser';

const config = {
  type: AUTO,
  // width: 480,
  // height: 640,
  width: 480,
  height: 640,
  // backgroundColor: "black",
  parent: 'game',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  scene: [],
  pixelArt: true,
  roundPixels: true,
};
// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);