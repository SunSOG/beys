const bcworkshop = require("bcworkshop");
const { MessageEmbed } = require("discord.js");

function MetalDragonCrushRequirement(acted, victim, logger){
    return acted.hp <= (acted.maxhp/100 * 20) && !acted.bey.Used;
}

function MetalDragonCrushEffect(acted, victim, logger){
    let damage = (acted.maxhp - acted.hp);
    victim.hp -= damage/3;
    acted.bey.Used = true;
    logger.add(`[${acted.username}] Nightmare Longinús used **Metal Dragon Crush**!`);
}

const MetalDragonCrush = new bcworkshop.Special("Metal Dragon Crush", MetalDragonCrushRequirement, MetalDragonCrushEffect);


function MetalDragonPassiveRequirement(acted, victim, logger){
    return true;
}

function MetalDragonCrushPassiveEffect(acted, victim, logger){
    acted.atk += (acted.maxhp - acted.hp (acted.hp/9));
}

const MetalDragonCrushPassive = new bcworkshop.Mode("Metal Dragon Crush Passive", MetalDragonPassiveRequirement, MetalDragonCrushPassiveEffect);


function MetalDragonRampageRequirement(acted, victim, logger){
    return acted.sp >= 1;
}

function MetalDragonRampageEffect(acted, victim, logger){
    acted.hp -= (acted.atk * 2);
    acted.sp -= 1;
}

const MetalDragonRampage = new bcworkshop.Passive("Metal Dragon Rampage", MetalDragonRampageRequirement, MetalDragonRampageEffect);

const NightmareLonginus = new bcworkshop.Beyblade({name: "Nightmare Longinús", type: "Attack", imageLink: "https://static.wikia.nocookie.net/beyblade/images/a/a5/Beyblade_Nightmare_Longinus.png/revision/latest?cb=20200218030950", aliases: ["Nightmare Lúinor"]})
.addProperty("Used", false)
.attachSpecial(MetalDragonCrush)
.attachMode(MetalDragonCrushPassive)
.attachPassive(MetalDragonRampage)
.setDefaultSD("Left")
module.exports = NightmareLonginus;