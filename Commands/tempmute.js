const {SlashCommandBuilder,PermissionsBitField, EmbedBuilder} = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("tempmute")
        .setDescription("Cette commande mute un utilisateur temporairement")
        .addUserOption(option =>option
            .setName("utilisateur")
            .setDescription("Utilisateur que vous souhaitez débannir.")
            .setRequired(true)
        )
        .addNumberOption(option => option
            .setName("nombre")
            .setDescription("Veuillez me fournir le nombre de temps que vous souhaitez mute la personne (En minutes).")
            .setRequired(true)
        )
        .addStringOption(option => option
            .setName("raison")
            .setDescription("Veuillez me fournir une raison pour le ban (Facultatif).")
        ),
    
    async execute(interaction, client){
        if(interaction.memberPermissions.has(PermissionsBitField.Flags.BanMembers)){
            var membre = interaction.options.getMember("utilisateur")
            var nombre = interaction.options.getNumber("nombre")
            var mutedRole = interaction.guild.roles.cache.find(role => role.name == "Muted")
            var raison = interaction.options.getString("raison")
            if(raison == null){
                raison = "L'auteur de la commande ne m'a founit aucune raison."
            }
            if(!mutedRole){
                var embed = new EmbedBuilder()
                .setColor(0x00e7ff)
                .setTitle("Tempmute")
                .setURL("https://www.youtube.com/channel/UC1ZRg4yxIDriBLvbWXDiXiA")
                .setAuthor({name:`${client.user.username} - ${this.data.name}`,iconURL:client.user.displayAvatarURL(), url:"https://www.youtube.com/channel/UC1ZRg4yxIDriBLvbWXDiXiA"})
                .setDescription("**Un membre a été tempmute 😭.**")
                .setThumbnail("https://cdn.discordapp.com/attachments/1037766220964974703/1041363054606164080/592824309937078282.png")
                .addFields(
                    {name:"**\nL'auteur du tempmute :**", value:`<@${interaction.user.id}>`},
                    {name:"**\nL'utilisateur qui a été tempmute :**", value:`<@${membre.id}>`},
                    {name:"**\nLe temps du tempmute :**", value:raison}
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
            membre.roles.add(mutedRole).then(
                setTimeout(() => membre.roles.remove(mutedRole), (nombre * 60000 ))
            )
                var embed = new EmbedBuilder()
                .setColor(0x00e7ff)
                .setTitle("Tempmute")
                .setURL("https://www.youtube.com/channel/UC1ZRg4yxIDriBLvbWXDiXiA")
                .setAuthor({name:`${client.user.username} - ${this.data.name}`,iconURL:client.user.displayAvatarURL(), url:"https://www.youtube.com/channel/UC1ZRg4yxIDriBLvbWXDiXiA"})
                .setDescription("**Un membre a été tempmute 😭.**")
                .setThumbnail("https://cdn.discordapp.com/attachments/1037766220964974703/1041363054606164080/592824309937078282.png")
                .addFields(
                    {name:"**\nL'auteur du tempmute :**", value:`<@${interaction.user.id}>`},
                    {name:"**\nL'utilisateur qui a été tempmute :**", value:`<@${membre.id}>`},
                    {name:"**\nLe temps du tempmute :**", value:`${nombre} minutes`},
                    {name:"**\nLa raison du tempmute :**", value:raison}
                )
                .setTimestamp()
                .setFooter({text:`Éxécuté par ${interaction.user.tag}`,iconURL:interaction.user.displayAvatarURL()})
                await interaction.reply({embeds:[embed]})
        }else{
            await interaction.reply({content:"Vous n'avez pas la permission pour exécutez cette commande !",ephemeral:true})
        }
    }
}
