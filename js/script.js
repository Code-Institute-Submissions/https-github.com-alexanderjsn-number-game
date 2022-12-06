/*jshint esversion: 6*/
const play = document.querySelector("#play");
let playerscore = 0;
let opponentscore = 0;

/**
 * The main feature of the game. Clicking the button "play game"
 * calls this function to generate two random numbers 
 * and update the HTML to display the two generated numbers 
 */


play.addEventListener("click", () => {
    rollNumber();
    compNumber();
    checkScore();
});

function rollNumber() {
    playernumber = Math.floor(Math.random() * 6) + 1;
    document.getElementsByClassName("playernumber")[0].innerHTML = playernumber;
}

function compNumber() {
    opponentnumber = Math.floor(Math.random() * 6) + 1;
    document.getElementsByClassName("opponentnumber")[0].innerHTML = opponentnumber;
}
/**
 * Function to update the scores. 
 * When either the opponent or player gets a higher number
 * the score is incremented by 1. 
 */
function checkScore() {
    if (playernumber > opponentnumber) {
        playerscore += 1;
    } else if (opponentnumber > playernumber) {
        opponentscore += 1;
    }
    if (opponentnumber == playernumber) {
        opponentnumber += 1;
        playernumber += 1;
    }
    document.getElementsByClassName("playerscore")[0].innerHTML = playerscore;
    document.getElementsByClassName("opponentscore")[0].innerHTML = opponentscore;


    /**
     * Function that informs the player whether they lost or won.
     * When the player or opponent reaches 10 points to their scoreboard
     * the DOM is updated with a victory/defeat message. 
     */
    if (playerscore === 10) {
        document.getElementsByClassName("result")[0].innerHTML = "Congratulations, you won!";
        playerscore = 0;
        opponentscore = 0;
    } else if (opponentscore === 10) {
        document.getElementsByClassName("result")[0].innerHTML = "Too bad, you lost!";
        playerscore = 0;
        opponentscore = 0;
    }
}


/**
 * Clicking the button "reset game" runs this function 
 * and gives the player two options. To reset game or return. 
 */
function resetOptions() {
    document.getElementsByClassName("result")[0].innerHTML = "Do you want to restart game?";
    document.getElementsByClassName("yes")[0].innerHTML = "YES";
    document.getElementsByClassName("no")[0].innerHTML = "NO";
    //removes "play" and "reset" buttons//
    let removePlay = document.getElementById("play").style.display = "none";
    let removeReset = document.getElementById("reset").style.display = "none";
}
//yes button that resets game//
function reset() {
    playerscore = 0;
    opponentscore = 0;
    document.getElementsByClassName("playerscore")[0].innerHTML = 0;
    document.getElementsByClassName("opponentscore")[0].innerHTML = 0;
    document.getElementsByClassName("playernumber")[0].innerHTML = 1;
    document.getElementsByClassName("opponentnumber")[0].innerHTML = 1;
    //removes reset alternatives upon clicking yes//
    document.getElementsByClassName("result")[0].innerHTML = "";
    document.getElementsByClassName("yes")[0].innerHTML = "";
    document.getElementsByClassName("no")[0].innerHTML = "";
    //adds "play" and "reset" buttons//
    document.getElementById("play").style.display = "inline-block";
    document.getElementById("reset").style.display = "inline-block";
}
//no button that closes reset message with no changes to game//
function dontReset() {
    document.getElementsByClassName("result")[0].innerHTML = "";
    document.getElementsByClassName("yes")[0].innerHTML = "";
    document.getElementsByClassName("no")[0].innerHTML = "";
    //adds "play" and "reset" buttons//
    document.getElementById("play").style.display = "inline-block";
    document.getElementById("reset").style.display = "inline-block";
}