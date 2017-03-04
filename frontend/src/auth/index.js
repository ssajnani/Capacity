// The service for authentication

import router from '../router'

// URL and endpoint constants
const API_URL = 'http://localhost:8080/'
const LOGIN_URL = API_URL + 'api/login'
const SIGNUP_URL = API_URL + 'api/signup'

export default {
  
  // User object will let us check authentication status
  user: {
    authenticated: false,
    username: null
  },

  // Send a request to the login URL and save the returned JWT
  signup(context, creds, callback, error) {

    //
    let ls_u = {};
    if (localStorage.users) {
      ls_u = JSON.parse(localStorage.getItem('users'));
    }

    if (ls_u.hasOwnProperty(creds.username)) {
      error({
        data: {
          error: "A user already exists with that name"
        }
      })
    } else {
      this.user.username = creds.username;
      ls_u[creds.username] = creds.password;
      localStorage.setItem('users', JSON.stringify(ls_u));
      callback({});
    }
    return;
    ///

    const url = SIGNUP_URL + "?username=" + creds.username
      + "&password="+creds.password;


    context.$http.post(url).then(callback, error);
  },

  // Send a request to the login URL and save the returned JWT
  login(context, creds, success, failure) {

    //
    let ls_u = {};
    if (localStorage.users) {
      ls_u = JSON.parse(localStorage.getItem('users'));
    }

    if (ls_u.hasOwnProperty(creds.username) && ls_u[creds.username] == creds.password) {
      this.user.username = creds.username;
      localStorage.setItem('username', creds.username);
      this.user.authenticated = true;
      success({});
    } else {
      failure({
        data: {
          error: "Invalid Login!"
        }
      })
    }
    return;
    //

    context.$http.post(LOGIN_URL, creds, {
      method: 'POST',
      credentials: false,
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }).then(succ => {
      localStorage.setItem('id_token', data.id_token)
      this.user.authenticated = true;
      success(succ);
    }, failure)
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