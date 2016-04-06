'use strict'

var events = require('events');
var util = require('util');
var describes = require('./describes');

var logger = "";

module.exports = class Hotel extends events {
	constructor() {
		super();
		this.stars = 0;
	}

	addStars(stars) {
		this.stars += stars;
		this.emit(describes.starsChanged);
	};

	decStars(stars) {
		if (this.stars - stars <= 0) {
			this.stars = 0;
		} else {
			this.stars -= stars;
		}
		this.emit(describes.starsChanged);
	};

	displayStars() {
		var logMsg = describes.HotelStarsAre + this.stars;
		logger += logMsg + "\n";
	}

	getLogger(){
		return logger;
	}

	checkIfZero() {
		if (this.stars == 0) {
			var logMsg = describes.ThisHotelHasNoStars;
			logger += logMsg + '\n';
		}
	}
}
