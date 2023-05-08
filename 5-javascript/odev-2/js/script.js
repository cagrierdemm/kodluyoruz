const ulDOM = document.getElementById("list");
var hazirList=["3 Litre Su İç", "Ödevleri Yap", "En Az 3 Saat Kodlama Yap", "Yemek Yap", "50 Sayfa Kitap Oku"];
let x= localStorage.getItem("listItem") ? JSON.parse( localStorage.getItem("listItem")) : [];

if(x.length===0){
    for(var i=0;i<hazirList.length;i++){
        var liDOM = document.createElement("li");
        liDOM.innerHTML=hazirList[i];
        ulDOM.append(liDOM);
        x.push(hazirList[i]); 
       
    }
}
else{
    for(var i=0;i<x.length;i++){
        var liDOM = document.createElement("li");
        liDOM.innerHTML=x[i];
        ulDOM.append(liDOM);
    }
}

function newElement(){
    var inputDOM = document.getElementById("task").value;
    if(inputDOM && inputDOM != ""){
        var liDOM = document.createElement("li");
        liDOM.innerHTML=inputDOM;
        x.push(inputDOM);
        ulDOM.append(liDOM);
        localStorage.setItem("listItem", JSON.stringify(x));
        $('#liveToast1').toast('show');
        document.getElementById("task").value="";
    }
    else{
        $('#liveToast2').toast('show');
    }
    
}