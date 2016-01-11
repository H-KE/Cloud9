'use strict';
angular.module('main')
.service('OrderService', function () {

  var _orders = [];
  this.orders = _orders;

  return {
    getOrders: function () {
      return _orders;
    },

    pushOrder: function (item) {
      _orders.push(item);
    },

    popOrder: function () {
      return _orders.pop();
    },

    clearOrders: function () {
      _orders = [];
    }
  };

});
