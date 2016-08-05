'use strict';
angular.module('main')
.controller('ItemCtrl', function (Constants, Temp, ShoppingCart, $stateParams, $ionicPopup) {

	this.item = _.find(Temp, function (item) {
		return item.id === $stateParams.id;
	});

	this.selectedQuantity = Constants.SIZE.EIGHTH;
	this.label = "Select Quantity";

	this.prices = {};
	var self = this;
	var grade = this.item.grade;

	_.each (Constants.SIZE, function(size) {
		switch (size) {
			case Constants.SIZE.EIGHTH:
				self.prices[size] = grade;
				break;
			case Constants.SIZE.QUARTER:
				self.prices[size] = grade * 2 * 0.95;
				break;
			case Constants.SIZE.HALF:
				self.prices[size] = grade * 4 * 0.92;
				break;
			case Constants.SIZE.OUNCE:
				self.prices[size] = grade * 8 * 0.9;
				break;
			}
	});

	this.addToCart = function () {
		this.item.size = this.selectedQuantity;
		this.item.price = this.prices[this.item.size];
		
		ShoppingCart.addItem(this.item);

		var alertPopup = $ionicPopup.alert({
			title: 'Success',
			template: 'Added to cart.'
		});
	};
});
