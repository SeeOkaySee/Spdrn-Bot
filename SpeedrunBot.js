const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => {
    if (message.content === '!spdrn') {
        message.channel.send('bruh');
            if (message.member.voice.channel) {
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('Trance.mp3', { volume: 1 });
                dispatcher.on('error', console.error);
                dispatcher.on('finish', () => connection.disconnect());
            }
    }
    else if (message.content === '!B'){
    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play('bruh.mp3', { volume: 5 });
        dispatcher.on('error', console.error);
        dispatcher.on('finish', () => connection.disconnect());
        }
    }
});

client.login('ODU0NjA1ODYzNjY1NjY0MDAx.YMmXuw.l-W1ypJQiJB_khbCoTbtmyk0BDo');
