<template>
    <div class="veb-navigation-item unselectable">
        <div class="nav-list" v-ripple="{background: '#d1d1d1'}">
            <slot></slot>
            <div class="chevron open" v-if="sublist=== true">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </div>
        </div>
        <div v-if="sublist=== true" class="nav-sublist">
            <slot name="sublist"></slot>
        </div>
    </div>
</template>

<script>
import ripple from '../directives/v-ripple'
import Helper from '../helper.js'

export default {
    props: {
        sublist: {
            type: Boolean,
            default: false
        },
        to: {
            default: '7w483jk5h35735j35j35838583535j3h5jh3583985935jn35hdf8g9fd8g3j5'
        }
    },
    directives: {
        ripple
    },
    computed: {
        tag () {
            if (this.sublist || this.to === '7w483jk5h35735j35j35838583535j3h5jh3583985935jn35hdf8g9fd8g3j5') {
                return 'div'
            }
            return 'a'
        }
    },
    mounted () {
        this.$nextTick(() => {
            let el = this.$el
            let navList = Helper.children(el, 'nav-list')
            if (this.sublist === true) {
                let chevron = Helper.children(navList, 'chevron')
                let navSublist = Helper.children(el, 'nav-sublist')
                Helper.addClass(chevron, 'open')

                navList.addEventListener('mouseup', (e) => {
                    let sublistHeight = navSublist.scrollHeight
                    if (Helper.hasClass(navSublist, 'open')) {
                        navSublist.style.maxHeight = '0px'
                    } else {
                        navSublist.style.maxHeight = sublistHeight + 'px'
                    }
                    Helper.toggleClass(navSublist, 'open')
                    Helper.toggleClass(chevron, 'open')
                })
            } else {
                el.addEventListener('mouseup', () => {
                    let reveal = Helper.getParentFromClass(this, 'reveal')
                    if (reveal) {
                        reveal.disable()
                    }
                    this.$emit('click')
                })
            }
            // let $elIndex = parseInt($el.index())
            // $el.css('z-index', 100 - $elIndex)
            // if (this.sublist === true) {
            //     $navList.addClass('sublist')
            //     let $navSublist = $el.find('.nav-sublist')
            //     let $chevron = $navList.children('.chevron')
            //     let sublistHeight = $navSublist.outerHeight()
            //     $navSublist.velocity({marginTop: [ '-' + sublistHeight + 'px', [0.0, 0.0, 0.2, 1], '0']}, { duration: 200 })
            //     $chevron.velocity({rotateZ: ['90deg', [0.0, 0.0, 0.2, 1], '0deg']}, { duration: 200 })
            //     let hasActive = $navSublist.find('.router-link-active').length > 0

            //     if (hasActive) {
            //         $chevron.velocity('reverse')
            //         $navSublist.velocity('reverse')
            //     }
            //     $navList.on('click', (e) => {
            //         e.preventDefault()
            //     })
            //     $navList.on('mouseup', (e) => {
            //         e.preventDefault()
            //         $chevron.velocity('reverse')
            //         $navSublist.velocity('reverse')
            //     })
            // } else {
            //     $el.on('click', (e) => {
            //         $el.parents('.veb-navigation').removeClass('open')
            //         self.$emit('click')
            //     })
            // }
        })
    }
}
</script>
