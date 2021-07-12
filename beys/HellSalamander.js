const Beyblade=require("./Beyblade.js");class HellSalamander extends Beyblade{constructor(){super("Hell Salamander","Balance","https://i.imgur.com/5PgZtDe.png"),this.specials=[{name:"Sword Rebellion Hell Slash",requires:function(e,a,t){return e.sp>=3&&"Attack"==e.bey.type},execute:function(e,a,t){a.hp-=50+.7*e.lvl,e.stamina-=1+.007*e.lvl,e.stability-=20,a.stability-=25,e.sp-=3,t.add(`[${e.username}] Hell Salamander used **Sword Rebellion Hell Slash**!`)}},{name:"Raging Crimson Hellfire",requires:function(e,a,t){return e.sp>=3&&"Defense"==e.bey.type},execute:function(e,a,t){e.stamina=1+.016*e.lvl,e.stability+=5,a.atk=a.atk=a.atk/100*(50-.2*e.lvl),e.sp-=3,t.add(`[${e.username}] Hell Salamander used **Raging Crimson Hellfire**!`)}}],this.passives=[{name:"Forged In Fire",requires:function(e,a,t){return e.sp>=3&&"Defense"==e.bey.type&&"fight"==a.move},execute:function(e,a,t){Math.floor(9*Math.random())<=7&&(e.hp+=a.atk/100*(120+.2*e.lvl),e.sp-=3,t.add(`[${e.username}] Hell Salamander activated **Forged in Fire**!`))},cd:60},{name:"Untouchable Flame",requires:function(e,a,t){return e.sp>=4&&"Attack"==e.bey.type&&"fight"==a.move},execute:function(e,a,t){Math.floor(9*Math.random())<=4&&(a.atk-=a.atk=a.atk/100*(30-.2*e.lvl),e.stability-=5,e.sp-=4,t.add(`[${e.username}] Hell Salamander activated **Untouchable Flame**!`))},cd:60}],this.BurningResonance={active:void 0,requires:function(e,a,t){return e.sp>=.2&&"fight"==e.move},boost:function(e,a,t){switch(e.bey.SalamanderMode){case 0:a.atk-=Math.round(a.atk/100*90);break;case 1:e.atk+=Math.round(a.hp/100*5)}e.sp-=.2}},this.AttackMode={active:void 0,requires:function(e,a,t){return 1==e.bey.SalamanderMode},boost:function(e,a,t){e.bey.type="Attack",t.add(`[${e.username}] launched Hell Salamander in **Attack** mode!`)}},this.DefenseMode={active:void 0,requires:function(e,a,t){return 0==e.bey.SalamanderMode},boost:function(e,a,t){e.bey.type="Defense",t.add(`[${e.username}] launched Hell Salamander in **Defense** mode!`)}},this.SalamanderMode=Math.floor(2*Math.random()),this.sd=1,this.sdchangable=!1}}module.exports=HellSalamander;