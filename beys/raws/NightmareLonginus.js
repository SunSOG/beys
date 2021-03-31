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
    
    
    if (acted.hp > Math.round((acted.maxhp/100)*90)) {
		let before = victim.hp;
    let base = 50;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.3; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;

		 acted.hp = acted.hp - 25;
		 acted.stamina = acted.stamina + 1;
		 let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Nightmare Longinus used **Metal Dragon Destructor**.`)
	.setDescription(`Longinus recoiled off a wall to gain speed at the cost of 25 hp, before slamming into the opponent for ${diff}! Longinus used the free spinning ring on it's Destroy driver to negate stamina loss this turn!`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed});
	 } else if (acted.hp <= Math.round((acted.maxhp/100)*90)) {
		 let before = victim.hp;
    let base = 70;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.5; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
	 acted.stamina = acted.stamina - 1;
		 let embed2 = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Nightmare Longinus used **Metal Dragon Crush**.`)
	.setDescription(`The metal dragon heads on Longinus' layer shifted behind the wings as it got closer to bursting point, putting weight into the two contact points as it gained a huge increase in strength as a result. Longinus crashed into the enemy with a fierce, heavyweight attack for ${diff} damage, the weight distribution throwing off balance and dropping stamina by 1`)
    .setColor("#551a8b");
	message.channel.createMessage({embed: embed2});
  }});

const NightmareLonginus = new bcworkshop.Beyblade({name: "Nightmare Longinus", type: "Attack", imageLink: "https://media.discordapp.net/attachments/736042245442109441/826657288722317323/image1.png?width=615&height=587"})
.attachPassive(passive)
.attachSpecial(special)
.setDefaultSD("RIGHT")
.setSDChangable(false);

module.exports = NightmareLonginus;