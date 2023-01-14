// Must have npm installed and run 'npm install discord.js' in this directory to download the discord API

const Discord = require('discord.js');
const client = new Discord.Client({intents: [Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages, Discord.GatewayIntentBits.MessageContent,]});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  if (message.content.toLowerCase().includes('muah')) {
    console.log('muah')
    message.channel.send({ files: ['./muah.jpg'] });
  }
});

client.login('token');
