---
id: jsx
title: Using JSX In Cauldron
sidebar_label: JSX
---

If you aren't familiar with JSX, check out [the documentation on the React docs](https://reactjs.org/docs/introducing-jsx.html). It allows us to create single-life objects with an easy and fluent syntax that doesn't clutter our codebase. If you look back at creating a command, you'll remember we had a bunch of options in our configuration that quickly made the creation unorganized and somewhat unmaintainable. Allowing Cauldron to use JSX solves some of those problems, but we can't use a library like React because it's made for UI.

## Introducing Rinse

Rinse is hand made for Cauldron and builds off of what is compiled by the Babel plugin. Before using Rinse though, a little configuration has to be done.

Check your `deps` directory for `@cauldron/rinse`. If it exists, awesome. If not, download it from the scripts repository. Once it's in there, run the command `babel deps --out-dir node_modules --copy-files`.

In your projects directory, create the file `babel.config.js` and put this in.

```language/javascript
module.exports = api => {
  api.cache(true);
  return {
    plugins: [
      '@babel/plugin-syntax-jsx',
      [
        '@babel/plugin-transform-react-jsx',
        { pragma: 'Rinse.createComponent', pragmaFrag: 'Rinse.Fragment' }
      ]
    ]
  }
}
```

Now in your `package.json`, add the following to your dependencies:

```
"@babel/cli": "^7.2.3",
"@babel/core": "^7.3.4",
"@babel/plugin-proposal-class-properties": "^7.4.0",
"@babel/plugin-proposal-export-default-from": "^7.2.0",
"@babel/plugin-proposal-object-rest-spread": "^7.4.3",
"@babel/plugin-syntax-jsx": "^7.2.0",
"@babel/plugin-transform-modules-commonjs": "^7.4.3",
"@babel/plugin-transform-react-jsx": "^7.3.0",
"@babel/preset-env": "^7.4.3",
```

Now create a new file `./src/index.js`.

```
import Rinse, { Command } from '@cauldron/rinse';

const greet = ({sender}) => sender.sendMessage('Hello!');

const HelloCommand = () => (
  <Command name="hello" execute={greet} />
);

Rinse.mount(<HelloCommand />);
```

Now run `babel src --out-dir dist --copy-files` and edit your `package.json['main']` to `./dist/index.js`.

When you reload the server, you should have a new command!

## Building Your Own Components

Building a custom component is easy considering it's just a function call at the end of the day. If you explore what Babel compiled our code to, you'll see something like this:

```language/javascript
const HelloCommand = () => _rinse.default.createComponent(_rinse.Command, {
  name: "Hello",
  execute: greet
});
```

This tells us that technically we could call regular old `HelloCommand()` and it'd do the same thing. So the anatomy of a Rinse component is:

```language/javascript
const MyComponent = props => {
  // do whatever here
  // finally return the children props. It can be null
  return props.children;
}
```

The `props` argument gives us every value that we used in the JSX component. In our hello command, props would look like this

```
{
  name: 'Hello',
  execute: greet
}
```

A barebones recreation of the `Command` component would look something like

```language/javascript
const Command = props => {
  cauldron.registerCommand(props.name, props);
}
```

Easy, right? Now you don't have to worry about all these weird option objects! Use it to create a portals plugin, a faction component, or anything else. The list is pretty large!
