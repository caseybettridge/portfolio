<template>
  <div div class="about section">
    <div class="page-title">About</div>
    <div class="subheader">Welcome to my portfolio</div>
    <div class="copy">
      In my current role I predominantly code in JavaScript using Vue.JS, design wireframes in Sketch, and conduct user research in the field. I value having a multi-faceted role and love the pace of startup culture: deploying often while still maintaining clean code.    </div>
    <div class="subheader">Tools I use</div>
    <div class="tools">
      <div class="tool" :class="tool.name" v-for="tool in tools" :key="tool.name">
        <!-- v-bind:style="{ 'background-image': 'url(' + tool.src + ')' }"> -->
        <img :src="tool.src" />
      </div>
    </div>
  </div>
</template>

<script>
const tools = [
  {
    name: 'vue',
    src: './src/assets/vue.svg'
  },
  {
    name: 'js',
    src: './src/assets/js.svg'
  },
  { 
    name: 'css',
    src: './src/assets/CSS.svg'
  },
  {
    name: 'html',
    src: './src/assets/html.svg'
  },
  {
    name: 'webpack',
    src: './src/assets/webpack.svg'
  },
  {
    name: 'docker',
    src: './src/assets/docker.svg'
  },
  {
    name: 'github',
    src: './src/assets/github.svg'
  },
  {
    name: 'ngrok long',
    src: './src/assets/ngrok.svg'
  },
  {
    name: 'npm long',
    src: './src/assets/npm.svg'
  }
]
const color = 'red'

export default {
  data: function () {
    return {
      tools,
      color
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/utils.scss";
  .tools {
   display: flex;
   margin-top: 1.5rem; 
  }
  .tool {
    margin: 1rem 1.5rem 1rem 0;
    background-repeat: no-repeat;
    background-size: cover;
  }

</style>
