const bcworkshop = require("bcworkshop");

function LostSpiralRequirement(acted, victim, logger){//Lost Spiral Requirement
    return acted.sp >= 3
}

function LostSpiralEffect(acted, victim, logger){//Lost Spiral Effect
    victim.hp -= (50 + .5 * acted.lvl);
    victim.stability -= (7 + .03 * acted.lvl);
    acted.sp -= 3;
    logger.add(`[${acted.username}] Lost Longinus used **Lost Spiral**!`);
}

const LostSpiral = new bcworkshop.Special("Lost Spiral", LostSpiralRequirement, LostSpiralEffect);


function TheFirstLeftSpinRequirement(acted, victim, logger){//The First Left Spin Requirement
    return true;
}

function TheFirstLeftSpinEffect(acted, victim, logger){//The First Left Spin Effect
    if (victim.bey.sd !== acted.bey.sd){
    let difference;
    if(acted.atk > victim.atk) difference = acted.atk - victim.atk;
    else difference = victim.atk - acted.atk;
    acted.atk += difference;
    if (acted.atk > 100) acted.atk = 100;}else{
        acted.atk += (acted.atk/100 * 15);
    }
}

const TheFirstLeftSpin = new bcworkshop.Mode("The First Left Spin", TheFirstLeftSpinRequirement, TheFirstLeftSpinEffect);


function FierceResonanceRequirement(acted, victim, logger){//Fierce Resonance Requirement
    return acted.sp >= 4 && acted.hp <= (acted.maxhp/100 * 30) && !acted.bey.boostUsed;
}

function FierceResonanceEffect(acted, victim, logger){//Fierce Resonance Effect
    acted.bey.boostUsed = true;
    acted.stability += 25;
    acted.hp += (acted.maxhp/100 * 20);
    acted.sp -= 4;
    logger.add(`[${acted.username}] is getting serious! **Fierce Resonance** activated!`);
}

const FierceResonance = new bcworkshop.Passive("Fierce Resonance", FierceResonanceRequirement, FierceResonanceEffect);


<<<<<<< HEAD
const LostLonginus = new bcworkshop.Beyblade({name: "Lost Longinus", type: "Attack", imagelink: "https://static.wikia.nocookie.net/beyblade/images/3/38/Beyblade_Longinus.png/revision/latest/top-crop/width/450/height/450?cb=20200218033300", aliases: "Lost Luinor"})
=======
function NightmareBoostRequirement(acted, victim, logger){//Nightmare Boost Requirement
    return !acted.bey.NBUsed;
}

function NightmareBoostEffect(acted, victim, logger){//Nightmare Boost Effect
    acted.stability += 25;
    acted.stamina += 1.6;
    acted.bey.NBUsed = true;
    logger.add(`[${acted.username}] launched with **Nightmare Boost**!`)
}

const NightmareBoost = new bcworkshop.Passive("Nightmare Boost", NightmareBoostRequirement, NightmareBoostEffect);


const LostLonginus = new bcworkshop.Beyblade({name: "Lost Longinus", type: "Attack", imagelink: "https://images-ext-1.discordapp.net/external/lNoNpspS9g1nzJBxP5lZccImhXU188m7w-KyTsydan4/%3Fcb%3D20200218033300/https/vignette.wikia.nocookie.net/beyblade/images/3/38/Beyblade_Longinus.png/revision/latest", aliases: "Lost Luinor"})
>>>>>>> cccb616c18db21c3802aa114b681ebeed9cf0e58
.attachMode(TheFirstLeftSpin)
.attachPassive(FierceResonance)
.attachPassive(NightmareBoost)
.attachSpecial(LostSpiral)
.addProperty("boostUsed", false)
.addProperty("NBUsed", false)
.setDefaultSD("Left");

module.exports = LostLonginus;