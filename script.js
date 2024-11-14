let score={
  Wins:0,
  Losses:0,
  Ties:0
}
 score = JSON.parse(localStorage.getItem('score')) || { Wins: 0, losses: 0, Ties: 0 };
(document.querySelector(".js-score").innerHTML=`Winss: ${score.Wins} losses: ${score.Losses} : Ties: ${score.Ties}`);
function Picked(yourPick){
  const Options=['rock', 'paper', 'scissors'];
  const computerPick=Options[Math.floor(Math.random() * Options.length)]
  if(yourPick===computerPick){
    score.Ties+=1;
    (document.querySelector('.js-choice').innerHTML=`You picked: <img class="move-icon" src="/images/${yourPick}-emoji.png" alt=""> , Computer Picked: <img class="move-icon" src="/images/${computerPick}-emoji.png" alt="">  , Its Ties`);
  }
  else if(computerPick === 'rock' && yourPick === 'scissors' || 
    computerPick === 'scissors' && yourPick === 'paper' || 
    computerPick === 'paper' && yourPick === 'rock'){
    // you Losses
    (document.querySelector('.js-choice').innerHTML=`You picked: <img class="move-icon" src="/images/${yourPick}-emoji.png" alt=""> , Computer Picked: <img class="move-icon" src="/images/${computerPick}-emoji.png" alt="">  , you Losses`);
    score.Losses+=1;
  }
  else {
    // you Wins
    (document.querySelector('.js-choice').innerHTML=`You picked: <img class="move-icon" src="/images/${yourPick}-emoji.png" alt=""> , Computer Picked: <img class="move-icon" src="/images/${computerPick}-emoji.png" alt="">  , you Wins`);
    score.Wins+=1;
  }
  (document.querySelector(".js-score").innerHTML=`Wins: ${score.Wins} Losses: ${score.Losses} : Ties: ${score.Ties}`);
  localStorage.setItem('score',JSON.stringify(score));
};

function resetScore(){
  score.Wins=0;
  score.Losses=0;
  score.Ties=0;
  (document.querySelector(".js-score").innerHTML=`Wins: ${score.Wins} Losses: ${score.Losses} : Ties: ${score.Ties}`);
  (document.querySelector('.js-choice').innerHTML=``);
  localStorage.setItem('score',JSON.stringify(score));
}