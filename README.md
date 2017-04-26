#Knowledge battles game

Is a game type role where you choose a character in the history of Latin American Independence to be able to explore maps and win important battles, the first thing you will find is a view where you can decide to start a new game or resume one, after that if you enter as a new user, where you have to put your email and choose between the characters of the story that are:

  - Simón Bolívar
  - Luisa Cáceres de Arismend
  - Francisco de Miranda
  - José Antonio Páez
  - Rafael Urdaneta
  - Santiago Mariño


![N|Solid](https://boiling-bayou-25703.herokuapp.com/assets/images/2.png)
 
Then choose a character started the game, you have a Board of 10 x 10 right and data, photo, score and level of the character that you chose.

![N|Solid](https://boiling-bayou-25703.herokuapp.com/assets/images/3.png)

You can move on the Board to explore with the dates of the keyboard:


![N|Solid](http://4.bp.blogspot.com/_I646rDniKDk/S2fniH8GKTI/AAAAAAAAAYI/8i4urxyv1p0/s320/flechas.gif)

![N|Solid](https://boiling-bayou-25703.herokuapp.com/assets/images/7.png)

Be careful, since if you find a box with an enemy, you attack!

To be able to beat him you have to solve mathematical operations that can be addition, subtraction, multiplication, or division.

![N|Solid](https://boiling-bayou-25703.herokuapp.com/assets/images/5.png)

Once you've explored across the map, and thus defeated all the enemies, you win the battle (for now only there is a map, but in the future they will be more than 5 by conquer).

![N|Solid](https://boiling-bayou-25703.herokuapp.com/assets/images/6.png)

# Game development

The organized development of the game used the SCRUM methodology and tool TRELLO to carry the same track, this can be seen in the following link:

https://trello.com/b/5jWWZhF9/knowledge-battles

The technologies that were used to develop the game were as follows:

  - HTML5
  - CSS3
  - SASS
  - AngularJS
  - NodeJS
  - ExpressJS
 
# Code structure
The main structure of the game is:

![N|Solid](https://boiling-bayou-25703.herokuapp.com/assets/images/8.png)

Where in the/public folder are the files corresponding to the performance of the play.

It has the following division by module:

  - /home (First sight)
  - /register (view register)
  - /login (view login) * not implemented *
  - /services (where are the 2 main services for the game implemented)
  - /modal (where are all modal windows)
  - /game (module to create and control the behavior of the game board)


*The two major services that handle the game are*:

 - *game.service.js* (Service that handles all matters relating to the game, moves, attacks, wins, etc.)
 - *grid.service.js* (Service that handles all matters relating to the game board, boxes, etc.)

# Installation

Clone repository:
```sh
$ git clone https://ceaf@bitbucket.org/ceaf/knowledge-battles
```
Change to the develop branch:
```sh
$ git fetch && git checkout develop
```

Then download the dependencies of nodeJs.

```sh
$ npm install
```

Finally, raise the server and play!

```sh
$ node server
```

http://localhost:8080/

# Demo 

https://boiling-bayou-25703.herokuapp.com/