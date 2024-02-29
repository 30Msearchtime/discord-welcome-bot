# Discord Welcome Bot

This Discord Welcome Bot greets members when they join or leave a server, showcasing customizable messages embedded with optional banner and icon images. The bot also features a custom status, enhancing its presence within your server.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js v16.6.0 or newer
- A Discord Bot Token ([How to get a Discord Bot Token](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot))
- Discord.js v14

## Installation

Follow these steps to install the Discord Welcome Bot:

1. Clone the repository:

```bash
git clone https://github.com/30Msearchtime/discord-welcome-bot
```
2. Navigate to the bot's directory:
```bash
cd discord-welcome-bot
```
3. Install the required packages:
```bash
npm install
```
## Configuration

Create a config.js file in the root directory with the following structure:
```bash
// config.js
module.exports = {
  token: 'YOUR_BOT_TOKEN',
  welcomeChannelId: 'WELCOME_CHANNEL_ID',
  leaveChannelId: 'LEAVE_CHANNEL_ID',
  welcomeMessage: 'Welcome to the server, {user}!',
  dmWelcomeMessage: 'Hello {user}, welcome to our Discord server!',
  leaveMessage: 'Sorry to see you go, {user}!',
  dmLeaveMessage: 'It's sad to see you leave, {user}. Hope to see you back soon!',
  bannerUrl: '', // YOUR_BANNER_URL
  iconUrl: '', // YOUR_ICON_URL
  sendWelcomeDM: true, // Set to false to disable welcome DMs
  sendLeaveDM: true, // Set to false to disable leave DMs
  sendWelcomeChannelMessage: true, // Set to false to disable welcome messages in the channel
  sendLeaveChannelMessage: true // Set to false to disable leave messages in the channel
};
```
Replace the placeholders with your actual Discord bot token, channel IDs, and URLs as needed.

## Running the Bot

To start the bot, run the following command in your terminal:

```bash
node index.js
```
The bot should now be running and ready to welcome new members or bid farewell to those leaving.

## Features

- Sends customizable embedded messages to welcome new members and say goodbye to those leaving in the server.
- Directly messages new members with a customizable welcome message and departing members with a farewell.
- Supports custom banner and icon URLs for embed messages.
- Configurable welcome and leave messages for both server channels and direct messages.
- Displays a custom status for the bot.
- Toggleable direct messaging and channel messaging features through the config file.


For more detailed information about Discord.js and its features, visit the [Discord.js Guide](https://discordjs.guide/#before-you-begin).

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/30Msearchtime/discord-welcome-bot/issues).

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

- [30Msearchtime](https://github.com/30Msearchtime)
- [Discord](https://discord.com/users/426081591832346624)
- toolbotsystem@gmail.com
