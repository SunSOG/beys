const bcworkshop = require("bcworkshop");

function ReqRGuard(acted, victim, logger){
    return acted.sp >= 5 && acted.hp >= Math.round((acted.maxhp/100)*20);
}
function RGuard(acted, victim, logger){
    acted.hp += Math.round((acted.maxhp/100)*30);
    acted.stamina += Math.round(3 + 0.1 * acted.lvl);
    victim.hp -= Math.round(40 + 0.4 * victim.lvl);
    logger.add(`[${acted.username}] Brave Solomon used **Royal Guard**!`);
}
const RoyalG = new bcworkshop.Special("Royal Guard", ReqRGuard, RGuard);

function ReqKingsS(acted, victim, logger){
    return acted.sp >= 5 && acted.hp <= Math.round((acted.maxhp/100)*20) && !acted.bey.KSUsed;
}
function KingsS(acted, victim, logger){
    acted.bey.KSUSed = true;
    acted.sp += Math.round(3 + 0.2 * acted.lvl);
    acted.hp += Math.round((acted.maxhp/100)*20);
    acted.stamina += Math.round(3 + 0.1 * acted.lvl);
    logger.add(`[${acted.username}] Brave Solomon used **Kings Sacrifice**!`);
}
const KSacrifice = new bcworkshop.Special("Kings Sacrifice", ReqKingsS, KingsS);

function ReqGTemple(acted, victim, logger){
    return acted.sp >= 1 && acted.hp >= Math.round((acted.maxhp/100)*70);
}
function GTemple(acted, victim, logger){
    acted.sp -= Math.round(1 - 0.05 * acted.lvl);
    victim.atk = 0;
    victim.hp -= victim.atk;
    logger.add(`[${acted.username}] Brave Solomon activated **Golden Temple**!`);
}
const GoldenT = new bcworkshop.Passive("Golden Temple", ReqGTemple, GTemple, 120);

function ReqLegendsP(acted, victim, logger){
    return acted.sp >= 1 && acted.hp <= Math.round((acted.maxhp/100)*70);
}
function LegendsP(acted, victim, logger){
    acted.sp += Math.round(2 - 0.1 * acted.lvl);
    victim.sp += Math.round(1 - 0.05 * victim.lvl);
    victim.stamina -= Math.round(1 - 0.1 * acted.lvl);
    logger.add(`[${acted.username}] Brave Solomon activated **Legends Profecy**!`);
}
const LProfecy = new bcworkshop.Passive("Legends Profecy", ReqLegendsP, LegendsP, 240);

function ReqSPeace(acted, victim, logger){
    return acted.sp <= 4 && acted.bey.ScriptsOfWar.active == false;  
}
function SPeace(acted, victim, logger){
    acted.atk -= Math.round(1 - 0.05 * acted.lvl);
    acted.stamina += Math.round(0.5 + 0.05 * acted.lvl);
    victim.atk -= Math.round(2 + 0.1 * victim.lvl);
    logger.add(`[${acted.username}] Brave Solomon is on mode **Scripts Of Peace**!`);
}
const ScriptsOfP = new bcworkshop.Mode("Scripts Of Peace", ReqSPeace, SPeace);

function ReqSWar(acted, victim, logger){
    return acted.sp >= 5;
}
function SWar(acted, victim, logger){
    if(!!acted.bey.ScriptsOfPeace.active) acted.bey.ScriptsOfPeace.active = false;
    acted.atk += Math.round(2 + 0.1 * acted.lvl);
    acted.sp -= Math.round(0.8 + 0.02 * acted.lvl);
    acted.stamina -= Math.round(0.5 + 0.03 * acted.lvl);
    logger.add(`[${acted.username}] Brave Solomon is on mode **Scripts Of War**!`);
}
const ScriptsOfW = new bcworkshop.Mode("Scripts Of War", ReqSWar, SWar);

function swdropreq(a,b,c){
    return !!a.bey.ScriptsOfWar.active;
}

function swdrop(a,b,c){
    a.sp-=1;
    if(a.sp<=0)a.bey.ScriptsOfWar.active=false;
}

const SWDrop = new bcworkshop.Passive("SoW Drop", swdropreq, swdrop);

const BraveSolomon = new bcworkshop.Beyblade({name:"Brave Solomon", type: "Attack", imageLink:"https://i.ibb.co/m6gWwM6/solomon.png"})

.attachSpecial(RoyalG)
.attachSpecial(KSacrifice)
.attachPassive(GoldenT)
.attachPassive(LProfecy)
.attachMode(ScriptsOfP)
.attachMode(ScriptsOfW)
.attachPassive(SWDrop)
.addProperty("KSUsed", false)
.setDefaultSD("Right");

module.exports = BraveSolomon;