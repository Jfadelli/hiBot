require('dotenv').config()
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.Presences,
    ],
});

const targetUserId = process.env.TARGET_USER; // Replace with the target user's ID

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('messageCreate', (message) => {
    if (message.author.id === targetUserId) {
        message.reply('Hello! I noticed you logged in!');
    }
});

client.login(process.env.SECRET_KEY); // Replace with your bot token