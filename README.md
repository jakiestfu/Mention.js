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

## Defaults
`````javascript
$("#multi-users").mention({
    delimiter: '@', // Username Delimiter
    users: [], // Array of Usernames to search against
    typeaheadOpts: { // Settings for Typeahead
        matcher: _matcher, // Mention.js's custom matcher function, don't change
        updater: _updater, // Mention.js's custom updater function, don't change
    }
});
 
`````
 
`````
Copyright (c) 2012 Jacob Kelley, @jakiestfu, http://jakiestfu.com

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
`````
