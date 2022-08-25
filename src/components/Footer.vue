<template>
  <footer class="footer">

    <b-container>
      <b-row justify-content-center>
        <b-col md="8" class="mx-auto">
          <table class="text-center mx-auto w-100">
            <tr>
              <td colspan="3">
                <img width="200" src="@/assets/img/approvedpng.png" />
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td class="col-12 col-sm-4"> &copy; 2021 Heroic Affiliates </td>
              <td class="col-12 col-sm-4"> <router-link to="/policy">Privacy policy</router-link> </td>
              <td class="col-12 col-sm-4"> <router-link to="/terms">Terms and Conditions</router-link> </td>
            </tr>
          </table>
        </b-col>
      </b-row>
    </b-container>

  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {},
};
</script>


<style scoped lang="sass">
$dark: #212529
$main: #deb657
footer
    padding-bottom: 50px
    padding-top: 50px
    background-color: $dark
    color: white

    a
      color: $main
</style>
