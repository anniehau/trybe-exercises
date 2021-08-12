window.onload = function() {
  // Variáveis de locais
  const bgcolor = document.querySelector('#background-color');
  const textcolor = document.querySelector('#text-color');
  const linespacing = document.querySelector('#line-spacing');
  const fontsize = document.querySelector('#font-size');
  const fontfamily = document.querySelector('#font-family');

  // Outras variáveis
  const paragraphs = document.querySelectorAll('article p')

  // Local Storage
  handleStorage();

  function handleStorage() {
    let storedBgColor = localStorage.getItem("bgcolor")
    let storedTextColor = localStorage.getItem("textcolor")
    let storedLineSpacing = localStorage.getItem("linespacing")
    let storedFontSize = localStorage.getItem("fontsize")
    let storedFontFamily = localStorage.getItem("fontfamily")

    document.body.style.backgroundColor = storedBgColor;
    document.body.style.color = storedTextColor;
    document.querySelector('article').style.lineHeight = storedLineSpacing;
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontSize = storedFontSize;
    }
    document.body.style.fontFamily = storedFontFamily;

    bgcolor.value = storedBgColor.charAt(0).toUpperCase() + storedBgColor.slice(1); // Capitalizar primeira letra
    textcolor.value = storedTextColor.charAt(0).toUpperCase() + storedTextColor.slice(1); // Capitalizar primeira letra
    linespacing.value = storedLineSpacing;
    fontsize.value = storedFontSize;
    fontfamily.value = storedFontFamily;
  }

  // Event Listeners
  bgcolor.addEventListener('change',handleBg);
  textcolor.addEventListener('change',handleTextColor);
  linespacing.addEventListener('change',handleLineSpacing);
  fontsize.addEventListener('change',handleFontSize);
  fontfamily.addEventListener('change',handleFontFamily);

  // Funções
  function handleBg() {
    let value = bgcolor.value.toLowerCase();
    document.body.style.backgroundColor = value;
    localStorage.setItem('bgcolor',value);
  }

  function handleTextColor() {
    let value = textcolor.value.toLowerCase();
    document.body.style.color = value;
    localStorage.setItem('textcolor',value);
  }

  function handleLineSpacing() {
    let value = linespacing.value;
    document.querySelector('article').style.lineHeight = value;
    localStorage.setItem('linespacing',value);
  }

  function handleFontSize() {
    let value = fontsize.value;
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontSize = value;
    }
    localStorage.setItem('fontsize',value);
  }

  function handleFontFamily() {
    let value = fontfamily.value;
    document.body.style.fontFamily = value;
    localStorage.setItem('fontfamily',value);
  }
}
