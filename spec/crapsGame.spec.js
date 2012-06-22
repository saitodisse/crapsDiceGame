describe("Craps game", function(){
    var crapsGame;
    beforeEach(function(){
        crapsGame = createCrapsGame();
    });

    it("start score is 0", function(){
        expect(crapsGame.actualScore).toEqual(0);
    });

    it("after row dices score must change", function(){
        crapsGame.rowDices();
        console.log(crapsGame.actualScore);
        expect(crapsGame.actualScore).toBeGreaterThan(0);
    });
});