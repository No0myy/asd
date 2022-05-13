function losuj(){
    var ilosc=document.getElementById('zakres').value;
    document.getElementById('wybranaWartosc').value=ilosc;
}
var wylosowanieLiczby=Math.floor(Math.random()*100)+1;
function sprawdz(){
    let dane=document.getElementById("liczbaUżytkownika")
    if(dane.value == wylosowanieLiczby){
        alert("Wygrałeś");
    }else{
        alert("Błędna liczba");
    }
}