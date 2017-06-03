import {io} from './start'

export default (function () {
    // private static
    let cls = {publish: null}
    let $io = io
    // constructor
    cls.publish = (name, fn) => {
        $io.on('connection', (s) => {
            s.on(name, (args) => {
                $io.emit(name, fn.apply(null, args))
            })
        })
    }
    return cls
})()
