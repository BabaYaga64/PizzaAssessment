describe("PizzaType", function() {
	describe("cost", function() {
		it("displays the value of cost", function() {
			var testCost = Object.create(PizzaType);
			testCost.init();
			var cost = testCost.cost;
			expect(cost).to.equal(0);
		});
	});

	describe("calculatePrice", function() {
		it("returns price for pizza based on type", function() {
			var testPrice = Object.create(PizzaType);
			testPrice.init();
			testPrice.calculatePrice(10);
			expect(testPrice.calculatePrice()).to.equal(10);
		});
	});

});//Ends PizzaType
