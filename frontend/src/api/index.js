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
    const options = {
      body: {
        googleID: place_id
      }
    };

    context.$http.get(api.msg_get_url, options).then(callback);
  },  

  // requires auth token header
  likeMessage (context, message_id, callback) {

    const options = {
      headers: auth.getAuthHeader(),
      params: {
        text: message_id
      }
    };

    context.$http.post(api.like_msg_url, {}, options).then(callback);
  },

  // requires auth token header
  postMessage (context, msg, place_id, callback) {

    const options = {
      params: {
        googleID: place_id,
        text: msg.text,
        user: msg.user.username
      }
    };

    context.$http.post(api.msg_post_url, options, res => {
      console.log(res);
      callback(res);
    });
  }
}