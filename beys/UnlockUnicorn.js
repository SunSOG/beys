const Beyblade=require("./Beyblade.js");class UnlockUnicorn extends Beyblade{constructor(){super("Unlock Unicorn","Defense","https://i.ibb.co/fFqZBQf/Unicorn.png"),this.specials=[{name:"Special",requires:function(e,t,s){return e.sp>3},execute:function(e,t,s){if(t.atk=0){let t=(new Discord.MessageEmbed).setTitle(`[${e.username}] Unlock Unicorn failed to use **Horn Launch**.`).setDescription("Unicorn attempted to use Horn Launch, but without any incoming attacks, it failed to do anything!").setColor("#551a8b");s.channel.createMessage({embed:t})}else if(t.atk>0){let a=t.hp,i=40,o=0;for(var n=0;n<e.lvl;n++)o+=.2;let r=i+o;t.hp=t.hp-r;let c=a-t.hp;t.stamina=t.stamina-1;let l=(new Discord.MessageEmbed).setTitle(`[${e.username}] Unlock Unicorn used **Horn Launch**.`).setDescription(`Unicorn used the numerous contact points on it's Needle driver to create friction and resist the enemy attack, allowing it to stop knockback as it instead drove it's horn straight into the opponent for ${c} damage, the destabilization from the attack dropped the opponent's stamina by 1.`).setColor("#551a8b");s.channel.createMessage({embed:l})}}}],this.passives=[{name:"Passive",requires:function(e,t,s){return!1},execute:function(e,t,s){t.hp=t.hp-28;let n=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");s.channel.createMessage({embed:n})},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=UnlockUnicorn;