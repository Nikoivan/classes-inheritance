class Character {
  constructor(name, type) {
    if (
      !name ||
      type ||
      typeof name !== string ||
      name.length < 2 ||
      name.length > 10 ||
      typeof type !== string ||
      type !== "Bowman" ||
      type !== "Swordsman" ||
      type !== "Magician" ||
      type !== "Daemon" ||
      type !== "Undead" ||
      type !== "Zombie"
    ) {
      throw new Error("Ошибка в параметре name");
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
  }
}

export default Character;
