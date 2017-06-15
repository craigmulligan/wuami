var axios = require('axios');

var instance = axios.create({
  baseURL: 'https://wunameaas.herokuapp.com',
  headers: {'Accept': 'application/json'}
});

function wuami(name) {
  return instance.get('/wuami/' + name).then(function (response) {
    return response.data.message;
  });
};

function enterthewu(name) {
  return instance.get('/enterthewu/' + name).then(function (response) {
    return response.data.message;
  });
};

module.exports = {
  wuami: wuami,
  enterthewu: enterthewu
};
