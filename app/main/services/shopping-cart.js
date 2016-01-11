'use strict';
angular.module('main')
.service('ShoppingCart', function () {

  var _shoppingCart = [];
  this.shoppingCart = _shoppingCart;

  return {
    getShoppingCart: function () {
      return _shoppingCart;
    },

    addItem: function (item) {
      _shoppingCart.push(item);
    },

    removeItem: function (item) {
      _shoppingCart = _.without(_shoppingCart, item);
    },

    clearShoppingCart: function () {
      _shoppingCart = [];
    }
  };

});
