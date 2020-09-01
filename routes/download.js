import express from 'express'
const router = express.Router()

router.get('/:path', (req, res) => {
  const { path } = req.params
  const file = require(`../public/assets/downloads/${path}`)
  if(file)
    res.download(file)
  else
    res.status(410)
      .send("this is not a file my dude")
})

module.exports = router