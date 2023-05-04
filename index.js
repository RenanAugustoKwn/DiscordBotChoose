const { Client, Intents } = require('discord.js');
const config = require("./config.json");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS,
Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_PRESENCES]});
const prefix = config.prefix;

var arqueiroId = "864947225590759425";
var assassinoId = "864947435734695956";
var bardoId = "864947323138080810";
var barbaroId = "864947681776762880";
var druidaId = "864947811257548841";
var guerreiroId = "864946747021328424";
var magoId = "864947112710111242";
var mongeId = "888102126620905493";
var level1Id = "888840880390295633";
var level5Id = "888841340765470720";
var level10Id = "888841352018812989";
var level;

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }

  else if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
  }
});
client.on("ready",()=>{ 
    console.log('Bot Online')
  });

client.on('raw', async dados =>{
    if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE")return
    if(dados.d.message_id != "888178790352699402")return

    let servidor = client.guilds.cache.get("864945969812602920")
    let membro = servidor.members.cache.get(dados.d.user_id)

    let arqueiro = servidor.roles.cache.get(arqueiroId),
    assassino = servidor.roles.cache.get(assassinoId),
    bardo = servidor.roles.cache.get(bardoId),
    barbaro = servidor.roles.cache.get(barbaroId),
    druida = servidor.roles.cache.get(druidaId),
    guerreiro = servidor.roles.cache.get(guerreiroId),
    mago = servidor.roles.cache.get(magoId),
    monge = servidor.roles.cache.get(mongeId),
    level1let = servidor.roles.cache.get(level1Id),
    level5let = servidor.roles.cache.get(level5Id),
    level10let = servidor.roles.cache.get(level10Id)
    
    if(dados.t === "MESSAGE_REACTION_ADD")
    {
        if(dados.d.emoji.id === '888170628853686343')
        {
          RemoveLeveleClass()
          membro.roles.add(arqueiro)
          membro.roles.add(level1let)
        }
        else if(dados.d.emoji.id === '888171290320572427')
        {
          RemoveLeveleClass()
          membro.roles.add(assassino)
          membro.roles.add(level1let)
        }
        else if(dados.d.emoji.id === '888170972987924500')
        {
          RemoveLeveleClass()
          membro.roles.add(bardo)
          membro.roles.add(level1let)
        }
        else if(dados.d.emoji.id === '888170819623211028')
        {
          RemoveLeveleClass()
          membro.roles.add(barbaro)
          membro.roles.add(level1let)
        }
        else if(dados.d.emoji.id === '888170478450114571')
        {
          RemoveLeveleClass()
          membro.roles.add(druida)
          membro.roles.add(level1let)
        }
        else if(dados.d.emoji.id === '888170333566275624')
        {
          RemoveLeveleClass()
          membro.roles.add(guerreiro)
          membro.roles.add(level1let)
        }
        else if(dados.d.emoji.id === '888171576657330187')
        {
          RemoveLeveleClass()
          membro.roles.add(mago)
          membro.roles.add(level1let)
        }
        else if(dados.d.emoji.id === '888171735382392882')
        {
          RemoveLeveleClass()
          membro.roles.add(monge)
          membro.roles.add(level1let)
        }
        else
        {
          /*const msg = await dados.d.GUILD_MESSAGES.get("888178790352699402");
          msg.reactions.resolve("REACTION EMOJI,REACTION OBJECT OR REACTION ID").users.remove("ID OR OBJECT OF USER TO REMOVE");*/
        }
    }
    if(dados.t === "MESSAGE_REACTION_REMOVE")
    {
        if(dados.d.emoji.id === '888170628853686343')
        {
          RemoveLeveleClass()
          membro.roles.remove(arqueiro)
        }
        else if(dados.d.emoji.id === '888171290320572427')
        {
          RemoveLeveleClass()
          membro.roles.remove(assassino)        
        }
        else if(dados.d.emoji.id === '888170972987924500')
        {
          RemoveLeveleClass()
          membro.roles.remove(bardo)
        }
        else if(dados.d.emoji.id === '888170819623211028')
        {
          RemoveLeveleClass()
          membro.roles.remove(barbaro)
        }
        else if(dados.d.emoji.id === '888170478450114571')
        {
          RemoveLeveleClass()
          membro.roles.remove(druida)
        }
        else if(dados.d.emoji.id === '888170333566275624')
        {
          RemoveLeveleClass()
          membro.roles.remove(guerreiro)
        }
        else if(dados.d.emoji.id === '888171576657330187')
        {
          RemoveLeveleClass()
          membro.roles.remove(mago)
        }
        else if(dados.d.emoji.id === '888171735382392882')
        {
          RemoveLeveleClass()
          membro.roles.remove(monge)
        }
    }
    function RemoveLeveleClass()
    {
      membro.roles.remove(arqueiro)
      membro.roles.remove(assassino)
      membro.roles.remove(bardo)
      membro.roles.remove(barbaro)
      membro.roles.remove(druida)
      membro.roles.remove(guerreiro)
      membro.roles.remove(mago)
      membro.roles.remove(monge)
      membro.roles.remove(level1let)
      membro.roles.remove(level5let)
      membro.roles.remove(level10let)
    }
    function RemoveLevel()
    {
      membro.roles.remove(level1let)
      membro.roles.remove(level5let)
      membro.roles.remove(level10let)
    }

});

