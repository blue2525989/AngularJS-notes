angular.module('notesApp', []).controller('MainCtrl', [function () {
	var self = this;
	this.countires = [
		{label: 'USA', id: 1},
		{label: 'India', id: 2},
		{label: 'Other', id: 3}
	];
	this.selectedCountryId = 2;
	this.selectedCountry = this.countries[1];
}]);