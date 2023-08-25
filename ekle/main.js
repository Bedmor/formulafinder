function Ekle(){
    fetch("localhost:80",{
        method:"POST",
        body:`${document.getElementById("sinput").value}`,
        headers:{
            "Content-Type":"text/plain",
        }
    })
}