$(document).ready(function(){

	// MOSTRANDO Y OCULTANDO MENU
	$('#button-menu').click(function(){
		if($('#button-menu').attr('class') == 'fa fa-bars' ){

			$('.navegacion').css({'width':'100%', 'background':'rgba(0,0,0,.5)'}); // Mostramos al fondo transparente
			$('#button-menu').removeClass('fa fa-bars').addClass('fa fa-close'); // Agregamos el icono X
			$('.navegacion .menu').css({'left':'0px'}); // Mostramos el menu

		} else{

			$('.navegacion').css({'width':'0%', 'background':'rgba(0,0,0,.0)'}); // Ocultamos el fonto transparente
			$('#button-menu').removeClass('fa fa-close').addClass('fa fa-bars'); // Agregamos el icono del Menu
			$('.navegacion .submenu').css({'left':'-320px'}); // Ocultamos los submenus
			$('.navegacion .menu').css({'left':'-320px'}); // Ocultamos el Menu

		}
	});

	// MOSTRANDO SUBMENU
	$('.navegacion .menu > .item-submenu a').not('.item-subsubmenu a').click(function(){
		
		var positionMenu = $(this).parent().attr('menu'); // Buscamos el valor del atributo menu y lo guardamos en una variable
		console.log(positionMenu); 

		$('.item-submenu[menu='+positionMenu+'] .submenu').css({'left':'0px'}); // Mostramos El submenu correspondiente

	});

	// OCULTANDO SUBMENU
	$('.navegacion .submenu li.go-back').click(function(){

		$(this).parent().css({'left':'-320px'}); // Ocultamos el submenu

	});

	// MOSTRANDO SUB-SUBMENU
	$('.navegacion .menu > .item-submenu > .submenu .item-subsubmenu a').click(function(){

		var positionMenu = $(this).parent().attr('menu'); // Buscamos el valor del atributo menu y lo guardamos en una variable
		console.log(positionMenu); 
		$('.item-subsubmenu[menu='+positionMenu+'] .subsubmenu').css({'left':'0px'}); // Mostramos El sub-submenu correspondiente

	});

	// OCULTANDO SUB-SUBMENU
	$('.navegacion .subsubmenu li.go-back').click(function(){

		$(this).parent().css({'left':'-320px'}); // Ocultamos el sub-submenu
	});

	
	
});


/* Se mostrará buscador de google hasta que se cargue toda la página*/
$(window).on('load', function () {
	
	//OCULTANDO BOTON DE BUSQUEDA DE GOOGLE
	$('.gsc-search-button').hide();
	$("#lupa").css("visibility", "visible");
	
	$('#gsc-i-id1').keyup(function(e){
		if(e.keyCode == 13)
		{
			$(".gsc-search-button input").click();
		}
	});
	
	$('#gsc-i-id1').blur(function() {
		if($('.gsc-results-wrapper-visible').length){
			
		}else{
						
			$("#lupa").css("visibility", "visible");
			$("#lupa a").html("<i class='fa fa-search'></i>");
			var a = document.getElementById("google_search_bar");
			a.style.display = "none";  
			$('#gsc-i-id1').val('');
		}
	});
});

/*Funcionalidad de ocultar y mostrar el buscador por Focus */
function open_search(elemen) {
  var a = document.getElementById("google_search_bar");
  
  if(a.style.display == "none") {
    $("#google_search_bar").css('opacity','0');
	$("#google_search_bar").show().animate({opacity:1},1000); 
	$("#gsc-i-id1").focus(); 
	$("#lupa").css("visibility", "hidden");
  }else {
    a.style.display = "none";  
	elemen.innerHTML = "<i class='fa fa-search'></i>";    
  }
}

