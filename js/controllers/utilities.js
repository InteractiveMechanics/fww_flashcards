Utilities = (function() {
    var timeout = [];
    var duration = 90000; //90000

    var init = function() {
        bindEvents();
    }
    var resetTimeout = function() {
        if (timeout) {
            $.each(timeout, function(index, value){
                clearTimeout(value);
                timeout.splice(index, 1);
            });
        }
        timeout.push(setTimeout(resetInteractive, duration));
    }
    var bindEvents = function() {
        $(document).on('click tap', resetTimeout);
        $(document).ready(resetInteractive);
        $(document).on('click tap', '#attract', closeAttract);
    }
    var resetInteractive = function() {
        // TODO: Reset back to start
        var $modal = $('#attract');
         if ($modal.hasClass('hidden')) {
            $modal.removeClass('hidden').removeClass('fade');
            Modals.hideModal();
            sendGAEvent('Attract Loop');
            }




    }

    var closeAttract = function() {
        $modal = $('#attract');
        if (!$modal.hasClass('hidden')) {
            $modal.addClass('hidden').addClass('fade');
            sendGAEvent('Home Screen');
        }
    }

    return {
        init: init,
        resetTimeout: resetTimeout
    }
})();