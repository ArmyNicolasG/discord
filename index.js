const Discord = require('discord.js')
const config = require('./config.json')
require('dotenv').config()
const client = new Discord.Client()
client.login(process.env.BOT_TOKEN)

const prefix = "_"

client.on('message', function(message){
    //Help command
    if(message.content.startsWith(prefix + 'ayuda') || message.content.startsWith(prefix + 'help')){
        message.reply('Estoy trabajando en los comandos')
    }
    else if (message.content.startsWith(prefix + 'desactivarBot') && message.author.id == '347165913662881798'){
        message.reply('Se apagará el bot ;))')
    }
    else if(message.content.startsWith(prefix + 'spam')){
        let spammer = message.content.split(' ')
        spammer.shift()
        let numeroDeMensajes = parseInt(spammer[spammer.length - 1])
        let mensajeEnviar = spammer.join(' ')

        //ERROR !!!
        if(numeroDeMensajes < 100 && message.member.roles.cache.some(role => role.name === 'Admin'))
        // /ERROR !!!
        {
        for(let i = 0; i < numeroDeMensajes; i++){
            message.channel.send(mensajeEnviar)
        }
    } else{
        message.reply('No se ha podido ejecutar el comando, verifica que el número sea menor a 100 y/o tengas permisos de **Administrador**')
    }
        
    }
    else if(message.content.includes('rtx') || message.content.includes('3080') || message.content.includes('RTX') || message.content.includes('3090')){
        console.log("rtx on")
        message.reply('¿Qué decías...?', {files: ['../images/outofstock.jpeg']})
    }
    else if(message.content.startsWith(prefix + 'say')){
        message.content = message.content + " "
        let mensaje = message.content.slice(5,-1)
        message.channel.send(mensaje)
    }
})


