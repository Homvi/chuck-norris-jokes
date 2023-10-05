const nextBtn = document.querySelector("#next");

//save url into a variable
const jokeUrl = "https://api.chucknorris.io/jokes/random";

//fetch joke
async function getJoke() {
  const response = await fetch(jokeUrl);
  const joke = await response.json();
  return joke;
}

//display joke
async function displayJoke() {
  const joke = await getJoke();
  const jokeElement = document.querySelector("#joke");
  jokeElement.innerHTML = joke.value;
}

//display joke on click of next button
nextBtn.addEventListener("click", displayJoke);
