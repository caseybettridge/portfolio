<template>
  <div id="app" class="site is-flex">
    <div class="nav-container">
      <custom-nav></custom-nav>
    </div>
    <div class="home-container">
      <home></home>
      <about></about>
      <work></work>
      <contact></contact>
    </div>
  </div>
</template>

<script>
import Home from './components/Home'
import CustomNav from './components/Nav'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'

export default {
  name: 'app',
  data: function () {
    return {
    }
  },
  components: {
    Home,
    CustomNav,
    About,
    Work,
    Contact
  }
}
</script>

<style lang="scss">
  @import "/styles/font.scss";
  
  @import "./../node_modules/bulma/bulma.sass";

  $fa-font-path : "~@fortawesome/fontawesome-free/webfonts";
  @import "~@fortawesome/fontawesome-free/scss/fontawesome.scss";
  @import "~@fortawesome/fontawesome-free/scss/solid.scss";
  @import "~@fortawesome/fontawesome-free/scss/regular.scss";
  @import "~@fortawesome/fontawesome-free/scss/brands.scss";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
  }
  .site {
    @include touch {
      flex-direction: column;
    }
  }
  .nav-container {
    width: 200px;
    max-width: 200px;
    @include touch {
      width: 100%;
      max-width: 100%;
      height: 4rem;
    }
  }
  .home-container {
    width: calc(100% - 200px);
    @include touch {
      width: 100%;
    }
  }

</style>
