import products from '../assets/data/Products.json'
import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  if(products)
    res.send(products)
  else
    res.status(410)
      .send("no products found..?")
})

router.get('/:model', (req, res) => {
  const { model } = req.params
  const product = getProduct(model)
  if(product)
    res.send(product)
  else
    res.status(410)
      .send("this product was not found")
})

// there's def a better way to do this LOL
const getProduct = model => {
  let match
  console.log("model:", model)
  Object.values(products).forEach((el, i) => {
    console.log(el)
    Object.values(el).forEach((product, j) => {
      console.log(product)
      if(product.attributes.model.includes(reverseKey(model)) 
        || product.attributes.model.includes(model)) {
          match = product
      }
    })
  })
  return match 
    ? match
    : false
}

const reverseKey = model => model.replace(/-/g,' ').replace(/[.()]/g,'').toLowerCase()

module.exports = router