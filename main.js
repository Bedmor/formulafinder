
let kutu = document.getElementById("kutu");

function Close(){
    pencere = document.getElementById("search")
    pencere.style.opacity = 0;
    pencere.style.zIndex = -999;
}

function Ekle(){
    pencere = document.getElementById("search");
    pencere.style.opacity = 100;
    pencere.style.zIndex = 1;
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


window.onload = function(){
    embed = document.getElementsByClassName("search")[0]
    carpi = embed.contentWindow.document.getElementById("carpi")
    carpi.addEventListener("click",()=> Close())
}
button = document.getElementById("tus")
button.addEventListener("click",() => Ara() );
kutu.placeholder = "You Can Search Here!"
