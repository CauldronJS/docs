---
id: api-overview
title: API Overview
sidebar_label: Overview
---

Cauldron is a very complex project, but I want to make that less of the case with some
detailed explanations of how it all works. If you aren't interested, that's fine. If you are,
well then take a seat for a bit.

## In The Beginning

Cauldron stemmed from an old project I helped with called
[PlugJS](https://github.com/Connicpu/PlugJS) ([associated scripts](https://github.com/Conji/PlugJS-Lib)). I'm still somewhat proud of it because it started 6 months prior to the popular
ScriptCraft&trade;, back when Bukkit was still kind of new and the game was taking off. As
someone who wasn't too fond of Java but had a positive mindset about JavaScript and the new
languages being built from it, having fun with it wasn't hard. Since Oracle&reg; provided a
good JavaScript engine (Rhino at the time) with Java, there really wasn't anything to shy away
from.

Move forward a little bit and the plugin was mostly written in CoffeeScript (is it still alive?
). Life occured, jobs happened, and fast forward to around 2017. I'd found the new JS engine
Nashorn and was [determined to make a plugin better than prior](https://github.com/Thiq/Thiq).
It was hard considering it didn't have the new features JS was beginning to release with, but
I dealt with it. Through another year or two, the gap widened by too much. Dropping active
development until I could either find a new engine or get the guts to write my own, the
waiting game began.

Eventually I stumbled about GraalVM&reg; and thus CauldronJS was born. New life had been given
to what was originally named Thiq with so much more potential but a larger goal: allow NodeJS
to run in an already existing Java environment. Graal can run JS and replace Node, but it
can't do it in the Java context. When asked to, the developers simply said "we can't". This
what birthed the need for Cauldron.

## 2 Parts Java, 1 Part JavaScript

One of the main design principles for Cauldron is _never require the developer to rely on
Java_. No matter the problem, something shouldn't be implemented in a different way just
because it's the core is in Java. If someone wants to, they have the power to. But if you run
into a problem, it shouldn't be required to compare a Java vs JavaScript. This is achieved by
having the core functionality of the plugin residing in
[the API repository](https://github.com/cauldronjs/api). All thread work is consistent across
all platforms to provide a common benchmark. In the future, instances of the CVM/Isolate will
be placed on a separate thread when possible, but that's way farther than now and won't change
any base implementations.

### What Is The CVM?

The CVM, or the Cauldron Virtual Machine, is referenced as an `Isolate` in the code. This class
is in charge of creating the JS engine and managing the context as well as bindings. If you
create 2 Isolates, neither will have knowledge of each other. By keeping them separate, it can
prevent security concerns when running multiple JS environments within a single JVM. An example
of where this can be used would be to create a computer mod that runs on JS.

By default, the Cauldron instance has a main Isolate. When creating the Isolate, the core
libraries are bootstrapped to inject Cauldron specific globals and process information. If
we have an Isolate prepared and ready to be used, we can save the hassle of building a new one
at runtime. While not expensive, it can save precious seconds. Once set in a warming state, the
Isolate can then either run the entry point of the working directory or process regular JS
inputs. The platform specific JARs then use this to process the code in whatever way it sees
fit.

### Differences Between Platforms

At the moment Cauldron runs on Spigot and Sponge, of which both are very different. Spigot
reimplements the Bukkit API while Sponge creates its own. To bypass this, the Cauldron API
is built into each artifact at compile time so as not to duplicate code and create as
consistent a codebase as possible. The design between the two though is not very different.
Both listen for when Cauldron is being allowed to load then process the entry point there. Even
if a client-side version of Cauldron were made, it'd function the same way.

## Native Libraries

Embedded within Cauldron is the core library implementation. In NodeJS, this is found in the
[`lib` directory](https://github.com/nodejs/node/tree/master/lib) - the same as Cauldron. The
difference is that Cauldron allows for hot reloading and contextual injecting of this directory
from local disk, meaning updates can be pushed to Cauldron without having to reinstall the
plugin. To prevent files from hijacking the directory, Cauldron keeps a lock on the directory
so external threads or non-owned JS can't modify it. The only recommended way to update is via the command `npx update-cauldron` (_soon to be implemented_).
