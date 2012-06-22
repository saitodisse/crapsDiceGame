var createDice = function() {
    var self = {};
    self.number = 0;

    self.row = function(){
        var deZeroAcinco = Math.random() * 5;
        var umAseis = deZeroAcinco + 1;
        umAseis = Math.floor(umAseis);
        self.number = umAseis;
    }

    return self;
}
