const Beyblade=require("./Beyblade.js");class ShelterRegulus extends Beyblade{constructor(){super("Shelter Regulus","Balance","https://vignette.wikia.nocookie.net/beyblade/images/b/b9/Beyblade_Shelter_Regulus.png/revision/latest?cb=20180716235739"),this.specials=[{name:"Special",requires:function(e,t,a){return e.sp>3},execute:function(e,t,a){if(e.stamina>Math.round(e.maxstamina/100*50)){let n=t.hp,i=70,o=0;for(var s=0;s<e.lvl;s++)o+=.5;let r=i+o;t.hp=t.hp-r;let c=n-t.hp;e.stamina=e.stamina-2;let l=(new Discord.MessageEmbed).setTitle(`[${e.username}] Shelter Regulus used **Fang Attack**. `).setDescription(`Regulus' extended claw-like contact points individually struck the opponent for a quick multi-hit attack, dealing ${c} damage. The consistent contact dropped Regulus' stamina by 2.`).setColor("#551a8b");a.channel.createMessage({embed:l})}else if(e.stamina<=Math.round(e.maxstamina/100*50)){t.atk=Math.round(t.atk/100*20),e.atk=t.atk;let s=(new Discord.MessageEmbed).setTitle(`[${e.username}] Shelter Regulus used **Shelter Defense**. `).setDescription("Regulus took the center of the stadium, using it's taller height to avoid direct contact with the opponent and instead make them collide against Regulus' Star frame, reducing 80% of incoming basic attack damage and inflicting the attack damage back at the opponent.").setColor("#551a8b");a.channel.createMessage({embed:s})}}}],this.passives=[{name:"Passive",requires:function(e,t,a){let s;return s=e.hp<=Math.round(e.maxhp/100*30)},execute:function(e,t,a){if(e.stamina>Math.round(e.maxstamina/100*50)){e.bey.type="Attack",t.hp=t.hp-35;let s=(new Discord.MessageEmbed).setTitle(`[${e.username}] Shelter Regulus activated **Tower Change**.`).setDescription("Regulus' high spin velocity caused the tabs on it's Tower driver to extend out, retracting the tip on in for a decrease in height, and extend it's contact points out for a more aggressive design. Regulus' type has changed to **Attack** allowing it to claw away at the opponent with it's contact points to dish out 35 damage.").setColor("#551a8b");a.channel.createMessage({embed:s})}else if(e.stamina<=Math.round(e.maxstamina/100*50)){e.bey.type="Defense",e.stamina=e.stamina+1,t.atk=Math.round(t.atk/100*80);let s=(new Discord.MessageEmbed).setTitle(`[${e.username}] Shelter Regulus activated **Tower Change**.`).setDescription("Regulus' low spin velocity caused the tabs on it's Tower driver to pull in, extending the tip on it for a increase in height, and retract it's contact points for a more defensive design. Regulus' type has changed to **Defense**. 20% damage reduced from incoming basic attacks and stamina increased by 1.").setColor("#551a8b");a.channel.createMessage({embed:s})}},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=ShelterRegulus;