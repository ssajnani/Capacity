// The service for API calls - both google and capacity backend

import auth from '../auth'

// Configurations for requests
const api = {
  // url: 'http://localhost:8080/',
  place_url: 'http://localhost:8080/place/getPlaceInfo',
  like_msg_url: 'http://localhost:8080/message/upvoteMessage',
  post_msg_url: 'http://localhost:8080/message/createMessage'
};

const gmaps = {
  url: 'https://maps.googleapis.com/maps/api/place/details/json',
  key: 'AIzaSyC-vHdasMaCWTC-QWS_vuwjNwBqq8_SlmE'
}

export default {

  getPlace (context, place_id, callback) {
    //
    let ls_m = {};
    if (localStorage.msgs) {
      ls_m = JSON.parse(localStorage.getItem('msgs'));
    }
    let msgs = Object.keys(ls_m);
    let place_msgs_ids = msgs.filter(msg => ls_m[msg].place == place_id);
    console.log(place_msgs_ids);

    let place_msgs = [];
    place_msgs_ids.forEach(msg_id => place_msgs.push(ls_m[msg_id]));
    console.log(place_msgs);
    callback({ messages: place_msgs });
    return;
    //


    const options = {
      params: {
        googleID: place_id
      }
    };

    context.$http.get(api.place_url, options).then(callback);

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