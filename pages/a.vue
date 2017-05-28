<template>
    <section class="container">
        <viu-toolbar v-model="firstname"></viu-toolbar>
        <input type="text" v-model="firstname" @keyup="setFirstname">
        <div style="width: 200px; height: 200px" class="background-primary" v-ripple></div>
        <nuxt-link to="/page1">Page 1</nuxt-link>
    </section>
</template>

<script>
import {Record} from '~plugins/deepstream'

export default {
    data () {
        return {
            record: Record.getRecord('userOne'),
            firstname: ''
        }
    },
    head () {
        return {
            title: 'Users'
        }
    },
    mounted () {
        this.record.whenReady(() => {
            this.firstname = this.record.get().firstname
        })
    },
    methods: {
        setFirstname (e) {
            this.record.set('firstname', e.target.value)
        }
    }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
