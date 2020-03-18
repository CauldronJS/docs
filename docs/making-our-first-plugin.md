---
id: making-our-first-plugin
title: Making Our First Plugin
sidebar_label: Making Our First Plugin
---

We've been over how Cauldron works and how to configure it, so now it's time to get those libraries up and running. Like every tutorial out there, we'll start with the "Hello World" example.

Create your file `hello_world.js`. You can name it whatever you want, but we'll have it use this name for the example. Inside of it, write

```language/javascript
console.log('Hello world!');
```

Then inside of your `package.json`, change the `main` field to `./hello_world.js`. This tells Cauldron which file will be loaded after the bootstrapping of the core library is done. If you run the server, you should see "Hello world!" logged to it.

But of course it would. That's the boring example. If you're here, you already know JS which means this was more work to do than you cared about. Lets make something a little more fun.

Replace the contents of the file with the following:

```language/javascript
const cauldron = require('cauldron');

cauldron.registerCommand('hello', {execute: ({sender}) => sender.sendMessage('Hello!')});
```

Reload the server then run the command `hello`. You should now see an output to the console! What's cool is if you join the server, the server will also send it to the player that ran the command. Cool, right? There's no need to create some weird subcommand to pass everything in or handle explicit chat packets and it has the full functionality of a command written in Java. This means we can add a help description, tab completion, and everything else. We can also restrict usage to either console or a user based on creation like so:

```language/javascript
const commandConfig = {
  description: 'Squawk! I\'m a parot!',
  usage: '/<command>',
  aliases: ['parot', 'greet'],
  execute: ({sender}) => sender.sendMessage(`Hello, ${sender.getName()}!`),
  restriction: cauldron.Command.CommandRestriction.PLAYER_ONLY // you could also just use 2
};

cauldron.registerCommand('hello', commandConfig);
```

If you use the command now in the server, it'll say that it's usable only by a player. If you use it in-game, you should see it greeting you personally.

For the final edit, we'll have it modify what the player sees when they ping the server from the multiplayer menu.

```language/javascript

const offlinePlayerStorage = ... // this doesn't exist, but it would store all players that have played and address they came from

cauldron.events.on('serverlistping', serverPingEvent => {
  const cameFrom = serverPingEvent.getAddress();
  const offlinePlayer = offlinePlayerStorage.getPlayerByAddress(cameFrom);
  if (offlinePlayer) {
    serverPingEvent.setMotd(`We see you, ${offlinePlayer.getName()}!`);
  } else {
    serverPingEvent.setMotd('Looks like we got a noob! Come try us!');
  }
});
```

This won't run because we don't have a mechanism for storing offline players, but with just these 2 features, imagine all the cool things you can make. What's the best part about it all is we didn't have to create multiple plugins, compile, restart, and do all of this unncessary work to get them up and running. _That's_ why Cauldron was made. When you're trying to make your cool plugins, sometimes the monotonous work can be what creates the creativity block.
