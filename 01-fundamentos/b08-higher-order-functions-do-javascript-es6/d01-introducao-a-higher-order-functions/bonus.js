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
  const max = battleMembers.warrior.strength * battleMembers.warrior.weaponDmg;
  return Math.floor(Math.random() * (max - min) + min);
}

const mageDamage = () => {
  const min = battleMembers.mage.intelligence;
  const max = battleMembers.mage.intelligence * 2;
  const mana = battleMembers.mage.mana;
  if (mana < 15) return "Não possui mana suficiente!"
  battleMembers.mage.mana = mana - 15;
  return Math.floor(Math.random() * (max - min) + min);
}

const gameActions = {
  warriorTurn: () => {
    const damage = warriorDamage();
    battleMembers.dragon.healthPoints -= damage;
    battleMembers.warrior.damage = damage;
  },
  mageTurn: () => {
    const damage = mageDamage();
    battleMembers.dragon.healthPoints -= damage;
    battleMembers.mage.damage = damage;
  },
  dragonTurn: () => {
    const damage = dragonDamage();
    battleMembers.warrior.healthPoints -= damage;
    battleMembers.mage.healthPoints -= damage;
    battleMembers.dragon.damage = damage;
  },
  currentStats: () => console.log(battleMembers),
}
