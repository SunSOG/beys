const Beyblade=require("./Beyblade.js");class RockLeone extends Beyblade{constructor(){super("Rock Leone","Defense","https://vignette.wikia.nocookie.net/beyblade/images/0/03/RL.0.M.jpg/revision/latest?cb=20190920212035"),this.specials=[{name:"Special",requires:function(e,s,t){return e.sp>3},execute:function(e,s,t,a){e.atk=s.atk+20,s.atk=s.atk-30,s.hp=s.hp-40;let n=(new Discord.MessageEmbed).setTitle(`[${e.username}] Rock Leone used **Lion King's Roar'**. 20 attack absorbed and 40 damage dealt.`).setColor("#551a8b");t.channel.send(n)}}],this.passives=[{name:"Passive",requires:function(e,s,t,a){return!1},execute:function(e,s,t,a){s.hp=s.hp-28;let n=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");t.channel.createMessage({embed:n})},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=RockLeone;