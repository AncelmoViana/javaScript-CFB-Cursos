function playRound(userChoice) {
    const choices = ['pedra', 'papel', 'tesoura'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    document.getElementById('user-choice').textContent = userChoice;
    document.getElementById('computer-choice').textContent = computerChoice;
  
    const result = determineWinner(userChoice, computerChoice);
    document.getElementById('result').textContent = result;
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'Empate!';
    } else if (
      (userChoice === 'pedra' && computerChoice === 'tesoura') ||
      (userChoice === 'papel' && computerChoice === 'pedra') ||
      (userChoice === 'tesoura' && computerChoice === 'papel')
    ) {
      return 'Você ganhou!';
    } else {
      return 'Você perdeu!';
    }
  }