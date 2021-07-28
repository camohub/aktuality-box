<template>
    <div :class="[loading ? 'loading' : '', 'latestBox__articles']">

        <div v-for="(article, index) in articles" :key="index">
            <div class="latestBox__articles__article">
                <span class="latestBox__articles__number">{{index + 1}}.</span>
                <a :href="article.url" class="latestBox__articles__link">{{article.title}}</a>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    name: 'Latest Box Articles',

    props: [
        'articles', 'loading'
    ],

    data() {
        return {

        }
    },

    computed: {
        articles() {
            return this.articles;
        },

        loading() {
            return this.loading;
        }
    },

    methods: {

    },
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import '@/assets/variables.scss';

.latestBox__articles {
    margin: 30px 0;

    #loader {
        display: block;
    }

    &.loading {
        background-color: $light-gray;
    }
}

.latestBox__articles__article {
    padding-left: 40px;
    position: relative;
    margin-bottom: 14px;
}

.latestBox__articles__number {
    position: absolute;
    left: 0;
    font-weight: bold;
}

.latestBox__articles__link {
    color: $black;
    font-weight: 600;
    display: inline-block;

    &:hover {
        color: $black;
    }
}
</style>
