
let dict={
    "hız" : "x=vt",
    "newton 1":"F=ma",
    "logab":"logac/logbc",
}

let kutu = document.getElementById("kutu");

function Ekle(){
    pencere = document.getElementById("search");
    pencere.style.opacity = 100
}
function Ara(){
    val = (kutu.value).toLowerCase();
    leybıl = document.getElementById("leybıl")
    if (leybıl){
        document.body.removeChild(leybıl)
        }
    try{
        response = fetch("http://localhost:80",{
        method:"POST",
        body:"{$val}",
        headers:{
            "Content-Type":"text/plain"
       },
    })
    if (response != "undefined" || kutu.value == null){
        leybıl = document.createElement("div")
        leybıl.id = "leybıl"
        document.body.appendChild(leybıl)
        console.log(kutu.value)
        kutu.placeholder = "You Can Search Here!"
        kutu.value = ""
        leybıl.innerHTML = `${response.body}`
    }
    }
    
    catch{
        kutu.value = ""
        kutu.placeholder = "Try to search for someting else"
    }
}

button = document.getElementById("tus");
button.addEventListener("click",() => Ara() );
kutu.placeholder = "You Can Search Here!"
