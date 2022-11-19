const { Client, GatewayIntentBits, InteractionType, Partials, Collection,} = require("discord.js")
const {Token} = require("./config")
const fs = require("fs")
const eventsFiles = fs.readdirSync("./Events").filter(file => file.endsWith(".js"))
const commandsFiles = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"))
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions
    ],partials: [
        Partials.Message,
        Partials.Reaction,
    ]
})
client.Commands = new Collection;
client.on("ready", () =>{
    for (var file of commandsFiles){
        var command = require(`./Commands/${file}`);
        client.application.commands.create(command.data)
    }
})
for (const file of eventsFiles){
    const event = require(("./Events/" + file))
    if(event.once == true){
        client.once(event.name, (...args) => event.execute(...args))
    } else {
        client.on(event.name, (...args) => event.execute(...args))
    }
    console.log(`\nEvènement ${event.name} a bien été chargé`)

}
for (const file of commandsFiles){
    const command = require(`./Commands/${file}`)
    client.Commands.set(command.data.name, command);
    console.log(`\nCommande ${command.data.name} a bien été chargé`)
}
client.on("interactionCreate", interaction =>{
    if(interaction.type == InteractionType.ApplicationCommand){
        const command = client.Commands.get(interaction.commandName)
        try{
            command.execute(interaction,client)
        }
        catch(error){
            console.log(error)
            interaction.reply({content:"Une erreur est survenu : " + error, ephemeral: true})
        }
    }
})
client.login(Token)
