# Mention.js

Lightweight wrapper for adding @user mention functionality to Twitter Bootstraps Typeahead plugin

## View the demo <a href="http://jsfiddle.net/jakie8/qCXD5/" target="_blank">here</a>.

## Dependencies
* <a href="https://github.com/jquery/jquery" target="_blank">jQuery</a>
* <a href="https://github.com/twitter/bootstrap" target="_blank">Typeahead</a>

## Usage
`````
Mention.apply({
    target: "#multi-users",
    users: ["ashley", "roger", "frecklefart123"]
});
 
`````

## Defaults
`````
Mention.apply({
    target: "", // Element Selector
    users: [], // Array of Usernames to search against
    typeaheadOpts: { // Settings for Typeahead
        matcher: _matcher, // Mention.js's custom matcher function, don't change
        updater: _updater, // Mention.js's custom updater function, don't change
    }
});
 
`````
