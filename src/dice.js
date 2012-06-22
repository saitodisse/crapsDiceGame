var createDice = function() {
    var self = {};
    self.number = 0;

    self.row = function(){
        var deZeroAcinco = Math.random() * 6;
        var umAseis = deZeroAcinco + 1;
        self.number = Math.floor(umAseis);
    }

    return self;
}
