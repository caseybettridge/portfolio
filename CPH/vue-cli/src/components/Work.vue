<template>
  <div id="work" class="work section">
    <div class="page-title">Work</div>
    <div class="subheader">Highlights from the past two years</div>
    <div class="project is-flex" v-for="p in projects.list" :key="p.name">
      <div class="project-wrapper is-flex">
        <div class="project-title is-flex"> <a :href="p.link" target="blank">{{ p.name }} </a></div>
        <div class="objective">
          <span class="sub-title"> Project </span>
          <span class="copy"> {{ p.obj }} </span>
        </div>
        <div class="role">
          <span class="sub-title"> Role </span>
          <span class="copy"> {{ p.role }} </span>
        </div>
        <div class="highlight">
          <span class="sub-title"> Highlight </span>
          <span class="copy"> {{ p.highlight }}</span>
        </div>
        <div class="tags">
          <span class="tag" v-for="tag in p.tech" :key="tag"> {{ tag }} </span>
        </div>
      </div>
      <div class="project-image">
        <a :href="p.link" target="blank">
          <img class="cursor-pointer" :src="p.image" :alt="p.name"/>
        </a>
      </div>
    </div>
  </div>

</template>

<script>
import projects from './projects.js'

export default {
  data: function () {
    return {
      projects
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/utils.scss";
  .subheader {
    margin-bottom: 3rem;
    @include touch {
      margin-bottom: 1rem;
    }
  }
  .project {
    margin-bottom: 5rem;
    align-items: center;
    @include touch {
      flex-direction: column;
    }
    @include desktop-only {
      flex-direction: column;
    }
  }
  .project-wrapper {
    width: 40%;
    max-width: 600px;
    flex-direction: column;
    margin-right: 3rem;
    @include touch {
      width: 100%;
      max-width: 100%;
      margin-right: 0;
    }
    @include desktop-only {
      width: 100%;
      max-width: 100%;
      margin-right: 0;
    }
    div {
      margin-bottom: 1.5rem;
    }
  }
  .project-title {
    font-size: 2rem;
    margin-bottom: 1rem;
    align-items: center;
    @include touch {
      font-size: 1.5em;
    }
    a {
      color: $dark;
    }
  }
  .project-title:hover a{
    color: $primary;
  }
  .sub-title {
    text-transform: uppercase;
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
    color: $grey;
    font-weight: 900;
  }
  .copy {
    line-height: 1.7rem;
    font-size: 1rem;
    padding-right: 3rem;
    p {
      margin-bottom: 1rem;
    }
  }
  // .open-button {
  //   margin-left: 1rem;
  //   padding: 0.75rem 1rem;
  //   max-width: 150px;
  // }
  .project-image {
    width: 800px;
    @include touch {
      width: 100%;
      margin-top: 1.5rem;
    }
    @include desktop-only {
      width: 100%;
    }
    img {
      box-shadow: 0 5px 28px 0 rgba(0,0,0,0.50);
      border-radius: 5px;
    }
  }

</style>
