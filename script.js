
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
}

//score//
if(pnumber > onumber) {
    pscore += 1;
} else if (onumber > pnumber) {
    oscore += 1;
} if (onumber == pnumber) {
    onumber += 1; pnumber +=1;
}

document.getElementsByClassName("pscore")[0].innerHTML = pscore;
