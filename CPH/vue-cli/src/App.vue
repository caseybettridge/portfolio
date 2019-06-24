<template>
  <div id="app">
    <div class="nav-container">
      <custom-nav></custom-nav>
    </div>
    <div class="home-container">
      <home></home>
    </div>
  </div>
</template>

<script>
import Home from './components/Home'
import CustomNav from './components/Nav'

export default {
  name: 'app',
  data: function () {
    return {
    }
  },
  components: {
    Home,
    CustomNav
  }
}
</script>

<style lang="scss">
 @import "/styles/font.scss";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
  }
  .nav-container {
    width: 400px;
  }
</style>
