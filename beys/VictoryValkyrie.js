const Beyblade=require("./Beyblade.js");class VictoryValkyrie extends Beyblade{constructor(){super("Victory Valkyrie","Attack","https://media.discordapp.net/attachments/736042245442109441/826656330042703922/image1.png?width=656&height=587"),this.specials=[],this.passives=[{name:"Shoot",requires:function(e,t,a){return!0},execute:function(e,t,a){e.lvl>=25?(e.bey.logged||(a.add(`${e.username} launched using **Flash Shoot**!`),e.bey.logged=!0),e.atk=Math.round(e.atk/100*110)):e.lvl>=50?(e.bey.logged||(a.add(`${e.username} launched using **True Flash Shoot**!`),e.bey.logged=!0),e.atk=Math.round(e.atk/100*115)):e.lvl>=75?(e.bey.logged||(a.add(`${e.username} launched usin **True Flash Rush Shoot**!`),e.bey.logged=!0),e.atk=Math.round(e.atk/100*120)):100==e.lvl?(e.bey.logged||(a.add(`${e.username} launched using **Jet Shoot**!`),e.bey.logged=!0),e.atk=Math.round(e.atk/100*130)):(e.bey.logged||(a.add(`${e.username} launched using **Rush Shoot**!`),e.bey.logged=!0),e.atk=Math.round(e.atk/100*105))},cd:0},{name:"Boost",requires:function(e,t,a){return!e.bey.boostUsed&&e.lvl>15},execute:function(e,t,a){e.bey.boostUsed=!0,e.lvl<=50?(e.stability+=8,e.stamina+=4):(e.stability+=18,e.stamina+=6)},cd:0}],this.logged=!1,this.boostUsed=!1,this.sd=0,this.sdchangable=!1}}module.exports=VictoryValkyrie;