const bcworkshop = require("bcworkshop");
const { MessageEmbed } = require("discord.js");

function MugenLockRequirement(acted, victim, logger){
    return true;
}

function MugenLockEffect(acted, victim, logger){
    if(acted.hp <= 998 && acted.hp >= 1){
        if((Math.floor(Math.random() * acted.bey.Lock - 1) <= 0)){acted.bey.Lock = 0}
        else{acted.bey.Lock -= (victim.atk / 100 * 10 + 2)};
    }
        if(acted.bey.Lock > 0){acted.hp = 999}
        else{acted.hp = 0};
}

const MugenLock = new bcworkshop.Mode("Mugen Lock", MugenLockRequirement, MugenLockEffect);


function HybridBoostRequirement(acted, victim, logger){
    return acted.stamina <= (acted.stamina / 100 * 40) && acted.hp <= (acted.hp/100 * 25) && !acted.bey.HybridLock
}

function HybridBoostEffect(acted, victim, logger){
    acted.stamina = (acted.stamina + 5 * 2);
    acted.bey.HybridLock = true;
    logger.add(`[${acted.username}] Regalia γenesis activated **Hybrid Boost**!`);
}

const HybridBoost = new bcworkshop.Passive("Hybrid Boost", HybridBoostRequirement, HybridBoostEffect);


function RegaliaBigBangRequirement(acted, victim, logger){
    return acted.bey.HybridLock == true && !acted.bey.BBLock && acted.sp >= 3;
}

function RegaliaBigBangEffect(acted, victim, logger){
   victim.hp = (victim.hp/100 * 60)
   acted.sp -= 3;
   acted.bey.BBLock = true;
   logger.add(`[${acted.username}] Regalia γenesis activated **Regalia Bigbang**!`)
}

const RegaliaBigBang = new bcworkshop.Passive("Regalia Bigbang", RegaliaBigBangRequirement, RegaliaBigBangEffect);


function RegaliaScreamRequirement(acted, victim, logger){
    return acted.sp >= 3;
}

function RegaliaScreamEffect(acted, victim, logger){
    victim.hp = (victim.hp/100 * 75);
    acted.sp -= 3;
    logger.add(`[${acted.username}] Regalia γenesis activated **Regalia Scream**!`)
}

const RegaliaScream = new bcworkshop.Special("Regalia Scream", RegaliaScreamRequirement, RegaliaScreamEffect);

const Regaliaγenesis = new bcworkshop.Beyblade({name: "Regalia γenesis", type: "Defense", imageLink: "https://static.wikia.nocookie.net/beyblade/images/5/59/BBGT_Regalia_Genesis_Hybrid_Beyblade.png/revision/latest?cb=20200114025118", aliases: ["Royal Genesis"]})
.attachSpecial(RegaliaScream)
.attachPassive(HybridBoost)
.attachPassive(RegaliaBigBang)
.attachMode(MugenLock)
.addProperty("HybridLock", false)
.addProperty("Lock", 100)
.addProperty("BBLock", false)
.setDefaultSD("Right")
module.exports = Regaliaγenesis;