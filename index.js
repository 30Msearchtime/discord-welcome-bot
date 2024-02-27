const { Client, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
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
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setPresence({
    activities: [{ name: 'the Stars', type: 3 }], // Type 3 stands for 'WATCHING'
    status: 'online', // You can use 'online', 'idle', 'dnd' or 'invisible'
  });
});

client.on('guildMemberAdd', async member => {
  const channel = member.guild.channels.cache.get(config.welcomeChannelId);
  if (!channel) return;

  const welcomeEmbed = new EmbedBuilder()
    .setColor('#00FF00')
    .setTitle('Welcome!')
    .setDescription(config.welcomeMessage.replace('{user}', member.toString()));

  if (config.iconUrl) {
    welcomeEmbed.setThumbnail(config.iconUrl);
  } else if (member.guild.iconURL()) {
    welcomeEmbed.setThumbnail(member.guild.iconURL());
  }

  welcomeEmbed.setFooter({
    text: member.guild.name,
    iconURL: member.guild.iconURL() ? member.guild.iconURL() : undefined
  });

  if (config.bannerUrl) {
    welcomeEmbed.setImage(config.bannerUrl);
  }

  channel.send({ embeds: [welcomeEmbed] });

  let invite = await channel.createInvite({
    maxAge: 0, // Permanent
    maxUses: 0 // Unlimited uses
  }, `Invitation for new user ${member.user.tag}`).catch(console.log);

  const row = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
        .setLabel('Join Server')
        .setStyle(ButtonStyle.Link)
        .setURL(invite.url)
    );

  member.send({
    embeds: [
      new EmbedBuilder()
        .setColor('#00FF00')
        .setTitle('Welcome!')
        .setDescription(config.dmWelcomeMessage.replace('{user}', member.toString()))
        .setFooter({
          text: member.guild.name,
          iconURL: member.guild.iconURL() ? member.guild.iconURL() : undefined
        })
    ],
    components: [row]
  }).catch(console.error);
});

client.on('guildMemberRemove', member => {
  console.log(`guildMemberRemove event triggered for: ${member.user.tag}`);

  const channel = member.guild.channels.cache.get(config.leaveChannelId);
  if (!channel) return;

  const leaveEmbed = new EmbedBuilder()
    .setColor('#FF0000')
    .setTitle('Goodbye')
    .setDescription(config.leaveMessage.replace('{user}', member.toString()));

  if (config.iconUrl) {
    leaveEmbed.setThumbnail(config.iconUrl);
  } else if (member.guild.iconURL()) {
    leaveEmbed.setThumbnail(member.guild.iconURL());
  }

  leaveEmbed.setFooter({
    text: member.guild.name,
    iconURL: member.guild.iconURL() ? member.guild.iconURL() : undefined
  });

  if (config.bannerUrl) {
    leaveEmbed.setImage(config.bannerUrl);
  }

  channel.send({ embeds: [leaveEmbed] })
    .then(() => console.log(`Goodbye message sent for: ${member.user.tag}`))
    .catch(err => console.error(`Error sending goodbye message for ${member.user.tag}:`, err));

  member.send({
    embeds: [
      new EmbedBuilder()
        .setColor('#FF0000')
        .setTitle('Goodbye')
        .setDescription(config.dmLeaveMessage.replace('{user}', member.toString()))
        .setFooter({
          text: member.guild.name,
          iconURL: member.guild.iconURL() ? member.guild.iconURL() : undefined
        })
    ]
  }).then(() => console.log(`DM sent for: ${member.user.tag}`))
    .catch(err => {
      if (err.code === 50007) {
        console.error(`Cannot send DM to ${member.user.tag}: The user does not accept direct messages.`);
      } else {
        console.error(`Error sending DM for ${member.user.tag}:`, err);
      }
    });
});

client.login(config.token);
