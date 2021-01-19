const bcworkshop = require("bcworkshop");
const { MessageEmbed } = require("discord.js");
//----------------------------------------------------------------------------------------------------------------
function SACheck(acted, victim, logger){
    return acted.sp > 3;
}

function SAExecute(acted, victim, logger){
    let effect1 = 40 + 0.4 * player.lvl;
    let effect2 = 1 + 0.01 * player.lvl;
    victim.hp -= effect1;
    victim.stamina -= effect2;
    logger.add(`Wizard Fafnir used **Wizard Blow!**`);
}

const WizardBlow = new bcworkshop.Special("Wizard Blow", SACheck, SAExecute);
//----------------------------------------------------------------------------------------------------------------
function PassiveCheck1(acted, victim, logger){
    return Math.floor(Math.random() * 2) == 0 && victim.bey.sd == 0;
}

function PassiveEXE2(acted, victim, logger){
    victim.atk = Math.round((victim.atk/100)*60); 
    victim.hp = victim.hp - Math.round((victim.atk/100)*60);

}
const RatchetThrough = new bcworkshop.Passive("Ratchet Through", PassiveCheck1, PassiveEXE2, 15);
//----------------------------------------------------------------------------------------------------------------
function PassiveCheck2(acted, victim, logger){
    return Math.floor(Math.random() * 2) == 0 && victim.move == fight && victim.bey.sd == 0;
}

function PassiveEXE2(acted, victim, logger){
    victim.stamina -= 0.5 + 0.01 * player.lvl; 
    acted.stamina += 0.5 + 0.01 * player.lvl;

}
const RatchetDrain = new bcworkshop.Passive("Ratchet Drain", PassiveCheck2, PassiveEXE2, 30);
//----------------------------------------------------------------------------------------------------------------
function PassiveCheck3(acted, victim, logger){
    return Math.floor(Math.random() * 3) == 0 && victim.move == fight && victim.bey.sd == 0;

}

function PassiveEXE3(acted, victim, logger){
    victim.stamina -= 0.5 + 0.01 * player.lvl; 
    acted.stamina += 1 + 0.01 * player.lvl;

}
const WizardDrain = new bcworkshop.Passive("Wizard Drain", PassiveCheck3, PassiveEXE3, 30);
//----------------------------------------------------------------------------------------------------------------
function PassiveCheck4(acted, victim, logger){
    return acted.stamina <= 1 && victim.move == fight

}

function PassiveEXE4(acted, victim, logger){
    acted.stamina += 1 + 0.01 * player.lvl;

}
const WizardZero = new bcworkshop.Passive("Wizard Zero", PassiveCheck4, PassiveEXE4, 60);
//----------------------------------------------------------------------------------------------------------------
const example = new bcworkshop.Beyblade({
    name: "Wizard Fafnir",
    type: "Stamina",
    imageLink: "https://cdn.discordapp.com/attachments/671569234891112482/800146361987104818/318.png"
})

.attachSpecial(WizardBlow)
.attachPassive(RatchetThrough)
.attachPassive(RatchetDrain)
.attachPassive(WizardDrain)
.attachPassive(WizardZero)
.setDefaultSD("Left");
module.exports = example;