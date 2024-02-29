# Changelog

All notable changes to the Discord Welcome Bot project will be documented in this file.

## [Released]

## [1.2.0] - 2024-02-29

### Added
- Toggle options in `config.js` for enabling or disabling specific bot functionalities:
  - `sendWelcomeDM` and `sendLeaveDM` for controlling the sending of direct welcome and goodbye messages.
  - `sendWelcomeChannelMessage` and `sendLeaveChannelMessage` for managing the posting of welcome and goodbye messages in designated server channels.
- Enhanced flexibility allowing server administrators to customize the bot's interaction with members according to their preferences.

### Changed
- Improved documentation in `README.md` to include instructions on using the new toggle features.

## [1.1.0] - 2024-02-27

### Added
- Direct Messaging (DM) capabilities for sending personalized welcome and goodbye messages to members.
- Configuration options in `config.js` for customizing DM messages:
  - `dmWelcomeMessage` for personalizing the welcome message sent to new members.
  - `dmLeaveMessage` for customizing the goodbye message for departing members.

### Changed
- Updated `README.md` to include setup instructions for direct messaging features.

## [1.0.0] - 2024-02-12

### Added
- Initial release of the Discord Welcome Bot.
- Functionality to send customizable embedded welcome and goodbye messages in specific server channels.
- Configuration settings in `config.js` for:
  - `welcomeChannelId` and `leaveChannelId` to specify the channels for posting messages.
  - `welcomeMessage` and `leaveMessage` for custom message templates.
  - `bannerUrl` and `iconUrl` for embedding images in messages.

### Changed
- Created `README.md` with detailed setup and configuration instructions.
