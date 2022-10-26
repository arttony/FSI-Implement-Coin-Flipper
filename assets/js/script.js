// TODO: Declare any global variables we need
let headsFlips = 0
let headsPercent =  '0%'
let tailsFlips = 0
let tailsPercent = '0%'
let totalFlips = 0

document.addEventListener('DOMContentLoaded', function () {

    // TODO: Add event listener and handler for flip and clear buttons
    document.querySelector('#flip').addEventListener('click', function(){
        if (Math.random() > .49999999){
            headsFlips++
            totalFlips++
            document.querySelector("#penny-image").src = "assets/images/penny-heads.jpg";
            document.querySelector('#message').innerHTML = "You Flipped Heads!"
          
            headsPercent = Math.round(headsFlips/totalFlips * 100) + '%'
            tailsPercent = Math.round(tailsFlips / totalFlips * 100) + '%'
            document.querySelector('#heads').innerHTML = headsFlips
            document.querySelector('#heads-percent').innerHTML = headsPercent
            document.querySelector('#tails').innertHTML = tailsFlips
            document.querySelector('#tails-percent').innerHTML = tailsPercent
          
        } else{
            tailsFlips++
            totalFlips++
            document.querySelector("#penny-image").src = "assets/images/penny-tails.jpg";
            document.querySelector("#message").innerHTML = "You Flipped Tails!";
            headsPercent = Math.round(headsFlips / totalFlips * 100) + '%'
            tailsPercent = Math.round(tailsFlips/totalFlips * 100) + '%'
            document.querySelector("#heads").innerHTML = headsFlips;
            document.querySelector("#heads-percent").innerHTML = headsPercent;
            document.querySelector("#tails").innerHTML = tailsFlips;
            document.querySelector("#tails-percent").innerHTML = tailsPercent;
        }    
    })

    // Clear Button Click Handler   
    document.querySelector('#clear').addEventListener('click', function () {
        // TODO: Reset global variables to 0
        headsFlips = 0
        headsPercent = '0%'
        tailsFlips = 0
        tailsPercent = '0%'
        totalFlips = 0
        document.querySelector("#penny-image").src = "assets/images/penny-heads.jpg";
        document.querySelector("#heads").innerHTML = headsFlips;
        document.querySelector("#heads-percent").innerHTML = headsPercent;
        document.querySelector("#tails").innerHTML = tailsFlips;
        document.querySelector("#tails-percent").innerHTML = tailsPercent;
        // TODO: Update the scoreboard (same logic as in flip button click handler)
        document.querySelector("#message").innerHTML = "Let's Get Flipping!";
    });
})