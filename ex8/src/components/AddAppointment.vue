<template>

  <div class="">
  
    <div
      class="form__toggle my-2 py-3 bg-info" @click="hidepanel = !hidepanel"
     
    >
      <font-awesome-icon icon="plus"></font-awesome-icon>
      Add appointments  
    </div>
    <div class="card-body" :class="{ 'd-none': hidepanel }">
      <label class="col-md-4">Pet Name</label>
      <form
        action=""
        v-on:submit.prevent="requestAdd"
        id="aptForm"
        class="form"
      >
        <div class="form-group form-row">
          <label class="col-md-4">Pet Name</label>
          <input
            type="text"
            class="form-control col-md-8"
            v-model="formData.petName"
            name="petName"
            id="petName"
            placeholder="Pet's Name"
          />
        </div>
        <div class="form-group">
          <label for="" class="col-md-4">Pet Owner</label>
          <input
            type="text"
            class="form-control col-md-8"
            v-model="formData.ownerName"
            placeholder="Owner's Name"
          />
        </div>
        <div class="form-group">
          <label for="" class="col-md-4">Date</label>
          <input
            type="date"
            class="form-control col-md-8"
            placeholder="mm/dd/yyyy"
            v-model="formData.aptDate"
          />
        </div>
        <div class="form-group">
          <label for="" class="col-md-4">Time</label>
          <input
            type="time"
            class="form-control col-md-8"
            placeholder="--:-- --"
            v-model="formData.aptTime"
          />
        </div>
        <div class="form-group mt-4">
          <textarea
            name=""
            id=""
            rows="5"
            class="w-100"
            v-model="formData.aptNotes"
          ></textarea>
        </div>
        <button>Add Apointment</button>
      </form>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "AddAppointment",
  components: {
    FontAwesomeIcon,
  },

  data() {
    return {
        formData: [],
        hidepanel: true,
    };
  },

  mounted() {},

  methods: {
    requestAdd: function(){
        this.formData = {
            petName: this.formData.petName,
            petOwner: this.formData.ownerName,
            aptDate: this.formDate + ' ' + this.formData.aptTime,
            aptNotes: this.formData.aptNotes
        };
        this.$emit("add", this.formData);
        this.formData=[];
        this.hidepanel = true;
    }
  },
};
</script>

<style lang="scss" scoped>
.form {
  text-align: left;

  &__toggle {
    cursor: pointer;
  }
}
</style>