const Beyblade=require("./Beyblade.js");class SpryzenRequiem extends Beyblade{constructor(){super("Spryzen Requiem","Balance","https://vignette.wikia.nocookie.net/beyblade/images/b/be/Beyblade_Spriggan_Requiem.png/revision/latest?cb=20200211223148"),this.specials=[{name:"Special",requires:function(e,t,a){return e.sp>3},execute:function(e,t,a){if("Right"==e.bey.sd){let i=t.hp,n=40,r=0;for(var s=0;s<e.lvl;s++)r+=.2;let o=n+r;t.hp=t.hp-o;let l=i-t.hp;e.atk=Math.round(t.atk/100*50);let p=(new Discord.MessageEmbed).setTitle(`[${e.username}] Spriggan Requiem used **Requiem Slash**.`).setDescription(`Spriggan's clockwise rotation allowed it to utilize it's higher stamina, slamming into the opponent aggressively causing them to spiral out of control. Exposing them to a fierce attack from Spriggan that dealt ${l} + half the opponent's attack damage!`).setColor("#551a8b");if(a.channel.createMessage({embed:p}),e.stamina>t.stamina){let i=t.hp,n=70,r=0;for(s=0;s<e.lvl;s++)r+=.2;let o=n+r;t.hp=t.hp-o;let l=i-t.hp;e.atk=Math.round(t.atk/100*50),t.stamina=t.stamina+2;let p=(new Discord.MessageEmbed).setTitle(`[${e.username}] Spriggan Requiem used **Requiem Slash**.`).setDescription(`Spriggan's clockwise rotation allowed it to utilize it's higher stamina, slamming into the opponent aggressively to increase their stamina and overload the opponent's stamina, increasing it by 2 and causing them to spiral out of control. Exposing them to a fierce attack from Spriggan that dealt ${l} + half the opponent's attack damage!`).setColor("#551a8b");a.channel.createMessage({embed:p})}}else if("Left"==e.bey.sd){t.stamina=t.stamina-2,e.stamina=e.stamina+1,t.atk=Math.round(t.atk/100*50);let s=(new Discord.MessageEmbed).setTitle(`[${e.username}] Spriggan Requiem used **Requiem Spin**.`).setDescription("Spriggan used the rubber on it's layer to absorb the opponent's attack and spin power dropping their stamina by 2 while, reducing damage by 50% and increasing stamina by 1 this turn.").setColor("#551a8b");a.channel.createMessage({embed:s})}}}],this.passives=[{name:"Passive",requires:function(e,t,a){return!1},execute:function(e,t,a){t.hp=t.hp-28;let s=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");a.channel.createMessage({embed:s})},cd:180}],this.sd=0,this.sdchangable=!0,this.aliases=[]}}module.exports=SpryzenRequiem;