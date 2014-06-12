var rank = null;
var selfDefense = false;
var knifeAndGun = false;
var interval = 0;
var techsToPractice = [];

$(document).ready(function(){
	//set rank
	$('#rank_white').click(function(){
		$('#rank_display').html('White');
		rank = "White";
	});
	$('#rank_yellow').click(function(){
		$('#rank_display').html('Yellow');
		rank = "Yellow";
	});
	$('#rank_orange').click(function(){
		$('#rank_display').html('Orange');
		rank = "Orange";
	});
	$('#rank_purple').click(function(){
		$('#rank_display').html('Purple');
		rank = "Purple";
	});
	$('#rank_purple_stripe').click(function(){
		$('#rank_display').html('Purple with Stripe');
		rank = "Purple_Stripe";
	});
	$('#rank_blue').click(function(){
		$('#rank_display').html('Blue');
		rank = "Blue";
	});
	$('#rank_blue_stripe').click(function(){
		$('#rank_display').html('Blue with Stripe');
		rank = "Blue_Stripe";
	});

	//set toggles
	$('#self_defense_toggle').click(function(){
		selfDefense = true;
	});
	$('knife_and_gun_toggle').click(function(){
		knifeAndGun = true;
	});
	
	//set button behaviors
	$('#hajime').click(function(){
		if(rank != null || interval != 0){
			$('#menu_container').toggleClass("visible hidden");
			$('#app_container').toggleClass("visible hidden");
		}
		else{
			//maybe shake the button?
		}
		practice();
	});
	
	$('#quit').click(function(){
		$('#menu_container').toggleClass("visible hidden");
		$('#app_container').toggleClass("visible hidden");
	});
	
	//set interval
	$('#5s').click(function(){
		interval = 5000;
		$('#time_display').html('0:05');
	});
	$('#10s').click(function(){
		interval = 10000;
		$('#time_display').html('0:10');
	});
	$('#20s').click(function(){
		interval = 20000;
		$('#time_display').html('0:20');
	});


});

function practice(){
	//assemble list of techniques
	switch(rank){
	case "Blue_Stripe":
			if(selfDefense){
				techsToPractice = techsToPractice.concat(techniques["blue_stripe"]["self_defense"]);
			}
			if(knifeAndGun){
				techsToPractice = techsToPractice.concat(techniques["blue_stripe"]["knife_and_gun"]);
			}
	case "Blue":
			if(selfDefense){
				techsToPractice = techsToPractice.concat(techniques["blue"]["self_defense"]);
			}
			if(knifeAndGun){
				techsToPractice = techsToPractice.concat(techniques["blue"]["knife_and_gun"]);
			}
	case "Purple_Stripe":
			if(selfDefense){
				techsToPractice = techsToPractice.concat(techniques["purple_stripe"]["self_defense"]);
			}
			if(knifeAndGun){
				techsToPractice = techsToPractice.concat(techniques["purple_stripe"]["knife_and_gun"]);
			}
		case "Purple":
			if(selfDefense){
				techsToPractice = techsToPractice.concat(techniques["purple"]["self_defense"]);
			}
			if(knifeAndGun){
				techsToPractice = techsToPractice.concat(techniques["purple"]["knife_and_gun"]);
			}
		case "Orange":
			if(selfDefense){
				techsToPractice = techsToPractice.concat(techniques["orange"]["self_defense"]);
			}
			if(knifeAndGun){
				techsToPractice = techsToPractice.concat(techniques["orange"]["knife_and_gun"]);
			}
		case "Yellow":
			if(selfDefense){
				techsToPractice = techsToPractice.concat(techniques["yellow"]["self_defense"]);
			}
			if(knifeAndGun){
				techsToPractice = techsToPractice.concat(techniques["yellow"]["knife_and_gun"]);
			}
		case "White":
			if(selfDefense){
				techsToPractice = techsToPractice.concat(techniques["white"]["self_defense"]);
			}
			if(knifeAndGun){
				techsToPractice = techsToPractice.concat(techniques["white"]["knife_and_gun"]);
			}
		break;
		default:
		break;
	}
	
	//randomize order
	techsToPractice.sort(function() { return 0.5 - Math.random() });
	//add "All Done!"
	techsToPractice.push("All Done!");
	//store original number of techs
	var maxTechs = techsToPractice.length;
	
	//every X seconds
	setInterval(function(){
		//display technique on screen
		$('#current_technique').html(techsToPractice[0]);
		//remove displayed technique from techsToPractice
		techsToPractice.splice(0, 1);
		//speak technique name
		//update progress bar
		var percentComplete = techsToPractice.length/maxTechs * 100;
		$('#progress').css('width', percentComplete + "%");
		console.log("Percent complete: " + percentComplete);
	}, interval);
}