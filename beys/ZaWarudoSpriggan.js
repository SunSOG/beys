const Beyblade=require("./Beyblade.js");class ZaWarudoSpriggan extends Beyblade{constructor(e,a){super("Za Warudo Spriggan","Balance","https://media.discordapp.net/attachments/692234599350140961/825977375069962250/image-removebg-preview.png",e,a),this.specials=[{name:"World Slash",requires:function(e,a,t){return e.sp>=3},execute:function(e,a,t){e.sp-=3,a.hp-=Math.round(20+1.1*(e.lvl-1)),t.add(`[${e.username}] Za Warudo Spriggan used **World Slash**!`),e.stability-=3}},{name:"Counter Break",requires:function(e,a,t){return e.sp>=4},execute:function(e,a,t){e.sp-=4,a.hp-=Math.round(26+1.1*(e.lvl-1)),a.stamina-=2}},{name:"Time Stop",requires:function(e,a,t){return e.sp>=5},execute:function(e,a,t){t.add("**The World: Time Stop!**"),e.bey.ZaWarudo.active=!0,setTimeout(()=>{e.bey.ZaWarudo.active=!1,t.add("**Time shall move again.**")},5e3)}}],this.passives=[{name:"World Spin",requires:function(e,a,t){return 1==e.bey.WorldSpin.active},execute:function(e,a,t){a.atk=Math.round(a.atk/100*80),1==Math.floor(5*Math.random())&&(a.atk=Math.round(a.atk/100*75))},cd:0}],this.WorldSpin={active:void 0,requires:function(e,a,t){return e.hp<e.maxhp/100*50&&0==e.bey.WSUsed},boost:function(e,a,t){e.bey.WSUsed=!0,e.bey.type="Defense",e.bey.WorldSpin.active=!0,t.add(`[${e.username}] **World Spin** activated!`)}},this.ZaWarudo={active:void 0,requires:function(e,a,t){return!1},boost:function(e,a,t){return!0}},this.modes=["WorldSpin","ZaWarudo"],this.WSUsed=!1,this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=ZaWarudoSpriggan;