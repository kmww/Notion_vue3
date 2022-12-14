require("dotenv").config();
const axios = require("axios");
const { API_KEY, USERNAME } = process.env;

exports.handler = async function (event) {
  const options = JSON.parse(event.body);
  const { id = "", method, body } = options;
  const { data } = await axios({
    url: `${API_KEY}${id}`,
    method,
    headers: {
      "Content-Type": "application/json",
      "x-username": USERNAME,
    },
    data: body,
  });

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
