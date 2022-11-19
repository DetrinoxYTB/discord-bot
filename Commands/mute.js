const { SlashCommandBuilder, PermissionsBitField, EmbedBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("mute")
        .setDescription("Cette commande permet de mettre une personne en sourdine.")
        .addUserOption(option => option
            .setName("utilisateur")
            .setDescription("Utilisateur que vous souhaitez mute.")
            .setRequired(true)
        )
        .addStringOption(option => option
            .setName("raison")
            .setDescription("Veuillez me fournir une raison pour le mute (Facultatif).")
        ),

        async execute(interaction, client){
            if(interaction.memberPermissions.has(PermissionsBitField.Flags.MuteMembers)){
                var membre = interaction.options.getMember("utilisateur")
                var raison = interaction.options.getString("raison")
                var mutedRole = interaction.guild.roles.cache.find(role => role.name == "Muted")
                if(raison == null){
                    raison = "L'auteur de la commande ne m'a founit aucune raison."
                }
                if(!mutedRole){
                    var embed = new EmbedBuilder()
                    .setColor(0x00e7ff)
                    .setTitle("Mute")
                    .setURL("https://www.youtube.com/channel/UC1ZRg4yxIDriBLvbWXDiXiA")
                    .setAuthor({name:`${client.user.username} - ${this.data.name}`,iconURL:client.user.displayAvatarURL(), url:"https://www.youtube.com/channel/UC1ZRg4yxIDriBLvbWXDiXiA"})
                    .setDescription("**Malhereusement un membre été mute 😭.**")
                    .setThumbnail("https://cdn.discordapp.com/attachments/1037766220964974703/1041412454539874404/unknown.png")
                    .addFields(
                        {name:"**\nL'auteur du mute :**", value:`<@${interaction.user.id}>`},
                        {name:"**\nL'utilisateur qui a été mute :**", value:`<@${membre.id}>`},
                        {name:"**\nLa raison du mute :**", value:raison}
                    )
                    .setTimestamp()
                    .setFooter({text:`Éxécuté par ${interaction.user.tag}`,iconURL:interaction.user.displayAvatarURL()})
                    return mutedRole = interaction.guild.roles.create({
                        name: 'Muted',
                        color: 0x757575,
                        permissions: [PermissionsBitField.Flags.ViewChannel]
                      }).then(member => membre.roles.add(member.id)
                      .then(interaction.reply({embeds:[embed]})))
                }
                membre.roles.add(mutedRole)            
                var embed = new EmbedBuilder()
                .setColor(0x00e7ff)
                .setTitle("Mute")
                .setURL("https://www.youtube.com/channel/UC1ZRg4yxIDriBLvbWXDiXiA")
                .setAuthor({name:`${client.user.username} - ${this.data.name}`,iconURL:client.user.displayAvatarURL(), url:"https://www.youtube.com/channel/UC1ZRg4yxIDriBLvbWXDiXiA"})
                .setDescription("**Malhereusement un membre été mute 😭.**")
                .setThumbnail("https://cdn.discordapp.com/attachments/1037766220964974703/1041412454539874404/unknown.png")
                .addFields(
                    {name:"**\nL'auteur du mute :**", value:`<@${interaction.user.id}>`},
                    {name:"**\nL'utilisateur qui a été mute :**", value:`<@${membre.id}>`},
                    {name:"**\nLa raison du mute :**", value:raison}
                )
                .setTimestamp()
                .setFooter({text:`Éxécuté par ${interaction.user.tag}`,iconURL:interaction.user.displayAvatarURL()})
                await interaction.reply({embeds:[embed]})
            }else{
                await interaction.reply({content:"Vous n'avez pas la permission pour exécutez cette commande !",ephemeral:true})
            }
        }
    
}