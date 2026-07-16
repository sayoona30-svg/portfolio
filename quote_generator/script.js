const API_URL = 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=fr';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'eb2f1b674emsh0357b413f75930ep199a1djsn16f08c89e2ee',
		'x-rapidapi-host': 'quotes15.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

let quoteTextElement= document.getElementById("quote");
let quoteAuthorElement= document.getElementById("author");
let generateBtn= document.getElementById("generate-btn");

const getQuote = async function() {
    try {
        const response = await fetch(API_URL, options);
        const data = await response.json();
        displayQuote(data);
        console.log(data);
    } catch (error) {
        console.error("Erreur lors de la recuperation d'une citation.", error)
    }
};

generateBtn.addEventListener("click", getQuote)
function displayQuote(data) {
    const{content: quote,  originator:{ name: author }, } = data;

    quoteTextElement.textContent = quote || "Aucune citation trouve";
    quoteAuthorElement.textContent = author || "Auteur inconue";


}