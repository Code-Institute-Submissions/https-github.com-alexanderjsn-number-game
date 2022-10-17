let playerscore = 0;
let playernumber = 0;
let opponentscore = 0;
let opponentnumber = 0;


//makes button roll random number//
function rollNumber() {
    let playernumber = Math.floor(Math.random() * 6) + 1;
    let opponentnumber = Math.floor(Math.random() * 6) + 1;
//updates html//
    document.getElementsByClassName("playernumber")[0].innerHTML = playernumber;
    document.getElementsByClassName("opponentnumber")[0].innerHTML = opponentnumber;
    
//updates scores//
    if(playernumber > opponentnumber) {
        playerscore += 1; 
    } else if (opponentnumber > playernumber) {
        opponentscore += 1;
    } if (opponentnumber == playernumber) {
        opponentnumber += 1; 
        playernumber +=1;
    }
    document.getElementsByClassName("playerscore")[0].innerHTML = playerscore;
    document.getElementsByClassName("opponentscore")[0].innerHTML = opponentscore;


    //alerts the player upon victory/defeat//
    if(playerscore === 10) {
        document.getElementsByClassName("result")[0].innerHTML = "Congratulations, you won!"; playerscore = 0; opponentscore = 0;
    } else if(opponentscore === 10) {
        document.getElementsByClassName("result")[0].innerHTML = "Too bad, you lost!"; playerscore = 0; opponentscore = 0;
    }
}

    //loads reset confirmation question//
function resetOptions () {
    document.getElementsByClassName("result")[0].innerHTML = "Do you want to restart game?";
    document.getElementsByClassName("yes")[0].innerHTML = "YES";
    document.getElementsByClassName("no")[0].innerHTML = "NO";
    //removes "play" and "reset" buttons//
    let removePlay = document.getElementById("play").style.display = "none";
    let removeReset = document.getElementById("reset").style.display = "none";
}
    //yes button that resets game//
function reset () {
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
    document.getElementById("play").style.display = "inline-flex";
    document.getElementById("reset").style.display = "inline-flex";
}
    //no button that closes reset message with no changes to game//
function dontReset () {
    document.getElementsByClassName("result")[0].innerHTML = "";
    document.getElementsByClassName("yes")[0].innerHTML = "";
    document.getElementsByClassName("no")[0].innerHTML = "";
        //adds "play" and "reset" buttons//
    document.getElementById("play").style.display = "inline-flex";
    document.getElementById("reset").style.display = "inline-flex";
}



