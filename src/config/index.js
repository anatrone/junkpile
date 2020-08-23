/* eslint-disable linebreak-style */
const URL_BACKEND_MASTER = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://junkpile.herokuapp.com';

export default {
  URL_BACKEND_MASTER,
};
