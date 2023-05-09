const ulDOM = document.getElementById("list");
var hazirList=["3 Litre Su İç", "Ödevleri Yap", "En Az 3 Saat Kodlama Yap", "Yemek Yap", "50 Sayfa Kitap Oku"];
let x= localStorage.getItem("listItem") ? JSON.parse( localStorage.getItem("listItem")) : [];
let q=document.getElementsByTagName("li");
const X_SIGN ='<button type="button" class="delete  btn"  class="delete"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x " viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></button>';


if(x.length===0){
    for(var i=0;i<hazirList.length;i++){
        var liDOM = document.createElement("li");
        liDOM.innerHTML=hazirList[i]+X_SIGN;
        ulDOM.append(liDOM);
        x.push(hazirList[i]); 
       
    }
}
else{
    for(var i=0;i<x.length;i++){
        var liDOM = document.createElement("li");
        liDOM.innerHTML=x[i]+X_SIGN;
        ulDOM.append(liDOM);
    }
}

function newElement(){
    var inputDOM = document.getElementById("task").value;
    inputDOM = inputDOM.trim().replace(/\s+/g, ' ');
    
    if(inputDOM && inputDOM != ""){
        var liDOM = document.createElement("li");
        liDOM.innerHTML=inputDOM+X_SIGN;
        x.push(inputDOM);
        ulDOM.append(liDOM);
        console.log(x);
        localStorage.setItem("listItem", JSON.stringify(x));
        $('#liveToast1').toast('show');
        document.getElementById("task").value="";
    }
    else{
        $('#liveToast2').toast('show');
    }
    
}

var liElements = document.querySelectorAll("#list li");
liElements.forEach(function(e){
    e.addEventListener("click", function(){
        var isChecked = e.classList.contains("checked");
        if(isChecked){
            e.classList.remove("checked");
        }
        else{
            e.classList.add("checked");
        }
        
    })
})


var xSignElements = document.querySelectorAll("button.delete");
xSignElements.forEach(function(e){
    e.addEventListener("click", function(){
        var checkedLiElements = document.querySelectorAll("#list li.checked");
        checkedLiElements.forEach(function(li){
            li.remove();
            
        });
        var clickedElement = e.parentNode;
        if(!clickedElement.classList.contains("checked")){
            clickedElement.remove();
        }
        var listElements = document.querySelectorAll("#list li")
        var listUpdate = [];

        listElements.forEach(function(li){
            var liText = li.textContent.trim();
            listUpdate.push(liText);
        })
        console.log(listUpdate)
        localStorage.setItem("listItem", JSON.stringify(listUpdate));
        

    })
})
