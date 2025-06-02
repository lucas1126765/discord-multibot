require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log(`✅ Bot 上線: ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (!message.content.startsWith('!') || message.author.bot) return;
    const args = message.content.slice(1).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);
    if (command) command.execute(message, args);
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.systemChannel;
    if (channel) channel.send(`👋 歡迎 ${member} 加入伺服器！`);
});

client.login(process.env.DISCORD_TOKEN);