describe("Pizza", function() {

	describe("calculatePrice", function() {
		it("returns 10 if the selection is 'cheese'", function() {
			var testPizza = Object.create(Pizza);
			testPizza.cost = 10;
			testPizza.name ="cheese";
			expect(testPizza.calculatePrice()).to.equal(10);

		});
	});

	describe("calculatePrice", function() {
		it("returns 15 if the selection is 'pepperoni'", function() {
			var testPizza = Object.create(Pizza);
			testPizza.cost = 15;
			testPizza.name ="pepperoni";
			expect(testPizza.calculatePrice()).to.equal(15);

		});
	});

});//Ends Pizza
