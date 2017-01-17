
let player = require('./player'); //importing the module player
let team = require('./team'); //importing the module team

window.addEventListener('load', function() { //when the page loads, run this function
    console.log('Ready to play');

    player.Player();
    team.Team();
    
    
    //teamNames.teamNames();

    // console.log(player.playerdudes[1].tag()); //tag you are it
    // console.log(player.playerdudes);
    // console.log(team.teamNames);
});