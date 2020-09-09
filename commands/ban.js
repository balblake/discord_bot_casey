module.exports = {
    name: 'ban',
    description: "bans user",
    execute(message, args){
        message.delete();

if(message.member.roles.cache.has('746939181909016696')){;
    const member = message.mentions.members.first(); // keep in mind it isn't the best practice to use message.mentions to retrieve an argument
    if (!member) return message.channel.send('no member mentioned');
    let reason = args.slice(2).join(' '); // arguments should already be defined
    member.ban(reason)
    .then(message.channel.send(`${userKick.tag} was banned from the server.`))
    .catch(err => {
      message.channel.send('something went wrong');
      console.error();
    });
  }}}