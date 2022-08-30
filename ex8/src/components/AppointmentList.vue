<template>
  <div class="col-12 col-md-12 col-lg-7 mx-auto">
    <div class="list-group list-group-flush">
      <div
        class="list-group-item d-flex flex-wrap align-items-start"
        v-for="item in appointments"
        :key="item.aptIndex"
      >
        <table class="table">
          <tr>
            <td rowspan="3" width="50">
              <button
                class="btn btn-sm btn-danger"
                @click="$emit('remove', item)"
              >
                <font-awesome-icon icon="trash"></font-awesome-icon>
              </button>
            </td>
            <td class="text-left">
              <span
                class="text-primary h4"
                contenteditable="contenteditable"
                @blur="
                  $emit('edit', item.aptId, 'petName', $event.target.innerText)
                "
                >{{ item.petName }}</span
              >
            </td>
            <td class="text-right">
              <small class="float-right">{{
                formattedDate(item.aptDate)
              }}</small>
            </td>
          </tr>
          <tr>
            <td colspan="2" class="text-left">
                <span
                contenteditable="contenteditable"
                @blur="$emit('edit', item.aptId, 'petOwner', $event.target.innerText)"
              >{{item.petOwner}}</span>
            </td>
          </tr>
          <tr>
            <td colspan="2">
                <div
                contenteditable="contenteditable"
                @blur="$emit('edit', item.aptId, 'aptNotes', $event.target.innerText)"
              >{{item.aptNotes}}</div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import moment from "moment";

export default {
  name: "AppointmentList",
  props: ["appointments"],
  components: { FontAwesomeIcon },
  data() {
    return {};
  },

  methods: {
    formattedDate: function (date) {
      return moment(new Date(date)).format("MM-DD-YYYY, h:mm a");
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  //max-width: 550px;
  margin: 0 auto;
  text-align: left;
  width: 100%;

  td {
    padding: 0;
  }
}
.list-group {
  p {
    margin: 0;
  }
  .text-left {
    text-align: left;
  }
  .text-right {
    text-align: right;
  }
}

.btn {
  width: 40px;
  height: 40px;
  background: #dc3545;
}
</style>