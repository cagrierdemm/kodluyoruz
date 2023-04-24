let inputName = prompt("Adınız nedir?"); // prompt ile isim bilgisi alip degiskene atadik
let myName = document.getElementById("myName"); // myName id'sini degiskene atadik
myName.innerHTML = inputName; //aldigimiz input'u idye yolluyoruz

let showTime = function(){
    let myClock=document.getElementById("myClock"); // myClock id'sini degiskene atadik
    let saat= new Date().toLocaleTimeString("tr-TR"); //saat bilgisi
    let gun = new Date().toLocaleDateString("tr-TR"); //tarih bilgisi
    myClock.innerHTML = `${saat} ${gun}`; //bilgileri myClock id'sine yolluyoruz

};

showTime(); // fonksiyon cagiriliyor
setInterval(showTime, 1000); // saniyede bir guncelliyor
