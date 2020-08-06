const COLLECTION = 'reports'

module.exports = function (injectedStore) {
  let Store = injectedStore
  if (!Store) {
    Store = require('../../../store/dummy')
  }

  function total (query) {
    return Store.total(COLLECTION, 'totals')
  }

  async function daily (query) {
    const result = await Store.total(COLLECTION, 'totalDaily')
    return result.filter((r) => {
      return r.date === query
    })
  }

  async function allCountries (query) {
    const result = await Store.allCountries(COLLECTION, 'latestAllCountries')
    if (query) {
      return result.filter((r) => {
        return r.code === query
      })
    }
    return result
  }

  return {
    total,
    daily,
    allCountries
  }
}
