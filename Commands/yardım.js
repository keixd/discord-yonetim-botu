const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
    if(!message.member.roles.get(ayarlar.rolregister) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("**Gerekli yetkiye sahip değilsin!**");

  message.channel.send(`
  \`\`\`js

         KULLANIM                          AÇIKLAMA                              
  

 1- ".rolbotkomut @etiket/ID"    |  ➹ Bot Commands rolünü verir.     
 Yetkili Sorumlusu & Yetili Alım & Yöneticiler
 
 2- ".rolban @etiket/ID"         |  ➹ Ban Authority rolünü verir.              
 Yetkili Sorumlusu & Yetili Alım & Yöneticiler 
 
 3- ".roljail @etiket/ID"        |  ➹ Jail Authority rolünü verir.         
 Yetkili Sorumlusu & Yetili Alım & Yöneticiler 
 
 4- ".rolregister etiket/ID"     | ➹ Westa Klouse rolünü verir.       
 Register Coach & Yetili Alım & Yöneticiler
 
 5- "rolterapist @etiket/ID"     | Terapist rolü verir.                    
 Terapist Manager & Yetili Alım & Yöneticiler
 
 6- ".yetki yükselt @etiket"     | Üstünde olan yetkiyi 1 kez yükseltir.   
 Yöneticiler
 
 7- ".yetki düşür @etiket"       |  Üstünde olan yetkiyi 1 kez düşürür.     
 Yöneticiler
 
 8- ".yetkiver @etiket/ID"       |  Başlangıç rollerini verir.              
 Yetkili Sorumlusu & Yetili Alım & Yöneticiler 
\`\`\``)

  
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["commands","yardım","komutlar"],
  permLevel: 0
};

module.exports.help = {
  name: 'help',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};
