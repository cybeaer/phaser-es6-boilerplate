class TestSprite extends Phaser.Sprite {

	constructor(game, x, y) {

    game.load.image('testImage', 'img/test.png');
		super(game, x, y, 'testImage');
    this.height = 192;
    this.width = 256;
    this.game.stage.addChild(this);
	}
}

export default TestSprite;
