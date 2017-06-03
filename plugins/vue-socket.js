import Vue from 'vue'
import each from 'lodash/each'
import isFunction from 'lodash/isFunction'
import SocketIO from 'socket.io-client'

let server = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
let io = SocketIO(server)

Vue.prototype.$socket = io
Vue.mixin({
    created () {
        if (this.$options.veb && this.$options.veb.subscribe) {
            each(this.$options.veb.subscribe, (item, key) => {
                let funcArr = item
                if (isFunction(item)) {
                    funcArr = item()
                }
                this.$socket.emit(key, funcArr)
            })
        }
        // console.log(this.$socket)
    }
})
