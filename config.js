// config.js
module.exports = {
  token: 'YOUR_BOT_TOKEN',
  prefix: '!',
  welcomeChannelId: 'WELCOME_CHANNEL_ID',
  leaveChannelId: 'LEAVE_CHANNEL_ID',
  welcomeMessage: 'Welcome to the server, {user}!',
  leaveMessage: 'Sorry to see you go, {user}!',
  dmWelcomeMessage: 'Welcome to the server, {user}!', 
  dmLeaveMessage: 'Sorry to see you go, {user}!',
  bannerUrl: '', // YOUR_BANNER_URL
  iconUrl: '', // YOUR_ICON_URL
  sendWelcomeDM: true, // Set to false to disable welcome DMs
  sendLeaveDM: true, // Set to false to disable leave DMs
  sendWelcomeChannelMessage: true, // Set to false to disable welcome messages in the channel
  sendLeaveChannelMessage: true // Set to false to disable leave messages in the channel
};
