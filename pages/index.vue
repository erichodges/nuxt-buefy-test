<template>
  <main>

    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
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
          <a class="navbar-item" href="/documentation/overview/start/">
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
        <div class="endpad"></div>
      </div>

      
      
    </div>
  </div>
</nav>


  <div class="container">
    <h1 class="yo">Yo, this is a nuxt-buefy test</h1>
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

<style>

.yo {
  font-family: Roboto, sans-serif;
  font-size: 3rem;
  color: darkblue;
}

.endpad {
  padding-right: 3rem;
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: top;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
