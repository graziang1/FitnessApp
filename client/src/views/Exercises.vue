<template>
  <div class="card-body">
    <div class="workouts">
        <h2 class="title is-2">Popular Exercises of the Week</h2>
    </div>
    
    <table class="tiles">
        <tr>
          <th>
            <strong> Russian Twists: </strong><br>
            <img class="wrap" src="../assets/RussianTwists.png" style="width:125px;height:125px;" alt="russiantwists">
          </th>
          <th>
            <strong>Mountain Climbers: </strong><br>
            <img class="wrap" src="../assets/MountainClimbers.png" style="width:125px;height:125px;" alt="mountainclimbers">
          </th>
          <th>
            <strong>Squats: </strong><br>
            <img class="wrap" src="../assets/Squats.png" style="width:125px;height:125px;" alt="squats">
          </th> 
          <th>
            <strong>Forward Lunges:</strong><br>
            <img class="wrap" src="../assets/ForwardLunges.png" style="width:125px;height:125px;" alt="forwardlunges">
          </th>

          <th>
            <strong>Shoulder Presses:</strong><br>
            <img class="wrap" src="../assets/ShoulderPresses.png" style="width:125px;height:125px;" alt="shoulderpresses">
          </th>
        </tr>
    </table>
  </div>  
</template>

<script>
export default {
  name: 'Exercises',
  components: {
    
  }
}
</script>
<style>
  th {
    padding: 50px;
    text-align: center;

  }
  table{
    margin-left: auto;
    margin-right: auto;
  }

</style>
