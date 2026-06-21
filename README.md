# Simon Game

A simple Simon Game built using **HTML, CSS, and JavaScript**. The game challenges players to memorize and repeat an increasingly long sequence of colors.

## 🎮 How to Play

1. Press any key to start the game.
2. A random color button will flash.
3. Click the flashed color.
4. In each new level, an additional color is added to the sequence.
5. Repeat the entire sequence correctly to advance.
6. The game ends when an incorrect color is selected.
7. Your score and highest score are displayed when the game is over.

## ✨ Features

* Random sequence generation
* Level progression system
* Visual button animations
* Game over indication
* High score tracking during the session
* Responsive and interactive gameplay

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

## 📂 Project Structure

```
Simon-Game/
│
├── index.html
├── style.css
├── app.js
└── README.md
```

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/simon-game.git
```

2. Navigate to the project folder:

```bash
cd simon-game
```

3. Open `index.html` in your browser.

No additional dependencies or installation steps are required.

## 📖 Game Logic

* The game stores the generated sequence in `gameSeq`.
* User selections are stored in `userSeq`.
* After every successful round, a new random color is added to the sequence.
* The user's input is checked against the generated sequence.
* If a mismatch occurs, the game resets and displays the final score.


## 👨‍💻 Author

Developed as a JavaScript practice project to strengthen understanding of:

* DOM Manipulation
* Event Handling
* Arrays and Loops
* Functions
* Game State Management
* Asynchronous JavaScript (`setTimeout`)

## 📜 License

This project is open-source and available for learning and educational purposes.
