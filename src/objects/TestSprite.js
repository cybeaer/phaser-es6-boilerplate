class TestSprite extends Phaser.Sprite {

	constructor(game, x, y) {
		super(game, x, y, 'testImage');
    this.height = 192;
    this.width = 256;
    this.game.stage.addChild(this);
	}
}

export default TestSprite;
