'use strict';
angular.module('main')
.controller('OrderDetailCtrl', function (Constants, Temp, OrderService, $stateParams, $ionicPopup) {

	var orders = OrderService.getOrders();
	this.list = orders[$stateParams.id].list;
});
