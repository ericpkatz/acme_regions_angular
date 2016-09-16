const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL);

var SalesPerson = db.define('sales_person', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

var Region = db.define('region', {
  zip: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = {
  models: {
    SalesPerson: SalesPerson,
    Region: Region
  },
  syncAndSeed: function(){
    return db.sync({ force: true })
      .then(function(){
        return Promise.all([
            SalesPerson.create({ name: 'moe' }),
            SalesPerson.create({ name: 'larry' }),
            Region.create({ zip: '10025' }),
            Region.create({ zip: '90210' })
        ]);
      });
  }
};
