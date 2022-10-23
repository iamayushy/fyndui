<template>
    <div id="app">
      <h1>Chekc </h1>
      <FyButton/>
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
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  