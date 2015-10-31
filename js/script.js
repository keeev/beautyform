$(document).ready(function() {

$("div.large-input").click(function(){
	$(this).find('input').focus();
		$('.searchfield').keypress(function() {
		    var dInput = this.value;
		    console.log(dInput);
		    $(".large-input:contains('" + dInput + "')").css("display","block");
		});

});


});
