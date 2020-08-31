import albums from '../assets/data/Albums.json'
import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  if(albums)
    res.send(albums)
  else
    res.status(410)
      .send("albums is missing (....?)")
})

module.exports = router