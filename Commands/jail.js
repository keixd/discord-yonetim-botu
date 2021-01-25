const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");
exports.run = async(client, message, args, ops, member) => {
  const kanal = message.guild.channels.find(c => c.id == "762227199788580874");


    if(!message.member.roles.get(ayarlar.yetkilisorumlusu) 
       && (!message.member.roles.get(ayarlar.yetkilialım) 
       && !message.member.hasPermission('ADMINISTRATOR'))) return message.channel.send("**Gerekli yetkiye sahip değilsin!**");

   let vUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

  if(!vUser) return message.channel.send("Kullanıcı etiketlemelisin veya ID girmelisin.")

   if(!vUser.roles.has(ayarlar.roljail)){
    vUser.addRole(ayarlar.roljail)
   let tip = args[0];

     let embed = new Discord.RichEmbed() 
  .setColor("RANDOM")
  .setAuthor(message.author.tag , message.author.avatarURL)
  .setDescription( `${vUser} adlı üyesine <@&${ayarlar.roljail}> adlı rol verildi.`)
  message.channel.send(embed)
        let kanal = message.guild.channels.find(c => c.id == ayarlar.log);

     const x = new Discord.RichEmbed()
        .setColor("RANDOM")
.setAuthor(message.author.tag , message.author.avatarURL)
.setDescription(`${vUser} adlı üyeye ${message.author} tarafından <@&${ayarlar.roljail}> rolü verildi. `)
        kanal.send(x)     
   }

   if(vUser.roles.has(ayarlar.roljail)){
        vUser.removeRole(ayarlar.roljail)
        let to = new Discord.RichEmbed()
        .setColor("RANDOM")
.setAuthor(message.author.tag , message.author.avatarURL)
.setDescription(`${vUser} adlı üyesinden <@&${ayarlar.roljail}> adlı rol alındı.`)
        message.channel.send(to)
       let kanal = message.guild.channels.find(c => c.id == ayarlar.log);

     const x = new Discord.RichEmbed()
        .setColor("RANDOM")
.setAuthor(message.author.tag , message.author.avatarURL)
.setDescription(`${vUser} adlı üyeye ${message.author} tarafından <@&${ayarlar.roljail}> rolü alındı. `)
        kanal.send(x)           
      
       
}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: 'roljail',
  description: '',
  usage: ''
};