const Discord = require('discord.js');
const client = new Discord.Client();
const conf = require('rc')('sparky')
const fastify = require('fastify')({
  logger: true
})

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  console.log(`${JSON.stringify(msg)}`)
  if (msg.content.indexOf(`help`) > -1) {
    msg.reply(`You're doing great!`);
  }
  if (msg.content.indexOf(`!rolld20`)===0) {
    msg.reply(`it's ${Math.floor(Math.random() * 20) + 1  }`)
  }
});

client.login(conf.token);

fastify.get('/', (request, reply) => {
  reply.send({ sparky: '🍕' })
})

fastify.listen(conf.port, (err, address) => {
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
})
