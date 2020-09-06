module.exports = {
    name: 'mute',
    description: "mute",
    execute(message, args){

        if(message.member.roles.cache.has('386344247843880960')){
            var person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
            if(!person) return  message.reply("I CANT FIND THE USER " + person)
 
            var role = guildMember.roles.cache.get(role => role.name === 'Trucker babies');
            var role2 = guildMember.roles.cache.get(role => role.name === '⛔Muted⛔');
            person.roles.add(role2);
            person.roles.remove(role);
           
 
            if(!role2) return message.reply("Couldn't find the mute role.")



    } else {
        message.channel.send('Nice try command is only for mods!');
    }

    }
} 