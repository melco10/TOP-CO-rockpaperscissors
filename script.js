
const titleScreen = document.getElementById('title-screen');

  const currentYear = new Date().getFullYear();
  let yearCopyright = document.getElementById('currentYear');
  yearCopyright.innerHTML = currentYear.toString();

const starBTN = document.getElementById('start-btn');
const maingame = document.getElementById('main-game');
const winningModal = document.getElementById('winning-modal');
  const enterIcon = document.getElementById('enterICON');
  const whoWin = document.getElementById('whoWin');

  
  
 
let pHealthdis = document.getElementById('p-health');
  let aiHealthdis = document.getElementById('ai-health');


  let winnerDISPLY = document.getElementById('winner-txt');
  let playerChoice = "";
  const option = ['rock', 'paper', 'scissors']
  let randomChoice = '';

  let playerHealth = 5;
  let aiHealth = 5;

  pHealthdis.innerHTML = playerHealth.toString(); // Convert to integer and set to 10
  aiHealthdis.innerHTML = aiHealth.toString(); // Convert to integer and set to 10


const rockli = document.getElementById('rock');
const paperli = document.getElementById('paper');
const scissorli = document.getElementById('scissor');


const aiObject = {
  rock: document.getElementById('ai-rock'),
  paper: document.getElementById('ai-aper'),
  scissors: document.getElementById('ai-scissor')
}


let isClickEnabled = true; // Flag variable to track click status

  

starBTN.addEventListener('click', () => {
  titleScreen.classList.add('fade-out2s');
  setTimeout(() => {
        titleScreen.style.display = 'none'
        setTimeout(() =>{
          maingame.style.display = 'flex';
        }, 1000)
  }, 2000);
});




function rockClick(){
  if(isClickEnabled)
  {
        isClickEnabled = false;

      setTimeout(()=>{
          playerChoice = option[0];
          const aikeys = Object.keys(aiObject);
          const randomizer = Math.floor(Math.random() * aikeys.length);  
          randomChoice = aikeys[randomizer];

          rockli.classList.add('flip-horizontal-bottom');
          if (randomChoice === 'rock'){
            aiObject.rock.classList.add('flip-horizontal-bottom-rev');
          }
          else if(randomChoice === 'paper'){
            aiObject.paper.classList.add('flip-horizontal-bottom-rev');
          }
          else if(randomChoice === 'scissors'){
            aiObject.scissors.classList.add('flip-horizontal-bottom-rev');
          }     
          
          setTimeout(() =>{
                
            if (randomChoice === option[1]) {
              playerHealth -= 1;
              pHealthdis.innerHTML = playerHealth.toString(); // Update the player health display
              winnerDISPLY.innerHTML = `AI WINS through ${randomChoice}`;
            } else if (playerChoice === randomChoice) {
              winnerDISPLY.innerHTML = `DRAW`;
            } else {
              aiHealth -= 1;
              aiHealthdis.innerHTML = aiHealth.toString(); // Update the AI health display
              winnerDISPLY.innerHTML = `Player Wins through ${playerChoice}`;
            }
          
            console.log(playerChoice);
            console.log(randomChoice);

            rockli.classList.add('flip-horizontal-bottom-rev');

              if (randomChoice === 'rock'){
                aiObject.rock.classList.add('flip-horizontal-bottom');
              }
              else if(randomChoice === 'paper'){
                aiObject.paper.classList.add('flip-horizontal-bottom');
              }
              else if(randomChoice === 'scissors'){
                aiObject.scissors.classList.add('flip-horizontal-bottom');
              }

            setTimeout(()=>{
              rockli.classList.remove('flip-horizontal-bottom-rev');
              rockli.classList.remove('flip-horizontal-bottom');

              if (randomChoice === 'rock'){
                aiObject.rock.classList.remove('flip-horizontal-bottom-rev');
              }
              else if(randomChoice === 'paper'){
                aiObject.paper.classList.remove('flip-horizontal-bottom-rev');
              }
              else if(randomChoice === 'scissors'){
                aiObject.scissors.classList.remove('flip-horizontal-bottom-rev');
              }
    
              isClickEnabled = true;
              winningState(); // Call winningState() before the return statement
              return;
            },1000)
            
          },3000)

          
          
      },1000)
      
  }
  else
  {
    return;
  }
 
}

function paperClick(){

  if(isClickEnabled)
  {
        isClickEnabled = false;

      setTimeout(()=>{
          playerChoice = option[1];
          const aikeys = Object.keys(aiObject);
          const randomizer = Math.floor(Math.random() * aikeys.length);  
          randomChoice = aikeys[randomizer];

          paperli.classList.add('flip-horizontal-bottom');
          if (randomChoice === 'rock'){
            aiObject.rock.classList.add('flip-horizontal-bottom-rev');
          }
          else if(randomChoice === 'paper'){
            aiObject.paper.classList.add('flip-horizontal-bottom-rev');
          }
          else if(randomChoice === 'scissors'){
            aiObject.scissors.classList.add('flip-horizontal-bottom-rev');
          }     
          
          setTimeout(() =>{
                
            if (randomChoice === option[2]) {
              playerHealth -= 1;
              pHealthdis.innerHTML = playerHealth.toString(); // Update the player health display
              winnerDISPLY.innerHTML = `AI WINS through ${randomChoice}`;
            } else if (playerChoice === randomChoice) {
              winnerDISPLY.innerHTML = `DRAW`;
            } else {
              aiHealth -= 1;
              aiHealthdis.innerHTML = aiHealth.toString(); // Update the AI health display
              winnerDISPLY.innerHTML = `Player Wins through ${playerChoice}`;
            }
          
            console.log(playerChoice);
            console.log(randomChoice);

            paperli.classList.add('flip-horizontal-bottom-rev');

              if (randomChoice === 'rock'){
                aiObject.rock.classList.add('flip-horizontal-bottom');
              }
              else if(randomChoice === 'paper'){
                aiObject.paper.classList.add('flip-horizontal-bottom');
              }
              else if(randomChoice === 'scissors'){
                aiObject.scissors.classList.add('flip-horizontal-bottom');
              }

            setTimeout(()=>{
              paperli.classList.remove('flip-horizontal-bottom-rev');
              paperli.classList.remove('flip-horizontal-bottom');

              if (randomChoice === 'rock'){
                aiObject.rock.classList.remove('flip-horizontal-bottom-rev');
              }
              else if(randomChoice === 'paper'){
                aiObject.paper.classList.remove('flip-horizontal-bottom-rev');
              }
              else if(randomChoice === 'scissors'){
                aiObject.scissors.classList.remove('flip-horizontal-bottom-rev');
              }
    
              isClickEnabled = true;
              winningState(); // Call winningState() before the return statement
              return;
            },1000)
            
          },3000)

          
          
      },1000)
  }
  else
  {
    return;
  }
 

}

