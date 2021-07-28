<template>
    <div class="latestBox col-12 col-md-6 offset-md-3">
        <h3 class="latestBox__header">
            Najčítanejšie
            <div class="latestBox__nav">
                <a href="#" @click.prevent="loadOneDayNews(); toggleActiveClass($event)" class="latestBox--navLinks active">24h</a> / 
                <a href="#" @click.prevent="loadThreeDaysNews(); toggleActiveClass($event)" class="latestBox--navLinks">3d</a> / 
                <a href="#" @click.prevent="loadSevenDaysNews(); toggleActiveClass($event)" class="latestBox--navLinks">7d</a>
            </div>
        </h3>

        <div v-if="error" @click="error = false" class="alert alert-danger">Pri načítavaní došlo k chybe.</div>
        
        <latest-box-articles :articles="currentArticles" :loading="loading" />

        <Loader v-if="loading" />
    </div>
</template>


<script>

import apiUrls from '@/helpers/ApiUrls';
import LatestBoxArticles from '@/components/LatestBoxArticles.vue';
import Loader from '@/components/Loader.vue'  // https://loading.io/css/

export default {

    name: 'Latest Box',

    data() {
        return {
            currentDay: null,

            oneDayNews: null,
            threeDaysNews: null,
            sevenDaysNews: null,

            currentArticles: null,

            links: null,

            loading: false,

            error: false,
        }
    },

    methods: {
        getDay() {
            let d = new Date();
            return d.getDate();
        },

        setCurrentDay() {
            this.currentDay = this.getDay();
        },

        checkDay() {
            if( !this.currentDay || (this.currentDay != this.getDay()) ) return false;  // On midnight articles should be reloaded.
            return true;
        },

        toggleActiveClass(e) {
            this.links.each(function() {
                $(this).removeClass('active');
            });
            e.target.classList.add('active');
        },
        
        loadOneDayNews() {
            if( !this.checkDay() || !this.oneDayNews?.length )
            {
                this.setCurrentDay();
                this.loading = true;

                axios.get( apiUrls.ONE_DAY_ARTICLES ).then((result) => {
                    //console.log(result.data.items);
                    this.oneDayNews = result.data?.items;
                    this.currentArticles = this.oneDayNews;
                }).catch((result) => {
                    this.error = true;
                }).then(() => { 
                    this.loading = false;
                });
            }
            else
            {
                this.error = false;
                this.currentArticles = this.oneDayNews;
            }
        },

        loadThreeDaysNews() {
            if( !this.checkDay() || !this.threeDaysNews?.length )
            {
                this.setCurrentDay();
                this.loading = true;
                
                axios.get( apiUrls.THREE_DAYS_ARTICLES ).then((result) => {
                    //console.log(result.data.items);
                    this.threeDaysNews = result.data?.items;
                    this.currentArticles = this.threeDaysNews;
                }).catch((result) => {
                    this.error = true;
                }).then(() => { 
                    this.loading = false; 
                });
            }
            else
            {
                this.error = false;
                this.currentArticles = this.threeDaysNews;
            }
        },

        loadSevenDaysNews() {
            if( !this.checkDay() || !this.sevenDaysNews?.length )
            {
                this.setCurrentDay();
                this.loading = true;
                
                axios.get( apiUrls.SEVEN_DAYS_ARTICLES ).then((result) => {
                    //console.log(result.data.items);
                    this.sevenDaysNews = result.data?.items;
                    this.currentArticles = this.sevenDaysNews;
                }).catch((result) => {
                    this.error = true;
                }).then(() => { 
                    this.loading = false; 
                });
            }
            else
            {
                this.error = false;
                this.currentArticles = this.sevenDaysNews;
            }
        },
    },

    components: {
        Loader,
        LatestBoxArticles/* : () => import('./LatestBoxArticles.vue') */
    },

    mounted() {
        this.links = $('.latestBox--navLinks');
        this.loadOneDayNews();
    }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import '@/assets/variables.scss';

.latestBox {
    background-color: $white;
    padding-top: 14px;
    padding-bottom: 14px;
}

.latestBox__header {
    color: $red;
    font-size: 1.3rem;
    font-weight: bold;
}

.latestBox__nav {
    float: right;
    color: $gray;
    
    a, a:active, a:link, a:visited {
        color: $gray;
        font-weight: bold;
        text-decoration: underline;

        &.active {
            color: $red;
            text-decoration: none;
        }
    }
}
</style>
