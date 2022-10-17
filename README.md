# The number game

View the project by clicking the [link](https://alexanderjsn.github.io/number-game/)

![This is an image](/docs/number-game-main.png)

The number game is a game with a simple rule. Press the button to roll a random number from 1-6 and if your number is higher than the opponents, you score one point. Whoever scores 10 points first wins the game. 

## User Experience (UX)

### First Time Visitor Goals

1. As a First Time Visitor, I want to easily understand the game mechanics and rules. 

2. As a First Time Visitor, I want to be able to use all the games functions without any technical errors caused by bugs. 

 ### Design

- #### Colour Scheme
    The website uses an indigo blue as a background colour and a white colour for the font. Upon hovering on the buttons or reset options, the text changes colour to a green/blue colour. 

 - #### Typography
    The main font is Roboto with Sans Serif as the fallback font in case of technical errors. 

## Features

- Responsive on all device sizes
        
 - Interactive elements

- Two random numbers that generates when pushing a button
        
- Scoreboard that updates to the player with highest number
        
 - A victory/defeat message to inform the player
        
- A "restart game" button that gives the player the option
        to reset the scores and numbers to default. 

    ![This is an image](/docs/restart.png)

### Frameworks, Libraries & Programs Used

    1. [Google Fonts:](https://fonts.google.com/)
    - Used for importing the Roboto font. 

    2. [GitHub:](https://github.com/)
    - Used to store the project and code.

    3  [Git](https://git-scm.com/)
    - Used to commit and push the code to Github.

### Languages Used

-   [HTML](https://en.wikipedia.org/wiki/HTML5)
-   [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JS](https://en.wikipedia.org/wiki/JavaScript)

## Testing
The W3C Markup Validator, W3C CSS Validator Services and JSHint were used to validate every page of the project to ensure there were no syntax errors in the project.



### Further Testing
-   The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
-   The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX.
- A large amount of testing has been made to ensure that the game works without any bugs. 

### Fixed Bugs

- The scoring would not update when a higher number was achieved. Resetting the variable scores to 0 fixed this issue. 

- The random number generator would add the number 0 to the scoreboard. To fix this issue, I added + 1 to the Math.floor(Math.random()) method. 

## Credits 

- Instructions on how to create random numbers and make it update the HTML content were taken from CI [LoveMaths project](https://www.youtube.com/watch?v=J3GM0FrBak8&t=46s/)

- Instructions on how to update scores were taken from [Kenny Yip Coding](https://www.youtube.com/watch?v=fIBOydve2f8)

### Acknowledgements

-   My Mentor for continuous helpful feedback.

