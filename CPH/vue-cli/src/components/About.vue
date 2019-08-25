<template>
  <div id="about" class="about section">
    <div class="page-title">About</div>
    <div class="skills">
      <div class="subheader">Skills</div>
      <div class="copy">Some of the tools I use everyday in my tech stack.</div>
      <div class="tools is-flex">
        <div class="tool is-flex" v-for="tool in tools" :key="tool.name">
          <img :src="tool.src" />
          <div class="tag">{{ tool.name }}</div>
        </div>
      </div>
    </div>
    <div class="Timeline">
      <div class="subheader">Timeline</div>
      <div class="copy">Here's an overview of my journey to where I am today. I've had the fortune of working with some amazing teams. In entrepreneurship, engineering, branding, strategy, and digital services.</div>
      <div class="node" v-for="node in timeline.list" :key="node">
        <span class="date"> {{ node.date }} </span>
        <span class="role"> {{ node.role }} </span>
        <a :href="node.link" target="_blank"><span class="company"> {{ node.company }}<span class="location"> {{ node.location }} </span></span></a>
      </div>
    </div>
  </div>
</template>

<script>
import timeline from './timeline.js'

const tools = [
  {
    name: 'vue.js',
    src: './src/assets/vue.svg'
  },
  {
    name: 'js',
    src: './src/assets/js.svg'
  },
  {
    name: 'bulma',
    src: './src/assets/bulma.svg'
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
    name: 'ngrok',
    src: './src/assets/ngrok.svg'
  },
  {
    name: 'npm',
    src: './src/assets/npm.svg'
  }
]
const color = 'red'

export default {
  data: function () {
    return {
      tools,
      color,
      timeline
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/utils.scss";
  .skills {
    margin-bottom: 4rem;
  }
  .tools {
   margin-top: 1rem; 
   align-items: center;
   @include touch {
     flex-wrap: wrap;
   }
  }
  .tool {
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
    height: 6.5rem;
    width: 4rem;
    margin-right: 1rem;
    @include touch {
      margin-right: 2rem;
      margin-top: 1rem;
    }
  }
  .copy {
    line-height: 1.7;
    width: 600px;
    margin-top: 2rem;
    margin-bottom: 1rem;
    @include touch {
      width: 100%;
    }
  }
  .node {
    padding: 1.5rem 0;
    border-bottom: 1px solid whitesmoke;
    width: 50%;
    @include touch {
      width: 100%;
    }
    &>span {
      display: block;
    }
    .date {
      font-size: 0.7rem;
      color: $primary;
      text-transform: uppercase;
      font-weight: bold;
    }
    .role {
      // font-weight: 500;
      font-size: 1.5rem;
      margin: 0.2rem 0;
    }
    .company {
      font-size: 0.85rem;
      font-weight: 900;
      color: $dark;
    }
    .location {
      font-weight: 400;
    } 
  }
  .node:last-child {
    border-bottom: none;
  }

</style>
