let personImg = document.querySelector(".modalPerson .fotoPerson");
let personNanme = document.querySelector(".modalPerson div .nome");
let personDesc = document.querySelector(".modalPerson div .desc");
const modal = document.querySelector(".modalPerson");

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
      personImg.setAttribute("src", "img/fotoPersons/Gary_Goodspeed.webp");
      personNanme.innerHTML = "Gary Goodspeed";
      personDesc.innerHTML = "Gary Goodspeed é o filho caçula do astronauta John Goodspeed e da criminosa espiã Sheryl Goodspeed. Gary teve uma relação conturbada com sua mãe, pois a mesma o via como um erro, já que quando era bebê, Gary atrapalhou a missão de Sheryl, que era espionar John. Ainda criança, Gary testemunhou a morte do pai enquanto John tentava investigar uma anomalia gravitacional acima da Terra";
      modal.style.display = "flex";
      break;
    case 2:
      personImg.setAttribute("src", "img/fotoPersons/Mooncake.webp");
      personNanme.innerHTML = "MoonCake";
      personDesc.innerHTML = "A primeira aparição de Mooncake se deu no Capítulo 1 da série. Gary inicialmente o confundiu com um pixel solto no holograma até que Mooncake voou em seu capacete e o assustou.";
      modal.style.display = "flex";
      break;
    case 3:
      personImg.setAttribute("src", "img/fotoPersons/Avocato.webp");
      personNanme.innerHTML = "Avocato";
      personDesc.innerHTML = "Antes dos eventos da série, Avogato era o vice-comandante da facção de Lord Commander, fazendo tudo que lhe era ordenando e assassinando inúmeros seres. A lealdade acabou quando Avogato se recusou a matar seu primogênito por Lord Commander e Gatito acabou sendo capturado. Desde esse momento, Avogato começou a obedecer as ordens por medo de seu filho ser morto.";
      modal.style.display = "flex";
      break;
    case 4:
      personImg.setAttribute("src", "img/fotoPersons/LittleCato.webp");
      personNanme.innerHTML = "Little Cato";
      personDesc.innerHTML = "Little Cato ou Gatito na versão brasileira, é o filho de Avocato que esta perdido pelo espaço a procura de seu pai.";
      modal.style.display = "flex";
      break;
    case 5:
      personImg.setAttribute("src", "img/fotoPersons/tribore.png");
      personNanme.innerHTML = "Tribore";
      personDesc.innerHTML = "Tribore é um membro verde e atarracado da Guarda Infinita, ou era até que ele partiu e se tornou o líder da Resistência. Ele pode não ser a ferramenta mais afiada do arsenal, mas ele tem sua lealdade, coragem e confiança como armas principais.";
      modal.style.display = "flex";
      break;
    case 6:
      personImg.setAttribute("src", "img/fotoPersons/lord.png");
      personNanme.innerHTML = "Lord Commander";
      personDesc.innerHTML = "Lord Commander é o vilão principal da serie, e ele chama o gary de 'The Gary' :)";
      modal.style.display = "flex";
      break;
    case 7:
      personImg.setAttribute("src", "img/fotoPersons/ash.png");
      personNanme.innerHTML = "Ash Graven";
      personDesc.innerHTML = "Ash é uma garota de uma raça alienigena que possui poderes de manipulação de energia, tipo a estelar de jovens titãs";
      modal.style.display = "flex";
      break;
    case 8:
      personImg.setAttribute("src", "img/fotoPersons/sheryl.png");
      personNanme.innerHTML = "Sheryl Goodspeed";
      personDesc.innerHTML = "Sheryl Goodspeed é a mãe de Gary Goodspeed que abandonou ele quando ele era uma criança, eu sei ela é uma pessima mãe e todos na serie concordam com isso.";
      modal.style.display = "flex";
      break;
    case 9:
      personImg.setAttribute("src", "img/fotoPersons/clarence.png");
      personNanme.innerHTML = "Clarence";
      personDesc.innerHTML = "Em algum ponto de sua vida, Clarence foi salvo por Avogato e ficou devendo essa. Nos eventos da série, foi abordado por Gary e pelo próprio Avogato, que estavam procurando por papéis de identificação. Por conta da dificuldade de arranjar papéis para humanos, Clarence deu a Gary a pele de uma Hooblot morta, Melanie Dewinter.";
      modal.style.display = "flex";
      break;
    case 10:
      personImg.setAttribute("src", "img/fotoPersons/hue.png");
      personNanme.innerHTML = "HUE";
      personDesc.innerHTML = "HUE era inteligencia artificial que controlava a nave que o Gary estava preso, (alerta de spoiler) ele vira uma robo depois";
      modal.style.display = "flex";
      break;
    case 11:
      personImg.setAttribute("src", "img/fotoPersons/quinn.png");
      personNanme.innerHTML = "Quinn Airgone";
      personDesc.innerHTML = "Quinn é uma ex-guardiã da infinidade que descobriu todas as merdas que eles faziam é se juntou ao Gary para tentar salvar o universo";
      modal.style.display = "flex";
      break;
    default:
      break;
  }
}

// fecha modal de personagem
function fechaModal(){
  modal.style.display = "none";
}

// abre menu lateral
function abreMenu(){
  document.querySelector("header").style.right= '0px'
}

// fecha menu lateral
function fechaMenu(){
  document.querySelector("header").style.right= '-500px'
}

// fazer export de algum jeito