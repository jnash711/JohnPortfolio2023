(function ($) {
    "use strict";

    $("ul.navbar-nav li a").on("click", function () {
        $("ul.navbar-nav li a.active").removeClass("active text-bg-dark");
        $(this).addClass("active text-bg-dark");
    });


})(jQuery);