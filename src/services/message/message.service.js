// Initializes the `message` service on path `/message`
const createService = require('feathers-mongodb');
const hooks = require('./message.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/message', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('message');

  mongoClient.then(db => {
    service.Model = db.collection('message');
  });

  service.hooks(hooks);
};
