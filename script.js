let pscore = 0;
let pnumber = 0;
let oscore = 0;
let onumber = 0;


//makes button roll random number//
function rollNumber() {
    let pnumber = Math.floor(Math.random() * 6) + 1;
    let onumber = Math.floor(Math.random() * 6) + 1;
//updates html//
    document.getElementsByClassName("pnumber")[0].innerHTML = pnumber;
    document.getElementsByClassName("onumber")[0].innerHTML = onumber;
    
//updates scores//
    if(pnumber > onumber) {
        pscore += 1; 
    } else if (onumber > pnumber) {
        oscore += 1;
    } if (onumber == pnumber) {
        onumber += 1; 
        pnumber +=1;
    }
    document.getElementsByClassName("pscore")[0].innerHTML = pscore;
    document.getElementsByClassName("oscore")[0].innerHTML = oscore;


    //alerts the player upon victory/defeat//
    if(pscore === 10) {
        document.getElementsByClassName("result")[0].innerHTML = "Congratulations, you won!"; pscore = 0; oscore = 0;
    } else if(oscore === 10) {
        document.getElementsByClassName("result")[0].innerHTML = "Too bad, you lost!"; pscore = 0; oscore = 0;
    }
}

    //loads reset confirmation question//
function reStart () {
    document.getElementsByClassName("result")[0].innerHTML = "Do you want to restart game?";
    document.getElementsByClassName("yes")[0].innerHTML = "YES";
    document.getElementsByClassName("no")[0].innerHTML = "NO";
    let removePlay = document.getElementById("play").style.display = "none";
    let removeReset = document.getElementById("reset").style.display = "none";
}
    //yes button that resets game//
function reSet () {
    pscore = 0;
    oscore = 0;
    document.getElementsByClassName("pscore")[0].innerHTML = 0;
    document.getElementsByClassName("oscore")[0].innerHTML = 0;
    document.getElementsByClassName("pnumber")[0].innerHTML = 1;
    document.getElementsByClassName("onumber")[0].innerHTML = 1;
    //removes reset alternatives upon clicking yes//
    document.getElementsByClassName("result")[0].innerHTML = "";
    document.getElementsByClassName("yes")[0].innerHTML = "";
    document.getElementsByClassName("no")[0].innerHTML = "";
    document.getElementById("play").style.display = "inline-flex";
    document.getElementById("reset").style.display = "inline-flex";
}
    //no button that closes reset message with no changes to game//
function noSet () {
    document.getElementsByClassName("result")[0].innerHTML = "";
    document.getElementsByClassName("yes")[0].innerHTML = "";
    document.getElementsByClassName("no")[0].innerHTML = "";
}



