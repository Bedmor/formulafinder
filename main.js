
let dict={
    "hız" : "x=vt",
    "newton 1":"F=ma",
    "logab":"logac/logbc",
}

kutu = document.getElementById("kutu");

function Ekle(){
    fetch("http://localhost:80",{
        method:"POST",
        body:`${kutu.value} : ${formul_ad = prompt("Enter desired formula")}`,
    })
}
function Ara(){
    val = (kutu.value).toLowerCase();
    leybıl = document.getElementById("leybıl")
    if (leybıl){
        document.body.removeChild(leybıl)
        }
    if (val in dict){
        leybıl = document.createElement("div")
        leybıl.id = "leybıl"
        document.body.appendChild(leybıl)
        console.log(kutu.value)
        kutu.placeholder = "You Can Search Here!"
        kutu.value = ""
        leybıl.innerHTML = `${dict[val]}`
    }
    else{
        kutu.value = ""
        kutu.placeholder = "Tekrar Dene"
    }
}

button = document.getElementById("tus");
button.addEventListener("click",Ara());
kutu.placeholder = "You Can Search Here!"

adder = document.getElementById("add");