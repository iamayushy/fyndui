<template>
    <div id="app">
      <h1>Checking The Component </h1>
      <div class="box">
      <FyButton fullwidth upper-case size="xl"/>
      <FyButton fullwidth />
    </div>
    </div>
  </template>
  
  <script>
import FyButton from './components/Buttons/FyButton.vue';
  
  export default {
    name: "App",
    comments: {},
    components: { FyButton }
};
  </script>
  
  <style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    text-align: center;
  }
  .box {
    border: 2px solid black;
    width: 400px;

  }
  </style>
  