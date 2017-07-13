angular.module('notesApp', []).controller('MainCtrl', [function () {
	var self = this;
	/* grabs username and passwrod variables form form and create a user object */
	self.submit1 = function() {
		var user = {username : self.username, password: self.password};
		console.log('First form submit with ', user);
	};
	/* user object declared with form, no need to delcare it here */
	self.submit2 = function() {
		console.log('Second form submit with ', self.user);
	};
}]);