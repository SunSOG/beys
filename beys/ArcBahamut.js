const Beyblade=require("./Beyblade.js");class ArcBahamut extends Beyblade{constructor(e,a){super("Arc Bahamut","Defense","https://static.wikia.nocookie.net/beyblade/images/e/ea/Beyblade_Arc_Bahamut.png/revision/latest/scale-to-width-down/226?cb=20180717000037",e,a),this.specials=[{name:"Lone Wolf's Resonance",requires:function(e,a,s){return e.sp<=4&&e.hp<=e.maxhp/100*25},execute:function(e,a,s){e.hp+=a.atk/100*60+.3*e.lvl,e.stability+=20,a.atk=a.atk/100*40-.3*e.lvl,s.add(`[${e.username}] prefers going solo... Arc Bahamut used **Lone Wolf's Resonance**!`)}}],this.passives=[{name:"Final Crash",requires:function(e,a,s){return e.sp<=3&&e.hp<=e.maxhp/100*25&&"fight"==a.move},execute:function(e,a,s){e.hp+=e.maxhp/100*10+.15*e.lvl,a.hp-=2*a.atk,e.sp-=3,s.add(`[${e.username}] Arc Bahamut used **Final Crash**!`)},cd:80}],this.FinalGuard={active:void 0,requires:function(e,a,s){return e.hp<=e.maxhp/100*25},boost:function(e,a,s){a.atk-=a.atk/100*50+.2*e.lvl,e.stability+=2}},this.modes=["FinalGuard"],this.sd=1,this.sdchangable=!1,this.aliases=["Arc Balkesh"]}}module.exports=ArcBahamut;