const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
exports.run = async (client, message, args) => {
  if (!message.member.roles.has(ayarlar.yetkilisorumlusu) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("")
  if (args[0] !== "yükselt" && args[0] !== "düşür")
    return message.channel.send(
      `Üyeleri belirtir misin?`
    );
  if (!message.mentions.members.first())
    return message.channel.send("Üyeleri belirtmelisin!");
  if (message.mentions.members.some(x => !x.roles.first || !x.hoistRole))
    return message.channel.send(
      "Etiketlediğin üyeler arasında hiç role sahip olmayan üyeler var!"
    );

  let enÜstYetkiliRolü = "799407729121951825"; // en üst yetkili rolünün id
  let enAltYetkiliRolü = "799407750160318474"; // en alt yetkili rolünün id
  let boosterRolü = "783364668184854549"; // sunucu booster rolü varsa idsini girin

  if (args[0] === "yükselt") {
    message.mentions.members.forEach(async x => {
      let yetki = message.guild.roles
        .filter(
          a =>
            a.position <= message.guild.roles.get(enÜstYetkiliRolü).position &&
            a.position >= x.hoistRole.position &&
            a.position >= message.guild.roles.get(enAltYetkiliRolü).position &&
            a.name !== "--------------------" &&
            a.hoist &&
            a.id !== boosterRolü
        )
        .sort((z, y) => z.position - y.position)
        .array();
      try {
        if (x.hoistRole.position < yetki[0].position) {
          x.addRole(yetki[0].id);
        } else if (yetki[1]) {
          x.addRole(yetki[1].id);
          x.removeRole(yetki[0].id);

        }
        message.react("✅");
         let kanal = message.guild.channels.find(c => c.id == ayarlar.log);
     const s = new Discord.RichEmbed()
        .setColor("RANDOM")
.setAuthor(message.author.tag , message.author.avatarURL)
.setDescription(`${x} adlı üyenin ${message.author} tarafından yetkisi yükseltildi.`)
        kanal.send(s)    
      } catch (err) {
        console.log(err);
 
 
      }
    });

  }

  if (args[0] === "düşür") {
    message.mentions.members.forEach(async x => {
      let yetki = message.guild.roles
        .filter(
          a =>
            a.position <= x.hoistRole.position &&
            a.position >= message.guild.roles.get(enAltYetkiliRolü).position &&
            a.position <= message.guild.roles.get(enÜstYetkiliRolü).position &&
            a.name !== "--------------------" &&
            a.hoist &&
            a.id !== boosterRolü
        )
        .sort((z, y) => z.position - y.position)
        .array()
        .reverse();
      try {
        if (yetki[1]) x.addRole(yetki[1].id);
        x.removeRole(yetki[0].id);
        message.react("✅");
    let kanal = message.guild.channels.find(c => c.id == ayarlar.log);
     const xe = new Discord.RichEmbed()
        .setColor("RANDOM")
.setAuthor(message.author.tag , message.author.avatarURL)
.setDescription(`${x} adlı üyenin ${message.author} tarafından yetkisi düşürüldü.`)
        kanal.send(xe)  
      } catch (err) {
        console.log(err);
 
      }

    });
 
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yetki",
  description: "Yetki artırma/düşürme sistemi.",
  usage: "yetki yükselt/düşür @etiketler",
  kategori: "yetkili"
};
