<template>
  <div id="nav">
    <router-link to="/">Page 1</router-link> |
    <router-link to="/about">Page 2</router-link>
  </div>
  <router-view/>
</template>



<style lang="scss">


@import '@/assets/variables.scss';
@import '@/assets/global.scss';

#app {
    font-family: Verdana, Geneva, Tahoma, sans-serif;

    background-color: black;
}
</style>
