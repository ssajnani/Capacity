<template lang="html">
<div>
<!-- FOR ALL CURRENT COMMENTS -->
<article class="media" v-for="msg in messages">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="http://bulma.io/images/placeholders/128x128.png">
    </p>
  </figure>
  <!-- There are placeholders for now -->
  <div class="media-content">
    <div class="content">
      <p>
        <strong>Name {{msg.name}}</strong>
        <br>
        Message {{msg.text}}
        <br>
        <small><a v:on-click="likeMessage(msg.id)">Like</a> · Time {{msg.time}}</small>
      </p>
    </div>
  </div>
</article>

<!-- POST COMMENT -->
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="http://bulma.io/images/placeholders/128x128.png">
    </p>
  </figure>
  <div class="media-content">
    <p class="control">
      <textarea class="textarea" v-model="comment" placeholder="Add a comment..."></textarea>
    </p>
    <p class="control">
      <button class="button" v:on-click="postMessage">Post comment</button>
    </p>
  </div>
</article>
</div>
</template>

<script>
export default {
  name: 'place_messages',
  props: ['messages'],
  data: function () {
    return {
      comment: ''
    }
  },
  methods: {
    likeMessage: function (id) {
      /* EMIT LIKE EVENT TO PARENT WITH MESSAGE ID */
    },
    postMessage: function () {
      /* EMIT POST EVENT TO PARENT WITH TEXT */
      /* return 'this.comment' as the parameter */
    }
  }
}
</script>