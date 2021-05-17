import Phaser from 'phaser'

export default {
    type: Phaser.AUTO,
    width: 480,
    height: 640,
    parent: 'game',
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { x: 0, y: 0 },
      },
    },

    pixelArt: true,
    roundPixels: true,
  };