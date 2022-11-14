(function() {
    const quoteText = document.querySelector('.quote');
    const quoteButton = document.querySelector('.quote-button');
    const quoteAuthor = document.querySelector('.author');
    
    async function renderQuote() {
        const response = await fetch('https://favqs.com/api/qotd')
        const currentQuote = await response.json();
            quoteText.innerHTML = '';
            quoteText.innerText = `${currentQuote.quote.body}`
            quoteAuthor.innerText = `${currentQuote.quote.author}`
            console.log('click')
            console.log(currentQuote.quote.body)
    }
    
    quoteButton.addEventListener('click', renderQuote);
})()

