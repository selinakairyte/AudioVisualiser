//Constructor function to handle the onscreen menu, keyboard and mouse
//controls
function ControlsAndInput() {

	this.menuDisplayed = false;

	//playback button displayed in the top left of the screen
	this.playbackButton = new PlaybackButton();

	//make the window fullscreen or revert to windowed
	this.mousePressed = function() {
		if (playbackButton.hitCheck()) {
			playbackButton.toggle();
		} else {
			let fulls = fullscreen();
			fullscreen(!fulls);
		}
		  
		  
		//???
		//check if the playback button has been clicked
		//if not make the visualisation fullscreen
	};

	//responds to keyboard presses
	//@param keycode the ascii code of the keypressed
	this.keyPressed = function(keycode) {
		console.log(keycode);
		if (keycode == 32) {
			this.menuDisplayed = !this.menuDisplayed;
		}

		if (keycode > 48 && keycode < 58) {
			var visNumber = keycode - 49;
			vis.selectVisual(vis.visuals[visNumber].name);
		}
	};

	//draws the playback button and potentially the menu
	this.draw = function() {
		push();
		fill("white");
		stroke("black");
		strokeWeight(2);
		textSize(34);

		//playback button
		this.playbackButton.draw();
		this.menu();
		pop();


	};

	this.drawMenu = function() {
		//draw out menu items for each visualisation
		//???	
		//only draw the menu if menu displayed is set to true.
		if (this.menuDisplayed) {
			push();
			fill("white");
			stroke("black");
			strokeWeight(2);
			textSize(34);
			
			text("Select a visualisation:", 50, 50);
		
			for (let i = 0; i < vis.visuals.length; i++) {
			  text((i + 1) + ': ' + vis.visuals[i].name, 50, 100 + i * 50);
			}
			pop();
		  }
};
}
