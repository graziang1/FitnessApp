<template>

<nav class="navbar container is fixed-top is-info" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="../assets/IMG_4499.png" height="28">
    </a>

    <a role="button" class="navbar-burger burger" :class="{'is-active': isActive}" @click="isActive = !isActive" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isActive}" @click="isActive = !isActive">
    <div class="navbar-start">

      <router-link to="/" class="navbar-item">Home</router-link>
      <router-link to="/about" class="navbar-item">About</router-link>
      <router-link to="/exercises" class="navbar-item">Exercises</router-link>      
      <router-link to="/fitness-tracker" class="navbar-item">Fitness Tracker</router-link>
      <router-link to="/water-tracker" class="navbar-item">Water Tracker</router-link>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Contact Us
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button">
            <strong>Sign up</strong>
          </a>
            <router-link to="/login"  class="button is-light" >
                Log in
            </router-link>
        </div>
      </div>
    </div>
  </div>
</nav>

</template>

<script>
export default {
  data: ()=> ({
      isActive: false
  }),
  methods: {

  }
}
</script>

<style>
</style>