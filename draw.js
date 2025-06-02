module.exports = {
    name: 'draw',
    description: '抽籤',
    execute(message, args) {
        if (!args.length) return message.channel.send('請提供抽籤項目！');
        const choice = args[Math.floor(Math.random() * args.length)];
        message.channel.send(`🎯 抽中：${choice}`);
    }
}