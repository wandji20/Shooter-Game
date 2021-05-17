import config from './config/style.css'
import Phaser, {AUTO} from 'phaser'
import './config/config'
import MainScene from './gameLogic/scenes/MainScene'

class MyShooterGame extends Phaser.Game{
  constructor(){
    super(config)
    // add scene to game
    this.scene.add('MainScene', MainScene);
    this.scene.start('MainScene');
  }

}

window.game  = new MyShooterGame()