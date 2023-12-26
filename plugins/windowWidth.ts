export default defineNuxtPlugin(() => {
  return {
    provide: {
      width: () => {
        if(process.client){
          let widthWidth: number = window.innerWidth
          window.addEventListener('resize', () => {
            widthWidth = window.innerWidth
          })
          window.addEventListener('change', () => {
            widthWidth = window.innerWidth
          })
          return widthWidth
        }
        return 1200
      }
    }
  }
})