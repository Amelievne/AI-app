function generateIdea(event) {
  event.preventDefault();

  let iaResponse = document.querySelector("#ia-response");
  new Typewriter(iaResponse, {
    strings: "Here is an idea",
    autoStart: true,
    delay: 40,
  });
}

let inputsFormsElement = document.querySelector("#ia-inputs");
inputsFormsElement.addEventListener("submit", generateIdea);
