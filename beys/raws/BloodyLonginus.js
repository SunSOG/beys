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
    
    
    //Change "victim.hp = victim.hp - 123" to "victim.hp = victim.hp - <damage number>. This and the line below can be removed if the special move does not deal any damage.
    victim.atk = victim.atk = 0;
    victim.hp = victim.hp - 50;
    //For more options check the README.md
    
    //Make sure to change the "Name", "Special Name" and damage dealt below.
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Bloody Longinus used **Dragon Scream**. 50 damage dealt and opponent's damage nullified for this turn.`)
    .setColor("#551a8b");
    
    message.channel.send(embed);
  });

const BloodyLonginus = new bcworkshop.Beyblade({name: "Bloody Longinus", type: "Attack", imageLink: "https://vignette.wikia.nocookie.net/beyblade/images/f/f6/BeybladeBloodyLonginusAnime.png/revision/latest?cb=20190918213350"})
.attachPassive(passive)
.attachSpecial(special)
.setDefaultSD("RIGHT")
.setSDChangable(false);

module.exports = BloodyLonginus;