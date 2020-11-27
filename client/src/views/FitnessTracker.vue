<template>
  <div class="fitnesstracker">
    <br>
    <h2 class="title is-2">Workouts & Progress Photos Log</h2>
    <div class="field">
    <div class="control">
      <div class="select is-info">
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
          <option>Other</option>
        </select>
      </div>
    </div>
    </div>

    
    <input class="input is-info" type="text" placeholder="Exercise Completed"><br><br>
    <input class="input is-info" type="text" placeholder="Location"><br><br>
    <input class="input is-info" type="text" placeholder="Workout Duration"><br><br>
    <input class="input is-info" type="text" placeholder="# of Sets Completed"><br><br>
    <input class="input is-info" type="text" placeholder="# of Reps Completed"><br><br>
    <input class="input is-info" type="text" placeholder="Distance Covered"><br><br>
    <div class="input-group">
      <div class="custom-file">
        <input type="file" class="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04">
        <label class="custom-file-label" for="inputGroupFile04"></label>
      </div>
      <br>
      <div class="input-group-append">
        <button class="button btn-outline-secondary" type="button" id="inputGroupFileAddon04">Post</button>
      </div>
    </div>

    <hr class="solid">

    <div class="page">
      <h2 class="title is-2">Feed
          <button class="button btn-outline-secondary" style="float:right" type="button" id="inputGroupFileAddon04">View My Posts</button>
      </h2>
      <div class="columns">
            <div class="column is-one-half">
                <Post v-for=" (x, i) in posts " 
                      :key="i"
                      :i="i"
                      :post="x" /> 
            </div>
            <div class="column is-one-quarter" @mouseenter="error">
                <Sidebar />
            </div>
        </div>
  </div>
</div>
</template>
<script>
import Sidebar from "@/components/Sidebar";
import Post from "@/components/Post";
import { posts } from "@/models/feed";
import session from "@/models/session";
export default {
    data(){
        return {
            posts
        }
    },
    components: {
        Sidebar, Post
    },
    methods: {
        error(){
            session.addNotification('Something went wrong.', 'danger')
        }
    }
}
</script>

<style>
    .card {
        margin-bottom: 30px ;
    }
    #inputGroupFileAddon04 {
        background-color:aqua;
        border:1px;
        color: darkslategray;
    }
</style>