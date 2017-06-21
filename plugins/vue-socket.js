import Vue from 'vue'
import each from 'lodash/each'
import omit from 'lodash/omit'
import isFunction from 'lodash/isFunction'
// import SocketIO from 'socket.io-client'
import Observer from '../packages/veb-socket/Observer'
import Emitter from '../packages/veb-socket/Emitter'

let server = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
// let io = SocketIO(server)
// const { defineReactive } = Vue.util

// Vue.prototype.$socket = io
// const merge = Vue.config.optionMergeStrategies.computed
// Vue.config.optionMergeStrategies.veb = function (toVal, fromVal) {
//     if (!toVal) return fromVal
//     if (!fromVal) return toVal
//     console.log(toVal)
//     return merge(toVal, fromVal)
// }
let observer = new Observer(server)
Vue.prototype.$socket = observer.Socket

Vue.mixin({
    created () {
        let sockets = omit(this.$options['veb'], 'subscribe')
        let subscribe

        if (this.$options.veb) {
            subscribe = this.$options.veb.subscribe
        }
        this.$options.veb = new Proxy({}, {
            set: (target, key, value) => {
                Emitter.addListener(key, value, this)
                target[key] = value
                return true
            },
            deleteProperty: (target, key) => {
                Emitter.removeListener(key, this.$options.sockets[key], this)
                delete target.key
                return true
            }
        })

        if (sockets) {
            Object.keys(sockets).forEach((key) => {
                this.$options.veb[key] = sockets[key]
            })
        }
        if (subscribe) {
            each(subscribe, (item, key) => {
                let funcArr = item
                if (isFunction(item)) {
                    funcArr = item()
                }
                this.$socket.emit(key, funcArr)
            })
        }
        // console.log(this.$socket)
    },
    beforeDestroy () {
        let sockets = omit(this.$options['veb'], 'subscribe')

        if (sockets) {
            Object.keys(sockets).forEach((key) => {
                delete this.$options.veb[key]
            })
        }
    }
})
