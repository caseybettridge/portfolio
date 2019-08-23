<template>
  <div>
    <scrollactive
      v-on:itemchanged="onItemChanged"
      active-class="active"
      :offset="80"
      :duration="800"
      bezier-easing-value=".5,0,.35,1"
    >
      <div class="navigation is-flex">
        <div class="my-name">
          <a href="#home" class="scrollactive-item cursor-pointer home"> Casey Bettridge </a>
          <div class="salmon-line"></div>
        </div>
        <div class="links is-flex">
          <a :href="link.hash" class="scrollactive-item cursor-pointer nav-link" v-for="link in links" :key="link.name">  {{ link.name }} </a>
        </div>
      </div>
    </scrollactive>
  </div>
</template>

<script>

const links = [
  {
    name: 'About',
    link: '/about',
    hash: '#about'
  },
  {
    name: 'Work',
    link: '/work',
    hash: '#work'
  },
  {
    name: 'Contact',
    link: '/contact',
    hash: '#contact'
  }

]

export default {
  data: function () {
    return {
      links
    }
  },
  methods: {
    onItemChanged(event, currentItem, lastActiveItem) {
      // your logic
      console.log('here')
    }
  }
}

</script>

<style lang="scss" scoped>
@import "../styles/utils.scss";

  .navigation {
    flex-direction: column;
    position: fixed;
    height: 100%;
    padding: 2rem;
    padding-top: 4rem;
    font-size: 0.85rem;
    @include touch {
      padding: 1rem;
      height: inherit;
      flex-direction: row;
      background-color: white;
      z-index: 5;
      width: 100%;
    }
  }
  .my-name {
    margin-bottom: 1rem;
    font-weight: bold;
    font-size: 1rem;
    position: relative;
    @include touch {
      margin-bottom: 0;
    }
  }
  .salmon-line {
    height: 3px;
    width: 20px;
    background-color: #FF8C69;
    position: absolute;
    bottom: -0.5rem;
  }
  .links {
    flex-direction: column;
    @include touch {
      flex-direction: row;
      align-items: center;
    }
  }
  .links span {
    margin: 0.5rem 0;
  }
  .nav-link {
    color: $dark;
    @include touch {
      margin: 0 1rem;
    }
  }
  .nav-link:hover, .router-link-active {
    color: $primary;
  }
  .home {
    color: $dark;
  }

</style>
