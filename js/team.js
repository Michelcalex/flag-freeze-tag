console.log('team is here');

function Team(teamname) {
    this.add = function() {
        console.log('adding a team');
    }, 
    this.won = function() {
        console.log('we won, we won');
    }
} 

module.exports = {
    Team: Team,
}