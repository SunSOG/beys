const bcworkshop = new require("bcworkshop");

const passive = new bcworkshop.Passive("Passive", function check(acted, victim, message, player){
    return false;
  }, function passed(acted, victim, message, player){
    victim.hp = victim.hp - 28;
    let embed = new Discord.MessageEmbed()
    .setTitle(`Uh oh, [${acted.username}] ${acted.bey.bbname || acted.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`)
    .setDescription("Please report this at the support server.")
    .setColor("#551a8b");
    message.channel.createMessage({embed: embed});
  }, 180);

const special = new bcworkshop.Special("Special", function req(acted, victim, logger){return acted.sp > 3}, function special(acted, victim, message, player){
    
    
    switch(true){
      case acted.stamina > Math.round((acted.maxstamina/100)*20):
		  
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

    let embed = new Discord.MessageEmbed()
          .setTitle(`[${acted.username}] Drain Fafnir used **Nothing Breaker**.`)
		  .setDescription(`Fafnir's Nothing driver slowly pressed in as a result of the incredible spin velocity generated from it's high stamina. The spring in the Nothing driver fully compressed after a bit, resulting in a flat surface that make contact with the stadium and granted Fafnir a immense boost of speed at the cost of 2 stamina. Fafnir used this boost of speed to smash into the opponent with immense power, dealing ${diff} damage.`)
          .setColor("#551a8b");
	
		  acted.stamina = acted.stamina - 2;
        message.channel.createMessage({embed:embed});
        break;
      case victim.atk === 0 && acted.stamina < Math.round((acted.maxstamina/100)*20):
        let embed2 = new Discord.MessageEmbed()
          .setTitle(`[${acted.username}] Drain Fafnir failed use **Drain Spin**.`)
		  .setDescription(`Fafnir cannot use Drain Spin, there is no basic attack to steal stamina from.`)
          .setColor("#551a8b");
        message.channel.createMessage({embed:embed2});
        break;
		case victim.atk > 0 && acted.stamina < Math.round((acted.maxstamina/100)*20):
        let embed3 = new Discord.MessageEmbed()
          .setTitle(`[${acted.username}] Drain Fafnir used **Drain Spin**.`)
		  .setDescription(`Fafnir used the rubber on it's layer to absorb the stamina of it's opponent upon getting attacked, increasing it's own stamina by 2 and dropping the opponent's by 1.`)
          .setColor("#551a8b");
		  acted.stamina = acted.stamina + 2;
		  victim.stamina = victim.stamina - 1;
        message.channel.createMessage({embed:embed3});
		break;
  }
  });

const DrainFafnir = new bcworkshop.Beyblade({name: "Drain Fafnir", type: "Stamina", imageLink: "https://vignette.wikia.nocookie.net/beyblade/images/2/21/Beyblade_Drain_Fafnir.png/revision/latest?cb=20180716233052"})
.attachPassive(passive)
.attachSpecial(special)
.setDefaultSD("RIGHT")
.setSDChangable(false);

module.exports = DrainFafnir;