<template>
<main>
  <Hero />
  <Why />
  <Revenue />
  <Contacts />
</main>
</template>

<script>
// @ is an alias to /src
import Contacts from '@/components/Contacts'
import Revenue from '@/components/Revenue'
import Why from '@/components/Why'
import Hero from '@/components/Hero'

export default {
  name: 'Home',
  
  components: { Contacts, Revenue, Why, Hero }
 
}
</script>
