angular.module('notesApp', []).controller('MainCtrl', [function () {
	var self = this;
	/* book says this will auto sort by alpabet but does not */
	self.notes = {
			shyam: {
				id: 1,
				label: 'First Note',
				done: false
			},
			Misko: {
				id: 3,
				label: 'Finished Third Note',
				done: true
			},
			brad: {
				id: 2,
				label: 'Second Note',
				done: false
			}
	};
}]);