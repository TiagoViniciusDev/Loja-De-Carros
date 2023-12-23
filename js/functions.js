$(function(){

  var isDrag = false;
  var preco_maximo = 650000;
  var preco_atual = 0;

  $('.cube-preco').mousedown(function(){ //Ao pressionar o mouse isDrag vira true
      isDrag = true;
  });

  $(document).mouseup(function(){ //Ao soltar o mouse isDrag vira false
   isDrag = false;
   enableTextSelection();
  });

  $('.barra-preco').mousemove(function(e){ //Detectando se o mouse está se movendo dentro da barra-preco
   if(isDrag == true){
      var base = $(this);
      var mouseX = e.pageX - base.offset().left; //PageX é a função para pegar a posição do mouse
      //com o offset no this estamos tirando a posição do left da barra dos calculos

      if(mouseX < 0){
         mouseX = 0;
      } 

      if( mouseX > base.width()){
         mouseX = base.width();
      }

      disableTextSelection();

      $('.cube-preco').css('left', mouseX-13+'px');
      var percent = (mouseX/base.width()) * 100; //Calculando o quando do mouseX reprensenta da porcentagem
      $('.barra-preenchida').css('width', percent+2+'%'); //Movendo a barra preenchida de acordo com a posição em porcentagem do mouseX

      preco_atual = (preco_maximo * percent)/100;
      preco_atual = preco_atual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); //Formatação do número em BRL
      $('.preco_pesquisa').html('R$'+preco_atual);
   }
  });

  $(window).resize(function(){ //Redimensionar a tela faz com que a barra de preço volte para zero
   mouseX = 0;
   $('.cube-preco').css('left', 0);
   $('.barra-preenchida').css('width', 0);
   $('.preco_pesquisa').html('R$0,00');


  });

  //Funções

  function disableTextSelection(){ //Destativando seleção de texto
   $('body').css('-webkit-user-select', 'none');
   $('body').css('-moz-user-select', 'none');
   $('body').css('-ms-user-select', 'none');
   $('body').css('-o-user-select', 'none');
   $('body').css('user-select', 'none');
  }

  function enableTextSelection(){ //Ativando seleção de texto
   $('body').css('-webkit-user-select', 'auto');
   $('body').css('-moz-user-select', 'auto');
   $('body').css('-ms-user-select', 'auto');
   $('body').css('-o-user-select', 'auto');
   $('body').css('user-select', 'auto');
  }

  //Contato - Scroll Dinâmico

  $('[go=contato]').click(function(){
   $('body, html').animate({'scrollTop': $('#contato').offset().top});
   return false;
  });

});