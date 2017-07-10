/* add controller to module with dot notation */
angular.module('notesApp', []).controller('MainCtrl', [function() {
	/* assign variable a value with 'this' keyword */
	this.helloMsg = 'Guten tag ';
	this.goodbyeMsg = 'Aufwiedersien ';
}])