import express from 'express'
const router = express.Router()

router.get('/address', (req, res, next) => {
  const {
    street,
    town,
    state
  } = req.params
  
  res.send(0)
})

module.exports = router