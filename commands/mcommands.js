module.exports = {
    name: 'mcommands',
    description: "All the mod commands",
    execute(message, args){

        if(message.member.roles.cache.has('386344247843880960')){
        message.channel.send('!kick (name), !ban (name), !clear (1-99), !mute (name) (1s,1m,1h)');



    } else {
        message.channel.send('Nice try command is only for mods!');
    }

    }
} 