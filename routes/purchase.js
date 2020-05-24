import express from 'express'
import braintree from 'braintree'
import keys from '../keys.json'
const router = express.Router()

router.post('/:nonce/:amount', (req, res, next) => {
  const gateway = braintree.connect({
    environment: process.env.NODE_ENV === 'development' 
      ? braintree.Environment.Sandbox
      : braintree.Environment.Production,
    merchantId: keys.merchantId,
    publicKey: keys.publicKey,
    privateKey: keys.privateKey
  })
  const {
    nonce,
    amount,
  } = req.params

  gateway.transaction.sale({
    amount: amount,
    paymentMethodNonce: nonce,
    options: {
      // request funds from transaction
      // once authorized
      submitForSettlement: true
    }
  }, (err, result) => {
    if(result) {
      res.send(result)
    } else {
      res.status(500).send(err)
    }
  })
})

module.exports = router