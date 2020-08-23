import CryptoJS from 'crypto-js'
import { AES } from 'crypto-js/aes'

exports.handler = (event, context, callback) => {
  // "event" has information about the path, body, headers, etc. of the request
  // console.log('event', JSON.parse(event.body).recipe)
  // // "context" has information about the lambda environment and user details
  // console.log('context', context)
  // The "callback" ends the execution of the function and returns a response back to the caller
  let code = CryptoJS.AES.encrypt(event.body, 'cookies')
  return callback(null, {
    statusCode: 200,
    body: code.toString(),
  })
}
