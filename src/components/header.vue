<template>
<div>
  <div class="header">
    <center>
    <img src="./logo.png" class="logo" style="width:100px;float:left"/><p>FORM</p>
      <div class="header-right">
        <a class="active">{{datetime}}</a>
      </div>
      </center>
  </div>
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
</div>
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
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
.header {
  overflow: hidden;
  background-color: #f1f1f1;
  /* padding: 20px 10px; */
}
.header a {
  float: right;
  color: black;
  text-align: center;
  padding: 5px;
  font-size: 18px;
  line-height: 25px;
}
.header a.active {
  background-color: dodgerblue;
  color: white;
}

</style>

<div class="footer">
  <p>Footer</p>
</div>
</style>
