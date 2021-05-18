import  './config/style.css'
import Phaser, {AUTO} from 'phaser'
import config from './config/config'
import GameScene from './gameLogic/scenes/GameScene'

class MyShooterGame extends Phaser.Game{
  constructor(){
    super(config)

    this.scene.add('GameScene', GameScene);
    this.scene.start('GameScene');
  }

}

window.game  = new MyShooterGame()
