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
    let base = 65;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.1; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
    
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
	acted.stamina = acted.stamina + 1;
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Valkyrie used **Winged Rush**.`)
	.setDescription(`Valkyrie utilized it's Accel tip, granting itself a burst of speed and power as it relentlessly barraged the opponent for ${diff} damage! The upper force generated by it's Wing disc reduces friction, increasing stamina by 1`)
    .setColor("#551a8b");
    
    message.channel.createMessage({embed: embed});
  });

const Valkyrie = new bcworkshop.Beyblade({name: "Valkyrie", type: "Attack", imageLink: "https://i.ibb.co/wQdrByD/valkyrie.png"})
.attachPassive(passive)
.attachSpecial(special)
.setDefaultSD("RIGHT")
.setSDChangable(false);

module.exports = Valkyrie;