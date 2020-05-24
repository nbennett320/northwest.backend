import express from 'express'
import braintree from 'braintree'
import keys from '../keys.json'
const router = express.Router()

router.get('/', (req, res) => {
  const gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: keys.merchantId,
    publicKey: keys.publicKey,
    privateKey: keys.privateKey
  })

  gateway.clientToken.generate({}, (err, response) => {
      if (response) {
        res.send(response.clientToken)
      } else {
        res.status(500).send(err)
      }
  })
})

module.exports = router