import GameBoot from 'states/GameBoot';
import GamePreload from 'states/GamePreload';
import GameTitle from 'states/GameTitle';
import GameState from 'states/GameState';

class Game extends Phaser.Game {
	constructor() {

    super(960,507, Phaser.CANVAS, 'content', null);
    this.domElements = {};
    this.domRatio = null; // for calculating dom positioning

		this.state.add('state::boot', GameBoot, false);
    this.state.add('state::preload', GamePreload, false);
    this.state.add('state::title', GameTitle, false);
    this.state.add('state::game', GameState, false);
		this.state.start('state::boot');
	}
  updates(){
    // dom element positioning
    this.domRatio = this.scale.height/507;
    for(let id in this.domElements){
      let txt = this.game.domElements[id];
      txt.element.style.top = (this.ratio*txt.y)+'px';
      txt.element.style.left = (this.ratio*txt.x)+'px';
      txt.element.style.transform = 'scale('+this.ratio+')';
    }
  }
}

new Game();
