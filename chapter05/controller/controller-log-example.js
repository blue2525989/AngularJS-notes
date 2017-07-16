angular.module('notesApp', [])
.controller('MainCtrl', ['$log', function ($log) { /* define $log after initializing controller */
	 var self = this;
	 self.logStuff = function () {
		 $log.log('The button was pressed');
	 };
}]);