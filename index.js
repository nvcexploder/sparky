const Discord = require('discord.js');
const client = new Discord.Client();
const conf = {
  token: process.env['TOKEN']
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  console.log(`${JSON.stringify(msg)}`)
  if (msg.content.indexOf(`help`) > -1) {
    msg.reply(`You're doing great!`);
  }
});

client.login(conf.token);
