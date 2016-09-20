$(document).ready(function(){
    data = function() {};

    $.get('/data.json', function(response) {
        data = response;

        Utilities.init();
        Hotspots.init();
        Modals.init();
        Attract.init();
    }, 'json');
});