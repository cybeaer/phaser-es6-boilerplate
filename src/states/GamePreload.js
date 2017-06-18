import RainbowText from 'objects/RainbowText';

class GamePreload extends Phaser.State {
  create() {
    this.state.start('state::title');
  }
}

export default GamePreload;
