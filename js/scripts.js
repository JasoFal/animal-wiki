window.onload = function() {
  let form = document.querySelector(`form`);
  form.onsubmit = function(event) {
    event.preventDefault();
    let turtleWiki = document.getElementById(`turtle`);
    turtleWiki.setAttribute(`class`, `hidden`)
    let snakeWiki = document.getElementById(`snake`);
    snakeWiki.setAttribute(`class`, `hidden`);
    let friendDave = document.getElementById(`dave`);
    friendDave.setAttribute(`class`, `hidden`);
    let notAnimal = document.getElementById(`notAnAnimal`);
    notAnimal.setAttribute(`class`, `hidden`);
    let animalInput = document.querySelector(`input#animal`).value;

    if (animalInput === `turtle`) {
      turtleWiki.removeAttribute(`class`);
    } else if (animalInput === `snake`) {
      snakeWiki.removeAttribute(`class`);
    } else if (animalInput === `dave`)  {
      friendDave.removeAttribute(`class`);
    } else {
      notAnimal.removeAttribute(`class`);
    }
  };
};