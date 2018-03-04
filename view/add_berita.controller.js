angular
.module('app') 
.controller('TambahBeritaController', function($scope) {
	var ref = firebase.database().ref().child('Articles');
		$scope.articles = $firebaseArray(ref);

		$scope.createPost = function(){
			var title = $scope.article.titleTxt;
			var post = $scope.article.postTxt;
			$scope.articles.$add({
				title: title,
				post: post
			}).then(function(ref){
				console.log(ref);
				$scope.success = true;
				window.setTimeout(function() {
					$scope.$apply(function(){
						$scope.success = false;
					});
				}, 2000);
			}, function(error){
				console.log(error);
			});
		};
})