function techList(tech, name) {
  if (tech.length === 0) return 'Vazio!';
  return tech.sort().map((element) => ({ tech: element, name }));
}

module.exports = techList;
