<<<<<<< HEAD
const bcworkshop = require("bcworkshop");
const {MessageEmbed} = require("discord.js");

function ReqScream(acted, victim, logger){
    //Requirements to use special, can 
    return acted.sp >= 3 && acted.stability >= (20 + .1 * acted.lvl);
}
function Scream(acted, victim, logger){
    victim.hp -= (40 + 0.2 * victim.lvl);
    //What will a special do
logger.add(`[${acted.username}] Bloody Longinus used **Dragon Scream**!`);
}
const DScream = new bcworkshop.Special("Dragon Scream", ReqScream, Scream);

function ReqSquall(acted, victim, logger){
    //Requirements to use special, can 
    return acted.sp >= 3 && acted.stability <= (20 + .1 * acted.lvl);
}
function Squall(acted, victim, logger){
    victim.hp -= (60 + 0.6 * victim.lvl);
    victim.stability -= (20 + 0.2 * victim.lvl);
    //What will a special do
    logger.add(`[${acted.username}] Bloody Longinus used **Bloody Squall**!`);
}
const BSquall = new bcworkshop.Special("Bloody Squall", ReqSquall, Squall);

function ReqScream2(acted, victim, logger){
    //requirement of any passive, can be changed into anything, stam, hp, ect.
    let chance = Math.floor(Math.random()*2);
    return !!acted.bey.DScream.active && chance == 0;
}
function Scream2(acted, victim, logger){
//What will a passive do
victim.hp -= (40 + 0.2 * victim.lvl);
logger.add(`[${acted.username}] Bloody Longinus activated **Dragon Scream 2**!`);
}
const DScream2 = new bcworkshop.Passive("Dragon Scream 2", ReqScream2, Scream2, 120);

function ReqScream3(acted, victim, logger){
    //requirement of any passive, can be changed into anything, stam, hp, ect.
    let chance = Math.floor(Math.random()*4);
    return !!acted.bey.DScream2.active && chance == 0;
}
function Scream3(acted, victim, logger){
//What will a passive do
victim.hp -= (40 + 0.2 * victim.lvl);
logger.add(`[${acted.username}] Bloody Longinus activated **Dragon Scream 3**!`);
}
const DScream3 = new bcworkshop.Passive("Dragon Scream 3", ReqScream3, Scream3, 120);

function ReqScream4(acted, victim, logger){
    //requirement of any passive, can be changed into anything, stam, hp, ect.
    let chance = Math.floor(Math.random()*6);
    return !!acted.bey.DScream3.active && chance == 0;
}
function Scream4(acted, victim, logger){
    victim.hp -= (40 + 0.2 * victim.lvl);
//What will a passive do
logger.add(`[${acted.username}] Bloody Longinus activated **Dragon Scream 4**!`);
}
const DScream4 = new bcworkshop.Passive("Dragon Scream 4", ReqScream4, Scream4, 120);

function ReqJoltR(acted, victim, logger){
    let chance = Math.floor(Math.random()*4);
    return acted.move == "fight" && acted.stamina >= Math.round((acted.maxstamina/100)*80) && chance == 0;
    //Requirement to activate IF there's a mode change
}
function JoltR(acted, victim, logger){
    acted.atk -= (0.5 + 0.02 * acted.lvl);
    acted.stamina -= (0.5 - 0.02 * acted.lvl);
    logger.add(`[${acted.username}] Bloody Longinus is on mode **Jolt Rush**!`);
    //What will mode change do
}
const JRush = new bcworkshop.Mode("Jolt Rush", ReqJoltR, JoltR);

const BloodyLonginus = new bcworkshop.Beyblade({name:"Bloody Longinus", type: "Attack", imageLink:"https://static.wikia.nocookie.net/beyblade/images/f/f6/BeybladeBloodyLonginusAnime.png/revision/latest/scale-to-width-down/553?cb=20190918213350"})

.attachSpecial(DScream)
.attachSpecial(BSquall)
.attachPassive(DScream2)
.attachPassive(DScream3)
.attachPassive(DScream4)
.attachMode(JRush)
.setDefaultSD("Left");
=======
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
>>>>>>> upstream/dev

module.exports = BloodyLonginus;