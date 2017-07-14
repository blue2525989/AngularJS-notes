angular.module('notesApp', []).controller('MainCtrl', [function () {
	var self = this;
	self.sports = [
		{label: 'Basketball', selected: 'TRUE'},
		{label: 'Baseball', selected: 'TRUE'},
		{label: 'Curling', selected: 'TRUE'},
		{label: 'Swimming', selected: 'FALSE'}
	];
}]);