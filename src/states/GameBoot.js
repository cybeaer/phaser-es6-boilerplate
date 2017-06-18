import RainbowText from 'objects/RainbowText';

class GameBoot extends Phaser.State {

    create() {
      this.game.add.plugin(PhaserSpine.SpinePlugin);

      this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.game.scale.refresh();
      this.game.scale.setMinMax(640, 338, 1920, 1014);

      this.state.start('state::preload');
    }
}

export default GameBoot;
