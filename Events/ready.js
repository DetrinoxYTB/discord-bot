const fs = require("fs")



//création de la connection
module.exports = {
    name: "ready",
    once: true,
    execute(client){
        client.user.setPresence({activities: [{name:`Heureux de travailler avec vous Detrinox`,type:"PLAYING"}],status:"online"})
        console.log("\n" + client.user.tag + " est connecté !")
    }
}

