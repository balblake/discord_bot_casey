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

            if(!role2) return message.reply("Couldn't find the mute role.")

            let time = args[2];
            if(!time){
                return message.reply("You didnt specify a time!");
            }

            message.channel.send(`${member} has been muted for` + args[2] +`.`)

            setTimeout(function(){
                
                member.roles.add(role)
                member.roles.remove(role2);
                message.channel.send(`${member} has been unmuted.`)
            }, ms(time));

    } else {
        message.channel.send('Nice try command is only for mods!');
    }
    break;

    }
} 