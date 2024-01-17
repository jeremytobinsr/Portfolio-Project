const axios = require('axios');

async function makeApiCalls(){
  try {
    const response1 = await axios.get('');

    console.log(response.data);

    const response2 = await axios.get('');

    console.log(response2.data);

    } catch (error) {
      console.error(error);
    }}
}