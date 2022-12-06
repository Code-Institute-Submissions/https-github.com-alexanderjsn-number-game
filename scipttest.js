const playerNumber = document.querySelector(".playernumber");
const opponentNumber = document.querySelector(".opponentnumber");
const play = document.querySelector("#play");
let player;
let computer;
let playerscore = 0;
let opponentscore = 0;

play.addEventListener("click", () => {
        player = rollNumber();
        computer = compNumber();
    });

        function rollNumber() {
             playernumber = Math.floor(Math.random() * 6) + 1;
            document.getElementsByClassName("playernumber")[0].innerHTML = playernumber;
        }
        function compNumber(){
             opponentnumber = Math.floor(Math.random() * 6) + 1;
            document.getElementsByClassName("opponentnumber")[0].innerHTML = opponentnumber;
        }
        
            /**
             * Function to update the scores. 
             * When either the opponent or player gets a higher number
             * the score is incremented by 1. 
             */
         if (player > computer) {
                playerscore += 1;
                document.getElementsByClassName("playerscore")[0].innerHTML = playerscore;
        } else if (computer > player) {
                opponentscore += 1;
        }
         if (computer == player) {
               opponentnumber += 1;
               playernumber += 1;
         }
          document.getElementsByClassName("playerscore")[0].innerHTML = playerscore;
            document.getElementsByClassName("opponentscore")[0].innerHTML = opponentscore;
            document.getElementsByClassName("turns")[0].innerHTML = turns;
        

function checkWinner(){
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