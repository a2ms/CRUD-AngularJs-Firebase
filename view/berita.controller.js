angular
.module('app') 
.controller('BeritaController', function($scope, $firebaseArray, $firebaseObject) {

	var ref = firebase.database().ref().child('Berita');
	$scope.Berita = $firebaseArray(ref);

	$scope.createPost = function(){
		var id_berita = $scope.data.id_berita;
		var judul = $scope.data.judul_berita;
		var deskripsi = $scope.data.deskripsi_berita;
		$scope.Berita.$add({
			id_berita: id_berita,
			judul: judul,
			deskripsi: deskripsi
		}).then(function(ref){
			console.log(ref);
			$scope.success = true;
			$("#myModalTambah").modal('hide');
			window.setTimeout(function() {
				$scope.$apply(function(){
					
					$scope.success = false;
				});
			}, 2000);
		}, function(error){
			console.log(error);
		});
	};
	

	$scope.detailData = function(id){
		var ref = firebase.database().ref().child('Berita/' + id);
		$scope.readData = $firebaseObject(ref);
	};
	
	$scope.editPost = function(id){
		var ref = firebase.database().ref().child('Berita/' + id);
		$scope.editPostData = $firebaseObject(ref);
	};

	$scope.updatePost = function(id){
		var ref = firebase.database().ref().child('Berita/' + id);
		ref.update({
			judul: $scope.editPostData.judul,
			deskripsi: $scope.editPostData.deskripsi
		}).then(function(ref){
			$scope.$apply(function(){
				$("#myModalEdit").modal('hide');
			});
		}, function(error){
			console.log(error);
		});
	};

	$scope.deleteCnf = function(Berita){
		$scope.deleteBerita = Berita;
	};

	$scope.deletePost = function(deleteBerita){
		$scope.Berita.$remove(deleteBerita);
		$("#myModalHapus").modal('hide');
	};
	
}); 