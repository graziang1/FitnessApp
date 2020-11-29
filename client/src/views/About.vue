<template>
  <div class="about">
    <br>
    <h2 class="history">
      <strong>FitnessAtEase</strong> was founded in August of 2020 by Gianna Graziano.
      Gianna loved seeing her friends at her local gym, but some were a bit too distracting... 
      from the elaborate conversations to the constant social media posts mid-exercise, she couldn't take much more.
      Gianna didn't want to be rude to her friends, but wanted a way to complete her workouts in peace!
      With her computer science background and love for the fitness world, it was only fitting to create a fitness app.
      FitnessAtEase includes popular exercises each week that you can do in the convenience of your own home.
      For even more workouts, you can also check out the Fitness Tracker Feed! 
      This app was created with users of all fitness levels in mind.
      To utilize all of our features, please click the <i>Sign up</i> button.
      We provide a clean platform to keep track of your completed exercises and water intake, in addition to providing you with popular at-home exercises.
    </h2>  
    <br>
    <br>
    <br>
    <img class="wrap" src="../assets/icon2.jpg" style="width:125px;height:125px;" alt="dumbbell">
    <div class="equipment">
      <u>Recommended equipment:</u>
      <ul>
        <li>- Yoga Mat</li>
        <li>- Resistance Bands and/or Free Weights</li>
        <li>- Towel</li>
        <li>- Water Bottle</li>
      </ul>
    </div>
    <br>
    <br>
    <br>
    <small class="sidenote"><i>
        Disclaimer: The information and services available on or through the FitnessAtEase website 
        are not intended to be a substitute for professional or medical advice and must not be taken 
        to be the rendering of professional advice. Your use of the FitnessAtEase web app program 
        and the FitnessAtEase website and any information available through it is solely at your own 
        risk. Consult your physician or healthcare professional before following any health and fitness instructions 
        you receive through the FitnessAtEase software program or FitnessAtEase website. FitnessAtEase is not 
        responsible for the accuracy, reliability, effectiveness, nor correct use of information and/or 
        services you receive through the FitnessAtEase website, or for any health problems you may suffer, 
        which may result from exercises or tips you learn through the FitnessAtEase website. FitnessAtEase 
        assumes no liability for the information and services provided through the FitnessAtEase website, 
        nor for any diagnosis or treatment made in reliance thereon. 
    </i></small>
  </div>
</template>
<script>
export default {
  name: 'About',
  components: {
    
  }
}
</script>
<style>
  img.wrap {
    float: left;
    border-radius: 10px;
    margin-right: 100px;
    margin-left: 20px;
  }
  .history {
    text-align: justify;
    margin-left: auto;
    display: block;
  }
  .equipment {
    margin-left: auto;
  }
  small {
    font-size: smaller;
  }
</style>
