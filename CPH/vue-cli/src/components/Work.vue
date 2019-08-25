<template>
  <div id="work" class="work section">
    <div class="page-title">Work</div>
    <div class="subheader">Frontend development</div>
    <div class="project" v-for="p in projects.list" :key="p.name">
      <div class="project-title"> {{ p.name }} <i class="fas fa-pen"></i></div>
      <div class="content-container is-flex">
        <div class="project-wrapper is-flex">
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
          <img :src="p.image" />
        </div>
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
  .external {
    font-size: 1rem;
    height: 2rem;
    width: 2rem;
  }
  .subheader {
    margin-bottom: 3rem;
  }

  .project {
    margin-bottom: 5rem;
  }
  .project-wrapper {
    width: 40%;
    max-width: 600px;
    flex-direction: column;
    margin-right: 3rem;
    div {
      margin-bottom: 1.5rem;
    }
  }
  .project-title {
    font-size: 2rem;
    margin: 1rem 0;
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
  .open-button {
    color: white;
    font-weight: 600;
    margin: 1rem 0;
    padding: 1rem 1.5rem;
    max-width: 200px;
  }
  .project-image {
    width: 800px;
    @include desktop {
    }
    img {
      box-shadow: 0 5px 28px 0 rgba(0,0,0,0.50);
      border-radius: 5px;
    }
  }

</style>
