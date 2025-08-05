const {token} = require("./config.json");
const {Client,Events,GatewayIntentBits} = require("discord.js");

const client = new Client ({intents : [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,
    GatewayIntentBits.Guilds
]});

client.once(Events.ClientReady,(ready) => {

    console.log(`Hi Khaloody now i am ready for joking : ${ready.user.tag}`)

});

client.login(token);


