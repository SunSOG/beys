const Beyblade=require("./Beyblade.js");class KreisSatan extends Beyblade{constructor(e,t){super("Kreis Satan","Defense","https://media.discordapp.net/attachments/736042245442109441/826657411175677992/image0.png?width=610&height=586",e,t),this.specials=[{name:"Special",requires:function(e,t,a){return e.sp>3},execute:function(e,t,a){switch(!0){case t.atk=0:let n=(new Discord.RichEmbed).setTitle(`[${e.username}] Kreis Satan used **Cyclone Loop**.`).setDescription(`Satan used the free-spinning wheels on it's Loop tip to catch onto the stadium slope and speed up at the cost of 1 stamina, before smashing into the opponent for ${c} damage!`).setColor("#551a8b"),i=t.hp,o=70,r=0;for(var s=0;s<e.lvl;s++)r+=.15;let l=o+r;t.hp=t.hp-l;let c=i-t.hp;e.stamina=e.stamina-1,a.channel.createMessage({embed:n});break;case t.atk=0:let d=(new Discord.RichEmbed).setTitle(`[${e.username}] Kreis Satan failed to use **Cyclone Loop**.`).setDescription("Satan tried to use Cyclone loop, but it failed due to interference by the opponent or lack of stamina!").setColor("#551a8b");a.channel.createMessage({embed:d});break;case t.atk>0&&e.stamina>Math.round(e.maxstamina/100*70):let h=t.hp,p=30,m=0;for(s=0;s<e.lvl;s++)m+=.2;let u=p+m;t.hp=t.hp-u;t.hp;t.atk=Math.round(t.atk/100*40);let b=(new Discord.RichEmbed).setTitle(`[${e.username}] Kreis Satan used **Roller Drift**.`).setDescription(`Satan was knocked off balance by the enemy's attack, using the free-spinning wheels on it's Loop tip to reduce damage by 60%, and drift around the stadium, smashing into the enemy for ${c}!`).setColor("#551a8b");a.channel.createMessage({embed:b});break;case t.atk>0&&e.stamina<Math.round(e.maxstamina/100*70):let f=(new Discord.RichEmbed).setTitle(`[${e.username}] Kreis Satan failed to use **Roller Drift**.`).setDescription("Satan tried to use Roller Drift, but it couldn't gather the friction against the wheels to do so due to being unable to tilt from a incoming attack! Or maybe stamina issues?").setColor("#551a8b");a.channel.createMessage({embed:f})}}}],this.passives=[{name:"Passive",requires:function(e,t,a){return!1},execute:function(e,t,a){t.hp=t.hp-28;let s=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");a.channel.createMessage({embed:s})},cd:180}],this.modes=[],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=KreisSatan;