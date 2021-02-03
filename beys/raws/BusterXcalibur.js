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
    
    victim.hp = victim.hp - 48;
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Buster Xcalibur used **Dual Sabers**. 48 damage dealt.`)
    .setColor("#551a8b");
    message.channel.send(embed);
  });

const BusterXcalibur = new bcworkshop.Beyblade({name: "Buster Xcalibur", type: "Attack", imageLink: "https://vignette.wikia.nocookie.net/beyblade/images/1/10/BBC_Buster_Xcalibur_Beyblade.png/revision/latest?cb=20180723120716"})
.attachPassive(passive)
.attachSpecial(special)
.setDefaultSD("RIGHT")
.setSDChangable(false);

module.exports = BusterXcalibur;