import * as deepstream from 'deepstream.io-client-js'
import cookie from 'js-cookie'
import Vue from 'vue'

let server = `ws://${process.env.HOST || 'localhost'}:${process.env.PORT + 1 || 3001}`
let dserver = deepstream(server)

let obj = {}
let loginUser = cookie.get('loginUser')

if (loginUser) {
    obj = loginUser
}

let ds = dserver.login(obj, function (success, data) {
    console.log('Logged in to deepstream')
})

export const Record = ds.record
export const Ds = ds

Vue.mixin({
    data () {
        return {
            dsLists: []
        }
    },
    mounted () {
        this.dsLists.forEach((list) => {
            list.subscribe((entries) => {
                this[list.name] = []
                entries.forEach((item) => {
                    let record = Record.getRecord(item)
                    record.whenReady(() => {
                        this[list.name].push(record.get())
                    })
                })
            })
        })
    },
    destroyed () {
        this.dsLists.forEach((record) => {
            record.discard()
        })
    }
})

Vue.prototype.$dsAddEntry = (name, recordName, index = undefined) => {
    if (index) {
        return ds.record.getList(name).addEntry(recordName, index)
    }
    return ds.record.getList(name).addEntry(recordName)
}
