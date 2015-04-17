describe("PizzaType", function() {
	describe("cost", function() {
		it("displays the value of cost", function() {
			var testCost = Object.create(PizzaType);
			testCost.init();
			var cost = testCost.cost;
			expect(cost).to.equal(0);
		});
	});

	describe("calculateTotal", function() {
		it("adds pizza cost to Total", function() {
			var testTotal = Object.create(PizzaType);
			testTotal.init();
			testTotal.calculateTotal(10);
			expect(testTotal.cost).to.equal(10);
		});
	});

});//Ends PizzaType
