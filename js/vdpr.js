jQuery(function($) {
    console.log('ready');
    $(document).delegate('div', 'pageinit', function() {
        console.log('pageinit');

    });

    $('div[data-role="page"]').live('swiperight', function() {
        console.log($.mobile);
    });

    $('img.tirinha').live('tap', function() {
        console.log($.mobile);
    });
});