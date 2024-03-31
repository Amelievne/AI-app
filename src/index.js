function displayIdea(response) {
  console.log("generated");

  new Typewriter("#ia-response", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: "🎁",
  });
}
function generateIdea(event) {
  event.preventDefault();

  let whoElement = document.querySelector("#who");

  let aiApiKey = "974f7528a7fe8f1a738ftd6eob928053";
  let aiApiPrompt = `User instruction : Generate gift ideas for ${whoElement.value}`;
  let aiApiContext =
    "You are a personal shopper and your mission is to give one and only one personalized gift idea. Make sure to use the user instruction and to provide a short answer.";
  let aiApiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${aiApiPrompt}&context=${aiApiContext}&key=${aiApiKey}`;

  console.log(aiApiPrompt);
  axios.get(aiApiUrl).then(displayIdea);
}

let inputsFormsElement = document.querySelector("#ia-inputs");
inputsFormsElement.addEventListener("submit", generateIdea);
