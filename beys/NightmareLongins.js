const Beyblade=require("./Beyblade.js");class NightmareLongins extends Beyblade{constructor(){super("Nightmare Longinús","Attack","https://static.wikia.nocookie.net/beyblade/images/a/a5/Beyblade_Nightmare_Longinus.png/revision/latest?cb=20200218030950"),this.specials=[{name:"Metal Dragon Crush",requires:function(e,s,t){return e.hp<=e.maxhp/100*20&&!e.bey.Used},execute:function(e,s,t){let a=e.maxhp-e.hp;s.hp-=a/3,e.bey.Used=!0,t.add(`[${e.username}] Nightmare Longinús used **Metal Dragon Crush**!`)}}],this.passives=[{name:"Metal Dragon Rampage",requires:function(e,s,t){return e.sp>=1},execute:function(e,s,t){e.hp-=2*e.atk,e.sp-=1},cd:0}],this.MetalDragonCrushPassive={active:void 0,requires:function(e,s,t){return!0},boost:function(e,s,t){e.atk+=e.maxhp-e.hp(e.hp/9)}},this.Used=!1,this.sd=1,this.sdchangable=!1}}module.exports=NightmareLongins;