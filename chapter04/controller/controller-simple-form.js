angular.module('notesApp', []).controller('MainCtrl', [function () {
	var self = this;
	self.submit = function() {
		/* shows key value pair of username/password in console log */
		console.log('User clicked submit with ', self.user);
	};	
}]);