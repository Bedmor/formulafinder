function Ekle() {
  fetch("http://localhost:80/ekle", {
    method: "POST",
    body: `{"${document.getElementById("formul_ad").value}":"${
      document.getElementById("formul").value
    }"}`,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.status == 200) {
      alert("Başarıyla Eklendi");
    }
  });
}
sbutton = document.getElementById("sbutton");
sbutton.addEventListener("click", () => Ekle());
