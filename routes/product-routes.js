const express = require('express')
const router = express.Router()

const Configuration = require('../models/configuration')


router.get('/:_id', authMiddleware.checkToken, (req,res) => {
  const {_id} = req.params
  Configuration.findOne( {_id} )
  .then( configuration => {
      return res.json(configuration)
  })
  .catch( err => res.json(err))
})