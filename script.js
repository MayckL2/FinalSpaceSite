let personImg = document.querySelector(".modalPerson img");
let personNanme = document.querySelector(".modalPerson div .nome");
let personDesc = document.querySelector(".modalPerson div .desc");
let modal = document.querySelector(".modalPerson");

// fecha tela de carregamento
function delay() {
  setTimeout(fechaCarregando, 0000);
}

function fechaCarregando() {
  document.querySelector(".carregando").style.display = "none";
}

// abre modal sobre o personagem clicado
function modalPerson(e) {
  switch (e) {
    case 1:
      personImg.setAttribute("src", "img/carrossel/Group "+e+".png");
      personNanme.innerHTML = "Gary Goodspeed";
      personDesc.innerHTML = "Gary Goodspeed descrição";
      modal.style.display = "flex";
      break;
    case 2:
      personImg.setAttribute("src", "img/carrossel/Group "+e+".png");
      personNanme.innerHTML = "MoonCake";
      personDesc.innerHTML = "Gary Goodspeed descrição";
      modal.style.display = "flex";
      break;
    case 3:
      personImg.setAttribute("src", "img/carrossel/Group "+e+".png");
      personNanme.innerHTML = "Avocato";
      personDesc.innerHTML = "Gary Goodspeed descrição";
      modal.style.display = "flex";
      break;
    case 4:
      personImg.setAttribute("src", "img/carrossel/Group "+e+".png");
      personNanme.innerHTML = "Little Cato";
      personDesc.innerHTML = "Gary Goodspeed descrição";
      modal.style.display = "flex";
      break;
    case 5:
      personImg.setAttribute("src", "img/carrossel/Group "+e+".png");
      personNanme.innerHTML = "Tribore";
      personDesc.innerHTML = "Gary Goodspeed descrição";
      modal.style.display = "flex";
      break;
    case 6:
      personImg.setAttribute("src", "img/carrossel/Group "+e+".png");
      personNanme.innerHTML = "Lord Commander";
      personDesc.innerHTML = "Gary Goodspeed descrição";
      modal.style.display = "flex";
      break;
    case 7:
      personImg.setAttribute("src", "img/carrossel/Group "+e+".png");
      personNanme.innerHTML = "Ash Graven";
      personDesc.innerHTML = "Gary Goodspeed descrição";
      modal.style.display = "flex";
      break;
    case 8:
      personImg.setAttribute("src", "img/carrossel/Group "+e+".png");
      personNanme.innerHTML = "Sheryl Goodspeed";
      personDesc.innerHTML = "Gary Goodspeed descrição";
      modal.style.display = "flex";
      break;
    case 9:
      personImg.setAttribute("src", "img/carrossel/Group "+e+".png");
      personNanme.innerHTML = "Clarence";
      personDesc.innerHTML = "Gary Goodspeed descrição";
      modal.style.display = "flex";
      break;
    case 10:
      personImg.setAttribute("src", "img/carrossel/Group "+e+".png");
      personNanme.innerHTML = "HUE";
      personDesc.innerHTML = "Gary Goodspeed descrição";
      modal.style.display = "flex";
      break;
    case 11:
      personImg.setAttribute("src", "img/carrossel/Group "+e+".png");
      personNanme.innerHTML = "Quinn Airgone";
      personDesc.innerHTML = "Gary Goodspeed descrição";
      modal.style.display = "flex";
      break;
    default:
      break;
  }
}
