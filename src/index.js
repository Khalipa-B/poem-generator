function displayPoem(response) {
  console.log("Poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "f345f9a89aa0t644b29b2bab3o1f7fd0";
  let prompt = `User instruction: Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Sign the poem with SheCodes AI inside a <strong></strong> element at the end of the poem NOT at the beginning. Do not include a title to the poem.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
