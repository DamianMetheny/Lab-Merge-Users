const datejs = require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: [],
    merge_date: ''
  };

  for (const userArray of args) {
    combinedObject.users = [...combinedObject.users, ...userArray];
  }

  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};