var express = require('express');
const { auth } = require('express-openid-connect');


var app = express();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'https://exgen-bonzo.herokuapp.com',
  clientID: 'xnPvwSZAsQjoljVFkR3IAZ8HiRctWOpv',
  issuerBaseURL: 'https://soft-field-6236.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
