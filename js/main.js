//js file

// $("#entity1").on("click", processClick());

let state = [];

function processClick(eleId){
	if(state.length < 2){
		state.push(eleId);
		$('#' + eleId).addClass('activate');

	} else {
		state.forEach(
		function(eleId){
		$('#' + eleId).removeClass('activate');
			});
		state = [];
		state.push(eleId);
		$('#' + eleId).addClass('activate');
	}
	console.log(eleId);
	console.log(state);

}


if (state == ["entity1", "entity3"]) {
	console.log("fart");

	};




// $("#entity2").on("click", function() {
// 	console.log("Entity 2 on.")
// });

// $("#entity3").on("click", function() {
// 	console.log("Entity 3 on.")
// });

// $("#entity1").off("click", function() {
// 	console.log("Entity 1 off.")
// });

// $("#entity2").off("click", function() {
// 	console.log("Entity 2 off.")
// });

// $("#entity3").off("click", function() {
// 	console.log("Entity 3 off.")
// });

// $("#entity1").trigger("click");

// $("#buttons").click(function() {
// 	$("#buttons").find("button").css("background-color","green");
// });



