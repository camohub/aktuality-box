<template>
    <div class="container-fluid">
        <div class="row">
            <latest-box />
        </div>
    </div>
</template>


<script>
// @ is an alias to /src
import LatestBox from '@/components/LatestBox.vue'

export default {
    name: 'Page 1',

    data() {
        return {
            
        }
    },

    components: {
        LatestBox,
    },
}
</script>


<style lang="scss" scoped>

</style>
