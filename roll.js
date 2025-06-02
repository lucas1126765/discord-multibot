module.exports = {
    name: 'roll',
    description: '擲骰子',
    execute(message) {
        const result = Math.floor(Math.random() * 6) + 1;
        message.channel.send(`🎲 你擲出了 ${result}`);
    }
}