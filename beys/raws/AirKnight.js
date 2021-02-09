const bcworkshop = require("bcworkshop");
const {MessageEmbed} = require("discord.js");

function SPRequirement1(acted, victim, message, player, logger){
    //Requirements to use special, can 
    return acted.sp >= 3 && acted.stamina >= Math.round((acted.maxstamina/100)*70);
}
function SP1(acted, victim, message, player, logger){
    acted.stamina += (2 + .01 * player.lvl);
    victim.stamina += (1 + .005 * victim.lvl);
    victim.atk = Math.round((victim.atk/100)*20);
    //What will a special do
logger.add(`[${acted.username}] Air knight used **Air Shoot**!`);
}
const SPName1 = new bcworkshop.Special("Air Shoot", SPRequirement1, SP1);

function SPRequirement2(acted, victim, message, player, logger){
    //Requirements to use special, can 
    return acted.sp >= 3 && acted.stamina <= Math.round((acted.maxstamina/100)*70);
}
function SP2(acted, victim, message, player, logger){
    acted.stability -= (20 - .5 * player.lvl);
    acted.stamina += (2 + .01 * player.lvl);
    victim.hp -= (40 + 0.2 * player.lvl);
    //What will a special do
    logger.add(`[${acted.username}] Air Knight used **Air Tremor**!`);
}
const SPName2 = new bcworkshop.Special("Air Tremor", SPRequirement2, SP2);

function PsRequirement(acted, victim, message, player, logger){
    //requirement of any passive, can be changed into anything, stam, hp, ect.
    let chance = Math.floor(Math.random()*4);
    return !!acted.bey.SPName1.active && chance == 0;
}
function PsName(acted, victim, message, player, logger){
    victim.atk = 0;
    acted.stamina += (3 + .01 * player.lvl);
//What will a passive do
logger.add(`[${acted.username}] Air Knight activated **Knight Flyer**!`);
}
const PvName = new bcworkshop.Passive("Knight Flyer", PsRequirement, PsName, 60);

function ModeRequirement1(acted, victim, message, player, logger){
    return acted.move == "spin" && acted.stamina >= Math.round((acted.maxstamina/100)*60);
    //Requirement to activate IF there's a mode change
}
function ModeChange1(acted, victim, message, player, logger){
    logger.add(`[${acted.username}] Air Knight is on mode **Air Zone**!`);
    //What will mode change do
}
const AirZone = new bcworkshop.Mode("Air Zone", ModeRequirement1, ModeChange1);

function ModeRequirement2(acted, victim, message, player, logger){
    return !!acted.bey.AirZone.active;
    //Requirement to activate IF there's a mode change
}
function ModeChange2(acted, victim, message, player){
    setTimeout(() => {acted.bey.AirZone.active = false}, 15000);
    victim.hp -= 0.5;
    victim.stamina += 0.5;
    logger.add(`[${acted.username}] Air Knight is on mode **Knight Blow**!`);
    //What will mode change do
}
const KnightBlow = new bcworkshop.Mode("Knight Blow", ModeRequirement2, ModeChange2);

const AirKnight = new bcworkshop.Beyblade({name:"Air Knight", type: "Stamina", imageLink:"https://i.ibb.co/y5YCTRz/knight.png"})

.attachSpecial(SPName1)
.attachSpecial(SPName2)
.attachPassive(PvName)
.attachMode(AirZone)
.attachMode(KnightBlow)
.setDefaultSD("Right");

module.exports = AirKnight;