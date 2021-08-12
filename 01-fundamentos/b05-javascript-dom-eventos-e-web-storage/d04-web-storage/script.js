window.onload = function() {
  // Variáveis de locais
  const bgcolor = document.querySelector('#background-color');
  const textcolor = document.querySelector('#text-color');
  const linespacing = document.querySelector('#line-spacing');
  const fontsize = document.querySelector('#font-size');
  const fontfamily = document.querySelector('#font-family');

  // Event Listeners
  bgcolor.addEventListener("change",handleBg);

  // Funções
  function handleBg(event) {
    let value = bgcolor.value.toLowerCase();
    document.body.style.backgroundColor = value;
  }

}