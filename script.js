// no API key required for this API
const API_URL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?'

//////////my vars/////////////
const quoteText = document.querySelector(".quote-text")
const quoteAuthor = document.querySelector(".quote-author")
/////////////////////////////



function getQuote() {
    $.ajax({
        url: API_URL,
        dataType: 'json'
    })
    .done(function (response) {


        console.log(response);
        console.log(response.quoteText);
        console.log(response.quoteAuthor);
        
         quoteText.textContent = response.quoteText;
         quoteAuthor.textContent = response.quoteAuthor;
         
         
    })
}


///Program///////
getQuote() //first load
document.querySelector(".button").addEventListener("click",function(){         //change everything when button clicked

    getQuote()

});







