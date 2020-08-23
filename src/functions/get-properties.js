import CryptoJS from 'crypto-js'
import { AES } from 'crypto-js/aes'

exports.handler = (event, context, callback) => {
  let bytes = CryptoJS.AES.decrypt(event.body, 'cookies')
  return callback(null, {
    statusCode: 200,
    body: bytes.toString(CryptoJS.enc.Utf8),
  })
}
