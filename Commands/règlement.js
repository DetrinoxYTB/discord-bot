const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("regle")
        .setDescription("Cette commande permet de voir les règles du serveur."),

        execute(interaction, client){
            var embed = new EmbedBuilder()
                .setColor(0x00e7ff)
                .setTitle("Le règlement")
                .setURL("https://www.youtube.com/channel/UC1ZRg4yxIDriBLvbWXDiXiA")
                .setDescription("**\nNous allons traiter le règlement sous divers catégories :**")
                .addFields({name:"**\n1 - Général\n\n2 - Les salons textuels\n\n3 - Les salons vocaux\n\n4 - La modération\n\n5 - La programmation**",value:"**\nMais avant de les traiter, je tiens à vous préciser que les propos/contenus insultants, homophobes, antisémites, racistes, xénophobes, obscènes, malsaine, à caractère pornographique, pédophile et autres. Sont formellement interdits sur ce serveur que ce soit dans les salons textuels ou vocaux.**"},
                {name:"**__\n1 - Général :__**",value:"**\n1) Nous respectons les T.O.S. (Terms of Service) appliqué par Discord.\n2) Vous êtes libre d'aimer ce que vous voulez, respectez les goûts des autres également.\n3) Les décisions des staffs sont irrévocables. Si vous êtes remis à l'ordre par un membre du staff, tachez de respecter l'autorité qu'ils exercent.\n4) Les sujets sensibles comme la politique ou la religion sont a éviter, nous avons tous des avis différents qui peuvent malheureusement créer des conflits.**"},
                {name:"**__\n2 - Les salons textuels :__**",value:"**\n1) Évitez au maximum le spam et l'excès de réactions.\n2) Les publicités telles que les serveurs discord, les bots et autres sont interdites.\n3) Veillez à bien utiliser les salons appropriés.\n4) Chaque membre est tenu d'être poli et respectueux envers les autres.**"},
                {name:"**__\n3 - Les salons vocaux:__**",value:"**\n1)  Les salons vocaux sont soumis aux mêmes règles que les salons écrits.\n2) Interdiction de faire des bruits de saturations avec votre micro.\n3) Eviter d'abuser des logiciels de type modificateurs de voix / d’effets sonores (dits « soundboards »).\n4) Veillez a bien vous entendre au niveau des bots musicaux (**Chacun son tour**).**"},
                {name:"**__\n4 - La modération:__**",value:"**\n1)  L'équipe de modération assure la tranquillité du serveur. En cas de problème urgent, vous pouvez les mentionner en faisant <@&1041505193147248662>.\n2) La modération dispose de commandes (Les principaux sont le kick, le mute et le ban). Elles ont la liberté d'agir contre les personnes nuisant à la tranquillité du serveur meme si les problèmes rencontrés ne rentrent pas dans un articles du règlement.\n3) Contourner un bannissement en créant des comptes secondaires est interdit, et est passible de sanctions de la part de Discord.\n4) Nous demandons aux membres de ne pas inciter à une sanction envers d’autres membres ou de se comporter comme des modérateurs.**"},
                {name:"**__\n5 - La programmation:__**",value:"**\n1)  Les sujets tels que le piratage informatique, les comptes d'utilisateurs automatisés (dits «self bots » en anglais), la vente de bots, de boosts ou de Nitro sont formellement interdits. Les logiciels malveillants, de triche ou autre s'appliquent aussi à cette règle.\n2) Ne pas envoyer votre problème dans tous les salons d'entraide, un seul suffit, choisissez simplement un salon qui n'est pas occupé.\n3) Envoyez votre code et votre erreur comme spécifié ci-joint : https://discord.com/channels/922946846459068437/922946847725719569/938501514450837565.\n4) Ne pas mentionner pour obtenir de l'aide. Patientez jusqu'à ce qu'un développeur ou autre vienne vous aider.**"})
                interaction.reply({embeds:[embed],ephemeral:true})
        }
    
}