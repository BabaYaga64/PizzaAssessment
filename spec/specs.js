describe("pizzaType", function() {
	describe("calculatePrice", function() {
		it("returns price for pizza based on type", function() {
			var testcalculatePrice = Object.create(PizzaType);
			testcalculatePrice.calculatePrice(20.00);
			expect(testcalculatePrice.calculatePrice).to.equal(20.00);
		});
	});

});//Ends pizzaType describe statement

