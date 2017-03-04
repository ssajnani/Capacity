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
      ls_p = JSON.parse(localStorage.getItem(msgs));
    }
    // const msgs = 
    // callback({ messages: });
    return;
      // callback();
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
      ls_p = JSON.parse(localStorage.getItem(msgs));
    }
    // callback({ messages: });
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
      ls_m = JSON.parse(localStorage.getItem(msgs));
    }
    const id = Object.keys(ls_m).length;
    ls_m[id] = {
      id: id, place: place_id, likes: 0, text: msg.text, user: msg.user 
    };

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