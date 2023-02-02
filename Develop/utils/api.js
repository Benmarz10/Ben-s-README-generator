const axios = require('axios');

const api = {
  async getUser(answers) {
    try {
      let response = await axios
        .get('https://api.github.com/users/${answers.username}');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = api;