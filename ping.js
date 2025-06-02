module.exports = {
    name: 'ping',
    description: '查看延遲',
    execute(message) {
        message.channel.send('🏓 Pong!');
    }
}