<template>
<form>
<br>
<div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input is-info" type="Enter your full name" placeholder="Enter your full name">
  </div>
</div>

<div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-info" type="text" placeholder="" value="Enter a username">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  <p class="help is-success">This username is available</p>
</div>

<div class="field">
  <label class="label">Email</label>
  <p class="control has-icons-left has-icons-right">
    <input class="input is-info" type="email" placeholder="Email">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
<div class="field">
  <label class="label">Password</label>
  <p class="control has-icons-left">
    <input class="input is-info" type="password" placeholder="Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link" id="btn-submit">Submit</button>
  </div>
  <div class="control">
    <button class="button is-link" id="btn-cancel">Cancel</button>
  </div>
</div>
</form>
</template>
<script>
export default {
  name: 'SignUp',
  components: {
    
  }
}
</script>

<style>
  #btn-submit, #btn-cancel {
    background-color:aqua;
    border:1px;
    color: darkslategray;
  }
</style>