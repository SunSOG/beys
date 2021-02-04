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
    
    victim.hp = victim.hp - 43;
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Dead Hades used **Dead Impulse**. 29 damage dealt.`)
    .setColor("#551a8b");
    message.channel.send(embed)
  });

const DeadHades = new bcworkshop.Beyblade({name: "Dead Hades", type: "Balance", imageLink: "https://vignette.wikia.nocookie.net/beyblade/images/0/0c/BBC_DH11TZ%27_Beyblade.png/revision/latest?cb=20181015105727"})
.attachPassive(passive)
.attachSpecial(special)
.setDefaultSD("RIGHT")
.setSDChangable(false);

module.exports = DeadHades;