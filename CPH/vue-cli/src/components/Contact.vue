<template>
  <div id="contact" class="contact section">
    <div class="page-title">Contact</div>
    <div class="subheader">Get in touch</div>
    <div class="buttons is-flex">
      <div class="email"><a href="mailto:casey.bettridge@gmail.com" target="_blank">
        <span class="icon"><i class="far fa-envelope"></i></span> Email </a>
      </div>
      <div class="linkedin"><a href="https://www.linkedin.com/in/caseybettridge/" target="_blank">
        <span class="icon"><i class="fab fa-linkedin"></i></span> LinkedIn </a>
      </div>
      <div class="github"><a href="https://github.com/caseybettridge" target="_blank">
        <span class="icon"><i class="fab fa-github"></i></span> GitHub </a>
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

.contact {
  margin-bottom: 25rem;
  @include mobile {
    margin-bottom: 10rem;
  }
}
.subheader {
  margin-bottom: 1rem;
}
.icon {
  width: 3rem;
}

.buttons {
  flex-direction: column;
  align-items: flex-start;
  font-size: 2.5rem;
  a {
    margin-right: 1rem;
    cursor: pointer;
    color: $dark;
  }
  a:hover {
    color: $primary;
  }
}

</style>
