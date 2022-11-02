let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

function getQuote() {
    btn.innerText = "Loading...";
    fetch(url)
        .then((data) => data.json())
        .then((item) => {
            quote.innerText = item.content;
            author.innerText = item.author;
            btn.innerText = "New quote";
        });
}

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);