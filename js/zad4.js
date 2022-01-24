let liczby = [];        //deklaracja tablicy
function zad4(){


for(var i=0;i<100;i++){
    liczby[i]=Math.floor(Math.random() * 500);      //gererowanie 100 losowych liczb i umieszczanie ich w tablicy
}

var wymieszane = liczby.sort((a, b) => 0.5 - Math.random());
let sort = liczby.sort(function(a, b){return a - b});       //sortowanie tablicy
let max = sort[99];                                         //znalezienie maxa
let min = sort[0];
let desc = sort.reverse();
let x;
let powtorz3;
let countermax=0;                                           //deklaracja zmiennych
let parzyste=[], nieparzystyindeks=[], przedzial515=[], najmniejszaiobok=[], wieksze10=[], nowatablica=[];     //deklaracja zmiennych
for(var i=0;i<liczby.length;i++){   
    if(liczby[i]==max){                         //liczenie wystapien najwiekszej liczby
        countermax++;
    }
    if(liczby[i]%2!=0){
        parzyste.push(liczby[i]);                   //utworzenie nowej tablicy zawierajacej tylko nieparzyste liczby 
    }
    if(i%2!=0){
        nieparzystyindeks.push(liczby[i]);                //tablica zawierajaca liczby z nieparzystych indeksow
    }
    if( (liczby[i]>=5) && (liczby[i]<15) ){
        przedzial515.push(liczby[i]);                   //znalezienie liczb z przedziału 5,15
    }
    if(liczby[i]==min){
      najmniejszaiobok=[liczby[i],liczby[i+1],liczby[i-1]];   //znalezienie poprzedniej i nastepnej po najmniejszej
    }
    if(liczby[i]>10){
      wieksze10.push(liczby[i]);                //wpisanie wartosci >10 do nowej tablicy
    }


}
for (var i=0;i<liczby.length;i++){
  nowatablica[i]=suma(i);
}

function suma(max){
  let sm=0, j=0;
  do {
    sm=sm+liczby[j];
    j++;
  }while(j<(max+1));
  return sm;
}

function getOccurrence(array, value) {
  return array.filter((v) => (v === value)).length;
}


for(i=0;i<liczby.length;i++){
  x=getOccurrence(liczby, i);
  if(x>3){
    powtorz3=i;
    break;
  }
}

console.log(liczby);





//wyswietlenie na ekran
document.getElementById('output4').innerHTML='max: '+max+"<br> wystapienia największej liczby: "+countermax+'<br><br> liczby nieparzyste: <br>'+parzyste.join(", ")+"<br><br> liczby w nieparzystych indeksach: <br>"+nieparzystyindeks.join(", ");
if(przedzial515.length==0){  //if sprawdzajacy czy istnieja liczby w przedziale 5,15
    document.getElementById('output4').innerHTML+="<br><br> nie ma liczb nalezacych do przedzialu <5, 15)";
}else{
    document.getElementById('output4').innerHTML+="<br><br> liczby należące do przedzialu <5, 15): <br>"+przedzial515.join(', ');
}
if(najmniejszaiobok[2]==undefined){najmniejszaiobok[2]="nie ma poprzednika";}
document.getElementById('output4').innerHTML+="<br><br> najmniejsza liczba: "+najmniejszaiobok[0]+"<br> poprzednia: "+najmniejszaiobok[1]+"<br> nastepna: "+najmniejszaiobok[2];
document.getElementById('output4').innerHTML+='<br><br> liczby wieksze od 10:<br>'+wieksze10.join(', ');
document.getElementById('output4').innerHTML+='<br><br> nowa tablica (całą starą tablice widać w konsoli)<br>'+nowatablica.join(', ')+'<br><br> tablica posortowana malejaco: <br>'+desc.join(', ');
if(powtorz3==undefined){
  document.getElementById('output4').innerHTML+='<br><br> nie ma liczby wystepujacej 3 lub wiecej razy w tablicy.';
}else{
  document.getElementById('output4').innerHTML+="<br><br> liczba wystepujaca 3 lub wiecej razy w tablicy to: "+powtorz3;
}




// obsluga wprowadzania liczby przez uzytkownika i szukania najblizszej

var input = document.getElementById("inputText4");      // oblsuga zatwierdzania enterem
input.addEventListener("keyup", function(event) {       // oblsuga zatwierdzania enterem
  if (event.keyCode === 13) {                           // oblsuga zatwierdzania enterem
   event.preventDefault();                              // oblsuga zatwierdzania enterem
   dodaj4();                                            // oblsuga zatwierdzania enterem
  }                                                     // oblsuga zatwierdzania enterem
}); 




}


function dodaj4()    //funkcja dodajaca elementy do tablicy
{
    
  var wartosc4 = document.getElementById("inputText4").value;
  if(isNaN(wartosc4))            //if sprawdzajacy czy wprowadzona wartosc jest liczba
  {  
    alert('wprowadzona wartosc nie jest liczbą');  
    wartosc4="";
    document.getElementById("inputText4").value = "";
  }
  else
  {
    let a=wartosc4;
  wartosc4= "";
  document.getElementById("inputText4").value = "";

  var closest = liczby.reduce(function(prev, curr) {
    return (Math.abs(curr - a) < Math.abs(prev - a) ? curr : prev);         //znalezienie najblizszej liczby do wprowadzonej przez uzytkownika
  });
  
  document.getElementById('output5').innerHTML='liczba najblizej wprowadzonej: '+closest;
  window.scrollTo({
    top: 1000,
    behavior: 'smooth'
  });
  
  
  }

  

}