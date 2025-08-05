const {token} = require(`./config.json`);
const {Client,Events,GatewayIntentBits} = require(`discord.js`);

const client = new Client ({intents : [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,
    GatewayIntentBits.Guilds
]});

const pingC = require(`./Commands/CommandsForHelp/ping`);


client.once(Events.ClientReady,(client) => {

    console.log(`Hi Khaloody now i am ready for joking : ${client.user.tag}`)

});




client.login(token);




