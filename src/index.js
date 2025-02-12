function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "You go along from day to day with summer all around you.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
