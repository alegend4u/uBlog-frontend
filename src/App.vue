<template>
  <nav class="nav">
    <div class="menu-btn">
      <span class="burger upper"></span>
      <span class="burger middle"></span>
      <span class="burger lower"></span>
    </div>
    <router-link class="title" to="/">Rishabh Prajapati</router-link>
    <ul class="navbar">
      <li><router-link class="navbar__item" to="/">About</router-link></li>
      <li>
        <router-link class="navbar__item" to="/portfolio"
          >Portfolio</router-link
        >
      </li>
      <li>
        <router-link class="navbar__item" to="/blog">Blog</router-link>
      </li>
      <li>
        <router-link class="navbar__item" to="/contact">Connect</router-link>
      </li>
    </ul>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import "@/sass/main.sass";
</style>
