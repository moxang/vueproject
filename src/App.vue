<template>
  <div id="app">
      <div class="tets">
        <!-- <img src="./assets/logo.png"> -->
      </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: header;
  color: #2c3e50;
  margin-top: 30px;
}

/* #app div {
  width: 100%;
  text-align: left;
} */
/* #app > img {
  text-align: left;

} */
</style>
