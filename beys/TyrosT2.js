const Beyblade=require("./Beyblade.js");class TyrosT2 extends Beyblade{constructor(){super("Tyros T2","Balance","https://i.ibb.co/Zc97drj/Tyros.png"),this.specials=[{name:"Special",requires:function(e,s,t){return e.sp>3},execute:function(e,s,t,a){s.stamina=s.stamina-1,s.atk=Math.round(s.atk/100*55);let r=(new Discord.MessageEmbed).setTitle(`[${e.username}] Tyros T2 used **Hound Barrier**.`).setDescription("Tyros used it's rounded layer and outward weight distribution to repel 45% of incoming damage, and stalling out the opponent to drop their stamina by 1!").setColor("#551a8b");t.channel.createMessage({embed:r})}}],this.passives=[{name:"Passive",requires:function(e,s,t,a){return!1},execute:function(e,s,t,a){s.hp=s.hp-28;let r=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");t.channel.createMessage({embed:r})},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=TyrosT2;