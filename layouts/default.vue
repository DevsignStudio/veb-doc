<template>
    <div style="height: 100%; overflow: hidden" class="veb-layout">
        <veb-scrollbar>
            <nuxt/>
        </veb-scrollbar>
        <veb-reveal v-model="reveal">
            <veb-navigation>
                <nuxt-link to="/" exact>
                    <veb-nav-list><veb-icon name="home"></veb-icon> Veb UI</veb-nav-list>
                </nuxt-link>
                <veb-nav-list :sublist="true"><veb-icon name="shape-plus"></veb-icon> Components
                    <span slot="sublist">
                        <nuxt-link to="/components/button" exact>
                            <veb-nav-list><veb-icon name="crop-landscape"></veb-icon> Button</veb-nav-list>
                        </nuxt-link>
                    </span>
                </veb-nav-list>
            </veb-navigation>
        </veb-reveal>
    </div>
</template>

<script>
import MyFooter from '~components/Footer.vue'

export default {
    components: {
        MyFooter
    },
    data () {
        return {
            reveal: false
        }
    },
    methods: {
        showReveal () {
            this.reveal = true
        }
    }
}
</script>

<style>
.container
{
    margin: 0;
    width: 100%;
    padding: 100px 0;
    text-align: center;
}

.button, .button:visited
{
    display: inline-block;
    color: black;
    letter-spacing: 1px;
    background-color: #fff;
    border: 2px solid #000;
    text-decoration: none;
    text-transform: uppercase;
    padding: 15px 45px;
}

.button:hover, .button:focus
{
    color: #fff;
    background-color: #000;
}

.title
{
    color: #000;
    font-weight: 300;
    font-size: 2.5em;
    margin: 0;
}
</style>
