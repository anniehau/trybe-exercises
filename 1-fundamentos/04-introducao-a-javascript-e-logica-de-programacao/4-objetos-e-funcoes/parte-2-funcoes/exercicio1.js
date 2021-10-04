function palindromo(string) {
  // Verificar se o item escrito ao contrário é igual ao item normalmente
  // Uma maneira de fazer isso é com for if mas também posso tentar usar uma array, que pode ser mais difícil mas pode ser interessante para desenvolver alguma habilidade

  // Maneira complicada com arrays:
  let array = [];
  for (i = 0; i <= string.length; i += 1) {
    array[i] = string[i];
    if (array.length === string.length) {
      array.reverse();
      if (array.join('') === string) {
        return true;
      } else {
        return false;
      }
    }
  }
}

// Output, mostra na tela se funciona
console.log(palindromo('arara'))
console.log(palindromo('desenvolvimento'))

// Achei interessante esse exercicio mas não é a forma mais eficiente de fazer pois está desnecessariamente utilizando uma array para isso. Mas é legal que funciona!