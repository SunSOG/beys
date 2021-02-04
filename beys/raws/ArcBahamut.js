const bcworkshop = require("bcworkshop");

function FinalGuardRequirement(acted, victim, logger){//Final Guard Requirements
     return acted.hp <= (acted.maxhp/100 * 25)
}

function FinalGuardEffect(acted, victim, logger){//Final Guard Effects
     victim.atk -= (victim.atk/100 * 50 + .25 * acted.lvl);
}

const FinalGuard = new bcworkshop.Mode("Final Guard", FinalGuardRequirement, FinalGuardEffect);


function FinalCrashRequirement(acted, victim, logger){//Final Crash Requirements
     return acted.sp <= 3 && acted.hp <= (acted.maxhp/100 * 25) && victim.move == "fight"
}

function FinalCrashEffect(acted, victim, logger){//Final Crash Effects
     acted.hp += (acted.maxhp/100 * 10 + .15 * acted.lvl);
     victim.hp -= (victim.atk * 2);
     acted.sp -= 1;
     logger.add(`Arc Bahamut used **Final Crash**!`);
}

const FinalCrash = new bcworkshop.Passive("Final Crash", FinalCrashRequirement, FinalCrashEffect, 80);


function LoneWolfResonanceRequirements(acted, victim, logger){//Lone Wolf Resonance Requirements
     return acted.sp <= 4 && acted.hp <= (acted.maxhp/100 * 25)
}

function LoneWolfResonanceEffects(acted, victim, logger){//Lone Wolf Resonance Effects
      acted.hp += (victim.atk/100 * 60 + .3 * acted.lvl);
      victim.atk = (victim.atk/100 * 40 - .3 * acted.lvl);
      logger.add(`Arc Bahamut used **Lone Wolf's Resonance**!`)
}

const LoneWolfResonance = new bcworkshop.Special("Lone Wolf's Resonance", LoneWolfResonanceRequirements, LoneWolfResonanceEffects);


const ArcBahamut = new bcworkshop.Beyblade({name: "Arc Bahamut", type: "Defense", imageLink: "https://imgur.com/a/rbqnFgK", aliases: "Arc Balkesh"})
.attachSpecial(LoneWolfResonance)
.attachPassive(FinalCrash)
.attachMode(FinalGuard)
.setDefaultSD("Left");
module.exports = ArcBahamut;