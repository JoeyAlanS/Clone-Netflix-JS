let containerPesquisa = document.querySelector(".search-container");
let inputPesquisar = document.querySelector("#search");
let iconePesquisar = document.querySelector("#lupa");

function mostrarBarraPesquisa() {
  containerPesquisa.style.border = "1px solid white"
  inputPesquisar.style.width = "25rem"
  inputPesquisar.focus()
}

function esconderBarraPesquisa() {
  containerPesquisa.style.border = "none";
  inputPesquisar.style.width = "0";

}

iconePesquisar.addEventListener("click", mostrarBarraPesquisa)

inputPesquisar.addEventListener("focusout", esconderBarraPesquisa)


function goLeft(nomeDaClasse) {
  let carrossel = document.querySelector(`.${nomeDaClasse}`);


  carrossel.scrollLeft -= carrossel.offsetWidth - 500;


  alterarBotaoDireita(carrossel);

}





function goRight(nomeDaClasse) {
  let carrossel = document.querySelector(`.${nomeDaClasse}`);


  carrossel.scrollLeft += carrossel.offsetWidth - 500;


  alterarBotaoDireita(carrossel);

}

function alterarBotaoDireita(carrossel) {
  if (carrossel.scrollLeft === 0) {

    carrossel.previousElementSibling.style.display = "none";


    return;
  }

  carrossel.previousElementSibling.style.display = "block";

}

function ajustarMenuPlanoFundo() {
  let navigation = document.querySelector("#navigation");


  if (scrollY > 0) {

    navigation.classList.add('scroll');

  } else {
    navigation.classList.remove('scroll');

  }
}


window.addEventListener('scroll', ajustarMenuPlanoFundo);
