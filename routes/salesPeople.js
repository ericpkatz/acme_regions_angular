const router = require('express').Router();
const models = require('../db').models;
const SalesPerson = models.SalesPerson;
module.exports = router;

router.get('/', function(req, res, next){
  SalesPerson.findAll()
    .then(function(salesPeople){
      res.send(salesPeople);
    })
    .catch(next);
});

router.delete('/:id', function(req, res, next){
  SalesPerson.destroy({ where: { id: req.params.id }})
    .then(function(){
      res.sendStatus(200);
    })
    .catch(next);
});

router.post('/', function(req, res, next){
  SalesPerson.create({ name: req.body.name })
    .then(function(salesPerson){
      res.send(salesPerson);
    })
    .catch(next);
});
