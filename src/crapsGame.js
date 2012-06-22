var createCrapsGame = function() {
    var self = {};
    self.dice1 = createDice();
    self.dice2 = createDice();
    self.actualScore = 0;

    self.rowDices = function(){
        self.dice1.row();
        self.dice2.row();
        self.actualScore = self.dice1.number + self.dice2.number;
    }

    return self;
}
