var myApp = angular.module('MyApp', ['onsen', 'ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('page-A', {
				url: '/pageA',
				templateUrl: 'pageA.html',
				onEnter: ['$rootScope', function($rootScope) {
					// 押下時に、splitterを閉じる
					$rootScope.splitter.left.close();
				}]
			})
			.state('page-B', {
				url: '/pageB',
				templateUrl: 'pageB.html',
				onEnter: ['$rootScope', function($rootScope) {
					// 押下時に、splitterを閉じる
					$rootScope.splitter.left.close();
				}]
			})
		
	}]);

