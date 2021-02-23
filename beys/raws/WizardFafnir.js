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
    
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Wizard Fafnir used **Spin Steal**. 1 stamina stolen from the opponent..`)
    .setColor("#551a8b");
    victim.stamina = victim.stamina -1;
    acted.stamina = acted.stamina + 1;
    message.channel.send(embed);
  });

const WizardFafnir = new bcworkshop.Beyblade({name: "Wizard Fafnir", type: "Stamina", imageLink: "https://vignette.wikia.nocookie.net/beyblade/images/1/1d/BBGT_Wizard_Fafnir_Ratchet_Rise_Sen_Beyblade.png/revision/latest?cb=20190419113639"})
.attachPassive(passive)
.attachSpecial(special)
.setDefaultSD("RIGHT")
.setSDChangable(false);

module.exports = WizardFafnir;