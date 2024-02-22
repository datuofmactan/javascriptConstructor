function Player(name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;
}

Player.prototype.gainXp = function(xp) {
    console.log('here'+xp);
    this.points += xp;
    console.log(this.points);


    if (this.points >= 10){
        console.log('hereb');
        this.lvl++;
        this.points -= 10;
    }
}

Player.prototype.describe = function(){
    return `${this.name} is level ${this.lvl} with ${this.points} experience points`;
}
const player1 = new Player('Bob');
const player2 = new Player('Alice');

player1.gainXp(4);
player1.gainXp(7);
player2.gainXp(2);
player1.gainXp(4);
player2.gainXp(1);
player1.gainXp(4);
player2.gainXp(1);
player1.gainXp(4);
player2.gainXp(1);
console.log(player1.describe());
console.log(player2.describe());