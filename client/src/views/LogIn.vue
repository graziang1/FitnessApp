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
            <button class="button" id="btn-login" @click.prevent="login">
            Login
            </button>
        </p>
        </div>
    </form>
    </div>
</div>
</template>

<script>
import session from "@/models/session";
export default {
    methods: {
        login(){
            session.user = {
                name: 'Gianna Graziano',
                handle: 'ggrazi_',
                profile: 'https://64.media.tumblr.com/7174fc1b0760acf76b88a940fcb80269/945f0943bc6a51cf-cb/s1280x1920/68d02db63b7324a4603a53d457d4ed701396629f.png'
            }
            session.addNotification('Successfully logged in!')
            this.$router.push('fitness-tracker')
        }
    }
}
</script>

<style>

</style>