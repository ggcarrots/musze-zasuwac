function run_ajax(_a, _id, _data) {
	$.ajax({
		method: "POST",
		url: "api.php",
		data: {
			a: _a,
			token: "password_for_the_ajaxtest",
			id: _id,
			data: _data
		},
		success: function (result) {
			console.log(result);
		}
	});
}

function submit_email(e) {
	e.preventDefault();
	let email_content = $("#email-form-content").val();
	let id = run_ajax('r', 'email-id');
	run_ajax('u', 'email-id', Number(id)+1);
	run_ajax('c', 'feedbackemail-'+id, email_content);
	$("#email-form-content").html();
	alert("Thanks for your feedback!");
}

$(() => {
	$("#email-form-submit").on("click", e => submit_email(e));

});
