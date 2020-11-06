module.exports = {
    name: 'mcommands',
    description: "All the mod commands",
    execute(message, args){
        message.delete();
        
        if(message.member.roles.cache.has('386344247843880960')){
        message.channel.send('!kick (name), !ban (name), !clear (1-99), !mute (name), !unmute (name)');



    } else {
        message.channel.send('Nice try command is only for mods!');
    }

    }
} 
