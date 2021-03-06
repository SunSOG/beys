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
    let base = 70;
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
    acted.stamina = acted.stamina - 1;
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Dark Deathscyther used **Shake Launch**.`)
	.setDescription (`Deathscyther used it's Jaggy driver and outward weight distribution to move unpredictably in a wide scythe-like shape along the stadium, before slicing into the opponent for ${diff} damage! losing 1 stamina by the impact.`)
    .setColor("#551a8b");
    
    message.channel.createMessage({embed: embed});
  });

const DarkDeathscyther = new bcworkshop.Beyblade({name: "Dark Deathscyther", type: "Attack", imageLink: "https://media.discordapp.net/attachments/736042245442109441/826656558976860180/image2.png?width=651&height=586"})
.attachPassive(passive)
.attachSpecial(special)
.setDefaultSD("RIGHT")
.setSDChangable(false);

module.exports = DarkDeathscyther;