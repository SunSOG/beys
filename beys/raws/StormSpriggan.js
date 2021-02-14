const bcworkshop = new require("bcworkshop");

const passive = new bcworkshop.Passive("Passive", function check(acted, victim, message){
    return false;
  }, function passed(acted, victim, message){
    victim.hp = victim.hp - 28;
    let embed = new Discord.MessageEmbed()
    .setTitle(`Uh oh, [${acted.username}] ${acted.bey.bbname || acted.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`)
    .setDescription("Please report this at the support server.")
    .setColor("#551a8b");
    message.channel.createMessage({embed: embed});
  }, 180);

const special = new bcworkshop.Special("Special", function req(acted, victim, logger){return acted.sp > 3}, function special(acted, victim, message){
    
    
    if (victim.atk === 0) {
		
		let before = victim.hp;
    let base = 60;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.1; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
	
		 acted.stamina = acted.stamina + 2; 
		 let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Storm Spriggan used **Upper Launch**.`)
	.setDescription (`Spriggan used the slope of the stadium as a momentum boost, coming down at a angle to send the opponent flying for ${diff} damage and avoid retaliation, saving stamina and increasing it by 2.`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed});
	 } else if (victim.atk > 0) {
		 
		 let before = victim.hp;
    let base = 40;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.1; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
	
	 acted.atk = victim.atk;
	 acted.stamina = acted.stamina - 1;
		 let embed2 = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Storm Spriggan used **Counter Break**.`)
	.setDescription (`Spriggan recoiled from the enemy attack as it landed on the rubber of it's Unite tip, draining 1 stamina. The rubber boosted it's strength before crashing into the enemy for ${diff} damage + the enemy's attack!`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed2});
  }});

const StormSpriggan = new bcworkshop.Beyblade({name: "Storm Spriggan", type: "Balance", imageLink: "https://vignette.wikia.nocookie.net/beyblade/images/a/a7/Beyblade_Spriggan.png/revision/latest?cb=20181218235223"})
.attachPassive(passive)
.attachSpecial(special)
.setDefaultSD("RIGHT")
.setSDChangable(false);

module.exports = StormSpriggan;