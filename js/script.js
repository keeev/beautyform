$(document).ready(function() {




$('input:checkbox').change(function(){
    if($(this).is(":checked")) {
        $('.vegan').addClass("checkedbg");
    } else {
        $('.vegan').removeClass("checkedbg");
    }
});

/*$('div.large-input').click(function() {
    $(this).focus();
}); */


$("div.large-input").click(function(){ 
	$(this).find('input').focus();
		$('.searchfield').keypress(function() {
		    var dInput = this.value;
		    console.log(dInput);
		    $(".large-input:contains('" + dInput + "')").css("display","block");
		});

});



	


function DropDown(el) {
    this.dd = el;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;
 
        obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            event.stopPropagation();
        }); 
    }
}

/*

$('input:checkbox').change(function(){
    if($(this).is(":checked")) {
        $('.vegan').addClass("checkedbg");
    } else {
        $('.vegan').removeClass("checkedbg");
    }
});

*/


/*var checkboxes = $('input[type=checkbox]');
  $(checkboxes).on('change', function() {
    if($(checkboxes).is(':checked')) {
      $(".vegan").toggleClass("checkedbg");
    }
  }); */


  /*

	var checkboxes = $('input[type=checkbox]');
  $(checkboxes).on('change', function() {
    if($(checkboxes).is(':checked')) {
      $(".vegan").toggleClass("checkedbg");
    }
  });


  */

	$(".large-input").click(function(){

		//$('input[type=text]').focus();

	});

});