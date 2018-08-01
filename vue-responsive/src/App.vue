

<template>
  <div>
    <header>
    <nav class="menu">
      <ul class="menu-nav">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/insight">Insight</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/howto">How To?</router-link>
        </li>
      </ul>
    </nav>
    </header>

    <router-view />
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components : {
    Home
  }
}
</script>

<style lang="scss" src="./scss/main.scss">
</style>
