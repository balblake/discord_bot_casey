module.exports = {
    name: 'yt',
    description: "this is casey's youtube",
    execute(message, args){
        message.delete();
        message.channel.send('https://www.youtube.com/channel/UC6KLE9UZ2pfQNOBkUONfHcw');
    }
} 