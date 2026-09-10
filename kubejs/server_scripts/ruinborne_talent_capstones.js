// Ruinborne 0.2.10 - Final talent identity runtime hooks
// Keeps scripted mechanics isolated from progression/recipe scripts.

console.info('[Ruinborne] 0.2.10 final talent identity hooks loaded')

const hasTalentTag = (entity, tag) => entity.getTags().contains(tag)

const combatLifestealRate = attacker => {
  if (hasTalentTag(attacker, 'ruinborne_combat_bloodbound')) return 0.08
  if (hasTalentTag(attacker, 'ruinborne_combat_lifesteal_3')) return 0.06
  if (hasTalentTag(attacker, 'ruinborne_combat_lifesteal_2')) return 0.04
  if (hasTalentTag(attacker, 'ruinborne_combat_lifesteal_1')) return 0.02
  return 0.0
}

EntityEvents.beforeHurt(event => {
  const target = event.entity
  const attacker = event.source.player

  if (attacker && hasTalentTag(attacker, 'ruinborne_combat_executioner')) {
    const maxHealth = target.getMaxHealth()
    if (maxHealth > 0 && target.getHealth() / maxHealth <= 0.30) {
      event.damage = event.damage * 1.25
    }
  }

  if (attacker) {
    const rate = combatLifestealRate(attacker)
    if (rate > 0 && event.damage > 0) {
      const healing = Math.min(event.damage * rate, 3.0)
      if (healing > 0) attacker.heal(healing)
    }
  }

  if (hasTalentTag(target, 'ruinborne_survival_last_stand')) {
    const maxHealth = target.getMaxHealth()
    if (maxHealth > 0 && target.getHealth() / maxHealth <= 0.30) {
      event.damage = event.damage * 0.80
    }
  }
})

PlayerEvents.tick(event => {
  const player = event.player
  if (player.tickCount % 20 !== 0) return

  if (hasTalentTag(player, 'ruinborne_exploration_trailblazer')) {
    player.potionEffects.add('minecraft:night_vision', 400, 0, false, false)
  }

  if (hasTalentTag(player, 'ruinborne_arcane_spellforged')) {
    player.potionEffects.add('minecraft:fire_resistance', 100, 0, false, false)
  }

  if (hasTalentTag(player, 'ruinborne_engineering_industrial_savant')) {
    player.potionEffects.add('minecraft:haste', 100, 0, false, false)
  }

  if (hasTalentTag(player, 'ruinborne_aviation_skyborn') && player.fallDistance >= 6.0 && !player.isFallFlying()) {
    player.potionEffects.add('minecraft:slow_falling', 160, 0, false, false)
  }
})
