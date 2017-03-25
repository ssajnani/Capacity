<template lang="html">
<div>

<div class="row">
  <div id="checkIn">
    <a class="button is-large has-text-centered" v-bind:class="{ 'is-primary': (!checked_into), 'is-warning': checked_into }"
    v-on:click="checkInOut">{{!checked_into ? 'Check In' : 'Check out'}}</a>
  </div>
</div>
<br>
<h1 class="title">Comments</h1>
<!-- FOR ALL CURRENT COMMENTS -->

<article class="media" v-for="msg in msgs">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="http://blog.sumall.com/wp-content/uploads/2015/05/default-profile-01.png">
    </p>
  </figure>
  <!-- There are placeholders for now -->
  <div class="media-content">
    <div class="content">
      <p>
        <strong>{{msg.user}}</strong>
        <br>
          {{msg.text}}
        <br>
        <small v-if="user.authenticated"><a v-on:click="likeMessage(msg.id)" >Like</a> · </small>
        <small>{{msg.voteCount}} like(s) · </small>
        <small>{{msg.createdAt}}</small>
      </p>
    </div>
  </div>
</article>
<p v-if="!messages || !messages.length">(No comments...)</p>

<!-- POST COMMENT -->
<article class="media" v-if="user.authenticated">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="http://blog.sumall.com/wp-content/uploads/2015/05/default-profile-01.png">
    </p>
  </figure>
  <div class="media-content">
    <p class="control">
      <textarea class="textarea" v-model="comment" placeholder="Add a comment..." maxlength="300"></textarea>
    </p>
      <button class="button" v-bind:class="{ 'is-disabled': (comment=='') }"v-on:click="submitMessage">Post comment</button>
  </div>
</article>
</div>
</template>

<style scoped>
p {
  font-style: italic; 
}
.row {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<script>
import auth from '../../auth'
export default {
  name: 'place_messages',
  props: ['messages', 'checked_in'],
  data: function () {
    return {
      user: auth.user,
      comment: '',
      checked_into: false
    }
  },
  methods: {
    likeMessage (id) {
      /* EMIT LIKE EVENT TO PARENT WITH MESSAGE ID */
      this.$emit('likeMessage', id);
    },
    submitMessage (message) {
      /* EMIT POST EVENT TO PARENT WITH TEXT */
      /* return 'this.comment' as the parameter */
      /* reset this.comment value to empty string */
      const text = this.comment;
      this.comment = '';      

      this.$emit('postMessage',{
        text: text,
        user: auth.user
      });
    },
    checkInOut: function () {
      if (this.checked_into) {
        this.$emit('checkOut');
      } else {
        this.$emit('checkIn');
      }
    }
  },
  watch: {
    messages: function (to) {
      this.msgs = to;
    },
    checked_in (to) {
      this.checked_into = to;
    }
  }
}
</script>