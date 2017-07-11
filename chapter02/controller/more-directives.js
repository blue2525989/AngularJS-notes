angular.module('notesApp', []).controller('MainCtrl', [ function () {
	var self = this;
	self.notes = [
		{label: 'First Note', done: false, asignee: 'Jason'},
		{label: 'Second Note', done: true, asignee: 'Becki'},
		{label: 'Third Note', done: false},
		{label: 'Third Note', done: false},
		{label: 'Third Note', done: false},
		{label: 'Third Note', done: true},
		{label: 'Third Note', done: true}
	];
	
	self.getNoteClass = function(status) {
		return {
			done: status,
			pending: !status
		};
	};
}])