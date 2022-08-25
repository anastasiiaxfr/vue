<template>
<div>
  <Header />
  <router-view></router-view>
  <Footer />
</div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'



export default ({
  name: 'app',
  components: { Header, Footer }
})
</script>

<style lang="sass">
$main: #deb657
$dark: #212529
body, html
  background-color: $dark
</style>
