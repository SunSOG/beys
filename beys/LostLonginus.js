const Beyblade=require("./Beyblade.js");class LostLonginus extends Beyblade{constructor(s,e){super("Lost Longinus","Attack","https://media.discordapp.net/attachments/736042245442109441/826656822001664070/image0.png?width=644&height=548",s,e),this.specials=[{name:"Lost Spiral",requires:function(s,e,t){return s.sp>=3},execute:function(s,e,t){e.hp-=50+.5*s.lvl,e.stability-=7+.03*s.lvl,t.add(`[${s.username}] Lost Longinus used **Lost Spiral**!`)}}],this.passives=[{name:"Fierce Resonance",requires:function(s,e,t){return s.sp>=5&&s.hp<=s.maxhp/2&&!s.bey.boostUsed},execute:function(s,e,t){s.bey.boostUsed=!0,s.stability+=20,s.hp+=s.maxhp/100*20+.1*s.lvl,t.add(`[${s.username}] is getting serious! **Fierce Resonance** activated!`)},cd:0}],this.TheFirstLeftSpin={active:void 0,requires:function(s,e,t){return!0},boost:function(s,e,t){if(e.bey.sd!==s.bey.sd){let t;t=s.stamina>e.stamina?s.stamina-e.stamina:e.stamina-s.stamina,s.atk+=t,s.atk>100&&(s.atk=100)}else s.atk+=s.atk/100*18}},this.modes=["TheFirstLeftSpin"],this.boostUsed=!1,this.sd=1,this.sdchangable=!1,this.aliases=["Lost Luinor"]}}module.exports=LostLonginus;