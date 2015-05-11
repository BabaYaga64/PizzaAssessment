//Prototype
var Pizza = {

	//Initially sets the name property to an empty string.
	init: function() {
		this.name = "";

	},//Ends init

	//Initially set cost to 0, then add 10 or 15 depending on the chosen topping.
	calculatePrice: function() {
		var cost = 0;

		//2 new property values are added to Pizza object
		if (this.name === "cheese") {
			cost += 10;
		} else if (this.name === "pepperoni") {
			cost += 15;
		} 

		return cost;

	}//Ends calculatePrice

};//Ends Pizza Object



$(document).ready(function() {
	$("form#pizza").submit(function(event) {
		event.preventDefault();

		//Prototypal inheritance of Pizza object
		var newPizza = Object.create(Pizza);
		newPizza.init();

		//Get the value of the type of topping selected from the form, and set that as a property to the newPizza object
		var newTopping = $("select#menu").val();
		newPizza.name = newTopping;

		//Cost is calculated from the input value of the form and running the calculatePrice method on the object
		var totalcost = newPizza.calculatePrice(newTopping);

		$(".totalcost").text(totalcost);

		$(".totalcost").show();

	});
});





