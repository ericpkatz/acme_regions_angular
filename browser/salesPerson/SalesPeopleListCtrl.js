angular.module('sales')
  .controller('SalesPeopleListCtrl', function(salesPeople, $scope, SalesPersonService){
    $scope.salesPeople = salesPeople;
    $scope.create = function(){
      SalesPersonService.create($scope.salesPerson)
        .then(function(){
          $scope.salesPerson = {};
        })
        .catch(function(err){
          console.log(err);
        });
    
    };
    $scope.destroy = function(salesPerson){
      SalesPersonService.destroy(salesPerson)
        .catch(function(err){
          console.log(err);
        });
    };
  });
