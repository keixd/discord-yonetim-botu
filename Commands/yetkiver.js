const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");
exports.run = async(client, message, args, ops, member) => {
    const s = message.guild.channels.find(c => c.id == "799738228731019276");


    if(!message.member.roles.get(ayarlar.yetkilisorumlusu) 
       && (!message.member.roles.get(ayarlar.yetkilialım) 
       && !message.member.hasPermission('ADMINISTRATOR'))) return message.channel.send("**Gerekli yetkiye sahip değilsin!**");

   let vUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

  if(!vUser) return message.channel.send("Kullanıcı etiketlemelisin veya ID girmelisin.")

   if(!vUser.roles.has(ayarlar.baslangic)){
    vUser.addRole(ayarlar.baslangic)
     vUser.addRole(ayarlar.rolregister)
   let tip = args[0];

     let embed = new Discord.RichEmbed() 
  .setColor("BLACK")
  .setAuthor(message.author.tag , message.author.avatarURL)
  .setDescription( `${vUser} adlı üyesine <@&${ayarlar.baslangic}> <@&${ayarlar.rolregister}> adlı rol verildi.`)
  message.channel.send(embed)
       const kanal = message.guild.channels.find(c => c.id == ayarlar.log);

     const x = new Discord.RichEmbed()
        .setColor("RANDOM")
.setAuthor(message.author.tag , message.author.avatarURL)
.setDescription(`${vUser} adlı üyeye ${message.author} tarafından <@&${ayarlar.baslangic}> <@&${ayarlar.rolregister}>  rolleri verildi. `)
        kanal.send(x)    
   }

     
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: 'yetkiver',
  description: '',
  usage: ''
};