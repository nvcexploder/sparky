const Discord = require('discord.js');
const client = new Discord.Client();
let conf = require('rc')('sparky', {});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  console.log(`${JSON.stringify(msg)}`)
  if (msg.content === `help`) {
    msg.reply(`You're doing great!`);
  }
});

client.login(conf.token);
// console.log(`${JSON.stringify(conf)}`)
