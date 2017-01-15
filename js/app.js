
let player = require('./player');
let team = require('./team');
// let player = require('./flag');



window.addEventListener('load', function() {
    console.log('ready to rock');

    player.Player();
    team.Team();

    console.log(player.playerdudes[1].tag()); //tag you are it
    console.log(player.playerdudes);
});