'use strict';
// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent='🙌 Correct Number'
// console.log(document.querySelector('.message').textContent)
// document.querySelector('.number').textContent=10;
// document.querySelector('.guess').value=12;
// document.querySelector('.label-score').textContent='rn score'
// console.log(document.querySelector('.guess').value=12)
// const secretNumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector('.number').textContent = secretNumber;
// let score = 20;
// document.querySelector('.check').addEventListener('click', function () {
//   const njakk = Number(document.querySelector('.guess').value);
//   console.log(njakk, typeof njakk);
//   if (!njakk) {
//     document.querySelector('.message').textContent = ' Not a Number';
//     console.log(`${njakk} is not an number `);
//   } else if (njakk === secretNumber) {
//     document.querySelector('.message').textContent = '🙌 Correct Number';
//   } else if (njakk > secretNumber) {
//     if (score>0){
//         document.querySelector('.score').textContent = score;
//       score--
//       {
//         document.querySelector('.message').textContent = 'Too High';
//       }
//       else document.querySelector('.message').textContent = 'you lost the game';
//     }}
//      else if (njakk < secretNumber) {
//     if (score--) {
//       document.querySelector('.score').textContent = score;
//     }
//     // if (score < 1) {
//     //   document.querySelector('.message').textContent = '🙌 You Failed';
//     // }
//     {
//       document.querySelector('.message').textContent = '🙌 Too Low';
//     }
//   }
// });
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let hightscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const njakk = Number(document.querySelector('.guess').value);
  console.log(njakk, typeof njakk);

  //No Njakkal
  if (!njakk) {
    // document.querySelector('.message').textContent = ' Not a Number';
    displayMessage('Not a Number');
  }

  // If Njakk is corect
  else if (njakk === secretNumber) {
    // document.querySelector('.message').textContent = ' correct Number '
    displayMessage('correct number ');
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '30rem ';
    document.querySelector('.number').textContent = secretNumber;
    if (score > hightscore) {
      hightscore = score;
      document.querySelector('.highscore').textContent = hightscore;
    }
  }

  // if njakkal is greater than the secret number/ when njakkal is wrong
  else if (njakk !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = njakk > secretNumber ? ' Too High' : 'Too low'
      // score--;
      displayMessage(njakk > secretNumber ? ' Too High' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = ' You Loose the Game ';
      displayMessage('you loose the game ');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//   // if njakkal is greater than the secret number
//   else if (njakk < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = ' Too low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = ' You Loose the Game ';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// restoring the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start Guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
