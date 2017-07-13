angular.module('notesApp', []).controller('MainCtrl', [function () {
	var self = this;
	self.submit = function () {
		console.log('User clicked submit with ', self.user);
	};
}]);