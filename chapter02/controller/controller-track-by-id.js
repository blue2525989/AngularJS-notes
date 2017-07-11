angular.module('notesApp', []).controller('MainCtrl', [function () {
	var self = this;
	var notes = [
		{
			id: 1,
			label: 'First Note',
			done: false,
			someRandom: 31431
		},
		{
			id: 2,
			label: 'Second Note',
			done: false
		},
		{
			id: 3,
			label: 'Finished Third Note',
			done: true
		}
	];
	
	self.notes1 = angular.copy(notes);
	self.notes2 = angular.copy(notes);
	self.changeNotes = function () {
		notes = [
			{
				id: 1,
				label: 'Changed Note',
				done: false,
				someRandom: 4242
			},
			{
				id: 2,
				label: 'Second Note',
				done: false
			},
			{
				id: 3,
				label: 'Finsihed Third Note',
				done: true
			}
		];
		
		self.notes1 = angular.copy(notes);
		self.notes2 = angular.copy(notes);
	};
}]);