client.on('message', msg =>{
    if(msg.channelId != "888919954731196427") return
    if(!msg.content.startsWith(config.prefix)) return
    if(msg.content == "!status" || msg.content == "!Status" || msg.content == "!STATUS")
    {
      if(msg.member.roles.cache.find(r=> r.id == arqueiroId))
      {
        verificaLevel()
        if(level == "Level: 1") msg.reply("** Seus Status **\n```Arqueiro " + level + "\nVida: 10\nForça: 1 - 4\nDestreza:  1 - 5\nInteligência: 1 - 2\nCarisma: 1 - 3```")
        if(level == "Level: 5") msg.reply("** Seus Status **\n```Arqueiro " + level + "\nVida: 15\nForça: 3 - 6\nDestreza:  3 - 7\nInteligência: 3 - 4\nCarisma: 3 - 5```")
        if(level == "Level: 10") msg.reply("** Seus Status **\n```Arqueiro " + level + "\nVida: 20\nForça: 5 - 8\nDestreza:  5 - 9\nInteligência: 5 - 6\nCarisma: 5 - 7```")
      }
      else if(msg.member.roles.cache.find(r=> r.id == assassinoId))
      {
        verificaLevel()
        if(level == "Level: 1") msg.reply("** Seus Status **\n```Assassino " + level + "\nVida: 10\nForça: 1 - 4\nDestreza:  1 - 5\nInteligência: 1 - 3\nCarisma: 1 - 2```")
        if(level == "Level: 5") msg.reply("** Seus Status **\n```Assassino " + level + "\nVida: 15\nForça: 3 - 6\nDestreza:  3 - 7\nInteligência: 3 - 5\nCarisma: 3 - 4```")
        if(level == "Level: 10") msg.reply("** Seus Status **\n```Assassino " + level + "\nVida: 20\nForça: 5 - 8\nDestreza:  5 - 9\nInteligência: 5 - 7\nCarisma: 5 - 6```")
      }
      else if(msg.member.roles.cache.find(r=> r.id == bardoId))
      {
        verificaLevel()
        if(level == "Level: 1") msg.reply("** Seus Status **\n```Bardo " + level + "\nVida: 10\nForça: 1 - 2\nDestreza:  1 - 3\nInteligência: 1 - 4\nCarisma: 1 - 5```")
        if(level == "Level: 5") msg.reply("** Seus Status **\n```Bardo " + level + "\nVida: 15\nForça: 3 - 4\nDestreza:  3 - 5\nInteligência: 3 - 6\nCarisma: 3 - 7```")
        if(level == "Level: 10") msg.reply("** Seus Status **\n```Bardo " + level + "\nVida: 20\nForça: 5 - 6\nDestreza:  5 - 7\nInteligência: 5 - 8\nCarisma: 5 - 9```")
      }
      else if(msg.member.roles.cache.find(r=> r.id == barbaroId))
      {
        verificaLevel()
        if(level == "Level: 1") msg.reply("** Seus Status **\n```Bárbaro " + level + "\nVida: 10\nForça: 1 - 5\nDestreza:  1 - 4\nInteligência: 1 - 3\nCarisma: 1 - 2```")
        if(level == "Level: 5") msg.reply("** Seus Status **\n```Bárbaro " + level + "\nVida: 15\nForça: 3 - 7\nDestreza:  3 - 6\nInteligência: 3 - 5\nCarisma: 3 - 4```")
        if(level == "Level: 10") msg.reply("** Seus Status **\n```Bárbaro " + level + "\nVida: 20\nForça: 5 - 9\nDestreza:  5 - 8\nInteligência: 5 - 7\nCarisma: 5 - 6```")
      }
      else if(msg.member.roles.cache.find(r=> r.id == druidaId))
      {
        verificaLevel()
        if(level == "Level: 1") msg.reply("** Seus Status **\n```Druida " + level + "\nVida: 10\nForça: 1 - 4\nDestreza:  1 - 3\nInteligência: 1 - 5\nCarisma: 1 - 2```")
        if(level == "Level: 5") msg.reply("** Seus Status **\n```Druida " + level + "\nVida: 15\nForça: 3 - 6\nDestreza:  3 - 5\nInteligência: 3 - 7\nCarisma: 3 - 4```")
        if(level == "Level: 10") msg.reply("** Seus Status **\n```Druida " + level + "\nVida: 20\nForça: 5 - 8\nDestreza:  5 - 7\nInteligência: 5 - 9\nCarisma: 5 - 6```")
      }
      else if(msg.member.roles.cache.find(r=> r.id == guerreiroId))
      {
        verificaLevel()
        if(level == "Level: 1") msg.reply("** Seus Status **\n```Guerreiro " + level + "\nVida: 10\nForça: 1 - 4\nDestreza:  1 - 5\nInteligência: 1 - 2\nCarisma: 1 - 3```")
        if(level == "Level: 5") msg.reply("** Seus Status **\n```Guerreiro " + level + "\nVida: 15\nForça: 3 - 6\nDestreza:  3 - 7\nInteligência: 3 - 4\nCarisma: 3 - 5```")
        if(level == "Level: 10") msg.reply("** Seus Status **\n```Guerreiro " + level + "\nVida: 20\nForça: 5 - 8\nDestreza:  5 - 9\nInteligência: 5 - 6\nCarisma: 5 - 7```")
      }
      else if(msg.member.roles.cache.find(r=> r.id == magoId))
      {
        verificaLevel()
        if(level == "Level: 1") msg.reply("** Seus Status **\n```Mago " + level + "\nVida: 10\nForça: 1 - 2\nDestreza:  1 - 4\nInteligência: 1 - 5\nCarisma: 1 - 3```")
        if(level == "Level: 5") msg.reply("** Seus Status **\n```Mago " + level + "\nVida: 15\nForça: 3 - 4\nDestreza:  3 - 6\nInteligência: 3 - 7\nCarisma: 3 - 5```")
        if(level == "Level: 10") msg.reply("** Seus Status **\n```Mago " + level + "\nVida: 20\nForça: 5 - 6\nDestreza:  5 - 8\nInteligência: 5 - 9\nCarisma: 5 - 7```")
      }
      else if(msg.member.roles.cache.find(r=> r.id == mongeId))
      {
        verificaLevel()
        if(level == "Level: 1") msg.reply("** Seus Status **\n```Monge " + level + "\nVida: 10\nForça: 1 - 4\nDestreza:  1 - 5\nInteligência: 1 - 3\nCarisma: 1 - 2```")
        if(level == "Level: 5") msg.reply("** Seus Status **\n```Monge " + level + "\nVida: 15\nForça: 3 - 6\nDestreza:  3 - 7\nInteligência: 3 - 5\nCarisma: 3 - 4```")
        if(level == "Level: 10") msg.reply("** Seus Status **\n```Monge " + level + "\nVida: 20\nForça: 5 - 8\nDestreza:  5 - 9\nInteligência: 5 - 7\nCarisma: 5 - 6```")
      }
      else
      {
        msg.reply("```Você Ainda Não Escolheu uma Classe```")
      }
    }
    else
    {
      msg.reply("```Comando Inválido Envie: !status```")
    }

    function verificaLevel()
    {
      if(msg.member.roles.cache.find(r=> r.id == level1Id))
      {
        level = "Level: 1"
      }
      else if(msg.member.roles.cache.find(r=> r.id == level5Id))
      {
        level = "Level: 5"
      }
      else if(msg.member.roles.cache.find(r=> r.id == level10Id))
      {
        level = "Level: 10"
      }
      else
      {
        level = "Level: 1"
      }
    }
    
  });

client.login(config.token);
