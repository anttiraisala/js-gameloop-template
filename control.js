"use strict";

if (typeof jQuery != 'undefined') {  
    // jQuery is loaded => print the version
    alert(jQuery.fn.jquery);
}

function Control(){
	var model = new Model();
	var view = new View();

	var now = Date.now();
	var then = now-16;
	var dt = 0.016;
	//var self = this;

	this.init = function(){
		//alert("Control:init()");
		model.init();
		view.init(model);

		this.modelTick();
		this.viewTick();
	};

	this.modelTick = function(){
		now = Date.now();
		dt = Math.min((now-then)/1000, 0.1);
		model.update(dt);
		//setTimeout(self.modelTick, 0);
		setTimeout(this.modelTick.bind(this), 0);
		then = now;
	};

	this.viewTick = function(){
		view.repaint();
		//requestAnimationFrame(self.viewTick);
		requestAnimationFrame(this.viewTick.bind(this));
	};
}
