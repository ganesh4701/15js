function generate(){
    var quotes = {
         "- Deepak Chopra" : "Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions.",
         "- C.S. Lewis" : "I was not born to be free---I was born to adore and obey.",
         "- John Galsworthy" : "Life calls the tune, we dance.",
         "- J.D. Stroube, Caged in Darkness" : "All that is left to bring you pain, are the memories. If you face those, you’ll be free. You can’t spend the rest of your life hiding from yourself; always afraid that your memories will incapacitate you, and they will if you continue to bury them."
    };

    var authors = Object.keys(quotes);
    
    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];
    console.log(quote);
    console.log(author)

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
} 