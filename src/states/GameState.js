import RainbowText from 'objects/RainbowText';

class GameState extends Phaser.State {

	create() {
		let center = { x: this.game.world.centerX, y: this.game.world.centerY }
		let text = new RainbowText(this.game, center.x, center.y, "- phaser -\nwith a sprinkle of\nES6 dust!");
		text.anchor.set(0.5);

    let buddy = this.game.add.spine(
      150,        //X positon
      500,        //Y position
      'buddy'     //the key of the object in cache
    );

    buddy.setAnimationByName(
      0,          //Track index
      "idle",     //Animation's name
      true        //If the animation should loop or not
    );
	}
  update(){
    this.game.updates();
  }
  preload(){
    this.game.load.spine(
      'buddy',                        //The key used for Phaser's cache
      'animation/spineboy.json'       //The location of the spine's json file
    );
  }
}

export default GameState;
