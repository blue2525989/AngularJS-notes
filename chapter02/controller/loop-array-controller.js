angular.module('notesApp', []).controller('MainCtrl', [function () {
	var self = this;
	/* array of JSON objects defined to self(this) */
	self.notes = [
		{id: 1, label: 'First Note', done: false},
		{id: 2, label: 'Second Note', done: true},
		{id: 3, label: 'Third Note', done: false},
		{id: 4, label: 'Fourth Note', done: true}
		];
}]);
