const {SlashCommandBuilder,PermissionsBitField, EmbedBuilder} = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("unban")
        .setDescription("Cette commande permet de débannir un utilisateur.")
        .addStringOption(option =>option
            .setName("utilisateur")
            .setDescription("L'Id de l'utilisateur que vous souhaitez débannir.")
            .setRequired(true)
        )
        .addStringOption(option => option
            .setName("raison")
            .setDescription("Veuillez me fournir une raison pour le ban (Facultatif).")
        ),
    
    async execute(interaction, client){
        if(interaction.memberPermissions.has(PermissionsBitField.Flags.BanMembers)){
            var membre = interaction.options.getString("utilisateur")
            var raison = interaction.options.getString("raison")
            //var banPlayer = interaction.guild.bans.cache.find(user => user.id == membre.id)

            if(raison == null){
                raison = "L'auteur de la commande ne m'a founit aucune raison."
            }
        
            try {
                await interaction.guild.members.unban(membre)
                var embed = new EmbedBuilder()
                    .setColor(0x00e7ff)
                    .setTitle("Ban")
                    .setURL("https://www.youtube.com/channel/UC1ZRg4yxIDriBLvbWXDiXiA")
                    .setAuthor({name:`${client.user.username} - ${this.data.name}`,iconURL:client.user.displayAvatarURL(), url:"https://www.youtube.com/channel/UC1ZRg4yxIDriBLvbWXDiXiA"})
                    .setDescription("**Un membre a été unbanni 😃.**")
                    .setThumbnail("https://cdn.discordapp.com/attachments/1037766220964974703/1041363054606164080/592824309937078282.png")
                    .addFields(
                        {name:"**\nL'auteur du unban :**", value:`<@${interaction.user.id}>`},
                        {name:"**\nL'utilisateur qui a été unbanni :**", value:`<@${membre.id}>`},
                        {name:"**\nLa raison du unban :**", value:raison}
                    )
                    .setTimestamp()
                    .setFooter({text:`Éxécuté par ${interaction.user.tag}`,iconURL:interaction.user.displayAvatarURL()})

                await interaction.reply({embeds:[embed]})
            }catch (err){
                    const errEmbed = new EmbedBuilder()
                        .setDescription("Merci de mettre un id valide s'il vout plait .")
                        .setColor(0x00e7ff)
                    interaction.reply({embeds:[errEmbed],ephemeral:true})
            }    
        }else{
            await interaction.reply({content:"Vous n'avez pas la permission pour exécutez cette commande !",ephemeral:true})
        } 
    }
}
