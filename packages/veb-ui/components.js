import Toolbar from './components/Toolbar.vue'
import Scrollbar from './components/Scrollbar.vue'
import BlurBack from './components/BlurBack.vue'
import Icon from './components/Icon.vue'
import IconButton from './components/IconButton.vue'
import Button from './components/Button.vue'
import PageContainer from './components/PageContainer.vue'
import Reveal from './components/Reveal.vue'
import Navigation from './components/Navigation.vue'

export default function (Vue, options) {
    Vue.component('veb-toolbar', Toolbar)
    Vue.component('veb-scrollbar', Scrollbar)
    Vue.component('veb-blur-back', BlurBack)
    Vue.component('veb-icon', Icon)
    Vue.component('veb-icon-button', IconButton)
    Vue.component('veb-button', Button)
    Vue.component('veb-page-container', PageContainer)
    Vue.component('veb-reveal', Reveal)
    Vue.component('veb-navigation', Navigation)
}
