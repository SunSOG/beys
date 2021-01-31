const bcworkshop = require("bcworkshop");

function SPRequirement1(acted, victim, logger){
    return acted.sp >= 3 && acted.stamina >= Math.round((acted.maxstamina/100)*60);
}

function SP1(acted, victim, logger){
    victim.hp -= (50 + .5 * acted.lvl);
    acted.stamina += 2;
    logger.add(`[${acted.username}] Archer Hercules used **Archer Strike**!`);
}

const SPName1 = new bcworkshop.Special("Archer Strike", SPRequirement1, SP1);

function SPRequirement2(acted, victim, logger){
    return acted.sp >= 3 && acted.stamina <= Math.round((acted.maxstamina/100)*60);
}

function SP2(acted, victim, logger){
    victim.stability -= (15 + .2 * acted.lvl);
    victim.atk = Math.round((victim.atk/100)*20);
    logger.add(`[${acted.username}] Archer Hercules used **Herculean Barrier**!`);
}

const SPName2 = new bcworkshop.Special("Herculean Barrier", SPRequirement2, SP2);

function PsRequirement(acted, victim, logger){
    return acted.stamina <= Math.round((acted.maxstamina/100)*20);
}

function PsName(acted, victim, logger){
    acted.stamina += (2 + .01 * acted.lvl);
    logger.add(`[${acted.username}] Archer Hercules activated **Eternal Stamina**!`);
}

const PvName = new bcworkshop.Passive("Eternal Stamina", PsRequirement, PsName, 60);

function ModeRequirement1(acted, victim, logger){
    return acted.stamina >= Math.round((acted.maxstamina/100)*60);
}

function ModeChange1(acted, victim, logger){
    acted.stamina += 0.2;
    acted.atk -= 0.5;
    logger.add(`[${acted.username}] Archer Hercules is on mode **Endless Endurance**!`);
}

const Mode1 = new bcworkshop.Mode("Endless Endurance", ModeRequirement1, ModeChange1);

function ModeRequirement2(acted, victim, logger){
    return acted.stamina <= Math.round((acted.maxstamina/100)*60);
}

function ModeChange2(acted, victim, logger){
    acted.stamina -= 0.1;
    victim.atk -= victim.atk + Math.round((victim.atk/100)*80);
    logger.add(`[${acted.username}] Archer Hercules is on mode **Endless Barrier**!`);
}

const Mode2 = new bcworkshop.Mode("Endless Barrier", ModeRequirement2, ModeChange2);

const ArcherHercules = new bcworkshop.Beyblade({name:"Archer Hercules", type: "Stamina", imageLink:"https://static.wikia.nocookie.net/beyblade/images/b/bc/Beyblade_Hercules.png/revision/latest/scale-to-width-down/316?cb=20190918213500"})
.attachSpecial(SPName1)
.attachSpecial(SPName2)
.attachPassive(PvName)
.attachMode(Mode1)
.attachMode(Mode2)
.setDefaultSD("RIGHT");

module.exports = ArcherHercules;