function scissorClick(){

  if(isClickEnabled)
  {
        isClickEnabled = false;

      setTimeout(()=>{
          playerChoice = option[2];
          const aikeys = Object.keys(aiObject);
          const randomizer = Math.floor(Math.random() * aikeys.length);  
          randomChoice = aikeys[randomizer];

          scissorli.classList.add('flip-horizontal-bottom');
          if (randomChoice === 'rock'){
            aiObject.rock.classList.add('flip-horizontal-bottom-rev');
          }
          else if(randomChoice === 'paper'){
            aiObject.paper.classList.add('flip-horizontal-bottom-rev');
          }
          else if(randomChoice === 'scissors'){
            aiObject.scissors.classList.add('flip-horizontal-bottom-rev');
          }     
          
          setTimeout(() =>{
                
            if (randomChoice === option[0]) {
              playerHealth -= 1;
              pHealthdis.innerHTML = playerHealth.toString(); // Update the player health display
              winnerDISPLY.innerHTML = `AI WINS through ${randomChoice}`;
            } else if (playerChoice === randomChoice) {
              winnerDISPLY.innerHTML = `DRAW`;
            } else {
              aiHealth -= 1;
              aiHealthdis.innerHTML = aiHealth.toString(); // Update the AI health display
              winnerDISPLY.innerHTML = `Player Wins through ${playerChoice}`;
            }
          
            console.log(playerChoice);
            console.log(randomChoice);

            scissorli.classList.add('flip-horizontal-bottom-rev');

              if (randomChoice === 'rock'){
                aiObject.rock.classList.add('flip-horizontal-bottom');
              }
              else if(randomChoice === 'paper'){
                aiObject.paper.classList.add('flip-horizontal-bottom');
              }
              else if(randomChoice === 'scissors'){
                aiObject.scissors.classList.add('flip-horizontal-bottom');
              }

            setTimeout(()=>{
              scissorli.classList.remove('flip-horizontal-bottom-rev');
              scissorli.classList.remove('flip-horizontal-bottom');

              if (randomChoice === 'rock'){
                aiObject.rock.classList.remove('flip-horizontal-bottom-rev');
              }
              else if(randomChoice === 'paper'){
                aiObject.paper.classList.remove('flip-horizontal-bottom-rev');
              }
              else if(randomChoice === 'scissors'){
                aiObject.scissors.classList.remove('flip-horizontal-bottom-rev');
              }
    
              isClickEnabled = true;
              winningState(); // Call winningState() before the return statement
              return;
            },1000)
            
          },3000)

          
          
      },1000)
  }
  else
  {
    return;
  }
  
  
}

function resetVAR(){
  playerHealth = 5;
  aiHealth = 5;
  pHealthdis.innerHTML = playerHealth.toString(); // Convert to integer and set to 10
  aiHealthdis.innerHTML = aiHealth.toString(); // Convert to integer and set to 10
  winnerDISPLY.innerHTML = "";
  playerChoice = "";
  randomChoice = "";
  isClickEnabled = true; // Flag variable to track click status

}

function retry() {
  winningModal.classList.add('scale-out-center');

  setTimeout(() => {
    resetVAR();
    winningModal.style.display = 'none';
    winningModal.classList.remove('scale-out-center');
    isClickEnabled = true;
  }, 1000);
}

function mainMenu() {
  winningModal.classList.add('scale-out-center');
  maingame.classList.add('scale-out-center');

  setTimeout(() => {
    resetVAR();
    titleScreen.classList.remove('fade-out2s');
    maingame.style.display = 'none';
    winningModal.style.display = 'none';
    winningModal.classList.remove('scale-out-center');
    maingame.classList.remove('scale-out-center');
    titleScreen.style.display = 'flex';
    isClickEnabled = true;
  }, 1000);
}



function winningState(){

  if(playerHealth === 0){
    isClickEnabled = false;
    enterIcon.classList.add('fa-solid');
    enterIcon.classList.add('fa-robot');
    whoWin.innerHTML = 'AI WINS';
    winningModal.style.display = 'block';

  }
  else if(aiHealth === 0){
    isClickEnabled = false;
    enterIcon.classList.add('fa-solid');
    enterIcon.classList.add('fa-person-rays');
    whoWin.innerHTML = 'PLAYER WINS';
    winningModal.style.display = 'block';
  }

}
