angular.module('sales')
  .factory('SalesPersonService', function($http){
    var _salesPeople = [];
    return {
      findAll: function(){
        return $http.get('/api/salesPeople')
          .then(function(result){
            angular.copy(result.data, _salesPeople);
            return _salesPeople;
          });
      },
      destroy: function(salesPerson){
        return $http.delete('/api/salesPeople/' + salesPerson.id)
          .then(function(){
            _salesPeople.splice(_salesPeople.indexOf(salesPerson), 1);
          });
      },
      create: function(salesPerson){
        return $http.post('/api/salesPeople', salesPerson)
          .then(function(result){
            _salesPeople.push(result.data);
            return _salesPeople;
          });
      },
    };
  });

