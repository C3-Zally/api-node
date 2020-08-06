const COLLECTION = 'countries'

module.exports = function (injectedStore) {
  let Store = injectedStore
  if (!Store) {
    Store = require('../../../store/dummy')
  }

  function list (query) {
    return Store.list(COLLECTION)
  }

  return {
    list
  }
}
