import Phaser from 'phaser'

export default {
    type: Phaser.AUTO,
    // width: 640,
    // height: 480,
    scale: {
      parent: 'game',
      mode: Phaser.Scale.NO_SCALE,
      width: 640,
      height: 480
    },

    // backgroundColor: "black",
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { x: 0, y: 0 },
      },
    },

    pixelArt: true,
    roundPixels: true,
    // zoom: 0,
  };
