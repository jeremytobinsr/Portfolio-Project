const userInput = document.getElementById('userInput');

const displayElement = document.getElementById('userInput');

userInput.addEventListener('input' . (event) => {
  
  const text = event.target.value;

  displayElement.innerText = text;
});




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