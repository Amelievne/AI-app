function generateIdea(event) {
  event.preventDefault();
  alert("Hello");
  let iaResponse = document.querySelector("#ia-response");
  iaResponse.innerHTML = "Here is an idea";
}

let inputsFormsElement = document.querySelector("#ia-inputs");
inputsFormsElement.addEventListener("submit", generateIdea);
