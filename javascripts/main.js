// console.log("i'm attached");

var app = angular.module("CallanIsWeird", []);

app.controller("imageShow", ($scope)=>{
	$scope.image = ["http://yadbw.com/wp-content/uploads/2017/03/strange_people_1.jpg"]
	
	$scope.showListView = true;

	$scope.showWierd= () =>{
		$scope.showListView=false;
	} 
});



