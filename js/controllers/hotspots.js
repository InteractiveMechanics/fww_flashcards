Hotspots = (function() {
    var init = function() {
        buildHotspots();
        bindEvents();
    }
    
    var buildHotspots = function() {
        $('#hotspot-template').tmpl(data.Characters).appendTo('#hotspots');
    }
    var bindEvents = function() {
        $(document).on('click tap', '.hotspot', Modals.loadModal);
    }

    return {
        init: init
    }
})();