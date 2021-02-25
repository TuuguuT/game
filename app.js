const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    const refreshBtn = document.querySelector(".new-game button");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
    refreshBtn.addEventListener("click", () => {
      location.reload();
    });
  };

  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    //Computer Options
    const computerOptions = ["чулуу", "даавуу", "хайч"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //Here is where we call compare hands
          compareHands(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);
        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";

        playSound();
      });
    });
  };

  const playSound = () => {
    const sound = document.querySelector(".play-sound");
    sound.play();
  };
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const winner = document.querySelector(".winner");
    console.log(winner);
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "Тэнцлээ";
      return;
    }
    //Check for Rock
    if (playerChoice === "чулуу") {
      if (computerChoice === "хайч") {
        winner.textContent = "Тоглогч яллаа";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Компьютер яллаа";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "даавуу") {
      if (computerChoice === "хайч") {
        winner.textContent = "Компьютер яллаа";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Тоглогч яллаа";
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "хайч") {
      if (computerChoice === "чулуу") {
        winner.textContent = "Компьютер яллаа";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Тоглогч яллаа";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //Is call all the inner function
  startGame();
  playMatch();
};

//start the game function
game();
