<template>
  <section class="start__step identity">
    <div class="container">
      <h2>Ok great! The Dosable physician is ready to review your information.</h2>
      <div class="h7">You're almost done. In the next step, we'll verify your identity so your doctor can legally write you a prescription.</div>
      <div class="identity__info">
        <div class="h7">Here's what's needed:</div>
        <ul>
          <li>
            <span>1</span>
            <p>A photo of your ID (required by your state to verify identity)</p>
          </li>
          <li>
            <span>2</span>
            <p>A photo of your face (used to confirm the ID is yours) CONTINUE</p>
          </li>
        </ul>
      </div>
      <button class="btn btn-red" @click.prevent="emit('step', 'identity')">continue</button>
      <div class="identity__security">
        <svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg" ><g><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path></g></svg>
        256-BIT TLS SECURITY
      </div>
      <div class="h9">A government-issued ID is required when purchasing any prescription medication, as the medical provider will need to verify your identity before they can determine if prescription medication is right for you. Your personal identifying information, medical history or ID will never be shared outside of our secure system.</div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const emit = defineEmits(['step'])
</script>

<style lang="scss" scoped>
.identity{
  h2{
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
  }
  .h7{
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
  }
  .h8{
    color: var(--red);
    margin-top: 1rem;
    text-align: left;
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
  }
  &__info{
    text-align: left;
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
  }
  ul{
    margin-top: 1rem;
    padding-left: 0;
    li{
      list-style: none;
      display: flex;
      align-items: center;
      margin-bottom: 16px;
      span{
        width: 2rem;
        height: 2rem;
        background: var(--dark-blue);
        color: var(--white);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin-right: 1rem;
        & + p{
          max-width: calc(100% - 3rem);
        }
      }
    }
  }
  .btn{
    min-width: 300px;
  }
  &__security{
    text-align: center;
    margin-top: 45px;
  }
  .h9{
    color: var(--dark-grey);
    text-align: center;
    margin-top: 1rem;
    max-width: 772px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
