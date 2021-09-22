function encode(string) {
  let result = '';
  let code = { a: 1, e: 2, i: 3, o: 4, u: 5 };

  for (let i = 0; i < string.length; i += 1) {
    for (let key in code) {
      if (Object.prototype.hasOwnProperty.call(code, string[i])) {
        if (key === string[i]) {
          result += code[key];
        }
      } else {
        result += string[i];
        break;
      }
    }
  }

  return result;
}

function decode(string) {
  let result = '';
  let code = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };

  for (let i = 0; i < string.length; i += 1) {
    for (let key in code) {
      if (Object.prototype.hasOwnProperty.call(code, string[i])) {
        if (key === string[i]) {
          result += code[key];
        }
      } else {
        result += string[i];
        break;
      }
    }
  }

  return result;
}

module.exports = {
  encode,
  decode,
}