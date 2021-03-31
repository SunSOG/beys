const Beyblade=require("./Beyblade.js");class DemonDestroyingBey extends Beyblade{constructor(){super("Demon Destroying Bey","Balance","https://cdn.glitch.com/7f7cfead-eec3-467c-866a-948e538f87c9%2Fkimetsunobeiburedo.png?v=1581766665854"),this.specials=[{name:"Wind Blading Form",requires:function(e,a,t){return e.sp>=3&&"Attack"==e.bey.type},execute:function(e,a,t){switch(Math.floor(3*Math.random())){case 0:e.bey.type="Balance";break;case 1:e.bey.type="Defense";break;case 2:e.bey.type="Stamina"}e.stability-=15,a.hp-=50+.4*e.lvl,e.bey.Form=!0,"Right"==e.bey.sd?t.add(`[${e.username}] Demon Destroying Bey used **Wind ${e.bey.animal} Form: ${e.bey.prefix} Storm**! Type changed to **${e.bey.type}**!`):t.add(`[${e.username}] Demon Destroying bey used **Wind ${e.bey.animal} Form: Vanishing ${e.bey.suffix}**! Type changed to **${e.bey.type}!`)}},{name:"Gaia Blading Form",requires:function(e,a,t){return e.sp>=3&&"Defense"==e.bey.type},execute:function(e,a,t){switch(Math.floor(3*Math.random())){case 0:e.bey.type="Balance";break;case 1:e.bey.type="Attack";break;case 2:e.bey.type="Stamina"}a.stability-=10,a.atk-=a.atk/100*30+.5*e.lvl,e.bey.Form=!0,"Right"==e.bey.sd?t.add(`[${e.username}] Demon Destroying Bey used **Gaia ${e.bey.animal} Form: ${e.bey.prefix} Force**! Type changed to **${e.bey.type}**!`):t.add(`[${e.username}] Demon Destroying Bey used **Gaia ${e.bey.animal} Form: Seismic ${e.bey.suffix}**! Type changed to **${e.bey.type}**!`)}},{name:"Flame Blading Form",requires:function(e,a,t){return e.sp>=4&&"Stamina"==e.bey.type},execute:function(e,a,t){switch(Math.floor(3*Math.random())){case 0:e.bey.type="Balance";break;case 1:e.bey.type="Attack";break;case 2:e.bey.type="Defense"}e.stamina+=2*e.stamina,e.stamina>15&&(e.stamina=15),e.stability+=10,e.bey.Form=!0,"Right"==e.bey.sd?t.add(`[${e.username}] Demon Destroying Bey used **Flame ${e.bey.animal} Form: ${e.bey.prefix} Inferno**! Type changed to **${e.bey.type}**!`):t.add(`[${e.username}] Demon Destroying Bey used **Flame ${e.bey.animal} Form: Blazing ${e.bey.suffix}**! Type changed to **${e.bey.type}**!`)}},{name:"Aqua Blading Form",requires:function(e,a,t){return e.sp>=5&&"Balance"==e.bey.type},execute:function(e,a,t){switch(Math.floor(3*Math.random())){case 0:e.bey.type="Stamina";break;case 1:e.bey.type="Attack";break;case 2:e.bey.type="Defense"}e.hp=2*e.hp,e.stability+=20,e.bey.Form=!0,"Right"==e.bey.sd?t.add(`[${e.username}] Demon Destroying Bey used **Aqua ${e.bey.animal} Form: ${e.bey.prefix} Tides**! Type changed to **${e.bey.type}**!`):t.add(`[${e.username}] Demon Destroying Bey used **Aqua ${e.bey.animal} Form: Abyssal ${e.bey.suffix}**! Type changed to **${e.bey.type}**!`)}}],this.passives=[],this.StartingMode={active:void 0,requires:function(e,a,t){return 0==e.bey.TypeLock},boost:function(e,a,t){switch(Math.floor(4*Math.random())){case 0:e.bey.type="Attack";break;case 1:e.bey.type="Defense";break;case 2:e.bey.type="Stamina";break;case 3:e.bey.type="Balance"}t.add(`[${e.username}] Demon Destroying Bey launched in **${e.bey.type}** Mode!`),e.bey.TypeLock=!0}},this.AnimalForm={active:void 0,requires:function(e,a,t){return 1==e.bey.Form},boost:function(e,a,t){switch(Math.floor(4*Math.random())){case 0:e.bey.animal="Dragon",e.bey.prefix="Daunting",e.bey.suffix="Roar",a.atk=a.atk/2;break;case 1:e.bey.animal="Tiger",e.bey.prefix="Beastly",e.bey.suffix="Claw",e.stamina+=a.stamina/100*40;break;case 2:e.bey.animal="Wolf",e.bey.prefix="Howling",e.bey.suffix="Fang",a.stability-=10;break;case 3:e.bey.animal="Phoenix",e.bey.prefix="Undying",e.bey.suffix="Wing",e.hp+=e.maxhp/100*5}e.bey.Form=!1}},this.Form=!1,this.TypeLock=!1,this.animal=!1,this.prefix=!1,this.suffix=!1,this.sd=0,this.sdchangable=!0}}module.exports=DemonDestroyingBey;