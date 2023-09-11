function Ekle() {
  fetch("localhost:80", {
    method: "POST",
    body: `{
            ${document.getElementById("formul_ad").value}:${document.getElementById("formul").value}
        }`,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
sbutton = document.getElementById("sbutton");
sbutton.addEventListener("click", () => Ekle());
