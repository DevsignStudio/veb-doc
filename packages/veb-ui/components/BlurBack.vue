<template>
    <div class="veb-blur-back">
        <div class="veb-blur-back-background" :style="'background-image: url('+ background +')'" ref="background"></div>
    </div>
</template>

<script>
export default {
    props: {
        background: String
    }
}
</script>
