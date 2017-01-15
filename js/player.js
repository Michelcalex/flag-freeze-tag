console.log('player is here');


function Player(name) {
    this.tag = function() {
        console.log('tag you are it');
    }
    this.frozen = function() {
        console.log('you are frozen');
    }
    this.getFlag = function() {
        console.log('flags, flags, flags');
    }

    return this;
}

module.exports = {
    player: Player,
};