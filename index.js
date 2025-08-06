const {token} = require(`./config.json`);
const {Client,Events,GatewayIntentBits} = require(`discord.js`);

const client = new Client ({intents : [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,
]});

const pingC = require(`./Commands/CommandsForHelp/ping`);



client.once(Events.ClientReady,(client) => {

    console.log(`Hi Khaloody now i am ready for joking : ${client.user.tag}`)

});

client.on(Events.InteractionCreate,async (inter) =>{
    if(!inter.isCommand()) {
        return;
    }
    if(inter.commandName === pingC.data.name){
            try {
                await pingC.execute(inter);

            } catch (error) {
                    console.error(`error during execution`,error);
                    await inter.reply({
                        content : `فيه مشكلة`,
                        ephemeral: true,
                    });

            }


    }

})



client.login(token);




