Modals = (function() {
    var init = function() {
        bindEvents();
    }
    
    var loadModal = function() {
        clearModal();
        clearAnimation();
        

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
            }, 5000);
        }
        $('#modal-template').tmpl(data.Characters[id]).appendTo($modal);
        buildPagination(id);
        buildFoodChain(eats, eaten);
        positionLabels();


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
        $modal.removeClass('in');

        setTimeout(function(){ 
             $modal.addClass('hidden');   
        }, 1000);

        clearModal();
        clearAnimation();
    }

    var bindEvents = function() {
        $(document).on('click tap', '.pagination-control', loadModal);
        $(document).on('click tap', '.close', hideModal);

    }

    
    var positionLabels = function() {
        var foodChain = $('.modal-food-chain').offset().left;
        var width = 68;


        if ($('.modal-food-chain').find('.eats').length > 0) {
            var firstEats = $('.eats:first').offset();
            var lastEats = $('.eats:last').offset();
            
            var startEats = firstEats.left;
            var endEats = lastEats.left + width;
            
            var eatsLabelLeft = startEats - foodChain;

            $('.eats-label').css({'width': endEats - startEats, 'left': eatsLabelLeft}).html('I eat');

        }

        if ($('.modal-food-chain').find('.eatenby').length > 0) {
            var firstEatenby = $('.eatenby:first').offset();
            var lastEatenby = $('.eatenby:last').offset();

            var startEatenby = firstEatenby.left;
            var endEatenby = lastEatenby.left + width;

            var eatenbyLabelLeft = startEatenby - foodChain;

            $('.eatenby-label').css({'width': endEatenby - startEatenby, 'left': eatenbyLabelLeft}).html('Eats me');
        }
    
    }


    
    return {
        init: init,
        loadModal: loadModal,
        hideModal: hideModal
    }

})();

   