<template>
  <main>

    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" height="50">
        </a>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">      

    <div class="navbar-end">

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="/documentation/overview/start/">
          Models
        </a>
        <div class="navbar-dropdown is-boxed">
          <a class="navbar-item" href="#">
            Evora 410
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
            Modifiers
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
            Columns
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
            Layout
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
            Form
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
            Elements
          </a>
          <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
            Components
          </a>
        </div>                
      </div>
      <div class="navbar-item">
        <a class="test" href="#">
          Company
        </a>
        </div>
      <div class="endpad"></div>
      
      
    </div>
  </div>
</nav>


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

<style lang="scss">


.navbar-item {
  font-family: Roboto, sans-serif;
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
