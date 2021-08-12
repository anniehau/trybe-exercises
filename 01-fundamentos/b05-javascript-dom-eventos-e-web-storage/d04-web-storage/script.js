window.onload = function() {
  // Variáveis de locais
  const bgcolor = document.querySelector('#background-color');
  const textcolor = document.querySelector('#text-color');
  const linespacing = document.querySelector('#line-spacing');
  const fontsize = document.querySelector('#font-size');
  const fontfamily = document.querySelector('#font-family');

  const paragraphs = document.querySelectorAll('article p')

  // Event Listeners
  bgcolor.addEventListener("change",handleBg);
  textcolor.addEventListener("change",handleTextColor);
  linespacing.addEventListener("change",handleLineSpacing);
  fontsize.addEventListener("change",handleFontSize);
  fontfamily.addEventListener("change",handleFontFamily);

  // Funções
  function handleBg() {
    let value = bgcolor.value.toLowerCase();
    document.body.style.backgroundColor = value;
  }

  function handleTextColor() {
    let value = textcolor.value.toLowerCase();
    document.body.style.color = value;
  }

  function handleLineSpacing() {
    let value = linespacing.value;
    document.querySelector('article').style.lineHeight = value;
  }

  function handleFontSize() {
    let value = fontsize.value;
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontSize = value;
    }
  }

  function handleFontFamily() {
    let value = fontfamily.value;
    document.body.style.fontFamily = value;
  }
}
