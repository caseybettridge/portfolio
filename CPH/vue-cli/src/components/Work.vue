<template>
  <div class="work section">
    <div class="page-title">Work</div>
    <div class="subheader">Projects I’ve been working on, sorted by most recent</div>
    <div class="copy">
      <div class="case">
        <div class="case-title">new.engineering.com</div>
        <div class="case-wrapper is-flex">
          <div class="left">
            <div class="case-copy">
              <p>My team was given the task of taking engineering.com, a news site focused on topics relevatnt to professional engineers, and rebuilding it using existing ProjectBoard (see below) infrastructure based on Vue.js</p>
              <p>Currently, I’m working on personalization features which allows users to select interests from a list, and curates their homepage view based on these preferences.</p>
            </div>
            <div class="open-button button is-small is-primary cursor-pointer" @click="engcomImages[0].link">Open in new tab</div>
          </div>
          <div class="right">
            <div class="case-copy">
              <p>I’ve contributed to many parts of new.engineering.com. On the homepage I implemented subcategories on the horizonal rows, dispatching calls from the store to fetch projects based on which tab a user is on. On the story page, I built the header which includes an image uploader, tag selector, and character counter.</p>
            </div>
          </div>
        </div>
        <div class="case-image">
          <img :src="engcomImages[0].src" />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
const engcomImages = [
  {
    name: 'engcom',
    src: './src/assets/engcom.svg',
    link: 'http://new.engineering.com'  
  }
]

export default {
  data: function () {
    return {
      engcomImages
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/utils.scss";

  .case {
  }
  .case-wrapper {
    width: 100%;
    @include touch {
      flex-direction: column;
    }
    .left {
      width: 50%;
      @include touch {
        width: 100%;
      }
    }
    .right {
      width: 50%;
      @include touch {
        width: 100%;
      }
    }
  }
  .case-title {
    font-size: 1.2rem;
    font-weight: 900;
    margin: 1rem 0;
  }
  .case-copy {
    line-height: 1.7rem;
    font-size: 0.9rem;
    padding-right: 3rem;
    font-family: 'Noto Serif JP', serif;
    p {
      margin-bottom: 1rem;
    }
  }
  .open-button {
    color: white;
    font-weight: 600;
    margin: 1rem 0;
    padding: 1rem 1.5rem;
  }
  .case-image {
    margin-top: 2rem;
    width: 100%;
    img {
      width: 100%;
    }
  }

</style>
