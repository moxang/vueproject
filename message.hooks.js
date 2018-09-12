

module.exports = {
  before: {
    all: [],
    find: [hook=>before(hook)],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
function before(hook){
  return new Promise((resolve,reject)=>{
    console.log('before called')
    hook.result={'data':'gaurav'}
    resolve(hook)
  })
}