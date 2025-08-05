const {SlashCommandBuilder} = require(`discord.js`);
const slash = new SlashCommandBuilder();

slash.setName(`ping`);
slash.setDescription(`the response will be pong!`);

async function exec (inter) {
    await inter.reply(`شغال ياعم متقرفناش`);
}

module.exports = {
    data : slash,
    execute : exec,
};