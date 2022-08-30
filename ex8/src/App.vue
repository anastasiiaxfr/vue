<template>
  <div id="app" class="container py-5">
    <h4>
      {{ title }}
    </h4>

    <div class="row">
      <div class="col-md-7 mx-auto">
        <SearchAppointments
          @searchRecords="SearchAppointments"
          :myKey="filterKey"
          :myDir="filterDir"
          @requestKey="changeKey"
          @requestDir="changeDir"
        ></SearchAppointments>
        <AddAppointment @add="addItem"></AddAppointment>
      </div>
      <AppointmentList
        :appointments="filteredApts"
        @remove="deleteItem"
        @edit="editItem"
      ></AppointmentList>
    </div>

    <router-view />
  </div>
</template>

<script>
import AppointmentList from "./components/AppointmentList";
import AddAppointment from "./components/AddAppointment";
import SearchAppointments from "./components/SearchAppointments";

import _ from "lodash";
import axios from "axios";

export default {
  name: "MainApp",
  data: function () {
    return {
      title: "Appointment List",
      appointments: [],
      aptIndex: 0,
      searchTerms: "",
      filterKey: "petName",
      filterDir: "asc",
    };
  },
  components: {
    AppointmentList,
    AddAppointment,
    SearchAppointments,
  },
  mounted() {
    axios.get("./data/appointments.json").then(
      (response) =>
        (this.appointments = response.data.map((item) => {
          item.aptId = this.aptIndex;
          this.aptIndex++;
          return item;
        }))
    );
  },

  computed: {
    searchedApts: function () {
      return this.appointments.filter((item) => {
        return (
          item.petName.toLowerCase().match(this.searchTerms.toLowerCase()) ||
          item.petOwner.toLowerCase().match(this.searchTerms.toLowerCase()) ||
          item.aptNotes.toLowerCase().match(this.searchTerms.toLowerCase())
        );
      });
    },
    filteredApts: function () {
      return _.orderBy(
        this.searchApts,
        (item) => {
          return item[this.filterKey].toLowerCase();
        },
        this.filterDir
      );
    },
  },

  methods: {
    changeKey: function (value) {
      this.filterKey = value;
    },
    changeDir: function (value) {
      this.filterDir = value;
    },

    addItem: function (apt) {
      apt.aptId = this.aptIndex;
      this.aptIndex++;
      this.appointments.push(apt);
    },
    deleteItem: function (apt) {
      this.appointments = _.without(this.appointments, apt);
    },
    editItem: function (id, field, text) {
      const aptIndex = _.findIndex(this.appointments, {
        aptId: id,
      });
      this.appointments[aptIndex][field] = text;
    },
    SearchAppointments: function (terms) {
      this.searchTerms = terms;
    },
  },
};
</script>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
