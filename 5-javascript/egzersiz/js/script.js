let isimDOM = document.getElementById("isim");
let notDOM = document.getElementById("not")
let formDOM = document.getElementById("notkayit");
let notListDOM = document.getElementById("notlist");
let alertBoxDOM = document.getElementById("alertBox");

formDOM.addEventListener("submit", getInfo);

function getInfo(event){
    event.preventDefault();
    if(isim.value && not.value){
        alertBoxDOM.classList.remove("alert", "alert-danger");
        alertBoxDOM.innerText="";
        createList(isim.value, not.value);
        isim.value="";
        not.value="";
    }
    else{
        alertBoxDOM.innerText="Hatalı Giriş";
        alertBoxDOM.classList.add("alert", "alert-danger");
    }
}

function createList(isim, not){
    let x = document.createElement("li");
    notListDOM.append(x);
    x.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")
    x.innerHTML= `${isim} <span class="badge bg-primary rounded-pill">${not}</span>`;
}