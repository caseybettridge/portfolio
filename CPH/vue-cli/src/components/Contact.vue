<template>
  <div class="contact section">
    <div class="page-title">Contact</div>
    <div class="subheader">Get in touch</div>
    <div class="buttons">
      <div class="email"><span><i class="far fa-envelope"></i></span></div>
      <div class="linkedin"><span><i class="fab fa-linkedin"></i></span></div>
      <div class="github"><span><i class="fab fa-github" href="https://github.com/caseybettridge"></i></span></div>
      
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
  margin-bottom: 5rem;
}

.buttons {
  font-size: 2.5rem;
  div {
    margin-right: 1rem;
    cursor: pointer;
  }
  div:hover {
    color: $primary;
  }
}

</style>
