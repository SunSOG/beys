const Beyblade=require("./Beyblade.js");class Deathscyther extends Beyblade{constructor(){super("Deathscyther","Attack","https://i.ibb.co/jTyZXz9/death.png"),this.specials=[{name:"Special",requires:function(e,t,s){return e.sp>3},execute:function(e,t,s){let a=t.hp,i=0;for(var r=0;r<e.lvl;r++)i+=.3;let h=50+i;t.hp=t.hp-h;let n=a-t.hp,c=(new Discord.MessageEmbed).setTitle(`[${e.username}] Deathscyther used **Death Slash**.`).setDescription(`Deathscyther utilized it's Accel driver to enhance speed as it crashed into it's opponent, striking with one of it's scythe shaped blades to deal ${n} damage.`).setColor("#551a8b");s.channel.createMessage({embed:c})}}],this.passives=[{name:"Passive",requires:function(e,t,s){return!1},execute:function(e,t,s){t.hp=t.hp-28;let a=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");s.channel.createMessage({embed:a})},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=Deathscyther;