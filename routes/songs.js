import songs from '../assets/data/Songs.json'
import express from 'express'
const router = express.Router()

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
  for(const i in Object.keys(songs)) {
    const album = Object.keys(songs)[i]
    for(const j in album) {
      const song = songs[album][Object.keys(album)[j]]
      if(makeKey(song["title"]) === key) {
        return song
      }
    }
  }
}

const makeKey = title => title.replace(/\s/g,'-').replace(/[.()]/g,'').toLowerCase()

module.exports = router