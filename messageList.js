flash = angular.module('FlashMessages', []);

flash.directive('messageList', function() {
	return {
		restrict: 'A',
		scope: {
			messages: '='
		},
		template: '<div class="flash-messages"><div ng-repeat="site in messages.sitewide"><div ng-class="site.style">{{ site.message }}</div></div><div ng-repeat="msg in messages.page"><div ng-class="msg.style">{{ msg.message }}</div></div></div>'
	};
});
