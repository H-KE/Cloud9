'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/login');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('login', {
      url: '/login',
      templateUrl: 'main/templates/login.html'
    })
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/menu.html',
      controller: 'MenuCtrl as menu'
    })
      .state('main.shop', {
        url: '/shop',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/shop.html',
            controller: 'ShopCtrl as ctrl'
          }
        }
      })
      .state('main.itemDetail', {
        url: '/shop/item/{id:int}',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/item-detail.html',
            controller: 'ItemCtrl as ctrl'
          }
        }
      })
      .state('main.cart', {
        url: '/cart',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/cart.html',
            controller: 'CartCtrl as ctrl'
          }
        },
        cache: false
      })
      .state('main.debug', {
        url: '/debug',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/debug.html',
            controller: 'DebugCtrl as ctrl'
          }
        }
      })
    .state('driver', {
      url: '/driver',
      abstract: true,
      templateUrl: 'main/templates/driver-menu.html',
      controller: 'MenuCtrl as menu'
    })
      .state('driver.map', {
        url: '/map',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/map.html',
            controller: 'MapCtrl as ctrl'
          }
        }
      })
      .state('driver.orders', {
        url: '/orders',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/orders.html',
            controller: 'OrderCtrl as ctrl'
          }
        }
      })
      .state('driver.orderDetail', {
        url: '/orders/detail/{id:int}',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/order-detail.html',
            controller: 'OrderDetailCtrl as ctrl'
          }
        }
      });
});
