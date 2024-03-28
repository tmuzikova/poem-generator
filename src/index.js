function generatePoem(event) {
  //when the button is clicked, this function is called
  event.preventDefault(); // so it does not reload everytime we click submit
  let userInstruction = document.getElementById("user-instructions");
  let apiKey = "6ddtf02cf3a61b83b8oaf010eba5f493";
  let context =
    "you are a romantic poem writer and love to write short poems, please provide just the poem, nothing else";
  let prompt = `generate a poem in czech language about ${userInstruction.value}, please`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiURL).then(displayPoem); //call API
}

function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let form = document.querySelector("#poem-generator-form");
form.addEventListener("submit", generatePoem);
