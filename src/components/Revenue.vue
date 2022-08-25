<template>
  <section class="revenue" id="commissions" v-anchor>
    <b-container>
      <b-row justify-content-center class="text-center align-items-center">
        <b-col md="12">
          <h2>The Best Revenue Share</h2>
          <h5>Based on the partner’s total monthly income</h5>
        </b-col>
        <b-col md="4">
          <img src="@/assets/img/revenue.png" alt="" />
        </b-col>
        <b-col md="7">
          <table>
            <tr> 
              <td> 0 ... 1&nbsp;000 EUR </td>
              <td> <b>25%</b> </td>
            </tr>
               
            <tr>
              <td> 1&nbsp;001 EUR ... 2&nbsp;500 EUR </td>
              <td> <b>30%</b> </td>
            </tr>

            <tr>
              <td> 2&nbsp;501 EUR ... 5&nbsp;000 EUR </td>
              <td> <b>35%</b>  </td>
            </tr>

            <tr>
              <td> More than 5&nbsp;000 EUR </td>
              <td> <b>40%</b> </td>
            </tr>

            <tr>
              <td colspan="2">Personal conditions (CPA, Hybrid, etc...)</td>
            </tr>

            <tr>
              <td></td>
              <td></td>
            </tr>
          </table>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "Revenue",
  props: {},
};
</script>


<style scoped lang="sass">
$main: #deb657
.revenue
    table

        td
            padding: 15px 5px
            text-align: left
            font-size: 26px

            b
                color: $main
</style>
