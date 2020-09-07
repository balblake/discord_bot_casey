module.exports = {
    name: 'tiktok',
    description: "this is casey's tiktok",
    execute(message, args){
        message.delete();
        message.channel.send('https://www.tiktok.com/@crazycaseytv/');
    }
} 