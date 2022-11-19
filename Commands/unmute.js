const { SlashCommandBuilder, PermissionsBitField, EmbedBuilder, Embed} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("unmute")
        .setDescription("Cette commande permet de retirer une personne en sourdine")
        .addUserOption(option => option
            .setName("utilisateur")
            .setDescription("Utilisateur que vous souhaitez unmute.")
            .setRequired(true)
        )
        .addStringOption(option => option
            .setName("raison")
            .setDescription("Veuillez me fournir une raison pour le unmute (Facultatif).")
        ),

        async execute(interaction, client){
            if(interaction.memberPermissions.has(PermissionsBitField.Flags.MuteMembers)){
                var membre = interaction.options.getMember("utilisateur")
                var raison = interaction.options.getString("raison")
                var mutedRole = membre.roles.cache.find(role => role.name == "Muted")
                if(raison == null){
                    raison = "L'auteur de la commande ne m'a founit aucune raison."
                }
                if(mutedRole){
                    membre.roles.remove(role)
                    var embed = new EmbedBuilder()
                    .setColor(0x00e7ff)
                    .setTitle("Unmute")
                    .setURL("https://www.youtube.com/channel/UC1ZRg4yxIDriBLvbWXDiXiA")
                    .setAuthor({name:`${client.user.username} - ${this.data.name}`,iconURL:client.user.displayAvatarURL(), url:"https://www.youtube.com/channel/UC1ZRg4yxIDriBLvbWXDiXiA"})
                    .setDescription("**Un membre été unmute 😃.**")
                    .setThumbnail("https://cdn.discordapp.com/attachments/1037766220964974703/1041412454539874404/unknown.png")
                    .addFields(
                        {name:"**\nL'auteur du unmute :**", value:`<@${interaction.user.id}>`},
                        {name:"**\nL'utilisateur qui a été unmute :**", value:`<@${membre.id}>`},
                        {name:"**\nLa raison du unmute :**", value:raison}
                    )
                    .setTimestamp()
                    .setFooter({text:`Éxécuté par ${interaction.user.tag}`,iconURL:interaction.user.displayAvatarURL()})
                    await interaction.reply({embeds:[embed]})
                }else{
                    var embed = new EmbedBuilder()
                    .setColor(0x00e7ff)
                    .setTitle("Unmute échoué")
                    .setURL("https://www.youtube.com/channel/UC1ZRg4yxIDriBLvbWXDiXiA")
                    .addFields({name:"**\nL'utilisateur que vous voulez unmute n'est pas mute.**", value:"** **"})
                    await interaction.reply({embeds:[embed],ephemeral:true})

                }
            }else{
                await interaction.reply({content:"Vous n'avez pas la permission pour exécutez cette commande !",ephemeral:true})
            }
        }
    
}