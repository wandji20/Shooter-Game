import player from './../../assets/player.png'
import bg1 from './../../assets/bg1.jpg'
import enemy1 from './../../assets/enemy1.png'
import enemy2 from './../../assets/enemy2.png'
import enemy3 from './../../assets/enemy3.png'

import Player from './../../Entities/Player'
import Enemy1 from './../../Entities/Enemy1'
import Enemy2 from './../../Entities/Enemy2'
import Enemy3 from './../../Entities/Enemy3'


export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }


  
  preload(){
    this.load.image('test-img', bg1)
    this.load.image('player', player)
    this.load.image('enemy1', enemy1)
    this.load.image('enemy2', enemy2)
    this.load.image('enemy3', enemy3)
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
      delay: 1500,
      callback: function() {
        let enemy;

        if(Phaser.Math.Between(0, 10) <= 5){
          if(this.getEnemiesByType('Enemy1').length <=4){
         
            enemy = new Enemy1(
              this,
              Phaser.Math.Between(17, this.game.config.width-17), 34,
              'enemy1'
              )
              enemy.scale = 1.5
              enemy.angle = 180
    
          }
        }else if(Phaser.Math.Between(0, 10) <=8){
          if (this.getEnemiesByType('Enemy2').length <=3){
     
            enemy = new Enemy2(
              this,
              Phaser.Math.Between(12, this.game.config.width-12), 30,
              'enemy2'
              )
              enemy.angle = 90
          }
        }else if(Phaser.Math.Between(0, 10) <=10){
          if (this.getEnemiesByType('Enemy3').length <=2){
     
            enemy = new Enemy3(
              this,
              Phaser.Math.Between(12, this.game.config.width-12), 53,
              'enemy3'
              )
              enemy.angle = 90
          }
        }
        if (enemy !== undefined) {
          this.enemies.add(enemy);
        }
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


    for (var i = 0; i < this.enemies.getChildren().length; i++) {
      let enemy = this.enemies.getChildren()[i];

      if (enemy.x < -enemy.displayWidth*1.5 ||
        enemy.x > this.game.config.width + enemy.displayWidth *1.5 ||
        enemy.y < -enemy.displayHeight * 1.5 ||
        enemy.y > this.game.config.height + enemy.displayHeight*1.5) {
    
        enemy.destroy();
      
      }
    }



  }

  getEnemiesByType(type) {
    var arr = [];
    for (var i = 0; i < this.enemies.getChildren().length; i++) {
      var enemy = this.enemies.getChildren()[i];
      if (enemy.getData("type") == type) {
        arr.push(enemy);
      }
    }
    return arr;
  }

}
