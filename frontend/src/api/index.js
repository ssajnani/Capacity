// The service for API calls - both google and capacity backend

import auth from '../auth'

// Configurations for requests

const url = 'http://localhost:3000/';
const api = {
  place_url: url + 'places/create',
  msg_get_url: url + 'messages/messages',
  msg_post_url: url + 'messages/createMessage',
  msg_like_url: url + 'messages/id',

};

export default {

  getPlace (context, place_id, callback) {

    const options = {
      body: {
        googleID: place_id
      }
    };

    context.$http.post(api.place_url, options).then(callback);

  },

  getMessages (context, place_id, callback) {

    context.$http.get(api.msg_get_url, 
      { params: { googleID: place_id }})
      .then(callback);
  },  

  // requires auth token header
  likeMessage (context, message_id, callback) {

    const body= {
      id: message_id,
      voteType: 'upvote'
    };

    context.$http.put(api.msg_like_url, body).then(callback);
  },

  // requires auth token header
  postMessage (context, msg, place_id, callback) {

    const body = {
      googleID: place_id,
      text: msg.text,
      user: msg.user.username
    };

    context.$http.post(api.msg_post_url, body).then(res => {
      console.log(res);
      callback(res);
    });
  },

  // checking in to the place
  checkIn (context, place_id, callback) {
    const body = {
      googleID: place_id,
      increment: 'Y'
    };

    context.$http.put(api.msg_check.url, body)
    .then(callback);
  },

  // check out of place
  checkOut (context, place_id, callback) {
    const body = {
      googleID: place_id,
      increment: 'N'
    };

    context.$http.put(api.msg_check.url, body)
    .then(callback);
  }
}