import Character from "../src/js/character";
import Bowman from "../src/js/bowman";
import Swordsman from "../src/js/swordsman";
import Magician from "../src/js/magician";
import Daemon from "../src/js/daemon";
import Undead from "../src/js/undead";
import Zombie from "../src/js/zombie";

const character = new Character("Matvey", "Daemon");
const bowman = new Bowman("Ivan");
const swordsman = new Swordsman("Yana");
const magician = new Magician("Alexander");
const daemon = new Daemon("Tanya");
const undead = new Undead("Valya");
const zombie = new Zombie("Oleg");

const testList = [
  [
    Character,
    "Matvey",
    "Daemon",
    {
      name: "Matvey",
      type: "Daemon",
      health: 100,
      level: 1,
      attack: 10,
      defence: 10,
    },
  ],
  [
    Bowman,
    "Ivan",
    {
      name: "Ivan",
      type: "Bowman",
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  ],
  [
    Swordsman,
    "Yana",
    {
      name: "Yana",
      type: "Swordsman",
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ],
  [
    Magician,
    "Alexander",
    {
      name: "Alexander",
      type: "Magician",
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ],
  [
    Daemon,
    "Tanya",
    {
      name: "Tanya",
      type: "Daemon",
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ],
  [
    Undead,
    "Valya",
    {
      name: "Valya",
      type: "Undead",
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  ],
  [
    Zombie,
    "Oleg",
    {
      name: "Oleg",
      type: "Zombie",
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ],
];

const testHandler = test.each(testList);

test("testing player %q created by %w", (type, createdObject, expectedObject) => {
  const result = new type(createdObject);
  expect(result).toBe(expectedObject);
});
