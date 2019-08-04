import {CHOICES} from './constants';

const randomComputerChoise  = () => 
  CHOICES[Math.floor(Math.random() * CHOICES.length)];

const getRoundOutcome = (userChoice, computerChoice) => {
    let result;
  
    if (userChoice ==='rock'){
      if(computerChoice === 'rock')
        result = 'Tie game!';
      else if (computerChoice === 'paper')
        result = 'Defeat';
      else
        result = 'Victory!';
    }else if (userChoice === 'paper'){
      if(computerChoice === 'paper')
        result = 'Tie game!';
      else if (computerChoice === 'scissors')
        result = 'Defeat';
      else
        result = 'Victory!';
    }else if (userChoice === 'scissors'){
      if(computerChoice === 'scissors')
        result = 'Tie game!';
      else if (computerChoice === 'rock')
        result = 'Defeat';
      else
        result = 'Victory!';
    }
    return result;
  };
  const countGame = (result, countPlay, countWin, countLoser, countTie) => {
    if(result === 'Victory!'){
      countWin = countWin + 1 ;
    }else if (result === 'Defeat')
      countLoser = countLoser + 1;
      else countTie++;
    countPlay = countPlay + 1;
    return [ countPlay, countWin, countLoser, countTie] ;     
};
export {
    randomComputerChoise,
    getRoundOutcome,
    countGame
}