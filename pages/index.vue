<template>
  <main class="main">

    


  <div class="container">
    <h1 class="yo">Yo dude, this is a nuxt-buefy test</h1>
  </div>
  
  
  </main>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>


// Styles
<style lang="scss">


.navbar-item {
  font-family: Roboto, sans-serif;
  
  
}

.test,
.navbar-link {
  color: #000;
  
  &:hover {
    color: $link;
  }

  &::after {
    border-color: #000;

    &::after:hover {
      border-color: green;
    }
  }
}

.navbar-dropdown::after {
  border-color: green;

}


.yo {
  font-family: Roboto, sans-serif;
  font-size: 3rem;
   
}

.endpad {
  padding-right: 5rem;
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: top;
  text-align: center;  
}

.links {
  padding-top: 15px;
}




</style>
