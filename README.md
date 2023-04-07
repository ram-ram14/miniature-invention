# Project0 - Tic-Tac-Toe

## Project Overview

Building a Tic-Tac-Toe game which will render in the browser. 

The purpose of the exercise is to build a web application from scratch with 'DRY' principles. 

The aim of the game is for either player to get three in a row. 

## Motivation

Tic-Tac-Toe is a really fun game that everyone really recognises and it's a common rite of passage for developers when learning how to code. 

### Tech/frameworks Used

Built with 

* HTML
* CSS
* JavaScript
* jQuery
* Animate.css

### Link to Game

This is [a link to my Tic-Tac-Toe Game](https://ram-ram14.github.io/miniature-invention/).

### Features

One thing that makes my project stand out would be the use of different markers through the 😼 and 🐶 emojis as opposed to the conventional 'X' and 'O'. 

Additionally, the 3x3 grid is slightly different: I added a border around it because I thought it would look nicer as a cube. 

### Approach Taken

I initially started by writing a plan of how I would create this game. I realised that the game-board is split into 9 squares, which game me an idea about how the logic would work. I proceeded to declare the variables, added the business logic and then add event listeners to the 'square class'. Eventually, I noticed that I didn't have a way to reset the game, so I had to go back and add a 'restart-button' to my HTML and a corresponding event listener. I added CSS periodically, but I now know that it would be best to focus on the core functionality first and add asthetics at the very end. 

### Difficulties encountered when building this

Initially, I mistakenly didn't realise that the 3x3 grid would have 9 squares. I only anticipated needing 6 and I had trouble understanding how to make the grid work. 

I had trouble positioning the restart-game button - currently positioned on the left, but it needs to be more centered (resolved). 

I had trouble updating the display of the board with the players' choices. 

Bug found - when the player's play the game, it displays 'player 1' on one of the boxes. As soon as the player makes their move, it displays their marker, but box moves around (resolved).

### How to use?

Player 1 is defaulted to 😼 and player 2 to 🐶. 
Each player, by turn, selects a square from the grid. 
The aim is to get 3 in a row either diagonally, horizontally or vertically. 

### Credits & Acknowledgements 
A special thanks to CJ, Mark and Tina for helping me flesh this out and iron out any bugs that I came across whilst building this. 
