import TestSprite from 'objects/TestSprite';

class GameTitle extends Phaser.State {
  create() {
    let center = { x: this.game.world.centerX, y: this.game.world.centerY }
    this.img = new TestSprite(this.game, center.x, center.y);
    this.img.anchor.set(0.5);
    this.state.start('state::game');
  }

  preload() {
    this.game.load.image('testImage', 'images/test.png');
  }

  update(){
    this.game.updates();
  }

  shutdown(){
    this.img.destroy();
  }
}

export default GameTitle;
