import express from 'express'
const router = express.Router()

router.get('/shipping/address', (req, res, next) => {
  const {
    weight,
    street,
    town,
    state,
    zip
  } = req.params
  
  res.send(0)
})

router.get('/shipping/location', (req, res, next) => {
  const {
    weight,
    lat,
    long,
  } = req.params
  
  res.send(0)
})

module.exports = router