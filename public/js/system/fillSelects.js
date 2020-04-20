const pastores = httpGet('/igrejas/api');

$(document).ready(function () {
    fillSelectCoutry();
    fillSelectState();
    fillSelectClassification();
    fillSelectSede();
    fillSelectRegiao();
    fillSelectPastor();
});

function fillSelectCoutry() {
    $(".selectCountry").html(`
        <option disabled selected></option>
        <option value='BR'>Brasil</option>
    `);
};

function fillSelectState() {
    $(".selectState").html(`
        <option disabled selected></option>
        <option value='AC'>Acre</option>
        <option value='AC'>Alagoas</option>
        <option value='AC'>Amapá</option>
        <option value='AM'>Amazonas</option>
        <option value='BA'>Bahia</option>
        <option value='CE'>Ceará</option>
        <option value='DF'>Distrito Federal</option>
        <option value='ES'>Espírito Santo</option>
        <option value='GO'>Goiás</option>
        <option value='MA'>Maranhão</option>
        <option value='MT'>Mato Grosso</option>
        <option value='MS'>Mato Grosso do Sul</option>
        <option value='MG'>Minas Gerais</option>
        <option value='PA'>Pará</option>
        <option value='PB'>Paraíba</option>
        <option value='PR'>Paraná</option>
        <option value='PE'>Pernambuco</option>
        <option value='PI'>Piauí</option>
        <option value='RJ'>Rio de Janeiro</option>
        <option value='RN'>Rio Grande do Norte</option>
        <option value='RS'>Rio Grande do Sul</option>
        <option value='RO'>Rondônia</option>
        <option value='RR'>Roraima</option>
        <option value='SC'>Santa Catarina</option>
        <option value='SP'>São Paulo</option>
        <option value='SE'>Sergipe</option>
        <option value='TO'>Tocantins</option>
    `);
};

function fillSelectClassification() {
    $(".selectClassification").html(`
        <option disabled selected></option>
        <option value="1">Sede</option>
        <option value="2">Congregação</option>
    `);
};

function fillSelectPastor() {

    $(".selectPastor").html(`
        <option disabled selected></option>
        <option value="1">Sede</option>
        <option value="2">Congregação</option>
    `);
};

function fillSelectRegiao() {
    $(".selectRegiao").html(`
        <option disabled selected></option>
        <option value="1">Sede</option>
        <option value="2">Congregação</option>
    `);
};

function fillSelectSede() {
    $(".selectSede").html(`
        <option disabled selected></option>
        <option value="1">Sede</option>
        <option value="2">Congregação</option>
    `);
};