var axios = require('axios');

var instance = axios.create({
  baseURL: 'https://wunameaas.herokuapp.com',
  headers: { 'Accept': 'application/json' }
});

module.exports = function wuami(name) {
  return instance.get('/wuami/' + name).then(function (response) {
    return response.data.message;
  });
};
