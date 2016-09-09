Modals = (function() {
    var init = function() {
        bindEvents();
    }
    
    var loadModal = function() {
        clearModal();
        clearAnimation();
        //closeModal();

        var $modal = $('#modal');
        var id = $(this).data('id');
        var eats = data.Characters[id]["Eats"];
        var eaten = data.Characters[id]["EatenBy"];

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
        buildFoodChain(eats, eaten);


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
    var buildFoodChain = function(eats, eaten) {
        var $foodchain = $('.modal-food-chain');
        $.each(eats['Id'], function( index, value ) {
            $foodchain.find('.modal-food-chain-' + value).addClass('active eats');
        });
        $.each(eaten['Id'], function( index, value ) {
            $foodchain.find('.modal-food-chain-' + value).addClass('active eatenby');
        });
    }
    var clearModal = function() {
        $('#modal').html('');
    }
    var clearAnimation = function() {
        $('#animation').html('');
    }

    var hideModal = function() {
        var $modal = $('#modal');
        if (!$modal.hasClass('hidden')) {
            $modal.addClass('hidden');
        }
    }

    var closeModal = function() {
        $(document).on('click tap', '.close', hideModal);
    }
    closeModal();

    var bindEvents = function() {
        $(document).on('click tap', '.pagination-control', loadModal);
    }

    
    return {
        init: init,
        loadModal: loadModal
    }

})();

   