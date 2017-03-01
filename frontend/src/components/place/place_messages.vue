<template lang="html">
<div>
<!-- FOR ALL CURRENT COMMENTS -->
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="http://bulma.io/images/placeholders/128x128.png">
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>Name</strong>
        <br>
        Message
        <br>
        <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
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
      <textarea class="textarea" placeholder="Add a comment..."></textarea>
    </p>
    <p class="control">
      <button class="button">Post comment</button>
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

    }
  }
}
</script>