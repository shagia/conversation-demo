let state = [];
//'state' dynamically stores what 'entities' are being selected

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
	//if there are less than 2 entities in state, eleID sends the entity to the state to fill the two spots, and .activate gives the entity in question a css rule. When more than 2 entities though, state resets, removes all .activate classes, and adds a new one on the latest clicked.

	console.log(eleId);
	console.log(state);
	//used to debug. feel free to remove 

	if (state.length >= 2) {
		if(state.indexOf('entity1') !== -1 && state.indexOf('entity2') !==-1){
				$("#chatLeft").text(convoOne.Left);
				$("#chatRight").text(convoOne.Right);
		}

	//Upon selecting entity1 or entity2, the first conversation spawns
		
		else if(state.indexOf('entity1') !==-1 && state.indexOf('entity3') !==-1){
				$("#chatLeft").text(convoTwo.Left);
				$("#chatRight").text(convoTwo.Right);
		}

	//Upon selecting entity1 or entity3, the second conversation spawns

		else if(state.indexOf('entity2') !==-1 && state.indexOf('entity3') !==-1){
				$("#chatLeft").text(convoThree.Left);
				$("#chatRight").text(convoThree.Right);
		}

	//Upon selecting entity2 or entity3, the third conversation spawns


	} else {
		$("#chatLeft").text("");
		$("#chatRight").text("");
	};
}

$(document).ready(function() {

	});




