<template>

<nav class="navbar container is-dark is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="../assets/icon2.jpg" height="30">
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
      <router-link to="/contactus" class="navbar-item">Contact Us</router-link>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link"> Admin </a>
        <div class="navbar-dropdown">
          <router-link to="/users"  class="navbar-item">Users</router-link>
        </div>
      </div>
    </div>

  </div>

    

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
            <router-link to="/signup"  class="button is-light" >
                Sign up
            </router-link>
            
            <LoginBadge />
        </div>
      </div>
    </div>


</nav>

</template>

<script>
import LoginBadge from "@/components/LoginBadge";
export default {
  data: ()=> ({
      isActive: false
  }),
  methods: {
  },
  components: {
    LoginBadge
  }
}
</script>

<style>
</style>