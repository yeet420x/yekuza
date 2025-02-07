// Array of AI-generated Yakuza x Kanye quotes
const quotes = [
    "In this family, we don't chase dreams, we manifest them. - Yekuza Ye",
    "Honor is not given, it's earned through the beats we create. - Patriarch West",
    "The streets of Shibuya whisper my name, but my soul screams art. - Yekuza Ye",
    "My dragon spirit flows through these fashion streets. - Patriarch West",
    "Respect the family, respect the vision, respect the genius. - Yekuza Ye",
    "Respect is the currency of our world. You pay it, or you pay the price.",
    "In the shadows, we find our true strength. Silence speaks louder than words.",
    "The blade of trust is sharp; handle it with care, or it'll cut you deep.",
    "Every step in the night is a dance with danger. Keep your rhythm, or fall.",
    "Loyalty is not just a word; it's the ink in our blood, the code we live by.",
    "Honor isn't given, it's earned through actions, not promises.",
    "In our world, silence is an answer. Listen to what's not said.",
    "The path of the Yekuza is not chosen; it chooses you.",
    "Honor? That's my legacy, my art. I paint it with every move I make in this underworld.",
    "I didn't choose this life, it chose me – like how I choose my beats.",
    "In the darkness of the night, I shine like I do on stage - untouchable, unforgettable.",
    "I'm not just a Yakuza; I'm a visionary, turning every alley into my runway."
];

// Function to display random quote
function displayRandomQuote() {
    const quoteElement = document.getElementById('quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

// Function to copy contract address
function copyAddress() {
    const contractAddress = document.getElementById('contractAddress');
    contractAddress.select();
    document.execCommand('copy');
    
    const button = document.querySelector('.copy-container button');
    button.textContent = 'Copied!';
    setTimeout(() => {
        button.textContent = 'Copy';
    }, 2000);
}

// Display initial quote and change every 10 seconds
displayRandomQuote();
setInterval(displayRandomQuote, 10000); 