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
            <button class="button is-info" @click.prevent="fbLogin">
                Facebook Login
            </button>
            <button class="button is-info" @click.prevent="googleLogin">
                Google Login
            </button>
        </p>
        </div>
    </form>
    </div>
</div>
</template>

<script>
import session from "@/models/session";
let auth2 = null;

export default {
    methods: {
        login(){
            session.user = {
                name: 'Gianna Graziano',
                handle: 'ggrazi_',
                profile: 'https://64.media.tumblr.com/7174fc1b0760acf76b88a940fcb80269/945f0943bc6a51cf-cb/s1280x1920/68d02db63b7324a4603a53d457d4ed701396629f.png'
            }
            session.addNotification('Yay! You logged in', 'success')
            this.$router.push('feed')
        },
        fbLogin(){
            FB.login( authInfo =>{
                console.log(authInfo);
                FB.api("me?fields=id,name,email,picture", x=>{
                    session.user = {
                        name: x.name,
                        handle: x.email,
                        profile: x.picture.data.url
                    }
                    session.addNotification('Yay! You logged in', 'success')
                    this.$router.push('feed')
                    console.log(x)
                }  )
            }, { scope: 'public_profile,email,user_photos'})
        },
        async googleLogin(){
            const googleUser = await auth2.signIn();
            console.log(googleUser);
            const profile = googleUser.getBasicProfile();
            console.log(profile);
                    session.user = {
                        name: profile.getName(),
                        handle: profile.getEmail(),
                        profile: profile.getImageUrl()
                    }
                    session.addNotification('Yay! You logged in', 'success')
                    this.$router.push('fitness-tracker')
        }
    }
}
///////////////////////////////////
//  Load Facebook Scripts
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '989041164937415',
      cookie     : true,
      xfbml      : true,
      version    : 'v9.0'
    });
      
    FB.AppEvents.logPageView();   
      
  };
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

//////////////////////////////////
//  Load Google Scripts
    const googleScriptTag = document.createElement('script')
    googleScriptTag.setAttribute('src', 'https://apis.google.com/js/api:client.js')
    document.head.appendChild(googleScriptTag)
    googleScriptTag.onload = () => {
        // the global gapi variable is created by loading that script
        gapi.load('auth2', () => {
            auth2 = gapi.auth2.init({
                client_id: "194697005064-1nnmfmugtqf4h2lh9654p21qpchgdb74.apps.googleusercontent.com",
                cookiepolicy: 'single_host_origin',
                scope: 'profile email'
            })
        })
    }
</script>

<style>
    button {
        background-color:aqua;
        border:1px;
        color: darkslategray;
        padding: 5px;
        margin: 3px;
    }
    figure.image {
        display: inline-block;
        box-sizing: border-box;
        padding: 5px;
        border: solid blue 1px;
        margin: 3px;
        border-radius: 5px;
        cursor: pointer;
    }
    figure.image:hover {
        padding: 0;
    }
</style>