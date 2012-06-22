describe("Dice", function(){
    var dice;
    beforeEach(function(){
        dice = createDice();
    });

    it("must have a number", function(){
        expect(dice.number).toEqual(0);
    });

    it("row() get a number between 1 and 6", function(){
        dice.row();
        expect(dice.number).toBeGreaterThan(0);
        expect(dice.number).toBeLessThan(7);
    });
});