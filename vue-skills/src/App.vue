<template>
  <div id="app">
    <skills/>
  </div>
</template>

<script>
import Skills from './components/Skills.vue'

export default {
  name: 'app',
  components: {
    Skills
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

body {
  background-color: #eeeeee;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: center;
  display: -webkit-flex; /* Safari */
  -webkit-justify-content: center; /* Safari 6.1+ */
}
body, html {
  margin: 0;
  height: 100%;
}
#app {
    width: 50%;
    justify-content: space-around;
}
</style>
