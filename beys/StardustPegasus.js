const Beyblade=require("./Beyblade.js");class StardustPegasus extends Beyblade{constructor(){super("Stardust Pegasus","Balance","https://images-ext-2.discordapp.net/external/K_4MQL_GWv7fY5pK68pwIL1yCFNQO1mEXGRdhS4hxUQ/https/media.discordapp.net/attachments/810371076692508692/810375788364955648/image0.png"),this.specials=[{name:"Stardust Supernova",requires:function(e,t,a){return e.sp>=3&&0==e.bey.UnearthSpeed.active},execute:function(e,t,a){e.sp-=3,t.hp-=(t.atk+e.atk)*(1+.05*e.lvl-1),e.hp=Math.round(e.hp/100*70),a.add(`[${e.username}] Stardust Pegasus used **Stardust Supernova**!`)}},{name:"Ultimate Stardust Supernova",requires:function(e,t,a){return e.sp>=5&&1==e.bey.UnearthSpeed.active},execute:function(e,t,a){e.sp-=5,t.hp-=(t.atk+e.atk)*(1+.07*e.lvl-1),e.bey.UnearthSpeed.active=!1,a.add(`[${e.username}] Stardust Pegasus used **Ultimate Stardust Supernova**!`)}}],this.passives=[{name:"Stardust",requires:function(e,t,a){return!0},execute:function(e,t,a){e.hp<e.maxhp/100*90?e.bey.type="Attack":e.stamina<e.maxstamina/100*50?e.bey.type="Stamina":e.hp<e.maxhp/100*30&&(e.bey.type="Defense")},cd:0}],this.UnearthSpeed={active:void 0,requires:function(e,t,a){return e.hp<Math.round(e.maxhp/100*50)&&!e.bey.USUsed},boost:function(e,t,a){e.bey.USUsed=!0,setTimeout(()=>{e.bey.UnearthSpeed.active=!1,a.add(`${e.username}] Stardust Pegasus returned to normal speed.`)},2e4),t.stamina-=.1+.01*e.lvl,e.stamina+=1+.01*e.lvl,t.atk=Math.round(t.atk/100*90),e.atk=Math.round(t.atk/100*110),a.add(`[${e.username}] Stardust Pegasus went into an **Unearthly Speed**!`)}},this.SlowTime={active:void 0,requires:function(e,t,a){return e.hp<Math.round(e.maxhp/100*25)&&!e.bey.timeStopped},boost:function(e,t,a){e.bey.timeStopped=!0,setTimeout(()=>{e.bey.SlowTime.active=!1,a.add("Time shall move again.")},1e4),e.stamina+=2+.01*e.lvl,t.stamina+=2+.01*t.lvl,e.hp+=50+1*e.lvl-1,t.hp+=50+1.5*t.lvl-1,t.atk=0,a.add(`[${e.username}] Stardust Pegasus slowed time!`)}},this.timeStopped=!1,this.USUsed=!1,this.sd=0,this.sdchangable=!0}}module.exports=StardustPegasus;