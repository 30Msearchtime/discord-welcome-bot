const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const config = require('./config');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ]
});

client.once('ready', () => {
  console.log(`Eingeloggt als ${client.user.tag}`);

  client.user.setPresence({
    activities: [{ name: 'the Stars', type: 3 }], // Type 3 stands for 'WATCHING'
    status: 'online', // You can use 'online', 'idle', 'dnd' or 'invisible'
  });
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.get(config.welcomeChannelId);
  if (!channel) return;

  const welcomeEmbed = new EmbedBuilder()
    .setColor('#00FF00')
    .setTitle('Welcome!')
    .setDescription(config.welcomeMessage.replace('{user}', member.toString()));

  if (config.iconUrl || member.guild.iconURL()) {
    welcomeEmbed.setThumbnail(config.iconUrl || member.guild.iconURL());
  }

  if (config.bannerUrl) {
    welcomeEmbed.setImage(config.bannerUrl);
  }

  welcomeEmbed.setFooter({
    text: member.guild.name,
    iconURL: member.guild.iconURL() ? member.guild.iconURL() : ''
  });

  channel.send({ embeds: [welcomeEmbed] });
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.cache.get(config.leaveChannelId);
  if (!channel) return;

  const leaveEmbed = new EmbedBuilder()
    .setColor('#FF0000')
    .setTitle('Goodbye')
    .setDescription(config.leaveMessage.replace('{user}', member.toString()));

  if (config.iconUrl || member.guild.iconURL()) {
    leaveEmbed.setThumbnail(config.iconUrl || member.guild.iconURL());
  }

  if (config.bannerUrl) {
    leaveEmbed.setImage(config.bannerUrl);
  }
  
  leaveEmbed.setFooter({
    text: member.guild.name,
    iconURL: member.guild.iconURL() ? member.guild.iconURL() : ''
  });

  channel.send({ embeds: [leaveEmbed] });
});

client.login(config.token);
