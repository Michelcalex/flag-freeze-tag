console.log('player is here');


function Player(name) {
    this.name = name;
    this.tag = function() {
        console.log('tag you are it');
    },
    this.frozen = function() {
        console.log('you are frozen');
    },
    this.getFlag = function() {
        console.log('flags, flags, flags');
    }

    return this;
}


let playerdudes = [
    new Player('Parker'),
    new Player('Christian'),
    new Player('Lex'),
]



module.exports = {
    Player: Player,
    playerdudes: playerdudes
};