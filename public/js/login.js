$(document).ready(function name(params) {
    $("#validationFormLogin").hide();
});

$("#formLogin").submit(function (event) {
    event.preventDefault();

    var login = $("#loginFormLogin").val();
    var password = $("#passwordFormLogin").val();

    var data = `login=${login}&senha=${password}`;
    var result = httpPost('/usuarios/login', data);

    if (result.token) {
        $("#validationTitleFormLogin").html('Sucesso');
    } else {
        $("#validationTitleFormLogin").html('Erro');
    }

    $("#messageFormLogin").html(result.mensagem);
    $("#validationFormLogin").show();

    console.log(data);

    console.log(result);
});

