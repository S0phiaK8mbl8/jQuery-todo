$(document).ready(function(){
// var input = document.querySelector('input');
	var $input = $('input');
	var $button = $('button');
	var $list = $('.list ul');
	var $warning = $('#warning');

	$button.on('click', function(event){
		event.preventDefault();

		if ($input.val() !== '' ) {
		var newTodo = $('<li></li>').html($input.val() + "<span class='delete'> x </span>");
		$list.prepend(newTodo);
		$input.val('');
		$warning.text('');

	} else {
		$warning.text("Please enter an item.");
	}
	});

//end button click///////////////////////////////////////

$list.on('click', '.delete', function(event) {
	console.log('clicked x');
	$(this).parent().css().addClass('strike');
	$(this).hide();
	$(this).parent()
		.addClass('strike')
		.delay(1000)
		.hide(700);

});
	
});