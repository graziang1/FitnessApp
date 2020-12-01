<template>
  <div class="parallax">
    <div class="hometext">
      <br>
      <h1 class="title" style="color:aqua;">
        FitnessAtEase
      </h1>
      <p class="subtitle" style="color:white;">
        No more interrupted workouts at your local gym... 
      </p>
      <p class="subtitle" style="color:white;">
        <center>Try <strong style="color:white;">FitnessAtEase</strong> instead for FREE!</center>
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style>
  .hometext {
    background-color: black; 
    opacity: 0.8;
    margin: 1px;
  }

  .parallax {
    background-image: url("../assets/parallax.jpg");
    opacity: 0.8;
    height: 964px;
    /* Create parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>