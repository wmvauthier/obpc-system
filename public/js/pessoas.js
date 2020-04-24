$(document).ready(function () {
    checkToken();
});

$(".personDataTableShow").click(function () {
    $('#churchDataTable').hide();
    $('#personDataTable').show();
});

$("#memberDataTableShow").click(function () {
    $("#personDataTableTitle").html('Lista de Membros');
});

$("#congregDataTableShow").click(function () {
    $("#personDataTableTitle").html('Lista de Congregados');
});

$("#obreirosDataTableShow").click(function () {
    $("#personDataTableTitle").html('Lista de Obreiros');
});

$("#anivDataTableShow").click(function () {
    $("#personDataTableTitle").html('Lista de Aniversariantes');
});

$("#afastDataTableShow").click(function () {
    $("#personDataTableTitle").html('Lista de Afastados');
});

$("#disciplinDataTableShow").click(function () {
    $("#personDataTableTitle").html('Lista de Disciplinados');
});

$("#memberModalShow").click(function () {
    $("#personModalTitle").html('Insira o Nome do Novo Membro');
});

$("#congregModalShow").click(function () {
    $("#personModalTitle").html('Insira o Nome do Novo Congregado');
});

$("#obreirosModalShow").click(function () {
    $("#personModalTitle").html('Insira o Nome do Novo Obreiro');
});

$("#anivModalShow").click(function () {
    $("#personModalTitle").html('');
});

$("#afastModalShow").click(function () {
    $("#personModalTitle").html('');
});

$("#disciplinModalShow").click(function () {
    $("#personModalTitle").html('');
});