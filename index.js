const userInput = document.getElementById('userInput');

const displayElement = document.getElementById('userInput');

userInput.addEventListener('input'.(event) => {
  
  const text = event.target.value;

  displayElement.innerText = text;
});




const axios = require('axios');

async function makeApiCalls(){
  try {
    const response1 = await axios.get('');

    const response2 = await axios.get('');

    } catch (error) {
    
    }}

    const button = document.querySelector("button");
  button.addEventListener("click", () => {
    axios({
      url: "https://dog.ceo/api/breeds/image/random",
      method: "GET",
    })
      .then((response) => {
      
        const image = document.querySelector("#image");
      
        image.src = response.data.message;
      });
      
    ])
