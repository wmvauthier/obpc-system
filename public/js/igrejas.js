$(document).ready(function () {
    checkToken();
    DAOgetAllChurchs();
});

var churchTableBody = $("#churchTableBody")[0];

$("#btnPreRegisterChurch").click(function () {
    preRegisterChurch();
});

$("#btnDAODeleteChurch").click(function () {
    DAOdeleteChurch();
});

$("#btnDAOUpdateChurch").click(function () {
    DAOupdateChurch();
});

$("#btnDAORegisterChurch").click(function () {
    DAOregisterChurch();
});

function DAOgetAllChurchs() {
    var response = httpGet('/igrejas/api');
    fillChurchTable(churchTableBody, response.igrejas);
}

function DAOregisterChurch() {

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
    var data = `nome=${nome}&endereco=${endereco}&endereco_numero=${endereco_numero}&endereco_complemento=${endereco_complemento}
    &endereco_pais=${endereco_pais}&endereco_estado=${endereco_estado}&endereco_cidade=${endereco_cidade}
    &endereco_bairro=${endereco_bairro}&endereco_telefone=${endereco_telefone}&pastor=${pastor}
    &regiao=${regiao}&classificacao=${classificacao}&sede=${sede}
    &rede_social_instagram=${rede_social_instagram}&rede_social_facebook=${rede_social_facebook}
    &rede_social_youtube=${rede_social_youtube}`;

    var response = httpPost(url, data);

    createChurchToChurchTable(churchTableBody, response);
    cleanRegisterChurchForm();
    $('#registerChurchModal').modal('hide');

}

function DAOupdateChurch() {

    var id = $('#id_userUpd').val();
    var nome = $('#nomeUpd').val();
    var cargo = $('#cargoUpd').val();
    var user_login = $('#user_loginUpd').val();
    var user_senha = $('#user_senhaUpd').val();
    var nivel_acesso = $('#nivel_acessoUpd').val();

    var url = `http://${IP_DO_SERVIDOR}:3000/user/${id}`;
    var data = `id_user=${id}&nome=${nome}&cargo=${cargo}&user_login=${user_login}&user_senha=${user_senha}&nivel_acesso=${nivel_acesso}`;

    httpPut(url, data);

    DAOgetAllChurchs();
    cleanUpdateChurchForm();
    $('#updateChurchModal').modal('hide');

}

function preRegisterChurch() {
    cleanRegisterChurchForm();
}

function preUpdateChurch(id) {

    cleanUpdateUserForm();
    var data = id.getAttribute("dataID");
    var response = httpGet(`http://${IP_DO_SERVIDOR}:3000/user/${data}`);

    $('#id_churchUpd').val(response.id_user);
    $('#nomeUpd').val(response.nome);
    $('#cargoUpd').val(response.cargo);
    $('#user_loginUpd').val(response.user_login);
    $('#user_senhaUpd').val(response.user_senha);
    $('#nivel_acessoUpd').val(response.nivel_acesso);
    $('#updateChurchModal').modal('show');

}

function preDeleteChurch(id) {

    cleanUpdateUserForm();
    var data = id.getAttribute("dataID");
    var response = httpGet(`http://${IP_DO_SERVIDOR}:3000/user/${data}`);

    $('#nomeDel').html(response.nome);
    $('#id_userDel').val(response.id_user);
    $('#deleteChurchModal').modal('show');

}

function DAOdeleteChurch() {

    var id = $('#id_userDel').val();
    httpDelete(`http://${IP_DO_SERVIDOR}:3000/user/${id}`);
    DAOgetAllUsers();
    $('#deleteChurchModal').modal('hide');

}

function fillChurchTable(table, data) {

    table.innerHTML = "";

    data.forEach(function (church) {
        createChurchToChurchTable(table, church);
    });


}

//Insere Usuário na Lista de Usuários
function createChurchToChurchTable(table, church) {

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");

    td1.innerHTML = church.id_igreja;
    td2.innerHTML = church.nome;
    td3.innerHTML = church.area;
    td4.innerHTML = church.pastor;
    td5.innerHTML = church.classificacao;
    td6.innerHTML = `<button class="btn btn-rounded btn-warning" dataID="${church.id_igreja}" 
                        data-toggle="modal" data-target="#updateChurchModal"
                        data-backdrop="static" onclick="preUpdateChurch(this)">
                        Editar</button>
                     <button class="btn btn-rounded btn-danger" dataID="${church.id_igreja}"
                        data-toggle="modal" data-target="#deleteChurchModal"
                        data-backdrop="static" onclick="preDeleteChurch(this)">
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

    table.appendChild(tr);

}

function cleanRegisterChurchForm() {
    $('#registerUserForm')[0].reset();
}

function cleanUpdateChurchForm() {
    $('#nomeUpd').val("");
    $('#cargoUpd').val("");
    $('#user_loginUpd').val("");
    $('#user_senhaUpd').val("");
    $('#nivel_acessoUpd').val("");
}