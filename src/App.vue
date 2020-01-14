<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 10px;
  box-sizing: border-box;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  background-color: #fafafa;
}
</style>
