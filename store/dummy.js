const countries = require('./countries')
const totals = require('./totals')
const totalDaily = require('./daily')
const latestAllCountries = require('./allCountries')

const db = {
  countries,
  reports: {
    totals,
    totalDaily,
    latestAllCountries
  }
}

async function list (tabla) {
  return db[tabla] || []
}

async function total (tabla, endpoint) {
  return db[tabla][endpoint]
}

async function daily (tabla, endpoint) {
  return db[tabla][endpoint]
}

async function allCountries (tabla, endpoint) {
  return db[tabla][endpoint]
}

module.exports = {
  list,
  total,
  daily,
  allCountries
}
