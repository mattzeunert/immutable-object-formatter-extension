# Immutable.js Object Formatter (Chrome Extension)

Transforms Immutable JS objects to a more readable format when they are logged to the console.

[Install the Chrome Extension](https://chrome.google.com/webstore/detail/immutablejs-object-format/hgldghadipiblonfkkicmgcbbijnpeog)

Based on [immutable-devtools](https://github.com/andrewdavey/immutable-devtools).

The Chrome extension will only work if you **enable Custom Formatters** in the DevTools settings.

![](https://cloud.githubusercontent.com/assets/1303660/18231278/a271ede6-72ad-11e6-8623-367f3e8eb686.png)

## How it works

The code in "/immutable-devtools" is essentially just a copy of `immutable-devtools`.

The two main differences are:

1. We can't use `instanceof Immutable.Record` to detect if an object is a record, since we don't have access to the Immutable module that's loaded on the page. (We only have access to the one loaded in the extension.)  
  We can still identify Records correctly, but the way we do it means there's a chance that an internal change in how Immutable.JS works could break that.
2. The code can be loaded and unloaded several times on the same page, so we can't rely on variables inside the modules to detect if the formatters have already been injected into the page. Instead I'm setting a `window.__ImmutableJSDevToolsFormattersInstalled` property.

Then all that's left to do is to load the code in "devtools.js".

## Running the code locally

1. `npm install`
2. `npm run dev`
3. Load the "/extension" directory as an unpacked Chrome extension
4. Open "/test-page/index.html" to check everything looks as expected

Make sure to reload the extension after any changes.
