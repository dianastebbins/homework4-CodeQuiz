# homework4-CodeQuiz

## Project Description
A timed multiple choice quiz that allows user to save a high score

## General Notes
### Navbar
```
If I have include collapsible as a class, I lose justify-content-between spacing. I know I want justify-content-between, I think i can live without the collapsible hamburger because there are only two items on the navbar anyway and only 1 is a link. Hamburger would be extra clicks for user with no real gain as compared to the two items just stacking.
```
### User Inputs
### Password Generation
### Problems

## Table of Contents
* [Project Details](#project-details)
* [Requirements](#requirements)
* [Page Design Notes](#page-design-notes)
* [Pseudocode](#pseudocode)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Badges](#badges)
* [Contributing](#contributing)
* [Tests](#tests)

## Project Details

## Requirements 
    (copied from Homework instructional README.md, for reference)

### Directions
Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

## Page Design Notes
```
Top left corner, a View High Scores link
    visible during play
-    not visible during High Score screen itself
-Top right corner, a time
-    visible during play
-    not visible during High Score screen
Intro Page
    Title (Coding Quiz Challenge)
    Instruction ()
    Button to start (Start Quiz)
Quiz Page
    Question
        more Bold than ABCD answer options
    Multiple choice ABCD buttons, stacked
        Shows result after selection (Correct! or Wrong!)
-        Divider line between ABCD and result message
-End of Game Page
-    Title (End of Game)
-    Final Score
-    Enter Initials prompt with entry box
    Submit button (example was inline with initial entry box)
-High Score Page
-    Title (High Scores)
    Go Back button (back to start of quiz)
-    Clear High Scores button 
-        empties recorded high scores
-        refreshes High Scores page
```

## Pseudocode
```
Begin by first displaying Intro Page 
-When Intro Page is displayed (see Page Design Notes for components)
-    clear timer and update display
    when user clicks Start Quiz button, switch to Quiz Page
-When Quiz Page is displayed (see Page Design Notes for components)
    set currentQuestion counter to 0
-    start timer and update display
        display question from array, per currentQuestion counter
        display corresponding answer options related to question object
        when user selects ABCorD answer
            evaluate it
                if wrong answer was selected
                    remove 10 seconds from the timer
                    display message Wrong!
                otherwise
                    display message Correct!
            increment currentQuestion counter
-    when last question in array is answered
-        stop timer
-        switch to Result Page
-    OR
-    if timer runs out
-        switch to Result Page
-When Results Page is displayed (see Page Design Notes for components)
-    show current timer/score
-    when user presses Submit on Enter Initials line
-        if no data/initial were entered
-            display error message
-        otherwise
-            save initials and high score to memory
-            switch to High Scores page
-When High Scores Page is displayed (see Page Design Notes for components)
-    display current high score(s) list in memory
-    when user presses Go Back button switch to Intro Page
-    when user presses Clear High Scores button, remove initials and scores -from memory
When user presses High Scores link in top left, switch to High Scores Page
```

## Installation
url to deployed app: 

## Usage

## Credits
Requirements copied from provided Homework files of Full Stack Coding Bootcamp.

## License

## Badges

## Contributing

## Tests