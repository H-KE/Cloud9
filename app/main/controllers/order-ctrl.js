'use strict';
angular.module('main')
.controller('OrderCtrl', function ($log, OrderService) {

	this.list = OrderService.getOrders();

});
