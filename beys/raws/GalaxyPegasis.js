const bcworkshop = require("bcworkshop");
const { MessageEmbed } = require("discord.js");


function StarGazerRequirement(acted, victim, logger){
    return acted.bey.fragment >= 1;
}

function StarGazerEffect(acted, victim, logger){
    victim.hp -= (80 + 0.4 * acted.lvl);
    victim.stability -= 18;
    acted.stability -= 5;
    acted.stamina = (acted.stamina/100*80);
    acted.bey.fragment -= 1;
    logger.add(`[${acted.username}] Galaxy Pegasis used **Star Gazer**!`);
}

const StarGazer = new bcworkshop.Special("Star Gazer", StarGazerRequirement, StarGazerEffect);


function StardustDriverRequirement(acted, victim, logger){
    return acted.bey.fragment >= 2;
}

function StardustDriverEffect(acted, victim, logger){
    if((Math.floor(Math.random() * 10) <= 2) && acted.bey.galaxynova == false){
    acted.bey.galaxynova = true;
    logger.add(`[${acted.username}] Galaxy Nova availaible! One use only, make it count!`);
    }
    victim.hp -= (80 + 0.5 * acted.lvl);
    victim.stability -= 20;
    acted.stamina = (acted.stamina/100*50);
    acted.bey.fragment -= 2;
    logger.add(`[${acted.username}] Galaxy Pegasis used **Stardust Driver**!`);
}

const StardustDriver = new bcworkshop.Special("Stardust Driver", StardustDriverRequirement, StardustDriverEffect);


function GalaxyNovaRequirement(acted, victim, logger){
    return acted.bey.galaxynova = true && !acted.bey.lock && acted.bey.fragment >= 3;
}

function GalaxyNovaEffect(acted, victim, logger){
    victim.hp -= (victim.hp/2);
    victim.stability -= 30;
    acted.stamina = (acted.stamina/100*20);
    acted.bey.fragment -= 3;
    logger.add(`[${acted.username}] Galaxy Pegasis used **Galaxy Nova**!`);
    acted.bey.lock = true;
}

const GalaxyNova = new bcworkshop.Special("Galaxy Nova", GalaxyNovaRequirement, GalaxyNovaEffect);


function StarFragmentMeterRequirement(acted, victim, logger){
    return acted.bey.fragment < 3 && acted.move == "fight";
}

function StarFragmentMeterEffect(acted, victim, logger){
    acted.bey.fragment += 0.1;
    if(acted.sp >= 1)
    {acted.sp -= 1;
     acted.bey.fragment += 0.2;}
}

const StarFragment = new bcworkshop.Passive("Star Fragment Gauge", StarFragmentMeterRequirement, StarFragmentMeterEffect, 0);


function StarFragmentBuffRequirement(acted, victim, logger){
    return true;
}

function StarFragmentBuffEffect(acted, victim, logger){
    if (acted.bey.fragment >= 1 && acted.bey.fragment < 1.1){
    acted.atk += (acted.atk/100*120);}
    if (acted.bey.fragment >= 2 && acted.bey.fragment < 2.1){
        acted.atk += (acted.atk/100*140);}
    if (acted.bey.fragment >= 3){
        acted.atk += (acted.atk/100*160);}
}

const StarFragmentBuff = new bcworkshop.Mode("Fragment Buff", StarFragmentBuffRequirement, StarFragmentBuffEffect);


const GalaxyPegasis = new bcworkshop.Beyblade({name: "Galaxy Pegasis", type: "Attack", imageLink: "https://i.imgur.com/4nEAjYe.png", aliases: ["Galaxy Pegasus"]})
.addProperty("fragment", 0)
.addProperty("lock", false)
.addProperty("galaxynova", false)
.attachPassive(StarFragment)
.attachMode(StarFragmentBuff)
.attachSpecial(StarGazer)
.attachSpecial(GalaxyNova)
.attachSpecial(StardustDriver)
.setDefaultSD("Right")
module.exports = GalaxyPegasis;