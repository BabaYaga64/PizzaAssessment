describe("PizzaType", function() {

	describe("calculatePrice", function() {
		it("returns 10 if the selection is 'cheese'", function() {
			var testPrice = Object.create(PizzaType);
			testPrice.init();
			testPrice.calculatePrice(10);
			expect(testPrice.cost).to.equal(10);
		});
	});

	describe("calculatePrice", function() {
		it("returns 15 if the selection is 'pepperoni'", function() {
			var testPrice = Object.create(PizzaType);
			testPrice.init();
			testPrice.calculatePrice(15);
			expect(testPrice.cost).to.equal(15);
		});
	});

});//Ends PizzaType


	// describe("cost", function() {
	// 	it("displays the value of cost", function() {
	// 		var testCost = Object.create(PizzaType);
	// 		testCost.init();
	// 		var cost = testCost.cost;
	// 		expect(cost).to.equal(0);
	// 	});
	// });