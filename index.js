const Discord = require('discord.js');
const language = require('./langOptions');
const  translate  =  require ( '@iamtraction/google-translate' ) ;
const speech = require('./messages');
const { Client, GatewayIntentBits } = require('discord.js');
const prefix = "!" // Definimos el prefijo
const keepAlive = require('./server.js');
const express = require("express")().get("/", (req, res) => res.send("Bot en Linea!")).listen(3000);
const client = new Client({

	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
		
		
	],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  console.log('Ya inicio el robot')
})


client.on("messageCreate", msg => {

const args = msg.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();  

    // para no disparar si un bot da un comando y si no contiene el prefijo
    if (!msg.content.startsWith(prefix) || msg.author.bot) {
      return; 
  }



  // Traduce automáticamente el texto al idioma del comando
  if (language.some(ele => ele.name === command)) {
    if (args.length === 0) {
      msg.reply(speech.BOT_FULLNAME_AUTO_ERROR);
    } else {
        let lang_to = language.filter(ele => ele.name===command)[0].abrv;
        let text = args.slice(0).join(' ');
        translate(text, {to: lang_to})
            .then(res => msg.channel.send(res.text))
            .catch(err => msg.channel.send(speech.BOT_TRANSLATION_ERROR + err));
    }

  }
//traduce por abreviatura
if (language.some(ele => ele.abrv=== command)) {
  if (args.length === 0) {
    msg.reply(speech.BOT_ABBR_AUTO_ERROR);
  } else {
      let lang_to = language.filter(ele => ele.abrv===command)[0].abrv;
      let text = args.slice(0).join(' ');
      translate(text, {to: lang_to})
          .then(res => msg.channel.send(res.text))
          .catch(err => msg.channel.send(speech.BOT_TRANSLATION_ERROR + err));
  }
}

// Especifica el idioma del texto y lo traduce a un idioma específico
if (command === "translate") {
  if (args.length < 3) {
    msg.reply(speech.BOT_TRANS_SPECIFIC_ERROR);
  } else {
      let argFrom = args[0].toLowerCase();
      let argTo = args[1].toLowerCase();

      let lang_from = language.filter(ele => ele.name === argFrom)[0].abrv;
      let lang_to = language.filter(ele => ele.name=== argTo)[0].abrv;
      let text = args.slice(2).join(' ');

      translate(text, {from: lang_from, to: lang_to})
          .then(res => msg.channel.send(res.text))
          .catch(err => console.log(speech.BOT_TRANSLATION_ERROR + err));
  }
}

if (command === "commands") {
msg.channel.send(speech.BOT_COMMANDS_HELP);
}

})

const TOKEN ="MTA2MTczMDQ5NTg2NTU1MzA3OQ.G69y95.TRzKEmvqVuLZ7ZsHxa_YFb-kHVAH3xqL3114JM"
client.login(TOKEN) // Aqui pondremos el token de nuestro bot
