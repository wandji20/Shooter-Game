import Phaser from 'phaser';

export default class PlayerInput extends Phaser.Scene {
  constructor() {
    super('PlayerInput');
  }

  create() {
    this.title = this.add.text(this.game.config.width * 0.5, 128, 'SHOOTER GAME', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    this.message = this.add.text(this.game.config.width * 0.5, 228, 'Input Player Name', {
      fontFamily: 'monospace',
      fontSize: 20,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });

    this.message.setOrigin(0.5);

    this.body = document.querySelector('body');

    this.input = this.body.appendChild(document.createElement('input'));
    this.input.setAttribute('id', 'myText');
    this.input.setAttribute('type', 'text');

    this.nameInput = this.add.sprite(240, 350, 'user');

    this.submit = this.add.sprite(240, 420, 'user').setInteractive();
    this.submit.scale = 0.7;
    this.text = this.add.text(0, 0, 'Submit', { fontSize: '25px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.text, this.submit);

    this.submit.on('pointerdown', () => {
      if (/[a-z]/i.test(this.input.value)) {
        this.scene.start('GameScene');
        this.input.style.display = 'none';
        localStorage.setItem('MyShooterGamePlayerName', this.input.value);
      }
    });
  }
}