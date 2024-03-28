function generatePoem(event) {
  //when the button is clicked, this function is called
  event.preventDefault(); // so it does not reload everytime we click submit
  let userInstruction = document.getElementById("user-instructions");
  let apiKey = "6ddtf02cf3a61b83b8oaf010eba5f493";
  let context =
    "you are a funny poem writer and love to write short poems with funny jokey elements. Please provide just the poem in an HTML format, the poem shuld have just 4 lines, each of them devided by <br />, do not write anything else, just the poem itself, do not include a title";
  let prompt = `generate a poem in english about ${userInstruction.value}, please`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating your poem about ${userInstruction.value} </div>`;
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
