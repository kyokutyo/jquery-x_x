(function($){
    $.fn.x_x = function(config) {
        var defaults = {
            colors: [
                '#f09', '#f03', '#600',
                '#0f9', '#0f3', '#063',
                '#09f', '#03f', '#036'
            ],
            interval: 50
        };
        var options = $.extend(defaults, config);
        return this.each(function() {
          var def_color, timer;
          $(this).on('mouseover', function() {
            $this = $(this);
            def_color = $this.css('color');
            timer = setInterval(function() {
              var num = Math.floor(Math.random() * options.colors.length);
              $this.css('color', options.colors[num]);
            }, options.interval);
          });
          $(this).on('mouseout', function() {
            clearInterval(timer);
            $(this).css('color', def_color);
          });
        });
    };
})(jQuery);
