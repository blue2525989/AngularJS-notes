angular.module('notesApp', []).controller('MainCtrl', [function () {
	var self = this;
	self.message = 'Hello ';
	/* can define functions when declaring variables in JS */
	self.changeMessage = function () {
		self.message = 'Goodbye ';
	}
}])