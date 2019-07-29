<template>
  <div>
    <div class="navigation">
      <div class="my-name">Casey Bettridge</div>
      <div class="salmon-line"></div>
      <div class="links is-flex is-hidden-touch">
        <span class="cursor-pointer" v-for="link in links" :key="link.name">  {{ link.name }} </span>
      </div>
    </div>
  </div>
</template>

<script>
const links = [
  {
    name: 'About',
    link: ''
  },
  {
    name: 'Work',
    link: ''
  },
  {
    name: 'Contact',
    link: ''
  }

]

export default {
  data: function () {
    return {
      links
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../styles/utils.scss";

  .navigation {
    position: fixed;
    height: 100%;
    padding: 2rem;
    font-size: 0.85rem;
  }
  .my-name {
    margin-bottom: 1rem;
    font-weight: bold;
    font-size: 1rem;
  }
  .salmon-line {
    height: 3px;
    width: 20px;
    background-color: #FF8C69;
    position: relative;
    top: -0.5rem;
  }
  .links {
    flex-direction: column;
    @include touch {
      display: none;
    }
  }
  .links span {
    margin: 0.5rem 0;
  }

</style>
