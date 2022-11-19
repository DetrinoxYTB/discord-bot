const { SlashCommandBuilder, PermissionsBitField, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("kick")
        .setDescription("Cette commande permet d'expulser un utilisateur.")
        .addUserOption(option => option
            .setName("utilisateur")
            .setDescription("Utilisateur que vous souhaitez bannir.")
            .setRequired(true)
        )
        .addStringOption(option => option
            .setName("raison")
            .setDescription("Veuillez me fournir une raison pour le ban (Facultatif).")
        ),

        async execute(interaction, client){
            if(interaction.memberPermissions.has(PermissionsBitField.Flags.KickMembers)){
                var membre = interaction.options.getMember("utilisateur")
                var raison = interaction.options.getString("raison")
                if(raison == null){
                    raison = "L'auteur de la commande ne m'a founit aucune raison."
                }
                var embed = new EmbedBuilder()
                .setColor(0x00e7ff)
                .setTitle("Kick")
                .setURL("https://www.youtube.com/channel/UC1ZRg4yxIDriBLvbWXDiXiA")
                .setAuthor({name:`${client.user.username} - ${this.data.name}`,iconURL:client.user.displayAvatarURL(), url:"https://www.youtube.com/channel/UC1ZRg4yxIDriBLvbWXDiXiA"})
                .setDescription("**Malhereusement un membre été expulsé 😭.**")
                .setThumbnail("https://cdn.discordapp.com/attachments/1037766220964974703/1041412454539874404/unknown.png")
                .addFields(
                    {name:"**\nL'auteur de l'expulsion :**", value:`<@${interaction.user.id}>`},
                    {name:"**\nL'utilisateur qui a été expulsé :**", value:`<@${membre.id}>`},
                    {name:"**\nLa raison de l'expulsion :**", value:raison}
                )
                .setTimestamp()
                .setFooter({text:`Éxécuté par ${interaction.user.tag}`,iconURL:interaction.user.displayAvatarURL()})
                await interaction.reply({embeds:[embed]})
                //membre.kick()
            }else{
                await interaction.reply({content:"Vous n'avez pas la permission pour exécutez cette commande !",ephemeral:true})
            }
        }
    
}