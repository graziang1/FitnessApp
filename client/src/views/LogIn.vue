<template>

<div class="level section">

<div class="level-item">

    <form>
        <div class="field">
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
        <p class="control has-icons-left">
            <input class="input is-info" type="password" placeholder="Password">
            <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control">
            <button class="button is-success" id="btn-login">
              Login
            </button>
        </p>
        </div>
    </form>

    </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  components: {
    
  }
}
</script>

<style>
    #btn-login {
        background-color:aqua;
        border:1px;
        color: darkslategray;
    }
</style>