$('form').submit(function (){
	var formID = $(this).attr('id');
	var formNm = $('#' + formID);
	$.ajax({
		type: 'POST',
		url: 'mail.php',
		data: formNm.serialize(),
		success: function (data){s
			$(formNm).html(data);
		}
	});
	return false;
});

$(':input','form')
 .not(':button, :submit, :reset, :hidden')
 .val('')
 .removeAttr('checked')
 .removeAttr('selected');