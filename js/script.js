$(document).ready(function() {




$('input:checkbox').change(function(){
    if($(this).is(":checked")) {
        $('.vegan').addClass("checkedbg");
    } else {
        $('.vegan').removeClass("checkedbg");
    }
});



$("div.large-input").click(function(){ 
	$(this).find('input').focus();
		$('.searchfield').keypress(function() {
		    var dInput = this.value;
		    console.log(dInput);
		    $(".large-input:contains('" + dInput + "')").css("display","block");
		});

});


});