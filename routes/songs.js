import songs from '../assets/data/Songs.json'
import express from 'express'
const router = express.Router()

router.get('/album/:album', (req, res) => {
  const { album } = req.params
  const songList = songs[album]
  if(songList)
    res.send(songList)
  else
    res.status(410)
      .send("album provided is not valid")
})

router.get('/:songKey', (req, res) => {
  const { songKey } = req.params
  const song = getSongFromKey(songKey)
  if(song)
    res.send(song)
  else
    res.status(410)
      .send("song key not valid")
})

const getSongFromKey = key => {
  console.log(key)
  Object.keys(songs).forEach(i => {
    songs[i].forEach(j => {
      if(key === makeKey(j.title))
        return j
    })
  })
}

const makeKey = title => title.replace(/\s/g,'-').replace(/[.()]/g,'').toLowerCase()

module.exports = router