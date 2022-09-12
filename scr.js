document.getElementById("imie").onclick=funcion3;
function funcion3(){

let dane =prompt("Wpisz imię nazwisko");
const slowa=dane.split(" ");
const imie = slowa[0];
const nazwisko =slowa[1];
if (imie.slice(-1) == "a" ){
    document.getElementById("tekst").innerHTML="Dzien dobry tu pani "+ imie.charAt(0).toUpperCase() + ". " + nazwisko.charAt(0).toUpperCase() + ".";
}
else{
    document.getElementById("tekst").innerHTML="Dzień dobry tu pana "+ imie.charAt(0).toUpperCase() + ". " + nazwisko.charAt(0).toUpperCase() + ".";
}
} 
