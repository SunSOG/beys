const Beyblade=require("./Beyblade.js");class WizardFafnir extends Beyblade{constructor(){super("Wizard Fafnir","Stamina","https://cdn.discordapp.com/attachments/671569234891112482/800146361987104818/318.png"),this.specials=[{name:"Wizard Blow",requires:function(e,a,t){return e.sp>3},execute:function(e,a,t){a.stability-=30,a.stamina-=1,t.add("Wizard Fafnir rushes towards the opponent doing massive amounts of balance and stability damage.")}}],this.passives=[{name:"Ratchet Through",requires:function(e,a,t){return e.stamina<=1&&a.move==fight},execute:function(e,a,t){e.stamina+=2}},{name:"Ratchet Drain",requires:function(e,a,t){return e.stamina<=1&&a.move==fight},execute:function(e,a,t){e.stamina+=2}},{name:"Wizard Drain",requires:function(e,a,t){return e.stamina<=1&&a.move==fight},execute:function(e,a,t){e.stamina+=2}},{name:"Wizard Zero",requires:function(e,a,t){return e.stamina<=1&&a.move==fight},execute:function(e,a,t){e.stamina+=2}}],this.sd=1,this.sdchangable=!1}}module.exports=WizardFafnir;