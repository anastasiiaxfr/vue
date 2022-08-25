<template>
  <header class="header">
 
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-container>

     <logo :width="120"></logo>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="header__menu">
        <li><router-link to="/#why"> Why Us </router-link></li>
        <li><router-link to="/#commissions"> Commissions </router-link></li>
        <li><router-link to="/brands"> Brands </router-link></li>
        <li><router-link to="/faq"> Faq </router-link></li>
         <li><router-link to="/partners"> Partners </router-link></li>
        <li><router-link to="/#contacts"> Contacts </router-link></li>
            
        <!-- <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
        </b-nav-item-dropdown> -->

      
      </b-navbar-nav>
    </b-collapse>
  </b-container>
  </b-navbar>


</header>
</template>

<script>
import Logo from '@/components/UI/logo'

export default {
  name: 'Header',
  props: {
   
  },
  components: { Logo }
}
</script>


<style scoped lang="sass">
$main: #deb657
.header__menu
    text-transform: uppercase
    letter-spacing: 2px
    font-size: 16px
    font-weight: 700
    width: 100%
    justify-content: flex-end
    align-items: center
    margin-right: auto
    margin-left: 0
    z-index: 100500

    li
      margin: 5px 14px

    a
      color: $main
      text-decoration: none
</style>
