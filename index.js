const axios= ('axios');

async function populateDropdown() {
  const breeds = await fetchDogBreeds();

  if (breeds) {
    const selectElement = document.getElementById('breed-select');

    // Add default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select Breed';
    selectElement.appendChild(defaultOption);

    for (const breed in breeds) {
      const optionElement = document.createElement('option');
      optionElement.value = breed;
      optionElement.textContent = breed;

      selectElement.appendChild(optionElement);
    }
  }
}

async function populateDropdown() {
  const breeds = await fetchDogBreeds();

  if (breeds) {
    const selectElement = document.getElementById('breed-select');

    const defaultOption = document.createElement('option');
    defaultOption.value = 'Options';
    defaultOption.textContent = 'Select Breed';
    selectElement.appendChild(defaultOption);

    for (const breed in breeds) {
      const optionElement = document.createElement('option');
      optionElement.value = breed;
      optionElement.textContent = breed;

      selectElement.appendChild(optionElement);
    }
  }
}

async function fetchDogBreeds() {
  try {
      const response=await 
    axios.get('https://dog.ceo/api/breeds/list/all');
      const breeds= response.data.message;
      
      return breeds;
    }
      catch(error) {
        console.error('Error fetching dog breeds:', error);
          return null;
      }
  };

  async function fetchDogImage(breed) {
    try {
      const response=await
    axios.get('https://dog.ceo/api.breed/${breed}/images/random');
      const imageUrl= response.data.message;

      return imageUrl;
    } 
      catch(error) {
        console.error('Error fetching dog image:', error);
          return null;
      }
  }

  async function handleSelectionChange(){
      const selectElement= document.getElementById('breed-select');
      const selectBreed= selectElement.value;
      const imageUrl=await
    fetchDogImage(selectBreed);
      const imageElement= document.getElementById('dog-image');
        imageElement.src=imageUrl;
  }

  async function populateDropdown() {
      const breeds=await fetchDogBreeds();

    if (breeds) {
      const selectElement= document.getElementById('breed-select');

      for (const breed in breeds) {
        const optionElement= 
        document.createElement('option');
          optionElement.value= breed;
          optionElement.textContent= breed;

    selectElement.appendChild(optionElement);
      }
    }
 
  }



const userInput = document.getElementById('userInput');
console.log(userInput);

const displayElement = document.getElementById('userInput','searchInput');

userInput.addEventListener('input',(event) => {
  
  const text = event.target.value;

  displayElement.innerText = text;
});



async function makeApiCalls(){
  try {
    const response1 = await axios.get('https://dog.ceo/api/breeds/list/all');

    } catch (error) {
    
    }}

    const button2 = document.querySelector(".button");
  button2.addEventListener("click", () => {
    axios ({
      url: "https://dog.ceo/api/breeds/list/all",
      method: "GET",
    })
      .then ((response) => {
      
        const image = document.querySelector("#image");
      
        image.src = response.data.message;
      });
      
   });
 
   const button = document.querySelector("button");
   button.addEventListener("click", () => {
     axios ({
       url: "https://dog.ceo/api/breeds/list/all",
       method: "GET",
     })
       .then ((response) => {
       
         const image = document.querySelector("#image");
       
         image.src = response.data.message;
       });
       
    });


  


