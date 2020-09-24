const Discord = require('discord.js');
const client = new Discord.Client();
const conf = require('rc')('sparky');
const TTS = require("discord-tts");

// commands - these files should be named after the commands the perform
// for example, !roll -> roll
const roll = require('./roll');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  console.log(`${JSON.stringify(msg)}`)
  if (msg.content.indexOf(`help`) > -1) {
    msg.reply(`You're doing great!`);
  }
  if (msg.content.indexOf(`!rolld20`)===0) {
    msg.reply(`it's ${roll.roll(roll.d20)  }`)
  }
  if (msg.content.indexOf(`!justa20`)===0) {
    msg.reply(`is a cheater`)
  }
  if(msg.content.indexOf(`!say`) > -1){
    let utterance = msg.content.substring(5, msg.content.length()-1)
    const voiceChannel = msg.member.voice.channel;
    voiceChannel.join().then(connection => {
        const stream = TTS.getVoiceStream(utterance);
        const dispatcher = connection.play(stream);
        dispatcher.on("finish",()=>voiceChannel.leave())
    });
}
});

client.login(conf.token);
