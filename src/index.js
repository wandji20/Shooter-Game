import config from './config/style.css'
import Phaser, {AUTO} from 'phaser'
import './config/config'
import MainScene from './gameLogic/scenes/MainScene'

class MyShooterGame extends Phaser.Game{
  constructor(){
    super(config)
    // add scene to game
    // this.ScaleManager =  new ScaleManager(this, 640, 480)
    // this.ScaleManager.N0_SCALE
    this.scene.add('MainScene', MainScene);
    this.scene.start('MainScene');
  }

}

window.game  = new MyShooterGame()

// console.log(window.game.scene.canvas)