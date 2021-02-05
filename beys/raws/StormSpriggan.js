const bcworkshop = require("bcworkshop");

function CounterBreakRequirement(acted, victim, logger){//Counter Break Requirement
    return victim.move == "fight" && acted.sp >= 2
}

function CounterBreakEffect(acted, victim, logger){//Counter Break Effect
    switch(acted.bey.TrueCounterChance){
         case 0:
              victim.hp -= (victim.atk/100 * (120 + .3 * acted.lvl));
              victim.atk -= (victim.atk/100 * (50 + .2 * acted.lvl));
              logger.add(`[${acted.username}] Storm Spriggan used **Counter Break**!`);
         break;
         case 1:
             victim.hp -= (victim.atk/100 * (120 + .5 * acted.lvl));
             victim.atk -= (victim.atk/100 * (30 + .4 * acted.lvl));
             logger.add(`[${acted.username}] Storm Spriggan used **True Counter Break**!`);
         break;
    }
    acted.sp -= 2;
}

const CounterBreak = new bcworkshop.Passive("Counter Break", CounterBreakRequirement, CounterBreakEffect, 200);


function UpperLaunchRequirement(acted, victim, logger){//Upper Launch Requirement
    return acted.sp >= 4
}


function UpperLaunchEffect(acted, victim, logger){//Upper Launch Effect
    victim.hp -= (70 + .5 * acted.lvl);
    acted.stamina -= (1 + .004 * acted.lvl);
    logger.add(`[${acted.username}] Storm Spriggan used **Upper Launch**!`);
}

const UpperLaunch = new bcworkshop.Special("Upper Launch", UpperLaunchRequirement, UpperLaunchEffect);


function DeterminationResonanceRequirement(acted, victim, logger){//Determination Resonance Requirement
    return acted.hp <= (acted.maxhp/100 * 50)
}

function DeterminationResonanceEffect(acted, victim, logger){//Determination Resonance Effect
    acted.hp += (acted.maxhp/100 * 20 + .1 * acted.lvl);
}

const DeterminationResonance = new bcworkshop.Passive("Determination Resonance", DeterminationResonanceRequirement, DeterminationResonanceEffect, 240);


const StormSpriggan = new bcworkshop.Beyblade({name: "Storm Spriggan", type: "Balance", imageLink: "https://vignette.wikia.nocookie.net/beyblade/images/a/a7/Beyblade_Spriggan.png/revision/latest?cb=20181218235223", aliases: "Storm Spryzen"})

.attachPassive(CounterBreak)
.attachSpecial(UpperLaunch)
.attachPassive(DeterminationResonance)
.addProperty("TrueCounterChance", "(Math.floor(Math.random() * 2))")
.setDefaultSD("Right");
module.exports = StormSpriggan; 