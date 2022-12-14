const axios = require("axios");

exports.handler = async function (event) {
  const options = JSON.parse(event.body);
  const { id = "", method, body } = options;
  const { data } = await axios({
    url: `${process.env.API_KEY}${id}`,
    method,
    headers: {
      "Content-Type": "application/json",
      "x-username": process.env.USERNAME,
    },
    data: body,
  });

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
