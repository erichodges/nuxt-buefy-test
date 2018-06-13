<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

$primary: #e913e9;
$secondary: blue;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

/* Global Reset */
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
/* End Global Reset */

$primary: rgb(235, 51, 189);

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
