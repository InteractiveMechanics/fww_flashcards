Modals = (function() {
    var timeout;

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
            $('#animation').removeClass('fade');
            $('#animation').load('/assets/animations/' + id + '.html', function() {
                animationInit();
            });

            if(timeout) { window.clearTimeout(timeout)}

            timeout = setTimeout(function(){ 
                $modal.addClass('in');
            }, 5000);
        } else {
            $modal.css('z-index', '6');
            $('#animation').removeClass('fade');
            
            $('#animation').load('/assets/animations/' + id + '.html', function() {
                animationInit();
            });

            if(timeout) { window.clearTimeout(timeout) }
            
            timeout = setTimeout(function(){ 
                $modal.addClass('in');
                fadeAnimation();
                $modal.css('z-index', '9');
            }, 6000);
            
        }

        $('#modal-template').tmpl(data.Characters[id]).appendTo($modal);
        buildPagination(id);
        buildFoodChain(eats, eaten);
        positionLabels();

        sendGAEvent('Flashcard: ' + data.Characters[id].Name);
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

    var fadeAnimation = function() {
        $('#animation').addClass('fade');
    }

    var hideModal = function() {
        var $modal = $('#modal');
        $modal.removeClass('in');

        setTimeout(function(){ 
             $modal.addClass('hidden');   
        }, 500);

        clearModal();
        clearAnimation();
        sendGAEvent('Home Screen');
    }

     var pauseVideo = function() {
        $video = $("video");
        $pause = $("#pause");
        $play = $('#play');
        $video.get(0).pause();
        $pause.addClass('hidden');
        $play.removeClass('hidden');
    }

    var playVideo = function() {
        $video = $("video");
        $pause = $("#pause");
        $play = $('#play');
        $video.get(0).play();
        $pause.removeClass('hidden');
        $play.addClass('hidden');
    }


    var bindEvents = function() {
        $(document).on('click tap', '.pagination-control', loadModal);
        $(document).on('click tap', '.close', hideModal);
        $(document).on('click tap', '#pause', pauseVideo);
        $(document).on('click tap', '#play', playVideo);
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

   