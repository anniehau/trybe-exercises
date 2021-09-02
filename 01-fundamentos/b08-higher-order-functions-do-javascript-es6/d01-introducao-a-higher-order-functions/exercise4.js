const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  const min = 15;
  const max = battleMembers.dragon.strength;
  return Math.floor(Math.random() * (max - min) + min);
}

const warriorDamage = () => {
  const min = battleMembers.warrior.strength;
  const max = battleMembers.warrior.strength * 2;
  return Math.floor(Math.random() * (max - min) + min);
}
