import components from './components'
import directives from './directives'

export default {
    install (Vue, options = {}) {
        require('./css/veb.css')
        require('mdi/css/materialdesignicons.min.css')
        components(Vue, options)
        directives(Vue, options)
    }
}
