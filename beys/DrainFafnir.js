const Beyblade=require("./Beyblade.js");class DrainFafnir extends Beyblade{constructor(){super("Drain Fafnir","Stamina","https://static.wikia.nocookie.net/beyblade/images/2/21/Beyblade_Drain_Fafnir.png/revision/latest?cb=20180716233052"),this.specials=[],this.passives=[{name:"Nothing Break",requires:function(a,i,n){return a.stamina>=a.maxstamina/100*80&&a.sp>=3},execute:function(a,i,n){a.stamina-=a.maxstamina/100*40,i.hp-=.02*a.atk*a.lvl,a.sp=0,n.add(`[${a.username}] Drain Fafnir used **Nothing Break**!`)},cd:150}],this.DrainSpin={active:void 0,requires:function(a,i,n){return a.stamina<i.stamina&&a.sp>=.5&&a.sp<3&&i.move==fight},boost:function(a,i,n){i.stamina-=.1+.001*a.lvl,a.stamina+=.1+.001*a.lvl,a.sp-=.5}},this.TrueDrainSpin={active:void 0,requires:function(a,i,n){return a.stamina<i.stamina&&a.sp>=3&&i.move==fight},boost:function(a,i,n){i.stamina-=1+.002*a.lvl,a.stamina+=1+.002*a.lvl,a.sp-=1}},this.FullPowerResonance={active:void 0,requires:function(a,i,n){return a.hp<=a.maxhp/100*40&&a.sp>=.5},boost:function(a,i,n){a.atk+=a.atk/100*.15*a.lvl,a.sp-=.5}},this.sd=1,this.sdchangable=!1}}module.exports=DrainFafnir;