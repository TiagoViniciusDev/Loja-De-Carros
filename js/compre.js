$(function(){



    arrowPosition();

    function arrowPosition(){ //Função para posicionar as arrows

    var topCarrosel = $('.carrosel-venda').offset().top;
    var heightCarrosel = $('.carrosel-venda').innerHeight();
    $('.arrow-right').css('top', heightCarrosel/2+topCarrosel);
    $('.arrow-left').css('top', heightCarrosel/2+topCarrosel);

    var leftCarrosel = $('.carrosel-venda').offset().left;
    var widthCarrosel = $('.carrosel-venda').innerWidth();
    $('.arrow-right').css('left', leftCarrosel+widthCarrosel+10);
    $('.arrow-left').css('left', leftCarrosel - 10);
    
    }


    //Arrows funcionando

    var contador = 0;
    var maxContador = $('.slide-venda').length - 3;
    var slideWidth = $('.slide-venda').innerWidth() + 10;
    var indexSlide = 0;
    var img;

    $('.arrow-right').click(function(){
        $('.arrow-left').css('display', 'block');
        contador ++;
        $('.carrosel-venda').animate({'scrollLeft': slideWidth*contador});

        if(contador == maxContador){
            $('.arrow-right').css('display', 'none');
        } else{
            $('.arrow-right').css('display', 'block');
        }
    });

    $('.arrow-left').click(function(){
        $('.arrow-right').css('display', 'block');
        contador --;
        $('.carrosel-venda').animate({'scrollLeft': slideWidth*contador});

        if(contador == 0){
            $('.arrow-left').css('display', 'none');
        } else{
            $('.arrow-left').css('display', 'block');
        }
    });

    /**/

    

    $('.slide-venda').click(function(){
        $('.slide-venda').css('border-color', 'white');
        $(this).css('border-color', 'gray'); //Mudando a cor da borda do elemento selecionado

        img = $(this).css('background-image'); //Pegando a imagem do elemento selecionado
        $('.venda-img').css('background-image', img); //Mudando para a imagem do elemento selecionado

    });

    $('.slide-venda').eq(0).click(); //Dando click automatico na primeira imagem para que ela fique selecionada

    $(window).resize(function(){
        arrowPosition(); //Re-calculando posição das arrows
        slideWidth = $('.slide-venda').innerWidth() + 10; //Re-calculando o tamanho dos slides
    });

});