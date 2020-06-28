import express from 'express'
const router = express.Router()

router.get('/shipping', (req, res, next) => {
  const {
    weight,
    xpos,
    ypos
  } = req.params
  
  res.send(0)
})

module.exports = router