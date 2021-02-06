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
    
	let before = victim.hp;
    let base = 30;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.3; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
    
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
	acted.stamina = acted.stamina + 3;
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Maximus Garuda used **Meteor Strike**.`)
	.setDescription(`Garuda slammed into a stadium wall, the recoil sending it sky high. The blades in Garuda's layer along with on it's Flow disc, and it's Flugel driver allowing it to catch the wind and glide even higher to reposition itself before it came crashing back down atop it's opponent, dealing ${diff} damage while increasing it's own stamina by 3 with the wind flow.`)
    .setColor("#551a8b");
    
    message.channel.createMessage({embed: embed});
  });

const MaximusGaruda = new bcworkshop.Beyblade({name: "Maximus Garuda", type: "Stamina", imageLink: "https://vignette.wikia.nocookie.net/beyblade/images/7/7c/Beyblade_Garuda.png/revision/latest?cb=20180716235147"})
.attachPassive(passive)
.attachSpecial(special)
.setDefaultSD("RIGHT")
.setSDChangable(false);

module.exports = MaximusGaruda;