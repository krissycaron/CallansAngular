// console.log("i'm attached");

var app = angular.module("CallanIsWeird", []);

app.controller("imageShow", ($scope)=>{
	$scope.image = "http://yadbw.com/wp-content/uploads/2017/03/strange_people_1.jpg"
	
	$scope.showImageView = false;

	$scope.showWierd= () =>{
		$scope.showImageView=!$scope.showImageView;
		// console.log("hi im weird");
	} 
});



