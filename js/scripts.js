//Prototype
var Pizza = {

	//Initially sets the name property to "cheese" and cost property to 10 dollars.
	init: function() {
		this.cost = 10;
		this.name = "cheese";

	},//Ends init

	//Function takes name as an argument and adds it to cost property
	calculatePrice: function(name) {
		this.cost += name;

	}//Ends calculatePrice

};//Ends Pizza Object

//Instantiates second pizza object
var secondPizza = Object.create(Pizza);
	secondPizza.init();


$(document).ready(function() {
	$("form#pizza").submit(function(event) {

		var newprice = parseInt($("select#menu").val());

		secondPizza.calculatePrice.newprice;

		var totalcost = secondPizza.newprice;

		event.preventDefault();

		$("cost").text(totalcost);

	});
});





