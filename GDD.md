# Game Design Document

# Description

## Microverse JavaScript Module Capstone Project.

> A patrol officer on duty is expected to shoot enemy ships that trespass his country's coastal boundary. Also, the patrol officer is keen to not get hit by enemy bullets or the enemy's body. The Patrol officer gains points by shooting at enemy ships.

## Objectives

- Create effective JavaScript code, that solves the problem
- Use Webpack
- Use ES6+
- Encapsulate JS code in modules
- Deal with async code
- Use DOM (read/write data) listen to events
- Test JS code
- Send and receive data from a back-end endpoint
- Use JSON format
- Ability to communicate information effectively to non-technical people
- Shows a desire to take personal responsibility to complete tasks and solve problems
- Sets high standards of performance for oneself
- Ability to translate business requirements into software solutions
- Ability to multitask and effectively manage time and prioritization
- Strong English written communication
- Deploy apps (Heroku, Netlify)
- Use linters (code standards)
- Maintain professional Github repos

## Scenes

## Preload Scene

- This is the first thing to do when the game boots

- Load all game assets(images, sounds, and other related assets)

## Credits Scene

- Design my name to move on screen from bottom to top and exit scene after a delay

## Options Scene

- Give the user the ability to play the game with sound or not

## Player Input Scene

- Display this scene only once

- Collect player name in order to save score after each game session

- Save name in the local storage

## Player scores Scene

- Make a request to leader board API to get all registered scores for the game

- Display the top 7 scores

## Title Scene

- Display Main menu(with clickable events to navigate about the game

## Game Scene

- Create Player and give it the ability to shoot and move around the screen

- Create enemies and give them shooting abilities

- Give enemies score values

- Remove enemies and bullets when they move out of the screen in order to free memory while playing game

- Save game score in the local storage

## Game Over Scene

- Display this scene after each game

- Show game score and update player high score if a new high score is made

## Daily Objectives

### DAY 1

- Learn about video games and the Phaser library

### DAY 2

- Follow the tutorial to practice working with Phaser
- Set up the repo and install webpack, Phaser, babel, loaders, and all related dependencies.

### DAY 3

- Gather all game assets
- Set up your game
- Boot, Preload, Title, and Game scenes
- Make your Player move

### DAY 4

- Spawn enemies
- Teach your player and enemies to shoot

### DAY 5

- Implement scores system
- Add Game over and score scenes
