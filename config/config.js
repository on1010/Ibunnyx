// This is a module export statement for exporting an object
module.exports = {
  // This is an object containing various settings
  settings: {
    prefix: '!', // the prefix for commands example, !help
    botName: '', // this is your bot name, it has to be the same in game
    owerName: 'iBunnyx', // change this to the owner name
    ownerId: '6505e1e00e8e5adf5a703631', // change this with the owner of the bot ID
    botId: 'f0857a6ec2e168cc47fb89f2', // change this with your bot ID, you can get the bot id once you start the bot.
    developers: ['Atekinz'], // you can add as many as you want
    moderators: ['Azzzul.Bleu',
], // add as many as you want
    roomName: 'Changeme', // change this to your room name
    // change this to where you want the bot to teleport on start
    coordinates: {
      x: 17,
      y: 0,
      z: 2,
      facing: 'FrontLeft'
    },
    reactionName: 'wink' // the reaction you want to use to kick players, 'wink', 'wave, 'heart', 'clap', 'thumbsup'
  },
  // This is an object containing authentication data
  authentication: {
    room:"64408082db340c0908c571bb" , // your room ID can be found in highrise.game/room/
    token: "bdf80af58c31d69e3e25103d0144971151416d8ff0857a6ec2e168cc47fb89f2" // your token ID     you can get one from https://highrise.game
  }
}