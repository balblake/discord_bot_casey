module.exports = {
    name: 'timer',
    description: "timer",
    execute(message, args, member){
 
        switch (args[0]) {
            case 'timer':
        if(message.member.roles.cache.has('386344247843880960')){
            var member  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]));
            if(!member) return  message.reply("I CANT FIND THE USER " + member)

            var role = member.guild.roles.cache.find(role => role.name === 'Trucker babies');
            var role2 = member.guild.roles.cache.find(role => role.name === '⛔Muted⛔');

        let time = args[2];
        if(!time){
            return message.reply("You didnt specify a time!");
        }
    
        message.channel.send(`Timer has been set on ${member}.`)
    
        setTimeout(function(){
        
            person.addRole(role)
            person.removeRole(role2);
            console.log(role2)
            message.channel.send(`${member} has been unmuted.`)
        }, ms(time));
    
        }}
    }
}