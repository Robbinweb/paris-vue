<template>
  <div id="app">
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/public/Header'
import Footer from '@/components/public/Footer'
export default {
  name: 'App',
  components:{
    Header,Footer
  }
}
</script>

<style>
[v-cloak] {
  display: none !important;
}
</style>
