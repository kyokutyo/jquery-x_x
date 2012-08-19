;(function($, undefined) {
    $.fn.x_x = function(options) {
        var opts = $.extend({}, $.fn.x_x.defaults, options);
        return this.each(function() {
          var def_color, timer;
          $(this).on('mouseover', function() {
            $this = $(this);
            def_color = $this.css('color');
            timer = setInterval(function() {
              var num = Math.floor(Math.random() * opts.colors.length);
              $this.css('color', opts.colors[num]);
            }, opts.interval);
          });
          $(this).on('mouseout', function() {
            clearInterval(timer);
            $(this).css('color', def_color);
          });
        });
    };
    $.fn.x_x.defaults = {
        colors: [
            '#f09', '#f03', '#600',
            '#0f9', '#0f3', '#063',
            '#09f', '#03f', '#036'
        ],
        interval: 50
    };
})(jQuery);
