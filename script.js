
const quotes = [
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Great things are done by a series of small things brought together.",
        author: "Vincent van Gogh"
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        text: "Success is the sum of small efforts repeated day in and day out.",
        author: "Robert Collier"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Your limitation is only your imagination.",
        author: "Unknown"
    },
    {
        text: "Stay focused and never give up.",
        author: "Unknown"
    },
    {
        text: "Every day is a new opportunity to learn.",
        author: "Unknown"
    }
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const copyQuoteBtn = document.getElementById("copy-quote");
const message = document.getElementById("message");

let currentQuote = null;

function generateQuote() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (quotes.length > 1 && quotes[randomIndex] === currentQuote);

    currentQuote = quotes[randomIndex];

    quoteElement.textContent = currentQuote.text;
    authorElement.textContent = "— " + currentQuote.author;

    message.textContent = "";
}

async function copyQuote() {
    if (!currentQuote) {
        message.textContent = "Please generate a quote first!";
        return;
    }

    const textToCopy =
        `"${currentQuote.text}" — ${currentQuote.author}`;

    try {
        await navigator.clipboard.writeText(textToCopy);
        message.textContent = "Quote copied successfully!";
    } catch (error) {
        message.textContent = "Copy is unavailable in this browser.";
    }
}

newQuoteBtn.addEventListener("click", generateQuote);
copyQuoteBtn.addEventListener("click", copyQuote);

generateQuote();
