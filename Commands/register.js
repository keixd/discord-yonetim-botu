const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");
exports.run = async(client, message, args, ops, member) => {
  const kanal = message.guild.channels.find(c => c.id == "762227199788580874");


    if(!message.member.roles.get(ayarlar.registersorumlusu) 
       && (!message.member.roles.get(ayarlar.yetkilialım) 
       && !message.member.hasPermission('ADMINISTRATOR'))) return message.channel.send("**Gerekli yetkiye sahip değilsin!**");

   let vUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

  if(!vUser) return message.channel.send("Kullanıcı etiketlemelisin veya ID girmelisin.")

   if(!vUser.roles.has(ayarlar.rolregister)){
    vUser.addRole(ayarlar.rolregister)
  let embed = new Discord.RichEmbed() 
  .setColor("RANDOM")
  .setAuthor(message.author.tag , message.author.avatarURL)
  .setDescription( `${vUser} adlı üyesine <@&${ayarlar.rolregister}> adlı rol verildi.`)
  message.channel.send(embed)
      let kanal = message.guild.channels.find(c => c.id == ayarlar.log);
     const x = new Discord.RichEmbed()
        .setColor("RANDOM")
.setAuthor(message.author.tag , message.author.avatarURL)
.setDescription(`${vUser} adlı üyeye ${message.author} tarafından <@&${ayarlar.rolregister}> rolü verildi. `)
        kanal.send(x)    
   }

   if(vUser.roles.has(ayarlar.rolregister)){
        vUser.removeRole(ayarlar.rolregister)
        let to = new Discord.RichEmbed()
        .setColor("RANDOM")
.setAuthor(message.author.tag , message.author.avatarURL)
.setDescription(`${vUser} adlı üyesinden <@&${ayarlar.rolregister}> adlı rol alındı.`)
        message.channel.send(to)
   let kanal = message.guild.channels.find(c => c.id == ayarlar.log);
     const x = new Discord.RichEmbed()
        .setColor("RANDOM")
.setAuthor(message.author.tag , message.author.avatarURL)
.setDescription(`${vUser} adlı üyesinden ${message.author} tarafından <@&${ayarlar.rolregister}> rolü alındı. `)
        kanal.send(x)            
      
       
}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: 'rolregister',
  description: '',
  usage: ''
};