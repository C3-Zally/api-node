const express = require('express')

const response = require('../../../network/response')
const Controller = require('./index')

const router = express.Router()

// Set routes
router.get('/', total)
router.get('/daily', daily)
router.get('/countries', allCountries)

// Router functions
function total (req, res, next) {
  Controller.total()
    .then(post => {
      response.success(req, res, post, 200)
    })
    .catch(next)
}

function daily (req, res, next) {
  Controller.daily(req.query.date)
    .then(post => {
      response.success(req, res, post, 200)
    })
    .catch(next)
}

function allCountries (req, res, next) {
  Controller.allCountries(req.query.code)
    .then(post => {
      response.success(req, res, post, 200)
    })
    .catch(next)
}

module.exports = router
