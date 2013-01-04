# Mention.js

Lightweight wrapper for adding @user mention functionality to Twitter Bootstraps Typeahead plugin

<b>View the demo <a href="http://jsfiddle.net/jakie8/qCXD5/" target="_blank">here</a>.</b>

## Dependencies
* <a href="https://github.com/jquery/jquery" target="_blank">jQuery</a>
* <a href="https://github.com/twitter/bootstrap" target="_blank">Typeahead</a>

## Usage
`````javascript
$("#multi-users").mention({
    delimiter: '@',
    users: ["ashley", "roger", "frecklefart123"]
});
`````

## Sensitivity
`````javascript
$("#multi-users").mention({
    sensitive: true,
    users: ["sarah", "bigRat", "roger", "Ricky"]
});
`````
With sensitivity set to true, items are ordered by the following divisions of priority:
* Highest: If first letter matches exactly
* High: If first letter matches regardless of case
* Med: If target has matching letters' case
* Low: if target has matching character regardless of case

### Sensitivity Examples:
If you were to query `"@r"`, with sensitivity on, the resulting list will be `["roger", "Ricky", "sarah", "bigRat"]`, but if you were to query `"@R"`, the resulting list would be `["Ricky", "roger", "bigRat", "sarah"]`


## Defaults
`````javascript
$("#multi-users").mention({
    users: [], // Array of Usernames to search against
    delimiter: '@', // Username Delimiter
    sensitive : true,
    typeaheadOpts: { // Settings for Typeahead
        matcher: _matcher, // Mention.js's custom matcher function, don't change
        updater: _updater, // Mention.js's custom updater function, don't change
        sorter: _sorter, // Mention.js's custom sorter function, don't change
    }
});
 
`````
 
### License

(The MIT license)

Copyright (c) 2013 Jacob Kelley

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
