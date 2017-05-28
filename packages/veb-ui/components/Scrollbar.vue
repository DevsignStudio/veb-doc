<template>
    <div class="simplebar" style="height: 100%">
        <slot></slot>
    </div>
</template>

<script>
    import 'simplebar/dist/simplebar.css'
    export default {
        mounted () {
            let self = this
            if (process.BROWSER_BUILD) {
                let Simplebar = require('simplebar')
                self.sbar = new Simplebar(self.$el)
            }
        }
    }
</script>
