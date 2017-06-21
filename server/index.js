import './start'
import Veb from './veb'

let messages = ['hello', 'hi']
Veb.publish('messages', (msg) => {
    console.log(msg, 'server')
    return messages
})
