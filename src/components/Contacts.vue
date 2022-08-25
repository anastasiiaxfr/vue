<template>
 <section class="contacts" id="contacts" v-anchor>
 
    <table class="text-center mx-auto">
    <tr>
    <td colspan="3">
        <h2> Contacts </h2>
    </td>
    </tr> 
    <tr>
    <td colspan="3">
        <img src="@/assets/img/contacts.png" alt="">
    </td>
    </tr>  
    <tr>
    <td colspan="3">
        <a class="mx-sm-4" href="skype:live:.8e3432e0a5cf9b86%3Fchat">
            live:.cid.8e3432e0a5cf9b86
        </a>
        <a class="mx-sm-4" href="https://t.me/HeroicAffiliates">@HeroicAffiliates</a>
        <a class="mx-sm-4" href="mailto:affiliates@heroicaffiliates.com">affiliates@heroicaffiliates.com</a>

    </td>

    </tr>
    <tr><td colspan="3">&nbsp;</td></tr>
    <tr>
    <td colspan="3">
         <button class="btn" onclick="location.href='https://heroicaffiliates.com/partner/register'">
            Join Us
        </button>
    </td>
    </tr>   

    </table>

 </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Contacts',
  components: {

  }
}
</script>

<style scoped lang="sass">
.contacts

    padding-bottom: 75px

    a
        color: inherit
        opacity: 0.8
        text-decoration: none
        margin: 5px 10px

</style>