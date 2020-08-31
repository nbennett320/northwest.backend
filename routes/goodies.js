import goodies from '../assets/data/Goodies.json'
import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  if(goodies)
    res.send(goodies)
  else
    res.status(410)
      .send("goodies are missing (....?)")
})

module.exports = router