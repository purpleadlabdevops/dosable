<template>
  <footer class="footer">
    <div class="container">
      <nav class="footer__menu">
        <nuxt-link to="/terms">Terms and Conditions</nuxt-link>
        <nuxt-link to="/privacy">Privacy Policy</nuxt-link>
      </nav>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer{
  background: var(--ever-green);
  padding-top: res(30, 50);
  padding-bottom: res(30, 50);
  &__menu{
    @media(min-width:768px){
      display: flex;
    }
    a{
      font-size: res(14, 16);
      line-height: 1.5;
      letter-spacing: .15em;
      text-transform: uppercase;
      color: var(--purple);
      display: block;
      @media(max-width:767px){
        text-align: center;
      }
      &:not(:first-child){
        @media(max-width:767px){
          margin-top: 15px;
        }
        @media(min-width:768px){
          margin-left: 30px;
        }
      }
      &.router-link-exact-active{
        font-weight: 800;
      }
    }
  }
}
</style>