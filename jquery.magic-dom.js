/*!
 * Magic DOM v1.0.0
 * https://github.com/mahadazad/magic-dom
 *
 * Author: Muhammad Mahad Azad
 * Email: mahadazad@gmail.com
 * CodeCanyon: http://codecanyon.net/user/mahadazad/portfolio
 *
 * Released under the MIT license
 */

;(function($) {
    $.fn.mgDom = function(options) {
        var noop = function() {};
        var _default = {
            beforeDomChange: noop,
            onDomChange: noop
        };
        var settings = $.extend({}, _default, options);
        var regEx = /<!--\s*\/\/\s*MGDOM([\s\S]*?)MGDOM\s*\/\/\s*-->/gi;
        return this.each(function() {
            var $this = $(this);
            if (!$this.data('mgdom-injected')) {
                var mghtml = $(this).html();
                var html = mghtml.replace(regEx, '$1');
                settings.beforeDomChange.call(this);
                $this.html(html);
                $this.data('mgdom-injected', true);
                settings.onDomChange.call(this);
            }
        });
    };
}(jQuery));
