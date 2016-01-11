'use strict';
angular.module('main')
.controller('CartCtrl', function ($log, $state, ShoppingCart, OrderService, $ionicPopup) {

	this.list = ShoppingCart.getShoppingCart();

	this.price = 0;

	this.calculateTotal = function (ctrl, list) {
		ctrl.price = 0;
		_.each(list, function (item) {
			ctrl.price += item.price;
		});

		if (ctrl.price > 0) {
			ctrl.total = "Total";
		} else {
			ctrl.total = "Your cart is empty!";
		}
	};

	this.removeItem = function (ctrl, item) {
		ShoppingCart.removeItem(item);
		this.calculateTotal(ctrl, ShoppingCart.getShoppingCart());
		$state.go('main.cart', {temp: "needed"}, {reload: true});
	};

	this.purchase = function () {
		var self = this;
		var confirmPopup = $ionicPopup.confirm({
     		title: 'Confirm Purchase',
     		template: 'Are you sure you want to place this order?'
   		});

		confirmPopup.then(function(res) {
			if(res) {
				var order = {
					name: "John Doe",
					address: "123 Main Street",
					total: self.price,
					list: self.list
				}
				OrderService.pushOrder(order);
				console.log(OrderService.getOrders());
				ShoppingCart.clearShoppingCart();
				$state.go('main.cart', {temp: "needed"}, {reload: true});
			} else {
		   		console.log('You are not sure');
	 		}
		});
	}

	this.calculateTotal(this, this.list);

});
