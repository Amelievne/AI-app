function displayIdea(response) {
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
  let eventElement = document.querySelector("#event");
  let hobbiesElement = document.querySelector("#hobbies");
  let budgetElement = document.querySelector("#budget");

  let aiApiKey = "974f7528a7fe8f1a738ftd6eob928053";
  let aiApiPrompt = `User instruction : Generate gift ideas for ${whoElement.value} 
  for the event : ${eventElement.value}. 
  The person's hobbies are: ${hobbiesElement.value}. 
  It must be under the price of ${budgetElement.value}`;
  let aiApiContext =
    "You are a personal shopper and your mission is to give one and only one gift idea. You must provide a short answer with only the anwser for exemple: a customized wallet from Longchamp that will cost about 65euros. Make sure to use the user instruction bellow to personalized the answer. The price must be occurate and based on real prices";
  let aiApiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${aiApiPrompt}&context=${aiApiContext}&key=${aiApiKey}`;

  let responseSection = document.querySelector("#response-section");
  responseSection.classList.remove("hidden");

  let iaResponse = document.querySelector("#ia-response");
  iaResponse.innerHTML = "Thinking ...";
  new Typewriter("#ia-response", {
    strings: ["Thinking ...", "Thinking ..."],
    autoStart: true,
    delay: 10,
    cursor: "🎁",
    loop: true,
  });

  axios.get(aiApiUrl).then(displayIdea);
}

let inputsFormsElement = document.querySelector("#ia-inputs");
inputsFormsElement.addEventListener("submit", generateIdea);
