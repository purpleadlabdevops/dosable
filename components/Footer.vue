<template>
  <footer class="footer">
    <div class="container">
      <nuxt-link target="_blank" to="/terms">Terms and Conditions</nuxt-link>
      <nuxt-link target="_blank" to="/privacy">Privacy Policy</nuxt-link>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer{
  background: var(--light-blue3);
  padding-top: 1rem;
  padding-bottom: 1rem;
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    a{
      color: var(--dark-blue);
      font-size: 12px;
      text-transform: uppercase;
      position: relative;
      letter-spacing: 1px;
      &:not(:first-child){
        margin-left: 1rem;
        padding-left: 1rem;
        &:before {
          content: "\2022";
          font-size: 120%;
          position: absolute;
          left: 0;
          transform: translateX(-50%);
        }
      }
    }
  }
}
</style>