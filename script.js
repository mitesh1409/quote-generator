// let apiQuotes = [];

// Get Quotes From API
// async function getQuotes() {
//     const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error) {
//         // Handle an error.
//     }
// }

// function newQuote() {
//     const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
//     console.log('quote', quote);
// }

let randomQuote = null;

async function getRandomQuote() {
    const apiUrl = 'http://localhost:3000/quote/random';

    try {
        const response = await fetch(apiUrl);
        randomQuote = await response.json();
        console.log('randomQuote inside getRandomQuote()', randomQuote);
    } catch (error) {
        console.error(error);
    }
}

getRandomQuote();

console.log('randomQuote outside getRandomQuote()', randomQuote);
