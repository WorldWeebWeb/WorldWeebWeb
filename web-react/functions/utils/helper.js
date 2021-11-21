const axios = require("axios");

const responseObj = (statusCode, data) => {
  return {
    statusCode: statusCode,
    headers: {
     /* Required for CORS support to work */
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "PUT,POST,GET",
    },
   body: JSON.stringify(data)
  };
};

const requestObj = (data) => {
  return JSON.parse(data);
}

const apireq =(url)=>{
  return axios({method: 'get',url: "https://api.jikan.moe/v3"+url,
        }).then((res) => {
                return  res.data
            })
            .catch((err) => {
                return JSON.stringify(err.response.data.errors);
            });
}

module.exports = { responseObj: responseObj, requestObj: requestObj,apireq:apireq }