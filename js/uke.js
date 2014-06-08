var rank = "White";
var selfDefense = false;
var forms = false;
var knifeAndGun = false;
var interval = 0.1;
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
	
	//set toggles
	$('#self_defense_toggle').click(function(){
		selfDefense = true;
	});
	$('#forms_toggle').click(function(){
		forms = true;
	});
	$('knife_and_gun_toggle').click(function(){
		knifeAndGun = true;
	});
	
	//set button behaviors
	$('#hajime').click(function(){
		$('#menu_container').toggleClass("visible hidden");
		$('#app_container').toggleClass("visible hidden");
		practice();
	});
	
	$('#quit').click(function(){
		$('#menu_container').toggleClass("visible hidden");
		$('#app_container').toggleClass("visible hidden");
	});
	
	//set interval
	$('#3s').click(function(){
		interval = 3000;
		$('#time_display').html('0:03');
	});
	$('#5s').click(function(){
		interval = 5000;
		$('#time_display').html('0:05');
	});
	$('#10s').click(function(){
		interval = 10000;
		$('#time_display').html('0:10');
	});


});

function practice(){
	//assemble list of techniques
	switch(rank){
		case "Yellow":
			if(selfDefense){
				techsToPractice = techsToPractice.concat(techniques["yellow"]["self_defense"]);
			}
			if(forms){
				techsToPractice = techsToPractice.concat(techniques["yellow"]["forms"]);
			}
			if(knifeAndGun){
				techsToPractice = techsToPractice.concat(techniques["yellow"]["knife_and_gun"]);
			}
		case "White":
			if(selfDefense){
				techsToPractice = techsToPractice.concat(techniques["white"]["self_defense"]);
			}
			if(forms){
				techsToPractice = techsToPractice.concat(techniques["white"]["forms"]);
			}
			if(knifeAndGun){
				techsToPractice = techsToPractice.concat(techniques["white"]["knife_and_gun"]);
			}
		break;
	}
	
	//randomize order
	techsToPractice.sort(function() { return 0.5 - Math.random() });
	
	//every X seconds
	setInterval(function(){
		//display technique on screen
		$('#current_technique').html(techsToPractice[0]);
		//remove displayed technique from techsToPractice
		techsToPractice.splice(0, 1);
		//speak technique name
		//update progress bar

	}, interval);

}