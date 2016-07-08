"use strict";

function Model(){
	var updateCallCount = 0;
	var dTCumulative = 0;

	this.update = function(dt){
		updateCallCount++;
		dTCumulative += dt;
	};

	this.init = function(){
		//alert("Model:init()");
		updateCallCount = 0;
		dTCumulative = 0;
	};

	this.getUpdateCallCount = function(){
		return updateCallCount;
	};
}

