// The service for authentication

import router from '../router'

// URL and endpoint constants
const API_URL = 'http://localhost:3000/'
const LOGIN_URL = API_URL + 'auth/login'
const SIGNUP_URL = API_URL + 'auth/signup'

export default {
  
  // User object will let us check authentication status
  user: {
    authenticated: false,
    username: null
  },

  // Send a request to the login URL and save the returned JWT
  signup(context, creds, success, failure) {

    const user = {
      username: creds.username, 
      password: creds.password
    };

    context.$http.post(SIGNUP_URL, user).then(succ => {
      if (succ.body.state != 'success') {
        failure(succ);
      } else {
        success(succ);
      }
    }, failure);
  },

  // Send a request to the login URL and save the returned JWT
  login(context, creds, success, failure) {

    const user = {
      username: creds.username, 
      password: creds.password
    };

    context.$http.post(LOGIN_URL, user).then(succ => {

      if (succ.body.state != 'success') {
        failure(succ);
      } else {
        localStorage.setItem('id_token', succ.body.user._id)
        localStorage.setItem('username', succ.body.user.username)

        this.user.authenticated = true;
        this.user.username = succ.body.user.username;
        
        success(succ);
      }

    }, failure);
  },

  // To log out, we just need to remove the token
  logout() {
    localStorage.removeItem('id_token')
    this.user.authenticated = false

    //
    localStorage.removeItem('username');
    this.user.username = null;
    //
  },

  checkAuth() {
    console.log('hey!');
    var jwt = localStorage.getItem('id_token')
    if(jwt) {
      this.user.authenticated = true
    }
    else {
      this.user.authenticated = false      
    }

    //
    let un = localStorage.getItem('username');
    if (un) {
      console.log(un);
      this.user.username = un;
      this.user.authenticated = true;
    }
    //
  },

  // The object to be passed as a header for authenticated requests
  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  }
}