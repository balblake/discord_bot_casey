module.exports = {
    name: 'ig',
    description: "this is casey's instagram",
    execute(message, args){
        message.delete();
        message.channel.send('https://www.instagram.com/crazycaseytv/');
    }
} 