<template>
  <div class="fitnesstracker">
    <h1>Log completed exercises or progress photos here</h1>

    <div class="field">
  <div class="control">
    <div class="select is-medium">
      <select>
        <option>-Select Workout Type-</option>
        <option>Abdominals</option>
        <option>Back</option>
        <option>Biceps</option>
        <option>Cardio</option>
        <option>Chest</option>
        <option>Glutes</option>
        <option>Hamstrings</option>
        <option>Quads</option>
        <option>Shoulders</option>
        <option>Triceps</option>
      </select>
    </div>
    <input class="input" type="text" placeholder="Enter specific exercise">
  </div>
</div>
  </div>
</template>
<script>
export default {
  name: 'FitnessTracker',
  components: {
    
  }
}
</script>
<style>
  
</style>