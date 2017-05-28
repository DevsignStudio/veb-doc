<template>
    <div class="container">
        <ul>
            <li v-for="n in notes">{{n.note}}</li>
        </ul>
        <input type="text" v-model="note">
        <button @click="addEntry">Add</button>
        <nuxt-link to="/"> Index</nuxt-link>
    </div>
</template>

<script>
import {Record, Ds} from '~plugins/deepstream'
export default {
    data () {
        return {
            dsLists: [
                Record.getList('notes')
            ],
            note: '',
            notes: []
        }
    },
    methods: {
        addEntry () {
            const recordName = `note/${Ds.getUid()}`
            let anon = Record.getAnonymousRecord()
            anon.setName(recordName)
            anon.set({
                note: this.note
            })
            this.$dsAddEntry('notes', recordName)
            this.note = ''
        }
    }
}
</script>
