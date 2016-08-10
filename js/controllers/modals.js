Modals = (function() {
    var init = function() {
        bindEvents();
    }
    
    var loadModal = function() {
        clearModal();
        $("#animations").load("/assets/animations/1.html", function() {
            aniinit();
        });

        var $modal = $('#modal');
        var id = $(this).data('id');

        if ($modal.hasClass('hidden')) {
            $modal.removeClass('hidden');
            $modal.addClass('in');
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
    var bindEvents = function() {
        $(document).on('click tap', '.pagination-control', loadModal);
    }

    return {
        init: init,
        loadModal: loadModal
    }
})();