const Beyblade=require("./Beyblade.js");class AcidAnubis extends Beyblade{constructor(){super("Acid Anubis","Defense","https://i.ibb.co/pxVTFw4/Anubis.png"),this.specials=[{name:"Special",requires:function(e,s,t){return e.sp>3},execute:function(e,s,t,i){let a=s.hp,n=0;for(var r=0;r<e.lvl;r++)n+=.2;let c=30+n;s.hp=s.hp-c;let o=a-s.hp;s.atk=Math.round(s.atk/100*60);let l=(new Discord.MessageEmbed).setTitle(`[${e.username}] Acid Anubis used **Perfect Circle**.`).setDescription(`Anubis achieved perfect stability thanks to it's well balanced Yell disc and the wide surface of it's Orbit tip, reducing enemy damage by 40%. The free spinning nature of Orbit allowed Anubis to increase it's speed for a aggressive attack, smashing into the opponent without recoiling for ${o} damage.`).setColor("#551a8b");t.channel.createMessage({embed:l})}}],this.passives=[{name:"Passive",requires:function(e,s,t,i){return!1},execute:function(e,s,t,i){s.hp=s.hp-28;let a=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");t.channel.createMessage({embed:a})},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=AcidAnubis;