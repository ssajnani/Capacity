// The service for API calls - both google and capacity backend

import auth from '../auth'

// Configurations for requests
const api = {
  url: 'http://localhost:8080/',
  place_url: this.url + 'createPlace',
  like_msg_url: this.url + 'message/upvoteMessage',
  post_msg_url: this.url + 'message/createMessage'
};

const gmaps = {
  url: 'https://maps.googleapis.com/maps/api/place/details/json',
  key: 'AIzaSyC-vHdasMaCWTC-QWS_vuwjNwBqq8_SlmE'
}

export default {



  api: {

    getPlace (context, place_id, callback) {

      const options = {
        params: {
          googleID: place_id
        }
      };

      context.$http.get(api.place_url, options, callback);
    },

    // requires auth token header
    likeMessage (context, message_id, callback) {

      const options = {
        headers: auth.getAuthHeader(),
        params: {
          text: message_id
        }
      };

      context.$http.post(api.like_msg_url, options, callback);
    },

    // requires auth token header
    postMessage (context, place_id, callback) {

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

}