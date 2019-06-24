<template>
  <div>
    <div class="navigation">
      <div class="my-name">Casey Bettridge</div>
      <div class="links">
        <span> About </span>
        <span> Work </span>
        <span> Contact </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
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
  .links {
    display: flex;
    flex-direction: column;
  }
  .links span {
    margin: 0.5rem 0;
  }

</style>
