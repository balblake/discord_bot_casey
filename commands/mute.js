module.exports = {
    name: 'mute',
    description: "mute",
    execute(message, args){

        if(message.member.roles.cache.has('386344247843880960')){
            var person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
            if(!person) return  message.reply("I CANT FIND THE USER " + person)
 
            person.roles.add(role => role.name === '⛔Muted⛔');
            person.roles.remove(role => role.name === 'Trucker babies');

    } else {
        message.channel.send('Nice try command is only for mods!');
    }

    }
} 