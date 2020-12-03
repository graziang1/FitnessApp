<template>
<form>
<br>
<div class="field is-horizontal">

  <div class="field-label is-normal">
    <label class="label">From</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded has-icons-left">
            <b-autocomplete
                v-model="name"
                :data="filteredDataArray"
                @select="option => selected = option"
                placeholder="Name"
                icon="magnify"
                clearable
                >
                <template slot="empty">No results found</template>
            </b-autocomplete>
                
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </p>
    </div>


    <div class="field">
      <p class="control is-expanded has-icons-left has-icons-right">
        <input class="input is-info" type="email" placeholder="Email" value="example@fitnessatease.com">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
        <p class="help is-danger">
          This field is required
        </p>
      
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label"></div>
  <div class="field-body">
    <div class="field is-expanded">
      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">
            +1
          </a>
        </p>
        <p class="control is-expanded">
          <input class="input is-info" type="tel" placeholder="Your phone number">
        </p>
      </div>
      <p class="help">Please include your area code.</p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Subject</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input class="input is-info" type="text" placeholder="e.g. How can I join FitnessAtEase">
      </div>
      <p class="help is-danger">
        This field is required
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Question</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <textarea class="textarea is-info" placeholder="Explain what we can help you with"></textarea>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label">

  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <button class="button" @click.prevent="send">
          Send Message
        </button>
      </div>
    </div>
  </div>
</div>
</form>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Post from "@/components/Post";
import { posts } from "@/models/feed";
import session from "@/models/session";

export default {
  name: 'ContactUs',
  components: {
  },

  methods: {
      send(){
          session.addNotification('Your message has been sent!', 'success')
      }
  },
        data() {
            return {
                //data: [],
                data: [
                    'Gianna',
                    'Tom',
                    'Brittany',
                    'Ashley',
                    'Gordon',
                    'Karen',
                    'Sue',
                    'Donald',
                    'Joe',
                    'John',
                    'Kamela',
                ],
                name: '',
                selected: null
            }
        },
        computed: {
            filteredDataArray() {
                return this.data.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            }
        },
        async created(){
        this.posts = await getPosts();
        FB.api("me/photos?fields=link,images,picture", x=>{
            this.fbPics = x.data
            console.log(x)
        })
    },
    }
</script>




}

</script>

<style>
  .button {
    background-color:aqua;
    border:1px;
    color: darkslategray;
  }
</style>