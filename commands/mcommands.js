module.exports = {
    name: 'mcommands',
    description: "All the mod commands",
    execute(message, args){
        message.channel.send('!kick (name), !ban (name), !clear (1-99)');
    }
} 