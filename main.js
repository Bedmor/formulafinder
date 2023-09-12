function Close() {
  pencere = document.getElementById("search");
  pencere.style.opacity = 0;
  pencere.style.zIndex = -999;
}

function Ekle() {
  pencere = document.getElementById("search");
  pencere.style.opacity = 100;
  pencere.style.zIndex = 1;
}

function Ara() {
  kutu = document.getElementById("kutu");
  val = kutu.value.toLowerCase();
  leybıl = document.getElementById("leybıl");
  if (leybıl) {
    document.body.removeChild(leybıl);
  }
  try {
    fetch("http://localhost:80", {
      method: "POST",
      body: `{"${val}":""}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data != "undefined") {
          leybıl = document.createElement("div");
          leybıl.id = "leybıl";
          document.body.appendChild(leybıl);
          console.log(data);
          kutu.placeholder = "You Can Search Here!";
          kutu.value = "";
          leybıl.innerHTML = Object.values(data)[0];
        } else {
          kutu.value = "";
          kutu.placeholder = "Try to search for someting else";
        }
      });
  } catch (err) {
    kutu.value = "";
    kutu.placeholder = "Try to search for someting else";
  }
}

window.onload = function () {
  embed = document.getElementsByClassName("search")[0];
  carpi = embed.contentWindow.document.getElementById("carpi");
  carpi.addEventListener("click", () => Close());
};
ekletus = document.getElementById("add");
ekletus.addEventListener("click", () => Ekle());
button = document.getElementById("tus");
button.addEventListener("click", () => Ara());
kutu.placeholder = "You Can Search Here!";
kutu;
