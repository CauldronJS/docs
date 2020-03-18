---
id: installation
title: Installation
sidebar_label: Installation
---

## Installing GraalVM

As stated before, Cauldron runs [GraalVM](https://www.graalvm.org/). Without it, you'll just get a bunch of errors telling you Java has no clue what it is. GraalVM is meant as a drop-in replacement for Java 8 and Java 11, so if any errors occur during the setup process, open a ticket with them or myself. It's recommended to be on the latest version of GraalVM at most times as there is still heavy development on the JavaScript features being shipped with it. You can follow the installation instructions [here](https://www.graalvm.org/docs/getting-started/).

## Installing Cauldron for Spigot

It's assumed you know how to install and configure Spigot. If not, check out
[these docs](https://www.spigotmc.org/wiki/buildtools/). Once that's done, [download Cauldron for Spigot](https://github.com/cauldronjs/spigot)
and clone the scripts repository into `plugins/Cauldron`. We can do a bunch at this step, but
for now we'll get you up and running.

If you navigate into the main directory, you'll notice the structure isn't that different from
a typical NodeJS repo.

```
plugins/Cauldron
  |
  |__src
  |    |
  |    |__index.js
  |
  |__lib // the core libraries of Cauldron. This will be moved to the JAR in the future
  |
  |__deps // local dependencies can go here if the package itself isn't deployed on a host
  |
  |__package.json // the package info
```

If you replace what's in `src/index.js` with `console.log('Hello world')` and run the server,
you should see it log to the server output. If it doesn't, take note of the error and open a
ticket [here](https://github.com/cauldronjs/scripts).

Now that you're all setup, lets get into some customization of the codebase!
