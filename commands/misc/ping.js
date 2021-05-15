module.exports = {
    name: "ping",
    aliases: ["p"],
    category: 'Misc',
    utilisation: '{prefix}ping',

    async execute(client, message) {
        message.channel.send('Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
    }
}
