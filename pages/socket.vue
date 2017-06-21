<template>
    <div>
        {{value}}
    </div>
</template>

<script>

export default {
    data () {
        return {
            pageTitle: 'Socket Test',
            value: '',
            hello: 'hello'
        }
    },
    head () {
        return {
            title: this.pageTitle
        }
    },
    veb: {
        subscribe: {
            messages () {
                return ['hello']
            }
        },
        messages (m) {
            this.value = m
        }
    }
}
</script>
