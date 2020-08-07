const express = require('express')
const config = require('../config')

const countries = require('./components/countries/network')
const reports = require('./components/reports/network')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ROUTES
app.get('/', (req, res) => {
  res.status(200).send({
    countries: `${config.api.host}/api/country`,
    totals: `${config.api.host}/api/report`,
    totalsByDay: `${config.api.host}/api/report/daily?date=2020-08-04`,
    latestAllCountries: `${config.api.host}/api/report/countries`,
    latestCountriesByCode: `${config.api.host}/api/report/countries?code=CO`
  })
})
app.use('/api/country', countries)
app.use('/api/report', reports)

app.listen(config.api.port, () => {
  console.log('Listening on port ', config.api.port)
})
