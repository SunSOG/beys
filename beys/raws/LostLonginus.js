const bcworkshop = require("bcworkshop");

function LostSpiralRequirement(acted, victim, logger){//Lost Spiral Requirement
    return acted.sp >= 3
}

function LostSpiralEffect(acted, victim, logger){//Lost Spiral Effect
    victim.hp -= (50 + .5 * acted.lvl);
    victim.stability -= (7 + .03 * acted.lvl);
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
    return acted.sp >= 5 && acted.hp <= (acted.maxhp/100 * 50) && victim.hp <= (victim.maxhp/100 * 50) && !acted.bey.boostUsed;
}

function FierceResonanceEffect(acted, victim, logger){//Fierce Resonance Effect
    acted.bey.boostUsed = true;
    acted.stability += 20;
    acted.hp += (acted.maxhp/100 * 20);
    logger.add(`[${acted.username}] is getting serious! **Fierce Resonance** activated!`);
}

const FierceResonance = new bcworkshop.Passive("Fierce Resonance", FierceResonanceRequirement, FierceResonanceEffect);


const LostLonginus = new bcworkshop.Beyblade({name: "Lost Longinus", type: "Attack", imagelink: "https://static.wikia.nocookie.net/beyblade/images/3/38/Beyblade_Longinus.png/revision/latest/top-crop/width/450/height/450?cb=20200218033300", aliases: "Lost Luinor"})
.attachMode(TheFirstLeftSpin)
.attachPassive(FierceResonance)
.attachSpecial(LostSpiral)
.addProperty("boostUsed", false)
.setDefaultSD("Left");

module.exports = LostLonginus;