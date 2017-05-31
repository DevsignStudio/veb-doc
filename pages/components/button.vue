<template>
    <div class="toolbar-padding">
        <component-toolbar :page-title="pageTitle"></component-toolbar>
        
        <veb-page-container>
            <div class="components-panel">
                <div class="components-panel-inner">
                    <veb-button button-style="flat">Button</veb-button>
                    <veb-button button-style="flat" v-ripple>Button</veb-button>
                    <veb-button button-style="flat" class="primary" v-ripple>Button</veb-button>
                    <veb-button button-style="flat" class="accent" v-ripple>Button</veb-button>
                    <veb-button button-style="flat" class="color-green" v-ripple>Button</veb-button>
                    <veb-button button-style="flat" disabled>Button</veb-button>
                </div>
            </div>
            <div class="clearfix"></div>
            <highlight-code lang="html">{{button1}}</highlight-code>
        </veb-page-container>
        <veb-page-container>
            <div class="components-panel">
                <div class="components-panel-inner">
                    <veb-button button-style="raised">Button</veb-button>
                    <veb-button button-style="raised" v-ripple>Button</veb-button>
                    <veb-button button-style="raised" class="primary" v-ripple>Button</veb-button>
                    <veb-button button-style="raised" class="accent" v-ripple>Button</veb-button>
                    <veb-button button-style="raised" class="color-white background-green" v-ripple>Button</veb-button>
                    <veb-button button-style="raised" disabled>Button</veb-button>
                </div>
            </div>
            <div class="clearfix"></div>
            <highlight-code lang="html">{{button2}}</highlight-code>
        </veb-page-container>
        <veb-page-container>
            <div class="components-panel">
                <div class="components-panel-inner">
                    <veb-button>Button</veb-button>
                    <veb-button v-ripple>Button</veb-button>
                    <veb-button class="primary" v-ripple>Button</veb-button>
                    <veb-button class="accent" v-ripple>Button</veb-button>
                    <veb-button class="color-white background-green" v-ripple>Button</veb-button>
                    <veb-button disabled>Button</veb-button>
                </div>
            </div>
            <div class="clearfix"></div>
            <highlight-code lang="html">{{button3}}</highlight-code>
        </veb-page-container>
    </div>
</template>

<script>
import {Button1, Button2, Button3} from '~assets/code/button.js'
import Helper from '../../packages/veb-ui/helper.js'
import ComponentToolbar from '~components/ComponentToolbar'
export default {
    components: {
        ComponentToolbar
    },
    data () {
        return {
            pageTitle: 'Components > Button',
            button1: Button1,
            button2: Button2,
            button3: Button3
        }
    },
    head () {
        return {
            title: this.pageTitle
        }
    },
    methods: {
        showReveal () {
            let layout = Helper.getParentFromClass(this, 'veb-layout')
            layout.showReveal()
        }
    }
}
</script>
