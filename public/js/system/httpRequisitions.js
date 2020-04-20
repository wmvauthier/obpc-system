var URL_API = 'https://obpc-system.herokuapp.com';
// var URL_API = 'localhost:3000';

$('#logoutButton').click(function () {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
});

function checkToken() {
    if (!localStorage.getItem('token') && !sessionStorage.getItem('token')) {
        window.location.href = "./";
    }
}

function httpGet(theUrl) {
    theUrl = URL_API + theUrl
    console.log(theUrl);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}

function httpPost(theUrl, data) {
    theUrl = URL_API + theUrl
    console.log(theUrl);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", theUrl, false); // false for synchronous request
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttp.send(data);
    return JSON.parse(xmlHttp.responseText);
}

function httpPut(theUrl, data) {
    theUrl = URL_API + theUrl
    console.log(theUrl);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("PUT", theUrl, false); // false for synchronous request
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttp.send(data);
}

function httpDelete(theUrl) {
    theUrl = URL_API + theUrl
    console.log(theUrl);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("DELETE", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}