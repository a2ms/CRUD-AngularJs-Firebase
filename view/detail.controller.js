(function(){
  angular.module('app').controller('detailberita', 
    ['$stateParams', detailberita]);
  
  function detailberita($stateParams){
    var vm = this;
    vm.account = {};
    
    initialize();
    
    function initialize(){
      getAccount();
    }
    
    function getAccount(){
      var acctId = $stateParams.id;
      vm.account = accountService.getAccounts().filter(function(a){
        return a.id == acctId;
      })[0];
    }
  }
})();