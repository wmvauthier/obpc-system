$(document).ready(function () {
    checkToken();
    fillPersonCounters();
});

$("#btnPreRegisterPerson").click(function () {
    preRegisterPerson();
});

$("#btnDAODeletePerson").click(function () {
    DAOdeletePerson();
});

$("#btnDAOUpdatePerson").click(function () {
    DAOupdatePerson();
});

$("#btnDAORegisterPerson").click(function () {
    DAOregisterPerson();
});

$("#btnDAOAltObreiro").click(function () {
    DAOAltObreiro();
});

$("#btnDAOAltAfastado").click(function () {
    DAOAltAfastado();
});

$("#btnDAOAltDisciplinado").click(function () {
    DAOAltDisciplinado();
});

$(".personDataTableShow").click(function () {
    $('#churchDataTable').hide();
    $('#personDataTable').show();
});

$("#memberDataTableShow").click(function () {
    localStorage.setItem('dataTableShow', 'allMembros');
    DAOgetAllPersons();
    $("#personDataTableTitle").html('Lista de Membros');
});

$("#congregDataTableShow").click(function () {
    localStorage.setItem('dataTableShow', 'onlyCongregados');
    DAOgetAllPersons();
    $("#personDataTableTitle").html('Lista de Congregados');
});

$("#obreirosDataTableShow").click(function () {
    localStorage.setItem('dataTableShow', 'onlyObreiros');
    DAOgetAllPersons();
    $("#personDataTableTitle").html('Lista de Obreiros');
});

$("#anivDataTableShow").click(function () {
    localStorage.setItem('dataTableShow', 'onlyAniversariantes');
    DAOgetAllPersons();
    $("#personDataTableTitle").html('Lista de Aniversariantes');
});

$("#afastDataTableShow").click(function () {
    localStorage.setItem('dataTableShow', 'onlyAfastados');
    DAOgetAllPersons();
    $("#personDataTableTitle").html('Lista de Afastados');
});

