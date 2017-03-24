// The service for API calls - both google and capacity backend

import auth from '../auth'

// Configurations for requests

const url = 'http://localhost:3000/';
const api = {
  place_url: url + 'places/create',
  msg_url: url + 'messages/upvoteMessage',
  post_msg_url: url + 'messages/createMessage'
};

export default {

  getPlace (context, place_id, callback) {

    const options = {
      body: {
        googleID: place_id
      }
    };

    context.$http.post(api.place_url, options).then(
      function (data, status) {
        console.log(data);
        console.log(status);
      }
    );

  },

  getMessages (context, place_id, callback) {

  },  

  // requires auth token header
  likeMessage (context, message_id, callback) {
    //
    let ls_m = {};
    if (localStorage.msgs) {
      ls_m = JSON.parse(localStorage.getItem('msgs'));
    }

    ls_m[message_id]['likes'] += 1;

    localStorage.setItem('msgs', JSON.stringify(ls_m));
    console.log('like saved');
    callback(message_id);
    return;
    //

    const options = {
      headers: auth.getAuthHeader(),
      params: {
        text: message_id
      }
    };

    context.$http.post(api.like_msg_url, options, callback);
  },

  // requires auth token header
  postMessage (context, msg, place_id, callback) {
    //
    let ls_m = {};
    if (localStorage.msgs) {
      ls_m = JSON.parse(localStorage.getItem('msgs'));
    }
    const id = Object.keys(ls_m).length;
    ls_m[id] = {
      id: id, place: place_id, likes: 0, text: msg.text, name: msg.user.username 
    };
    console.log(msg);

    localStorage.setItem('msgs', JSON.stringify(ls_m));
    callback(ls_m[id]);
    return;
    //

    const options = {
      params: {
        headers: auth.getAuthHeader(),
        params: {
          googleID: place_id
        }
      }
    };

    context.$http.post(api.post_msg_url, options, callback);
  }
}