/*
 * MIT
 * Copyright (c) 2012 Jacob Kelley (jakiestfu.com, @jakiestfu)
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var Mention = Mention || (function($) {

    var opts = {
        target: '',
        users: [],
        typeaheadOpts: {}
    };

    function _checkDependencies() {
        if (typeof $ == 'undefined') {
            throw new Error("jQuery is Required");
        } else {
            if (typeof $.fn.typeahead == 'undefined') {
                throw new Error("Typeahead is Required");
            }
        }
        return true;
    }

    function _matcher(item) {
        item = item.toLowerCase();
        var usernames = (this.query.toLowerCase()).match(/@\w+/g),
            i;
        if ( !! usernames) {
            for (i = 0; i < usernames.length; i++) {
                var username = (usernames[i].substring(1)).toLowerCase();
                var matched = item.indexOf(username);

                var re = new RegExp("@" + item, "g");
                var used = ((this.query.toLowerCase()).match(re));

                if (item.indexOf(username) != -1 && used === null) {
                    return true;
                }
            }
        }
    }

    function _updater(item) {
        var data = this.query;
        var caratPos = this.$element[0].selectionStart;

        for (i = caratPos; i >= 0; i--) {
            if (data[i] == "@") {
                break;
            }
        }

        var replace = data.substring(i, caratPos);
        data = data.replace(replace, '@' + item);

        return data;
    }

    function applyMentions(userOpts) {

        opts = $.extend(opts, userOpts);

        if (_checkDependencies()) {
            $(opts.target).typeahead($.extend({
                source: opts.users,
                matcher: _matcher,
                updater: _updater
            }, opts.typeaheadOpts));
        }
    }

    return {
        apply: applyMentions
    };

})(jQuery);
