$(document).ready(function(){
	$('#hawk').on('change',function(){
	  $("#hawkChance").text($(this).val())
	});
	$('#button').on('click', function(){
		var name = (document.getElementById("name").value);
		var extra = parseInt($('#extraDamage').val()+0)/10;
		var min = parseInt(document.getElementById("min").value)+(+extra);
		var max = parseInt(document.getElementById("max").value)+(+extra);
		var weaponSpeed = parseFloat(document.getElementById("speed").value);
		var averageHit = ((min + max)/2);
		var damagePerSecond = (averageHit)*((60/weaponSpeed)/60);


		var hawkRank = parseInt($('#hawk').find(":selected").text());
		var hawkDPS = (damagePerSecond*1.3);
		var hawkSpeed = (0.7*weaponSpeed);
		var hawkAttacks = (12/hawkSpeed);
		var ratio = (hawkAttacks/(100/hawkRank));
		var timeTilFirstProc = (weaponSpeed * (100/hawkRank));
		// var attacksUntilNextProc = (hawkRank)- hawkAttacks
		// var downtime = attacksUntilNextProc * weaponSpeed
		var theoritcalDPS = ((hawkDPS*(ratio))+(damagePerSecond*(1-ratio)));

		$("#output").append(name+"\n"+"Damage: "+min+" - "+max+ "\n" + "Speed: "+weaponSpeed + "\n" +"Average Hit: "+averageHit+ "\n" +"DPS: "+damagePerSecond + "\n" + "Hawk DPS: "+hawkDPS+ "\n" + "Average DPS: "+ theoritcalDPS+ "\n"+ "\n");
});



});





// time until first proc = weaponSpeed*20
// hawkSpeed = 0.7(weaponSpeed)
// hawkAttacks = 12/hawkSpeed
// attacksUntilNextProc = 20 - hawkAttacks
// downtime = attacksUntilNextProc * weaponSpeed
// ratio = hawkAttacks/hawkRank
//
