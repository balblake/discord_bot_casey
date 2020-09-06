module.exports = {
    name: 'mute',
    description: "mute",
    execute(message, args, member){

        if(message.member.roles.cache.has('386344247843880960')){
            var member  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]));
            if(!member) return  message.reply("I CANT FIND THE USER " + member)
 
            var role = member.guild.roles.cache.find(role => role.name === 'Trucker babies');
            var role2 = member.guild.roles.cache.find(role => role.name === '⛔Muted⛔');
            member.roles.add(role2);
            member.roles.remove(role);
            message.delete();

            message.channel.send(`${member} has been muted.`)

            if(!role2) return message.reply("Couldn't find the mute role.")


    } else {
        message.channel.send('Nice try command is only for mods!');
    }

    }
} 