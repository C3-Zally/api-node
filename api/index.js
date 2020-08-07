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
    countries: `http://${config.api.host}/api/country`,
    totals: `http://${config.api.host}/api/report`,
    totalsByDay: `http://${config.api.host}/api/report/daily/?date=2020-08-04`,
    latestAllCountries: `http://${config.api.host}/api/report/countries`,
    latestCountriesByCode: `http://${config.api.host}/api/report/countries?code=CO`
  })
})
app.use('/api/country', countries)
app.use('/api/report', reports)

app.listen(config.api.port, () => {
  console.log('Listening on port ', config.api.port)
})
