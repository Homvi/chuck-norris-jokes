"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const nextBtn = document.querySelector("#next");
//save url into a variable
const jokeUrl = "https://api.chucknorris.io/jokes/random";
//fetch joke
function getJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(jokeUrl);
        const joke = yield response.json();
        return joke;
    });
}
//display joke
function displayJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const joke = yield getJoke();
        const jokeElement = document.querySelector("#joke");
        if (jokeElement) {
            jokeElement.innerHTML = joke.value;
        }
    });
}
//display joke on click of next button and on page load
document.addEventListener("DOMContentLoaded", displayJoke);
if (nextBtn) {
    nextBtn.addEventListener("click", displayJoke);
}
