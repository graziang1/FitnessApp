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
        <input class="input" type="text" placeholder="Name">
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control is-expanded has-icons-left has-icons-right">
        <input class="input is-success is-danger" type="email" placeholder="Email" value="example@ggfitnessatease.com">
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
          <input class="input" type="tel" placeholder="Your phone number">
        </p>
      </div>
      <p class="help">Please include your area code.</p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label">
    <label class="label">Are you an existing<br>Fitness At Ease member?</label>
  </div>
  <div class="field-body">
    <div class="field is-narrow">
      <div class="control">
        <label class="radio">
          <input type="radio" name="member">
          Yes
        </label>
        <label class="radio">
          <input type="radio" name="member">
          No
        </label>
      </div>
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
        <input class="input is-danger" type="text" placeholder="e.g. How can I join GG Fitness">
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
        <textarea class="textarea" placeholder="Explain what we can help you with"></textarea>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label">
    <!-- Left empty for spacing -->
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <button class="button is-primary">
          Send message
        </button>
      </div>
    </div>
  </div>
</div>
</form>
</template>

<script>
export default {
  name: 'ContactUs',
  components: {
    
  }
}
</script>

<style>
    
</style>