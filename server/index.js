import './start'
import Veb from './veb'

let messages = ['hello', 'hi']
Veb.publish('messages', (msg) => {
    if (msg) {
        messages.push(msg)
    }
    return messages
})
