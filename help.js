module.exports = {
    name: 'help',
    description: '顯示所有指令',
    execute(message) {
        message.channel.send('📜 可用指令：!ping, !help, !roll, !draw');
    }
}