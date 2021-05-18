import player from './../../assets/player.png'
import bg1 from './../../assets/bg1.jpg'
import enemy1 from './../../assets/enemy1.png'
// import enemy0 from './../../assets/enemy0.jpg'


import Player from './../../Entities/Player'
import Enemy1 from './../../Entities/Enemy1'


export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }
  
  preload(){
    this.load.image('test-img', bg1)
    this.load.image('player', player)
    this.load.image('enemy1', enemy1)
  }

  create(){   // 480, 620
    this.bg = this.add.image(240, 310,'test-img')
    this.bg.scale = 1.29

    this.cursor = this.input.keyboard.createCursorKeys()

    this.player = new Player(this, 240, 578, 'player' )
    this.player.scale = 0.5
    this.player.body.setCollideWorldBounds(true);

    this.enemies = this.add.group();
    
    
    this.time.addEvent({
      delay: 1000,
      callback: function() {
        var enemy = null;
        
        enemy = new Enemy1(
          this,
          Phaser.Math.Between(17, this.game.config.width-17), 34,
          'enemy1'
          )
          enemy.scale = 1.5
          enemy.angle = 180
          this.enemies.add(enemy);
      },
      callbackScope: this,
      loop: true
    });
  
  }
  
  update(){
    this.player.update();
    if (this.cursor.left.isDown){
      this.player.moveLeft()
    }else if (this.cursor.right.isDown){
      this.player.moveRight()
    }else if (this.cursor.up.isDown){
      this.player.moveUp()
    }else if (this.cursor.down.isDown){
      this.player.moveDown()
    }
  }

}