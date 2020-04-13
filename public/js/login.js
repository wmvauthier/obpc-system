$(document).ready(function name(params) {
    $("#validationFormLogin").hide(200);
});

$('#loginFormLogin').focus(function () { $("#validationFormLogin").hide(200); });
$('#passwordFormLogin').focus(function () { $("#validationFormLogin").hide(200); });

$("#formLogin").submit(function (event) {
    event.preventDefault();

    var login = $("#loginFormLogin").val();
    var password = $("#passwordFormLogin").val();

    var data = `login=${login}&senha=${password}`;
    var result = httpPost('/usuarios/login', data);

    if (result.token) {
        $('#validationFormLogin').addClass(result.class);
        $('#validationFormLogin').removeClass('alert-danger');
    } else {
        $('#validationFormLogin').addClass(result.class);
        $('#validationFormLogin').removeClass('alert-success');
    }

    $("#validationTitleFormLogin").html(result.title);
    $("#messageFormLogin").html(result.mensagem);
    $("#validationFormLogin").show(200);

    console.log(data);
    console.log(result);

});

