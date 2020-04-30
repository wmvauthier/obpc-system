$(document).ready(function () {
    hideOptionalFields();
});

function validate() {

    var data_nascimento = ($('#data_nascimento').val().replace(/\D/g, "/"));

    if ($("#classificacao").val() == "Igreja") {
        $(".sedeArea").hide();
        $("#sede").val('');
    } else {
        $(".sedeArea").show();
    }

    if ($("#classificacaoUpd").val() == "Igreja") {
        $(".sedeAreaUpd").hide();
        $("#sedeUpd").val('');
    } else {
        $(".sedeAreaUpd").show();
    }

    if ($("#tipo").val() == "Congregado") {
        $("#cargo").val('Nenhum');
    }

    if ($("#tipoUpd").val() == "Congregado") {
        $("#cargoUpd").val('Nenhum');
    }

    if (getAge(data_nascimento) > 18) {
        $(".responsavelArea").hide();
        $(".conjugeArea").show();
        $("#nome_responsavel").val('');
        $("#contato_responsavel").val('');
    } else {
        $(".conjugeArea").hide();
        $(".responsavelArea").show();
        $("#conjuge").val('');
    }

}

function hideOptionalFields() {
    $(".sedeArea").hide();
    $(".sedeAreaUpd").hide();
    $(".responsavelArea").hide();
    $(".conjugeArea").hide();
}