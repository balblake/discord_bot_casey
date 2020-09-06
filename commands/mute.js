module.exports = {
    name: 'mute',
    description: "mute",
    execute(message, args){

        if(message.member.roles.cache.has('386344247843880960')){
            var person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
            if(!person) return  message.reply("I CANT FIND THE USER " + person)
 
            var role = guild.member.roles.cache.get('386344485761843220');
            var role2 = guild.member.roles.cache.get('752212210666831954');
            person.roles.add(role2);
            person.roles.remove(role);
           
 
            if(!role2) return message.reply("Couldn't find the mute role.")



    } else {
        message.channel.send('Nice try command is only for mods!');
    }

    }
} 