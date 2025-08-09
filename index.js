// Player object
const player = {
  name: "Zahra",      
  health: 100,
  currentWeapon: "pistol", 
  inventory: {
    knife: { damage: 10, ammo: Infinity },
    pistol: { damage: 25, ammo: 2 },  
    shotgun: { damage: 50, ammo: 1 }
  }
};

// Zombie types
const zombies = [
  { type: "Walker", health: 50 },
  { type: "Runner", health: 70 },
  { type: "Tank", health: 120 }
];

const currentZombieIndex = 1; 
const zombie = { ...zombies[currentZombieIndex] };

console.log(`🧟 A ${zombie.type} appears!`);
console.log(`🔫 Player is armed with: ${player.currentWeapon}`);

while (player.health > 0 && zombie.health > 0) {
  let weapon = player.inventory[player.currentWeapon];

  if (weapon.ammo <= 0 && weapon.ammo !== Infinity) {
    console.log(`⚠️ No ammo for ${player.currentWeapon}! Switching to knife...`);
    player.currentWeapon = "knife";
    weapon = player.inventory.knife;
  }

  
  zombie.health -= weapon.damage;
  console.log(`💥 ${player.name} attacks with ${player.currentWeapon}!`);

  if (zombie.health <= 0) break;

 
  player.health -= 15;
  console.log(`🧟 The ${zombie.type} attacks back!`);

  if (weapon.ammo !== Infinity) weapon.ammo--;

  console.log(`📊 Player health: ${player.health}`);
  console.log(`📊 Zombie health: ${zombie.health}`);
  console.log(`📦 Ammo left for ${player.currentWeapon}: ${weapon.ammo}`);
  console.log("---");
}

console.log("=== GAME OVER ===");
console.log("🏆 Final Player Status:", player);
console.log("☠️ Final Zombie Status:", zombie);
