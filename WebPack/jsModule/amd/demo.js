(function () {
    require.config({
        paths: {
            m2:'./modules/m2',
            m1:'./modules/m1',
            jquery:'https://cdn.bootcss.com/jquery/3.4.1/jquery.min'
        }
    })
    require(['m2', 'jquery'], function(m2, $) {
        m2.show();
        $('body').css('background-color', '#000');
    })
})();