<template>
  <div id="contact" class="contact section">
    <div class="page-title">Contact</div>
    <div class="subheader">Get in touch</div>
    <div class="buttons is-flex">
      <div class="email is-flex profile"><a href="mailto:casey.bettridge@gmail.com" target="_blank">
        <span class="icon"><i class="far fa-envelope"></i></span> 
        <span class="name"> Email </span></a>
      </div>
      <div class="linkedin is-flex profile"><a href="https://www.linkedin.com/in/caseybettridge/" target="_blank">
        <span class="icon"><i class="fab fa-linkedin"></i></span> 
        <span class="name"> LinkedIn </span></a>
      </div>
      <div class="github is-flex profile"><a href="https://github.com/caseybettridge" target="_blank">
        <span class="icon"><i class="fab fa-github"></i></span> 
        <span class="name"> GitHub </span></a>
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
  display: inline-block;
}
.name {
  font-size: 2rem;
  display: inline-block;
}
.profile {
  align-items: center;
  margin-bottom: 1rem;
}

.buttons {
  flex-direction: column;
  align-items: flex-start;
  font-size: 2rem;
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
