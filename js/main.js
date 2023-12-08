function generateQuote(){
    var quotes = [
        {
            quote: `“You've gotta dance like there's nobody watching,
            Love like you'll never be hurt,
            Sing like there's nobody listening,
            And live like it's heaven on earth.”`,
            author: "William W. Purkey"
        },
        {
            quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
            author: "Dr. Seuss"
        },
        {
            quote: "“You only live once, but if you do it right, once is enough.”",
            author: "Mae West"
        },
        {
            quote: "“Be the change that you wish to see in the world.”",
            author: " Mahatma Gandhi"
        },
        {
            quote: "“In three words I can sum up everything I've learned about life: it goes on.”",
            author: " Robert Frost"
        }

    ]
    var arr = Math.floor(Math.random()*quotes.length)
     var element =  `<p class="fs-1 m-5" id="quotes">`+quotes[arr].quote+`</p>`
    document.getElementById("quotes").innerHTML = element;
     var element1 =  `<p class="fs-1 m-5" id="author">`+quotes[arr].author+`</p>`
    document.getElementById("author").innerHTML = element1;
}