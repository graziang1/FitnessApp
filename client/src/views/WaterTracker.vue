<template>
  <body>
    <form class="watertracker">
        <br>
        <h2 class="title is-2">STAY HYDRATED! Log the amount of water you drink throughout the day</h2>
        <br>
        <img class="wrap" src="../assets/water.jpg" style="width:125px;height:125px;border-radius:50%;" alt="waterbottle">

        <input type="range" value="0" min="0" max="128" oninput="this.nextElementSibling.value = this.value">
        <output id="out">0</output> ounces 
        <button class="button is-info" style="margin-top:7%; margin-left:2%">Submit</button>
        <br><br>        <br><br>        <br><br>        <br><br>        <br><br>
    </form>
  </body>
</template>

<script>
export default {
  name: 'WaterTracker',
  components: {
  }
}

</script>

<style>
    .watertracker { 
        background-image: url('../assets/water2.jpg');
        background-size: cover;
    }

    #out{
      font-size: 30px;
    }
</style>