import Phaser from 'phaser';
 
export default class TitleScene extends Phaser.Scene {
  constructor () {
    super('Title');
  }
 
  create () {
    this.background = this.add.image(240, 310, 'bg3');
    this.background.scale = 1.1;
    this.gameButton = this.add.sprite(100, 200, 'user').setInteractive();
    this.centerButton(this.gameButton, 1);
     
    this.gameText = this.add.text(0, 0, 'Play', { fontSize: '32px', fill: '#fff' });
    this.centerButtonText(this.gameText, this.gameButton);

    this.gameButton.on('pointerdown', function (pointer) {
      this.scene.start('GameScene');
    }.bind(this));

    // Options
    this.optionsButton = this.add.sprite(300, 200, 'user').setInteractive();
    this.centerButton(this.optionsButton);
     
    this.optionsText = this.add.text(0, 0, 'Options', { fontSize: '32px', fill: '#fff' });
    this.centerButtonText(this.optionsText, this.optionsButton);
     
    this.optionsButton.on('pointerdown', function (pointer) {
      this.scene.start('Options');
    }.bind(this));


    // Credits
    this.creditsButton = this.add.sprite(300, 200, 'user').setInteractive();
    this.centerButton(this.creditsButton, -1);
    
    this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff' });
    this.centerButtonText(this.creditsText, this.creditsButton);
    
    this.creditsButton.on('pointerdown', function (pointer) {
      this.scene.start('Credits');
    }.bind(this));

    // this.input.on('pointerover', function (event, gameObjects) {
    //   // gameObjects[0].setTexture('blueButton2');
    // });
     
    // this.input.on('pointerout', function (event, gameObjects) {
    //   gameObjects[0].setTexture('blueButton1');
    // });
  }

  centerButton (gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(this.game.config.width/2, this.game.config.height/2 - offset * 100, this.game.config.width, this.game.config.height)
    );
  }
   
  centerButtonText (gameText, gameButton) {
    Phaser.Display.Align.In.Center(
      gameText,
      gameButton
    );
  }
};