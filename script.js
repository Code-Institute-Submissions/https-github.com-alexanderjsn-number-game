
let pscore = 0;
let pnumber = 0;
let oscore = 0;
let onumber = 0;

function rollNumber() {
    let pnumber = Math.floor(Math.random() * 6) + 1;
    let onumber = Math.floor(Math.random() * 6) + 1;

    document.getElementsByClassName("pnumber")[0].innerHTML = pnumber;
    document.getElementsByClassName("onumber")[0].innerHTML = onumber;
}