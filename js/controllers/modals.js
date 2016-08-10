Modals = (function() {
    var init = function() {
        bindEvents();
    }
    
    var loadModal = function() {
        clearModal();
        clearAnimation();

        var $modal = $('#modal');
        var id = $(this).data('id');

        if ($modal.hasClass('hidden')) {
            $modal.removeClass('hidden');
            $('#animation').load('/assets/animations/' + id + '.html', function() {
                animationInit();
            });
            setTimeout(function(){ 
                $modal.addClass('in');
            }, 3000);
        }
        $('#modal-template').tmpl(data.Characters[id]).appendTo($modal);
        buildPagination(id);
    }
    var buildPagination = function(id) {
        var $pagination = $('#modal .modal-pagination');

        if ((id - 1) > -1) {
            $('#modal-pagination-template').tmpl(data.Characters[id - 1]).addClass('prev').appendTo($pagination);
        }
        if ((id + 1) < data.Characters.length) {
            $('#modal-pagination-template').tmpl(data.Characters[id + 1]).addClass('next').appendTo($pagination);
        }
    }
    var clearModal = function() {
        $('#modal').html('');
    }
    var clearAnimation = function() {
        $('#animation').html('');
    }
    var bindEvents = function() {
        $(document).on('click tap', '.pagination-control', loadModal);
    }

    return {
        init: init,
        loadModal: loadModal
    }
})();