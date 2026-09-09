// Ruinborne 0.2.8 - Progression pass
// Aeronautics now begins after the player has reached Immersive Engineering steel.

console.info('[Ruinborne] 0.2.8 server progression scripts loaded')

ServerEvents.recipes(event => {
  // Propeller Bearing
  // Original recipe used an iron plate. Ruinborne requires an IE steel component
  // so powered flight begins after meaningful industrial progression.
  event.remove({ output: 'aeronautics:propeller_bearing' })

  event.shaped(
    'aeronautics:propeller_bearing',
    [
      ' A ',
      ' S ',
      ' B '
    ],
    {
      A: '#minecraft:wooden_slabs',
      S: 'immersiveengineering:component_steel',
      B: 'create:brass_casing'
    }
  ).id('ruinborne:aeronautics/propeller_bearing')

  // Hot Air Burner
  // Keeps balloon flight accessible, but requires steel fabrication instead of
  // only early Create materials.
  event.remove({ output: 'aeronautics:adjustable_burner' })

  event.shaped(
    'aeronautics:adjustable_burner',
    [
      'P P',
      'PCP',
      'ARA'
    ],
    {
      P: 'immersiveengineering:plate_steel',
      C: '#aeronautics:burner_fire',
      A: 'create:andesite_alloy',
      R: '#c:dusts/redstone'
    }
  ).id('ruinborne:aeronautics/hot_air_burner')
})
