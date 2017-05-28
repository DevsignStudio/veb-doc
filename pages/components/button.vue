<template>
    <div>
        <veb-page-container>
            <highlight-code lang="html">{{button1}}</highlight-code>
            
        </veb-page-container>
    </div>
</template>

<script>
import {Button1} from '~assets/code/button.js'
export default {
    data () {
        return {
            pageTitle: 'Veb UI',
            button1: Button1
        }
    },
    head () {
        return {
            title: this.pageTitle
        }
    }
}
</script>
