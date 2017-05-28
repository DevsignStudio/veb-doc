<template>
    <div :class="['veb-toolbar', classSelected]">
        <div class="pull-left">
            <slot></slot>
        </div>
        <div class="pull-right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        classAfter: String,
        classBefore: String
    },
    data () {
        return {
            classSelected: null
        }
    },
    mounted () {
        this.classSelected = this.classBefore
        this.$nextTick(() => {
            let nextElement = this.$el.nextSibling
            let scrollbar = this.findAncestor(this.$el, 'simplebar')

            if (scrollbar) {
                scrollbar.SimpleBar.getScrollElement().addEventListener('scroll', (e) => {
                    let nextHeight = nextElement.offsetHeight + this.offset(nextElement).top
                    if (nextHeight <= 0 + this.$el.offsetHeight) {
                        this.classSelected = this.classAfter
                    } else {
                        this.classSelected = this.classBefore
                    }
                })
            }
        })
    },
    methods: {
        findAncestor (el, cls) {
            while ((el = el.parentElement) && !el.classList.contains(cls));
            return el
        },
        offset (elt) {
            let rect = elt.getBoundingClientRect()
            let bodyElt = document.body

            return {
                top: rect.top + bodyElt.scrollTop,
                left: rect.left + bodyElt.scrollLeft
            }
        }
    }
}
</script>
