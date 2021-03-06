const bcworkshop = require("bcworkshop");
const {MessageEmbed} = require("discord.js");

function ReqScream(acted, victim, logger){
    //Requirements to use special, can 
    return acted.sp >= 3 && acted.stability >= (20 + .1 * acted.lvl);
}
function Scream(acted, victim, logger){
    acted.sp -= 3;
    victim.hp -= (40 + 0.2 * victim.lvl);
    //What will a special do
logger.add(`[${acted.username}] Bloody Longinus used **Dragon Scream**!`);
}
const DScream = new bcworkshop.Special("Dragon Scream", ReqScream, Scream);

function ReqSquall(acted, victim, logger){
    //Requirements to use special, can 
    return acted.sp >= 3 && acted.stability <= (20 + 0.1 * acted.lvl);
}
function Squall(acted, victim, logger){
    acted.sp -= 3;
    victim.hp -= (60 + 0.6 * victim.lvl);
    victim.stability -= (5 + 0.2 * victim.lvl);
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
    acted.atk += (0.5 + 0.02 * acted.lvl);
    acted.stamina -= (0.2 - 0.02 * acted.lvl);
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

module.exports = BloodyLonginus;