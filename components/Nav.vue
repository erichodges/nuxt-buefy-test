<template>
  <section>
    <nav class="hero-head">
      <div class="columns is-mobile is-marginless heading has-text-weight-bold">
        <div class="column left">
          <figure class="navbar-item image">
            <img src="~assets/images/tesla.svg" style="width: 6.25rem; height: 1rem;">
          </figure>
        </div>
        <div class="column center desktop">
          <p class="navbar-item is-size-7 has-text-black">MODEL S </p>
          <p class="navbar-item is-size-7 has-text-black">MODEL X </p>
          <p class="navbar-item is-size-7 has-text-black">MODEL 3 </p>
          <p class="navbar-item is-size-7 has-text-grey">ROADSTER</p>
          <p class="navbar-item is-size-7 has-text-black">ENERGY  </p>
        </div>
        <div class="column right">
          <p class="navbar-item is-size-7 desktop has-text-black desktop">SHOP   </p>
          <p class="navbar-item is-size-7 desktop has-text-black desktop">SIGN IN</p>
          <figure class="navbar-item image">
            <i class="fas fa-3x fa-bars has-text-black"
              style="width: 1rem; height: 1rem;"></i>
          </figure>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>

</script>

<style>

section {
  display: block;
}

  .center, .center-column, .top, .right, .bottom, .left {
	display: flex;
	justify-content: center;
	align-items: center;
}

.center-column {
    flex-direction: column;
}

.top    { align-items:     flex-start; }
.right  { justify-content: flex-end;   }
.bottom { align-items:     flex-end;   }
.left   { justify-content: flex-start; }

.single-spaced, .single-spaced * {
    line-height: 1;
}

@media (max-width: 1024px) {
	.desktop {
		display: none;
	}
}
</style>
