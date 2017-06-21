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
    mounted () {
        setTimeout(() => {
            this.hello = 'Change'
        }, 5000)
    },
    veb: {
        subscribe: {
            messages () {
                if (this) {
                    return [this.hello]
                }
            }
        },
        messages (m) {
            this.value = m
        }
    }
}
</script>
