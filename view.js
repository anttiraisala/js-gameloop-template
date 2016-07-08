"use strict";

var View = function(){
	var v_ModelUpdateIndicator;
	var v_ViewUpdateIndicator;
	var repaintCount = 0;

	var model;

	this.repaint = function(){
	//alert("View:repaint()");
		repaintCount++;

		v_ModelUpdateIndicator.text("v_ModelUpdateIndicator update " + model.getUpdateCallCount());
		v_ViewUpdateIndicator.text("v_ViewUpdateIndicator update " + repaintCount);
	};

	this.init = function(pModel){
		//alert("View:init()");
		model = pModel;
		v_ModelUpdateIndicator = $(".v_ModelUpdateIndicator");
		v_ModelUpdateIndicator.text("v_ModelUpdateIndicator Init " + Date.now());
		v_ViewUpdateIndicator = $(".v_ViewUpdateIndicator");
		v_ViewUpdateIndicator.text("v_ViewUpdateIndicator Init " + Date.now());
	};
}

/*View.prototype.init = function(){
	//alert("View:init()");
}*/

/*
View.prototype.repaint = function(){
	//alert("View:repaint()");

	this.repaintCount++;
}*/

