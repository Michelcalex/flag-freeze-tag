(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

let player = require('./player');
let team = require('./team');

window.addEventListener('load', function() {
    console.log('Ready to play');

    player.Player();
    team.Team();
    teamNames.teamNames();

    // console.log(player.playerdudes[1].tag()); //tag you are it
    // console.log(player.playerdudes);
    // console.log(team.teamNames);
});
},{"./player":2,"./team":3}],2:[function(require,module,exports){
console.log('players are here');


function Player(name) {
    this.name = name;
    this.playersTeam;
    this.isFrozen = false;
    this.hasFlag = false;

    this.setTeam = function(teamname) {
        this.playersTeam = teamname;
    },
    this.tag = function(player) {
        player.isFrozen === false;
    },
    this.frozen = function() {
        return this.isFrozen;
    },
    this.captureFlag = function() {
        if (this.isFrozen === false) {
            this.hasFlag = true;
        }
    },
    this.getFlag = function() {
        return this.hasFlag;
    }

    return this;
}


// let playerdudes = [
//     new Player('Parker'),
//     new Player('Christian'),
//     new Player('Lex'),
// ]



module.exports = {
    Player: Player,
    // playerdudes: playerdudes,
};
},{}],3:[function(require,module,exports){
console.log('teams are here');

function Team(teamname) {
    this.teamname = teamname;
    this.players = [];
    
    this.add = function(player) {
        player.setTeam(this.teamname);
        this.players.push(player);
    }, 
    this.won = function(otherTeam) {
        /*if (this.teamname === 'Chasers') {
            let won = false;
            otherTeam.players.forEach(function(dude) {
                if (dude.frozen() === false) {
                    won = false;
                }
            });

            return won;
        }*/

        /*if (this.teamname === 'Chasers') {
            let won = otherTeam.players.every(function(dude) {
                return dude.frozen();
            });

            return won;
        }*/

        if (this.teamname === 'Chasers') {
            return otherTeam.players.every(function(dude) {
                return dude.frozen();
            });
        }

        if (this.teamname === 'Runners') {
            this.players.forEach(function(dude) {
                if (dude.getFlag()) {
                    return true;
                }
            });

            return false;
        }

        /*if (this.teamname === 'Runners') {
            return this.players.some(function(dude) {
                return dude.getFlag();
            });
        }*/
    }
} 

let teamNames = [
    new Team('Chasers'),
    /*{
        teamname: 'Chasers',
        players: [],
        add: function() {},
        won: function() {},
    }*/
    new Team('Runners'),
    /*{
        teamname: 'Runners',
        players: [
            {
                name: 'Parker',
                isFrozen: false,
                tag: function(player) {},
                frozen: function() {
                    return this.isFrozen;
                },
                getFlag: function() {}
            }
        ],
        add: function() {},
        won: function() {},
    }*/
]

module.exports = {
    Team: Team,
    teamNames: teamNames,
};
},{}]},{},[1]);
