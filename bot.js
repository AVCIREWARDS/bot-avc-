const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Botun olan ${client.user.tag} sunucuya girdi!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('**Aleyküm Selam!**');
  }

});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'merhaba') {
    msg.reply('**merhaba hoş geldin!**');
}

});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'invite kasım nasıl ödül alacam') {
    msg.reply(' <#1017843674022957096> *_aç_*✔️');
}

});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'nasıl ödül alabilirim') {
    msg.channel.send('**<#1017843674022957096> Buraya gidip bilet aç ve bekle! ✔️**');
}

});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selam') {
    msg.reply('**Aleyküm selam Hoş geldin!**');
}

});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamum aleyküm') {
    msg.reply('**Aleyküm selam Hoş geldin!**');
}

});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'nasılsın') {
    msg.reply('**iyim teşekkürler siz nasılsınız!**');
}

});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ping') {
    msg.reply('**Pong!** ${client.ws.ping}ms');
}

});

client.login("MTAzMDM4NjU3OTA2NTI5NDg0OA.Gz0MdP.rRPhIbTzKlro993HYfCNj_h-DmwjoNN7yWYvBk");

const http = require("http");
const express = require("express");
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) { 
    if ((new Date().getTime() - start) > milliseconds){         //// 7-24 AÇIK KALMASINI SAĞLAYAN KOMUT BİRŞEY DEĞİŞTİRMEYİN
      break;
    }
  }    
}
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");  
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);   //// 7-24 AÇIK KALMASINI SAĞLAYAN KOMUT BİRŞEY DEĞİŞTİRMEYİN
}, 3000);
