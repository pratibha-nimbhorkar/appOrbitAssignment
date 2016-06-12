var pageApp = angular.module("pageApp", []);
pageApp.controller("pageController", function($scope, $http) {
	
	$http.get('js/data.json').success(function(data) {
		$scope.contactDetails = data;
	});

	$scope.data = [];
	$scope.addContacts = function() {
		$scope.name = $scope.fname,
		$scope.email = $scope.emailWork,
		$scope.contactNo = $scope.phWork;
		
		var result = confirm("Do you want to save the changes?");
		if (result) {
			var contactDetailsList = [];

			contactDetailsList = $scope.data;
			contactDetailsList.push
			{
				$scope.name = $scope.fname;
				$scope.email = $scope.emailWork;
				$scope.contactNo = $scope.phWork;
			}
			;
		}
		        
        var theJSON = JSON.stringify(contactDetailsList);
		$scope.post('js/data.json', theJSON).sucess(function() {
			alert("Contact is added successfully.");
		}).error(function() {
			alert("Failed");
		});
	}
	
});
