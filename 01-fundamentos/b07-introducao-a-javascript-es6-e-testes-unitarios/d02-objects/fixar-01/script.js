function addObjectToFunction (obj, key, value) {
  obj[key] = value;
  return obj;
}

const game = {
  name: 'Final Fantasy XIV: A Realm Reborn',
  genre: 'MMORPG',
  developer: 'Square Enix',
  releaseDate: 2013,
}

const expansions = ['Heavensward','Stormblood','Shadowbringers','Endwalker'];

console.log(addObjectToFunction(game, 'expansions', expansions));