<template>
  <div div class="work section">
    <div class="page-title">Work</div>
    <div class="subheader">Projects I’ve been working on, sorted by most recent</div>
    <div class="copy">
      <div class="case">
        <div class="case-title">engineering.com</div>
        <div class="case-copy">
          <p>My team was given the task of taking engineering.com, a news site focused on topics relevatnt to professional engineers, and rebuilding it using existing ProjectBoard (see below) infrastructure based on Vue.js</p>
          <p>I’ve contributed to many parts of new.engineering.com. On the homepage I implemented subcategories on the horizonal rows, dispatching calls from the store to fetch projects based on which tab a user is on. On the story page, I built the header which includes an image uploader, tag selector, and character counter. This component stores its variables in a single object which is emitted to its parent. The parent components handles the functionality to allow the logic to be seperate from the view, one powerful aspect of using Vue.js</p>
          <p>Currently, I’m working on personalization features whichs allows users to select interests from a list, and curates their homepage view based on these preferences.</p>
        </div>
        <div class="open-button button is-small is-primary cursor-pointer">Open in new tab</div>
        <div class="case-image">
          <img src="../assets/css.svg" />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../styles/utils.scss";

  .case {
  }
  .case-title {
    font-size: 1.2rem;
    font-weight: 600;
  }
  .case-copy {
    line-height: 1.7rem;
    font-size: 0.9rem;
  }
  .open-button {
    color: white;
    font-weight: 600;
    margin-top: 1rem;
  }

</style>
