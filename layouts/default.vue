<template>
  <div class="background">
    <Nav/>
    <nuxt/>
  </div>
</template>


<script>
  import Nav from '@/components/Nav'  
  
  export default {
    components: {
      Nav
  
      
    }
  }
</script>


<style lang="scss">

/* Global Reset */
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
/* End Global Reset */



html {
  // font-size: 62.5%; // 1rem = 10px  10px/16px = 62.5%
  font-family: Roboto, sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}







</style>
