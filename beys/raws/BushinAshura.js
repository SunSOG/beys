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
    
	
	 switch(true){
      case victim.atk > 0 && acted.stamina > Math.round((acted.maxstamina/100)*60):
        let embed = new Discord.MessageEmbed()
          .setTitle(`[${acted.username}] Bushin Ashura used **Keep Counter**.`)
		  .setDescription(`Ashura used it's the rubber on it's free-spinning Keep driver to reduce damage from the opponent's attack by 20%, before it quickly changed trajectory and smashed back into the opponent for ${diff} damage.`)
          .setColor("#551a8b");
		  
	let before = victim.hp;
    let base = 20;
    let plus = 0;
    for(var i = 0; i < acted.lvl; i++){
       plus = plus + 0.2; 
	   //+0.1 every level which means 1 more damage every 10 levels
    }
    let dmg = base + plus;
    victim.hp = victim.hp - dmg;
    let after = victim.hp;
    let diff = before - after;
	
	victim.atk = Math.round((victim.atk/100)*80);
        message.channel.createMessage({embed:embed});
        break;
      case victim.atk = 0 && acted.stamina > Math.round((acted.maxstamina/100)*60):
        let embed2 = new Discord.MessageEmbed()
          .setTitle(`[${acted.username}] Bushin Ashura failed use **Keep Counter**.`)
		  .setDescription(`Ashura had no incoming basic attacks, so it had no knockback to rely on in order to trigger Keep Counter.`)
          .setColor("#551a8b");
        message.channel.createMessage({embed:embed2});
        break;
		case victim.atk > 0 && acted.stamina < Math.round((acted.maxstamina/100)*60):
        let embed3 = new Discord.MessageEmbed()
          .setTitle(`[${acted.username}] Bushin Ashura used **Hurricane Defense**.`)
		  .setDescription(`Ashura used it's wavering spin from low stamina to it's advantage, by exposing the Hurricane disc and it's free spinning extension, it was able to deflect the opponent away and reduce incoming damage by 40%, causing the opponent to smash into a wall instead. This dropped the opponent's stamina by 1.`)
          .setColor("#551a8b");
		  victim.atk = Math.round((victim.atk/100)*60);
		  victim.stamina = victim.stamina - 1;
        message.channel.createMessage({embed:embed3});
		break;
		case victim.atk === 0 && acted.stamina < Math.round((acted.maxstamina/100)*60):
        let embed4 = new Discord.MessageEmbed()
          .setTitle(`[${acted.username}] Bushin Ashura failed use **Hurricane Defense**.`)
		  .setDescription(`Ashura had no incoming basic attacks, so Hurricane Defense has no attack to deflect.`)
          .setColor("#551a8b");
        message.channel.createMessage({embed:embed4});
        break;
  }
  });

const BushinAshura = new bcworkshop.Beyblade({name: "Bushin Ashura", type: "Defense", imageLink: "https://vignette.wikia.nocookie.net/beyblade/images/0/00/BBGT_Bushin_Ashura_Hurricane_Keep_Ten_Beyblade.png/revision/latest?cb=20191030220638"})
.attachPassive(passive)
.attachSpecial(special)
.setDefaultSD("RIGHT")
.setSDChangable(false);

module.exports = BushinAshura;