$("#disciplinDataTableShow").click(function () {
    localStorage.setItem('dataTableShow', 'onlyDisciplinados');
    DAOgetAllPersons();
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

function fillPersonCounters() {
    var membros = httpGet('/pessoas/api/allMembros');
    var congregados = httpGet('/pessoas/api/onlyCongregados');
    var obreiros = httpGet('/pessoas/api/onlyObreiros');
    // var aniversariantes = httpGet('/pessoas/api/onlyAniversariantes');
    var afastados = httpGet('/pessoas/api/onlyAfastados');
    var disciplinados = httpGet('/pessoas/api/onlyDisciplinados');

    $("#snippetCardMembroCounter").html(membros.pessoas.length);
    $("#snippetCardCongregadoCounter").html(congregados.pessoas.length);
    $("#snippetCardObreiroCounter").html(obreiros.pessoas.length);
    // $("#snippetCardMemberCounter").html(aniversariantes.pessoas.length);
    $("#snippetCardAnivCounter").html('0');
    $("#snippetCardAfastadoCounter").html(afastados.pessoas.length);
    $("#snippetCardDisciplinCounter").html(disciplinados.pessoas.length);
}

function DAOgetAllPersons() {
    var spec = localStorage.getItem('dataTableShow');
    var response = httpGet('/pessoas/api/' + spec);
    fillPersonTable(personTableBody, response.pessoas);
    fillPersonCounters();
}

function DAOAltObreiro() {

    var alt_obr_membro = $('#alt_obr_membro').val();
    var alt_obr_cargo = $('#alt_obr_cargo').val();

    var url = `/pessoas/api/alterToObreiro`;
    var data = `id_pessoa=${alt_obr_membro}&cargo=${alt_obr_cargo}`
    httpPost(url, data);

    cleanAltObreiroForm();
    $('#altObreiroModal').modal('hide');

}

function DAOAltAfastado() {

    var alt_afast_membro = $('#alt_afast_membro').val();

    var url = `/pessoas/api/alterToAfastado`;
    var data = `id_pessoa=${alt_afast_membro}`
    httpPost(url, data);

    cleanAltAfastadoForm();
    $('#altAfastadoModal').modal('hide');

}

function DAOAltDisciplinado() {

    var alt_disciplin_membro = $('#alt_disciplin_membro').val();

    var url = `/pessoas/api/alterToDisciplinado`;
    var data = `id_pessoa=${alt_disciplin_membro}`
    httpPost(url, data);

    cleanAltDisciplinadoForm();
    $('#altDisciplinadoModal').modal('hide');

}

function DAOregisterPerson() {

    var nome = $('#nome2').val();
    var nome_pai = $('#nome_pai').val();
    var nome_mae = $('#nome_mae').val();
    var nome_conjuge = $('#nome_conjuge').val();
    var nome_responsavel = $('#nome_responsavel').val();
    var contato_responsavel = $('#contato_responsavel').val();
    var data_nascimento = $('#data_nascimento').val();
    var cpf = $('#cpf').val();
    var rg = $('#rg').val();
    var endereco = $('#endereco2').val();
    var endereco_numero = $('#endereco_numero2').val();
    var endereco_complemento = $('#endereco_complemento2').val();
    var endereco_pais = $('#endereco_pais2').val();
    var endereco_estado = $('#endereco_estado2').val();
    var endereco_cidade = $('#endereco_cidade2').val();
    var endereco_bairro = $('#endereco_bairro2').val();
    var endereco_telefone = $('#endereco_telefone2').val();
    var igreja = $('#igreja').val();
    var tipo = $('#tipo').val();
    var cargo = $('#cargo').val();
    var departamento = $('#departamento').val();
    var situacao = $('#situacao').val();
    var profissao = $('#profissao').val();
    var data_conversao = $('#data_conversao').val();
    var igreja_conversao = $('#igreja_conversao').val();
    var data_batismo = $('#data_batismo').val();
    var igreja_batismo = $('#igreja_batismo').val();
    var tipo_de_recebimento = $('#tipo_de_recebimento').val();

    var url = `/pessoas/api`;
    var data = `nome=${nome}&endereco=${endereco}&endereco_numero=${endereco_numero}&endereco_complemento=${endereco_complemento}&endereco_pais=${endereco_pais}&endereco_estado=${endereco_estado}&endereco_cidade=${endereco_cidade}&endereco_bairro=${endereco_bairro}&endereco_telefone=${endereco_telefone}&nome_pai=${nome_pai}&nome_mae=${nome_mae}&nome_conjuge=${nome_conjuge}&nome_responsavel=${nome_responsavel}&contato_responsavel=${contato_responsavel}&data_nascimento=${data_nascimento}&cpf=${cpf}&rg=${rg}&igreja=${igreja}&tipo=${tipo}&cargo=${cargo}&departamento=${departamento}&situacao=${situacao}&profissao=${profissao}&data_conversao=${data_conversao}&igreja_conversao=${igreja_conversao}&data_batismo=${data_batismo}&igreja_batismo=${igreja_batismo}&tipo_de_recebimento=${tipo_de_recebimento}`
    var response = httpPost(url, data);

    createPersonToPersonTable(personTableBody, response);
    cleanRegisterPersonForm();
    $('#registerPersonModal').modal('hide');

}

function DAOupdatePerson() {

    var id = $('#id_pessoaUpd').val();
    var nome = $('#nome2Upd').val();
    var nome_pai = $('#nome_paiUpd').val();
    var nome_mae = $('#nome_maeUpd').val();
    var nome_conjuge = $('#nome_conjugeUpd').val();
    var nome_responsavel = $('#nome_responsavelUpd').val();
    var contato_responsavel = $('#contato_responsavelUpd').val();
    var data_nascimento = $('#data_nascimentoUpd').val();
    var cpf = $('#cpfUpd').val();
    var rg = $('#rgUpd').val();
    var endereco = $('#endereco2Upd').val();
    var endereco_numero = $('#endereco_numero2Upd').val();
    var endereco_complemento = $('#endereco_complemento2Upd').val();
    var endereco_pais = $('#endereco_pais2Upd').val();
    var endereco_estado = $('#endereco_estado2Upd').val();
    var endereco_cidade = $('#endereco_cidade2Upd').val();
    var endereco_bairro = $('#endereco_bairro2Upd').val();
    var endereco_telefone = $('#endereco_telefone2Upd').val();
    var igreja = $('#igrejaUpd').val();
    var tipo = $('#tipoUpd').val();
    var cargo = $('#cargoUpd').val();
    var departamento = $('#departamentoUpd').val();
    var situacao = $('#situacaoUpd').val();
    var profissao = $('#profissaoUpd').val();
    var data_conversao = $('#data_conversaoUpd').val();
    var igreja_conversao = $('#igreja_conversaoUpd').val();
    var data_batismo = $('#data_batismoUpd').val();
    var igreja_batismo = $('#igreja_batismoUpd').val();
    var tipo_de_recebimento = $('#tipo_de_recebimentoUpd').val();

    var url = `/pessoas/api`;
    var data = `id_pessoa=${id}&nome=${nome}&endereco=${endereco}&endereco_numero=${endereco_numero}&endereco_complemento=${endereco_complemento}&endereco_pais=${endereco_pais}&endereco_estado=${endereco_estado}&endereco_cidade=${endereco_cidade}&endereco_bairro=${endereco_bairro}&endereco_telefone=${endereco_telefone}&nome_pai=${nome_pai}&nome_mae=${nome_mae}&nome_conjuge=${nome_conjuge}&nome_responsavel=${nome_responsavel}&contato_responsavel=${contato_responsavel}&data_nascimento=${data_nascimento}&cpf=${cpf}&rg=${rg}&igreja=${igreja}&tipo=${tipo}&cargo=${cargo}&departamento=${departamento}&situacao=${situacao}&profissao=${profissao}&data_conversao=${data_conversao}&igreja_conversao=${igreja_conversao}&data_batismo=${data_batismo}&igreja_batismo=${igreja_batismo}&tipo_de_recebimento=${tipo_de_recebimento}`

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
    var response = httpGet(`/pessoas/api/${data} `);
    response = response.pessoas[0];

    $('#id_pessoaUpd').val(response.id_pessoa);
    $('#nome2Upd').val(response.nome);
    $('#nome_paiUpd').val(response.nome_pai);
    $('#nome_maeUpd').val(response.nome_mae);
    $('#nome_conjugeUpd').val(response.nome_conjuge);
    $('#nome_responsavelUpd').val(response.nome_responsavel);
    $('#contato_responsavelUpd').val(response.contato_responsavel);
    $('#data_nascimentoUpd').val(response.data_nascimento);
    $('#cpfUpd').val(response.cpf);
    $('#rgUpd').val(response.rg);
    $('#endereco2Upd').val(response.endereco);
    $('#endereco_numero2Upd').val(response.endereco_numero);
    $('#endereco_complemento2Upd').val(response.endereco_complemento);
    $('#endereco_pais2Upd').val(response.endereco_pais);
    $('#endereco_estado2Upd').val(response.endereco_estado);
    $('#endereco_cidade2Upd').val(response.endereco_cidade);
    $('#endereco_bairro2Upd').val(response.endereco_bairro);
    $('#endereco_telefone2Upd').val(response.endereco_telefone);
    $('#igrejaUpd').val(response.igreja);
    $('#tipoUpd').val(response.tipo);
    $('#cargoUpd').val(response.cargo);
    $('#departamentoUpd').val(response.departamento);
    $('#situacaoUpd').val(response.situacao);
    $('#profissaoUpd').val(response.profissao);
    $('#data_conversaoUpd').val(response.data_conversao);
    $('#igreja_conversaoUpd').val(response.igreja_conversao);
    $('#data_batismoUpd').val(response.data_batismo);
    $('#igreja_batismoUpd').val(response.igreja_batismo);
    $('#tipo_de_recebimentoUpd').val(response.tipo_de_recebimento);
    $('#updatePersonModal').modal('show');

}

function preDeletePerson(id) {

    cleanUpdatePersonForm();
    var data = id.getAttribute("dataID");
    var response = httpGet(`/pessoas/api/${data}`);
    response = response.pessoas[0];
    $('#nomePessoaDel').html(response.nome);
    $('#id_pessoaDel').val(response.id_pessoa);
    $('#deletePersonModal').modal('show');

}

function DAOdeletePerson() {

    var id = $('#id_pessoaDel').val();
    httpDelete(`/pessoas/api/${id}`);
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

    if (!person.cargo) { person = httpGet(`/pessoas/api/${person.id_pessoa}`).pessoas[0]; }
    var ig = httpGet(`/igrejas/api/${person.igreja}`).igrejas;
    if (ig[0]) { ig = ig[0].nome; }

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    var td7 = document.createElement("td");
    var td8 = document.createElement("td");

    td1.innerHTML = person.id_pessoa;
    td2.innerHTML = person.nome;
    td3.innerHTML = ig;
    td4.innerHTML = person.tipo;
    td5.innerHTML = person.cargo;
    td6.innerHTML = person.departamento;
    td7.innerHTML = person.situacao;
    td8.innerHTML = `<button class="btn btn-rounded btn-warning" dataID="${person.id_pessoa}"
    data-toggle="modal" data-target="#updatePersonModal"
    data-backdrop="static" onclick="preUpdatePerson(this)">
        Editar</button>
            <button class="btn btn-rounded btn-danger" dataID="${person.id_pessoa}"
                data-toggle="modal" data-target="#deletePersonModal"
                data-backdrop="static" onclick="preDeletePerson(this)">
                Excluir</button>`;

    td1.setAttribute("data-title", "ID");
    td2.setAttribute("data-title", "Nome");
    td3.setAttribute("data-title", "Igreja");
    td4.setAttribute("data-title", "Classificação");
    td5.setAttribute("data-title", "Cargo");
    td6.setAttribute("data-title", "Departamento");
    td7.setAttribute("data-title", "Situação");
    td8.setAttribute("data-title", "Ações");
    td8.style = "text-align: center;"

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);

    table.appendChild(tr);

}

function cleanAltAfastadoForm() {
    $('#altAfastadoForm')[0].reset();
}

function cleanAltDisciplinadoForm() {
    $('#altDisciplinadoForm')[0].reset();
}

function cleanAltObreiroForm() {
    $('#altObreiroForm')[0].reset();
}

function cleanRegisterPersonForm() {
    $('#registerPersonForm')[0].reset();
}

function cleanUpdatePersonForm() {
    $('#updatePersonForm')[0].reset();
}