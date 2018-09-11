<template>
<form >
  <br>
  <label for="Name"><b>Name</b></label>
    <input type="text" placeholder="Enter Name" name="Name" required>
    <br>
    <label for="Age"><b>Age</b></label>
    <input type="text" placeholder="Enter Age" name="Age" required>
    <br>
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required>
    <br>
    <button type="submit" class="registerbtn">Submit</button>
  </form>
</template>
<script>
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      form: [],
      datetime: "",
      datetime: []
    };
  },
  methods: {
    getUnit: function abc() {
      var currentDate = new Date(),
        day = currentDate.getDate(),
        month = currentDate.getMonth() + 1,
        year = currentDate.getFullYear();
      var datetime = day + "/" + month + "/" + year;
      console.log(datetime);
      this.datetime = datetime;
    },
    onSubmit() {
      console.log("submit!");
      console.log(this.form);
      let url = "http://localhost:3000/data";
      axios
        .post(url, this.form)
        .then(res => {
          console.log("Success", res);
        })
        .catch(err => {
          console.log("Error", err);
        });
    }
  },
  mounted() {
    this.getUnit();
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

.draggable-header-view .bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}
#content {
  margin: 10px;
}
</style>
