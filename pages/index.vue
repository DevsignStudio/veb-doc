<template>
    <div>
        <veb-toolbar class="fixed" class-before="background-transparent" class-after="background-primary elevation z2">
            <veb-icon-button name="menu" class="color-white" @click="showReveal"></veb-icon-button>
            <div class="font-title color-white" style="display: inline-block; margin: 0; margin-left: 20px;">{{pageTitle}}</div>
        </veb-toolbar>
        <veb-blur-back background="/background.jpg" style="height: 100vh"></veb-blur-back>
    </div>
</template>

<script>
import Helper from '../packages/veb-ui/helper.js'

export default {
    data () {
        return {
            change: true,
            pageTitle: 'Veb UI',
            reveal: false
        }
    },
    head () {
        return {
            title: this.pageTitle
        }
    },
    computed: {
        elevationTransition () {
            if (this.change) {
                return 'z24'
            }
            return ''
        }
    },
    methods: {
        toggleClass () {
            this.change = !this.change
        },
        showReveal () {
            let layout = Helper.getParentFromClass(this, 'veb-layout')
            layout.showReveal()
        }
    }
}
</script>
