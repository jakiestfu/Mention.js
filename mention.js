/*
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
 */
(function($) {
	$.fn.extend({
		mention : function(options) {
			this.opts = {
				users : [],
				delimiter : '@',
				sensitive : true,
				typeaheadOpts : {}
			};

			var settings = $.extend({}, this.opts, options),
				_checkDependencies = function() {
					if( typeof $ == 'undefined') {
						throw new Error("jQuery is Required");
					} else {
						if( typeof $.fn.typeahead == 'undefined') {
							throw new Error("Typeahead is Required");
						}
					}
					return true;
				},
				_extractCurrentQuery = function(query, caratPos) {
					for( i = caratPos; i >= 0; i--) {
						if(query[i] == settings.delimiter) {
							break;
						}
					}
					return query.substring(i, caratPos);
				},
				_matcher = function(item) {
					item = item.toLowerCase();
					var usernames = (this.query.toLowerCase()).match(new RegExp(settings.delimiter + '\\w+', "g")), i;
					if(!!usernames) {
						for( i = 0; i < usernames.length; i++) {
							var username = (usernames[i].substring(1)).toLowerCase(), matched = item.indexOf(username), re = new RegExp(settings.delimiter + item, "g"), used = ((this.query.toLowerCase()).match(re));
	
							if(item.indexOf(username) != -1 && used === null) {
								return true;
							}
						}
					}
				},
				_updater = function(item) {
					var data = this.query, caratPos = this.$element[0].selectionStart;
	
					for( i = caratPos; i >= 0; i--) {
						if(data[i] == settings.delimiter) {
							break;
						}
					}
	
					var replace = data.substring(i, caratPos);
					data = data.replace(replace, settings.delimiter + item);
	
					this.tempQuery = data;
	
					return data;
				},
				_sorter = function(items) {
					if(items.length && settings.sensitive) {
						var currentUser = _extractCurrentQuery(this.query, this.$element[0].selectionStart).substring(1), i, len = items.length, priorities = [], splices = [];
						if(currentUser.length == 1) {
							for( i = 0; i < len; i++) {
								if( (items[i][0] == currentUser) ) {
									priorities.push(items[i]);
									splices.push(i);
								}
							}
							for( i = 0; i < splices.length; i++) {
								items.splice(splices[i], 1);
							}
							for( i = 0; i < priorities.length; i++) {
								items.unshift(priorities[i]);
							}
						}
					}
					return items;
				};
			return this.each(function() {
				var _this = $(this);
				if(_checkDependencies()) {
					_this.typeahead($.extend({
						source : settings.users,
						matcher : _matcher,
						updater : _updater,
						sorter : _sorter
					}, settings.typeaheadOpts));
				}
			});
		}
	});
})(jQuery);
