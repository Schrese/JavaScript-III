/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. You can use the "this" keyword to create a global binding (but this is something that is discouraged) (global)
* 2. You can use the "this" keyword to create a binding that recognizes what is to the left of the "." as what the function will be referring to (implicit)
* 3. You can use the "new" to construct a new object that "this" will point towards (new) 
* 4. You can use call, apply, or bind to target a specific value (explicit)
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
let myGame = {
    name: 'Schrese',
    faveGame: 'Rocket League!', 
    cheer: function () {
        console.log(this.faveGame);
    }
}
myGame.cheer();


// Principle 3

// code example for New Binding
function Game (replacement) {
    this.thing = replacement;
}
let myFave = new Game('My new favorite game is Teamfight Tactics');
console.log(myFave.thing);

// Principle 4

// code example for Explicit Binding
function worst () {
    console.log(`The worst game ever is ${this.game} because ${this.reason}`);
}

let worstGame = {
    game: "Cookie Clickers",
    reason: "it's not a real game"
}

theWorstGame = worst.bind(worstGame);
theWorstGame();