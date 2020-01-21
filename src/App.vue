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

<style lang="scss">
body {
  margin: 0;
  font-size: 14px;
}

a {
  text-decoration: none;

  &:visited,
  &:focus {
    text-decoration: none;
  }
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 10px;
  box-sizing: border-box;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-weight: $baseFontWeight;
  color: $baseTxtActiveColor;
  font-size: 14px;

  background-color: #000000;
}
</style>
