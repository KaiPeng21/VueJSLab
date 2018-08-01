<template>
  <div id="app">
    <HeaderEle />
    <router-view/>
    <FooterEle />
  </div>
</template>

<script>

import HeaderEle from '@/components/HeaderEle'
import FooterEle from '@/components/FooterEle'

export default {
  name: 'App',
  components : {
    HeaderEle,
    FooterEle
  }
}
</script>

<style lang="scss" src="@/scss/main.scss">
</style>
