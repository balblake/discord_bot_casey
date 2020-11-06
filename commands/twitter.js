module.exports = {
    name: 'twitter',
    description: "this is casey's twitter",
    execute(message, args){
        message.delete();
        message.channel.send('https://twitter.com/CrazyCaseyy');
    }
} 