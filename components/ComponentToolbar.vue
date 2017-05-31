<template>
    <veb-toolbar class="fixed background-black elevation z2">
        <veb-icon-button name="menu" class="color-white" @click="showReveal"></veb-icon-button>
        <div class="font-title color-white" style="display: inline-block; margin: 0; margin-left: 20px;">{{pageTitle}}</div>
    </veb-toolbar>
</template>


<script>
import Helper from '../packages/veb-ui/helper.js'
export default {
    props: {
        pageTitle: String
    },
    methods: {
        showReveal () {
            let layout = Helper.getParentFromClass(this, 'veb-layout')
            layout.showReveal()
        }
    }
}
</script>
