import express from 'express'
import braintree from 'braintree'
const router = express.Router()
const keys = {
  merchantId: process.env.MERCHANTID,
  publicKey: process.env.PUBLICKEY,
  privateKey: process.env.PRIVATEKEY,
}

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