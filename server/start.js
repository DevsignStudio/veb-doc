import Nuxt from 'nuxt'
import express from 'express'
import http from 'http'
import socket from 'socket.io'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const server = http.createServer(app)
export const io = socket(server)

app.set('port', port)

// Start nuxt.js
async function start () {
    let config = require('../nuxt.config.js')
    config.dev = !(process.env.NODE_ENV === 'production')
    const nuxt = await new Nuxt(config)
    app.use(nuxt.render)
    if (config.dev) {
        try {
            await nuxt.build()
        } catch (error) {
            console.error(error) // eslint-disable-line no-console
            process.exit(1)
        }
    }
    server.listen(port, host)
    console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()
