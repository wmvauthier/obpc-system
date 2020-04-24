$(document).ready(function () {
    checkToken();
    DAOgetAllPersons();
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

function DAOgetAllPersons() {
    var response = httpGet('/pessoas/api');
    fillPersonTable(personTableBody, response.pessoas);
}

function DAOregisterPerson() {

    var nome = $('#nome').val();
    var endereco = $('#endereco').val();
    var endereco_numero = $('#endereco_numero').val();
    var endereco_complemento = $('#endereco_complemento').val();
    var endereco_pais = $('#endereco_pais').val();
    var endereco_estado = $('#endereco_estado').val();
    var endereco_cidade = $('#endereco_cidade').val();
    var endereco_bairro = $('#endereco_bairro').val();
    var endereco_telefone = $('#endereco_telefone').val();
    var pastor = $('#pastor').val();
    var regiao = $('#regiao').val();
    var classificacao = $('#classificacao').val();
    var sede = $('#sede').val();
    var rede_social_instagram = $('#rede_social_instagram').val();
    var rede_social_facebook = $('#rede_social_facebook').val();
    var rede_social_youtube = $('#rede_social_youtube').val();

    var url = `/igrejas/api`;
    var data = `nome=${nome}&endereco=${endereco}&endereco_numero=${endereco_numero}&endereco_complemento=${endereco_complemento}&endereco_pais=${endereco_pais}&endereco_estado=${endereco_estado}&endereco_cidade=${endereco_cidade}&endereco_bairro=${endereco_bairro}&endereco_telefone=${endereco_telefone}&pastor=${pastor}&regiao=${regiao}&classificacao=${classificacao}&sede=${sede}&rede_social_instagram=${rede_social_instagram}&rede_social_facebook=${rede_social_facebook}&rede_social_youtube=${rede_social_youtube}`;

    var response = httpPost(url, data);

    createPersonToPersonTable(personTableBody, response);
    cleanRegisterPersonForm();
    $('#registerPersonModal').modal('hide');

}

function DAOupdatePerson() {

    var id = $('#id_igrejaUpd').val();
    var nome = $('#nomeUpd').val();
    var endereco = $('#enderecoUpd').val();
    var endereco_numero = $('#endereco_numeroUpd').val();
    var endereco_complemento = $('#endereco_complementoUpd').val();
    var endereco_pais = $('#endereco_paisUpd').val();
    var endereco_estado = $('#endereco_estadoUpd').val();
    var endereco_cidade = $('#endereco_cidadeUpd').val();
    var endereco_bairro = $('#endereco_bairroUpd').val();
    var endereco_telefone = $('#endereco_telefoneUpd').val();
    var pastor = $('#pastorUpd').val();
    var regiao = $('#regiaoUpd').val();
    var classificacao = $('#classificacaoUpd').val();
    var sede = $('#sedeUpd').val();
    var rede_social_instagram = $('#rede_social_instagramUpd').val();
    var rede_social_facebook = $('#rede_social_facebookUpd').val();
    var rede_social_youtube = $('#rede_social_youtubeUpd').val();

    var url = `/igrejas/api`;
    var data = `id_igreja=${id}&nome=${nome}&endereco=${endereco}&endereco_numero=${endereco_numero}&endereco_complemento=${endereco_complemento}&endereco_pais=${endereco_pais}&endereco_estado=${endereco_estado}&endereco_cidade=${endereco_cidade}&endereco_bairro=${endereco_bairro}&endereco_telefone=${endereco_telefone}&pastor=${pastor}&regiao=${regiao}&classificacao=${classificacao}&sede=${sede}&rede_social_instagram=${rede_social_instagram}&rede_social_facebook=${rede_social_facebook}&rede_social_youtube=${rede_social_youtube}`;

    httpPut(url, data);

    DAOgetAllPersons();
    cleanUpdatePersonForm();
    $('#updatePersonModal').modal('hide');

}

function preRegisterPerson() {
    cleanRegisterPersonForm();
}

function preUpdatePerson(id) {

    cleanUpdatePersonForm();
    var data = id.getAttribute("dataID");
    var response = httpGet(`/pessoas/api/${data}`);
    response = response.igrejas[0];

    $('#id_igrejaUpd').val(response.id_igreja);
    $('#nomeUpd').val(response.nome);
    $('#enderecoUpd').val(response.endereco);
    $('#endereco_numeroUpd').val(response.endereco_numero);
    $('#endereco_complementoUpd').val(response.endereco_complemento);
    $('#endereco_estadoUpd').val(response.endereco_estado);
    $('#endereco_paisUpd').val(response.endereco_pais);
    $('#endereco_cidadeUpd').val(response.endereco_cidade);
    $('#endereco_bairroUpd').val(response.endereco_bairro);
    $('#endereco_telefoneUpd').val(response.endereco_telefone);
    $('#pastorUpd').val(response.pastor);
    $('#regiaoUpd').val(response.regiao);
    $('#classificacaoUpd').val(response.classificacao);
    $('#sedeUpd').val(response.sede);
    $('#rede_social_instagramUpd').val(response.rede_social_instagram);
    $('#rede_social_facebookUpd').val(response.rede_social_facebook);
    $('#rede_social_youtubeUpd').val(response.rede_social_youtube);
    $('#updatePersonModal').modal('show');

}

function preDeletePerson(id) {

    cleanUpdatePersonForm();
    var data = id.getAttribute("dataID");
    var response = httpGet(`/igrejas/api/${data}`);
    response = response.igrejas[0];

    $('#nomeDel').html(response.nome);
    $('#id_igrejaDel').val(response.id_igreja);
    $('#deletePersonModal').modal('show');

}

function DAOdeletePerson() {

    var id = $('#id_igrejaDel').val();
    httpDelete(`/igrejas/api/${id}`);
    DAOgetAllPersons();
    $('#deletePersonModal').modal('hide');

}

function fillPersonTable(table, data) {

    table.innerHTML = "";

    data.forEach(function (person) {
        createPersonToPersonTable(table, person);
    });

}

//Insere Usuário na Lista de Usuários
function createPersonToPersonTable(table, person) {

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");

    td1.innerHTML = person.id_igreja;
    td2.innerHTML = church.nome;
    td3.innerHTML = church.regiao;
    td4.innerHTML = church.pastor;
    td5.innerHTML = church.classificacao;
    td6.innerHTML = `<button class="btn btn-rounded btn-warning" dataID="${person.id_igreja}" 
                        data-toggle="modal" data-target="#updatePersonModal"
                        data-backdrop="static" onclick="preUpdatePerson(this)">
                        Editar</button>
                     <button class="btn btn-rounded btn-danger" dataID="${person.id_igreja}"
                        data-toggle="modal" data-target="#deletePersonModal"
                        data-backdrop="static" onclick="preDeletePerson(this)">
                        Excluir</button>`;

    td1.setAttribute("data-title", "ID");
    td2.setAttribute("data-title", "Nome");
    td3.setAttribute("data-title", "Área");
    td4.setAttribute("data-title", "Pastor");
    td5.setAttribute("data-title", "Classificação");
    td6.setAttribute("data-title", "Ações");

    td6.style = "text-align: center;"

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);

    table.appendChild(tr);

}

function cleanRegisterPersonForm() {
    $('#registerPersonForm')[0].reset();
}

function cleanUpdatePersonForm() {
    $('#updatePersonForm')[0].reset();
}