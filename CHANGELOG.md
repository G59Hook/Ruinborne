# Changelog

## Ruinborne Alpha 0.2.10

Alpha 0.2.10 closes Ruinborne's first full character-progression chapter. The skill system has moved from an early prototype into six tested specialization trees with branch identities, expensive capstones, and several signature mechanics.

### Character Progression — Skills Chapter Complete

- Rebuilt character progression into six separate Pufferfish Skills tabs: Combat, Survival, Exploration, Arcane, Engineering, and Aviation
- Expanded the system to **147 total talent nodes**
- Added **30 branch-end capstones**, five per specialization
- Kept the trees classless so players can mix specializations rather than being permanently locked into a class
- Polished talent tooltips so players can see exact effects, ranks, point costs, and branch totals
- Standardized the tested Talent XP curve at `min(35 + level * 5, 200)` XP for the next point
- Completed a final identity pass that removes raw attribute overlap between different trees

### Final Skill Identities

#### Combat

Combat now owns direct melee offense and sustain:

- Attack Damage
- Attack Speed
- Attack Knockback
- Sweeping Damage Ratio
- Execute damage
- Lifesteal

Bloodthirst progresses through **2% → 4% → 6% lifesteal**. The Bloodbound capstone raises that to **8% lifesteal**, capped at 3 HP / 1.5 hearts healed per hit. The highest unlocked tier is used rather than stacking the percentages together.

Executioner's Edge gives **25% more final damage** against enemies at or below 30% health.

#### Survival

Survival now owns durability and environmental endurance:

- Maximum Health
- Armor
- Knockback Resistance
- Reduced burn duration
- Oxygen endurance

Colossus Heart adds the Last Stand mechanic, reducing incoming damage by **20% while the player is at or below 30% health**.

#### Exploration

Exploration now owns general travel and terrain handling:

- Movement Speed
- Safe Fall Distance
- Water Movement Efficiency
- Luck
- Step Height

Trailblazer provides permanent Night Vision while the capstone is unlocked.

#### Arcane

Arcane now stays entirely within spell and magical attributes:

- Maximum Mana
- Mana Regeneration
- Cooldown Reduction
- Spell Resistance
- Casting Movement Speed

Spellforged Body adds a permanent Fire Resistance ward while unlocked.

#### Engineering

Engineering now focuses on building, mining, and interaction utility:

- Mining Efficiency
- Block Break Speed
- Block Interaction Range
- Entity Interaction Range
- Submerged Mining Speed

Industrial Savant provides permanent Haste I while unlocked.

#### Aviation

Aviation now has its own aircrew-focused stat package rather than borrowing Exploration or Survival attributes:

- Fall Damage Reduction
- Movement Efficiency
- Explosion Knockback Resistance
- Sneaking Speed
- Jump Strength

Skyborn now triggers after falling 6 or more blocks and grants **8 seconds of Slow Falling**, giving pilots enough time to recover from long drops or airship accidents.

### KubeJS Talent Hooks

Several capstones use isolated KubeJS hooks so their effects can be more interesting than flat attributes alone.

- Fixed the 1.21.1 KubeJS damage hook by using `EntityEvents.beforeHurt`
- Added lifesteal handling for Bloodthirst and Bloodbound
- Added Executioner's Edge low-health damage scaling
- Added Survival Last Stand damage reduction
- Added persistent Night Vision, Fire Resistance, and Haste capstone effects
- Added Skyborn emergency Slow Falling

The final capstone script was tested in game with no new KubeJS errors from the talent system.

### Create Aeronautics

Added **Create Aeronautics: Toolgun** to satisfy the Transmission & Linkage toolgun requirement. The previous in-game missing-toolgun warning no longer appears in the finalized test build.

### Interface Cleanup

Removed:

- Inventory Profiles Next
- libIPN

Inventory Profiles Next's locked-slot indicators and extra inventory controls were adding visual clutter. Ruinborne is keeping the inventory interface cleaner in preparation for a custom UI direction later in development.

### Final 0.2.10 Validation

The final 0.2.10 skill build was tested in game and confirmed working across all six trees.

Validated during the final pass:

- All six skill tabs load correctly
- All 147 talents are present
- All branch connections and capstones work
- Bloodthirst and Bloodbound lifesteal work
- Executioner's Edge works
- Last Stand works
- Trailblazer Night Vision works
- Spellforged Fire Resistance works
- Industrial Savant Haste works
- Skyborn triggers correctly and uses the extended 8-second duration
- Create Aeronautics: Toolgun warning is resolved
- Inventory Profiles Next UI clutter is removed

With this release, the **skill-tree design itself is considered complete**. Future skill work should focus on XP pacing and balance testing rather than adding more branches or overlapping stat nodes.

---

## Ruinborne Alpha 0.2.7

This is the first planned alpha release of Ruinborne.

Ruinborne is a progression-focused adventure and engineering modpack built around exploration, dangerous dungeons, unique loot, bosses, Create machinery, advanced technology, and Create Aeronautics.

Alpha 0.2.7 represents the culmination of the pack’s initial development and compatibility testing, including core content selection, dependency fixes, crash fixes, performance tuning, and the first progression-balance changes.

### Core Pack Direction

- Adventure-first design rather than a kitchen-sink modpack
- Exploration, treasure, bosses, engineering, and airships are the main progression pillars
- Technology is intended to support exploration instead of replacing it
- Create Aeronautics is one of the pack’s signature systems
- Future mod additions will be limited to content that directly supports the pack’s theme or fills a specific gameplay gap
- Development is now shifting away from simply adding mods and toward progression, balancing, loot, world generation, recipes, and polish

### Aether Menu Compatibility

The Aether’s Cumulus menu system was replacing the normal Minecraft title screen and preventing FancyMenu from fully controlling the menu.

Configured Aether/Cumulus with:

```toml
"Enable Menu API" = false
"Enables menu selection button" = false
```

This prevents Aether from replacing the Ruinborne title screen.

### Major Adventure Content

#### Dimensions

- The Aether
- Twilight Forest

#### Dungeons and Structures

- When Dungeons Arise
- Dungeon Crawl
- Adventure Dungeons
- YUNG’s Better Dungeons
- Repurposed Structures
- Regions Unexplored

The current pack already contains a substantial amount of world-generation content. Future development will focus more heavily on improving rewards, progression, rarity, and balance instead of simply adding more structures.

### Bosses and Combat

The current boss and combat roster includes:

- L_Ender’s Cataclysm
- Bosses of Mass Destruction
- Mowzie’s Mobs
- Better Combat
- Iron’s Spells ’n Spellbooks
- Ranged Weapon API
- Spell Engine
- Spell Power Attributes
- Relics

#### L_Ender’s Cataclysm

Cataclysm was added as a major component of Ruinborne’s boss and endgame progression.

It provides:

- Major dungeons
- Powerful bosses
- Dangerous enemies
- Unique equipment
- Dedicated endgame encounters

Required dependency:

- Lionfish API

This gives Ruinborne major handcrafted encounters instead of relying only on generic dungeon generation.

### Ocean Exploration

Added Aquamirae to give the oceans their own meaningful exploration and danger.

Aquamirae adds:

- Dangerous ocean encounters
- Ship graveyards
- Structures
- Unique creatures
- Equipment
- Magic-themed content
- Major encounters

Required dependency:

- Fragmentum

GeckoLib was already present and satisfies its other required dependency.

### Exploration Rewards

#### Artifacts

Added Artifacts to provide powerful exploration-based treasure and equipment.

Artifacts can be acquired through activities such as:

- Exploring structures
- Archaeology
- Rare equipped enemies
- Underground campsites
- Mimic encounters

#### Loot Integrations

Added:

- Loot Integrations
- Loot Integrations: When Dungeons Arise & Co

These improve the distribution of modded items throughout dungeon and structure loot tables.

Required dependency:

- Cupboard

### Create Aeronautics

Create Aeronautics is one of Ruinborne’s central gameplay systems.

Current Aeronautics ecosystem:

- Create Aeronautics
- Create Aeroworks
- Create Aeronautics Gadgets & Gizmos
- Create Aeronautics Transmission & Linkage
- Create Aeronautics Discovery
- Create Aeronautics Automated Logistics
- Create Aeronautics Compatibility
- Create Aeronautics Mekanism Compatibility
- Create Aeronautics Copycat Wing
- AeroPortals

#### Aeronautics Compatibility

Added general compatibility support for mods interacting with assembled ships and Sable sublevels.

#### Mekanism Compatibility

Added dedicated Aeronautics and Mekanism integration.

Supported mounted systems include:

- Digital Miners
- Teleporters
- Pipes
- Cables
- Transmitters
- Wind Generators
- Lasers
- Machine sounds
- Various other Mekanism components

#### AeroPortals

Added support for moving Aeronautics vessels through:

- Nether portals
- End portals
- Aether portals

#### Copycat Wing

Added Copycats+ and Create Aeronautics Copycat Wing.

This allows decorative Copycat blocks to function as aerodynamic wing components while preserving the player’s preferred visual design.

### Create Engineering

Current Create-related engineering stack:

- Create
- Create Connected
- Create Deco
- Create Enchantment Industry
- Create Power Loader
- Create Railways Navigator
- Create Crafts & Additions
- Create Ore Excavation
- Create Big Cannons
- Create Big Cannons Advanced Technologies
- Create Central Kitchen
- Create Dragons Plus
- Copycats+

### Technology

Ruinborne currently uses a multi-stage technology path built around:

- Create
- Immersive Engineering
- Powah
- Mekanism

The intended direction is:

**Create → industrial engineering → power infrastructure → advanced technology → Aeronautics and advanced machinery**

Future alpha releases will add more deliberate recipe and progression gating between these systems.

### Tool and Gear Progression

Added Modern Foundry as the 1.21.1 NeoForge Tinkers-style tool system used by Ruinborne.

Modern Industrialization was intentionally excluded because its progression overlapped too heavily with Create, Immersive Engineering, Powah, and Mekanism.

### Storage and Utility

Current storage and quality-of-life systems include:

- Sophisticated Storage
- Sophisticated Backpacks
- Waystones
- Nature’s Compass
- Explorer’s Compass
- Carry On
- Comforts
- Inventory Profiles Next
- Mouse Tweaks
- Controlling
- AppleSkin
- Enchantment Descriptions
- Shulker Box Tooltip
- TrashSlot
- Light Overlay
- Jade
- Jade Addons
- EMI

### Multiplayer

Added:

- Simple Voice Chat
- FTB Chunks
- FTB Teams
- FTB Library
- Lootr

Lootr allows individual players to receive their own dungeon loot in multiplayer rather than having one player permanently empty a chest for everyone.

### Building

Ruinborne includes a focused building selection intended to support bases, factories, airships, and fantasy-industrial construction without turning the pack into a decorative kitchen sink.

Included:

- FramedBlocks
- Chipped
- Handcrafted
- Decorative Blocks Reborn
- Macaw’s Doors
- Macaw’s Windows
- Macaw’s Bridges
- Macaw’s Roofs
- Create Deco
- Copycats+

### Food and Survival

Added:

- Farmer’s Delight
- Comforts

### Performance

Current performance stack:

- ModernFix
- FerriteCore
- Sodium
- ImmediatelyFast
- Entity Culling
- Alternate Current
- Clumps
- FastSuite
- Let Me Despawn

#### Rendering Compatibility

An earlier rendering configuration using Embeddium conflicted with Veil bundled through Sable/Create Aeronautics.

Embeddium was removed and replaced with Sodium.

Current rendering stack:

- Sodium
- Sable
- Bundled Veil

This combination has remained stable throughout later testing.

### Dependency and Compatibility Work

A large dependency audit was completed during internal alpha development.

Required dependencies resolved include:

- Balm
- Resourceful Lib
- Athena
- Rhino
- Create Dragons Plus
- Placebo
- DragonLib
- Almanac Lib
- Cloth Config
- GeckoLib
- Curios
- playerAnimator
- Hilt
- GuideME
- YUNG’s API
- Ritchie’s Projectile Library
- Lithostitched
- Iron’s Lib
- Cerbon’s API
- owo-lib
- Cupboard
- Lionfish API
- Fragmentum
- Konkrete
- Melody

Dependency checking is now part of the normal process before new mods or updates are introduced.

### Important Crash and Compatibility Fixes

#### Waystones / Balm

A Waystones update exposed an outdated Balm API.

Fixed by updating Balm to a compatible version.

#### Spectrum Cleanup

Spectrum was introduced during early development but did not fit Ruinborne’s intended scope.

Removed:

- Spectrum
- Modonomicon
- Revelationary

This helped establish the current policy of avoiding unnecessary scope creep.

#### Sable / Veil / Embeddium

Resolved a rendering conflict between Sable’s bundled Veil and Embeddium.

Embeddium was permanently removed and replaced with Sodium.

#### Loot Integrations / Cupboard

Loot Integrations initially failed because its required Cupboard dependency was missing.

Cupboard was added and the pack returned to a clean launch.

#### Aether / Accessories Singleplayer Crash

Creating or joining a singleplayer world exposed a crash caused by the Accessories version bundled with The Aether 1.5.8.

The older Accessories build attempted to access a Fabric networking class while running under NeoForge.

Fixed by updating:

**The Aether 1.5.8 → 1.5.10**

This updated the bundled integration and restored successful singleplayer world creation.

No additional Fabric compatibility layer was added solely to support the outdated dependency.

### Scope Control

Several mods and directions have intentionally been excluded to keep Ruinborne focused.

Not currently included:

- Spectrum
- Modern Industrialization
- Embeddium
- Eureka
- Valkyrien Skies
- Distant Horizons
- Iris
- Construct’s Armory
- Unfinished or joke Create addons

Integrated Dungeons and Structures was also deferred because it would introduce a significantly larger dependency branch involving Quark, Supplementaries, and Integrated API.

Future additions must strengthen an existing Ruinborne gameplay pillar or solve a specific problem.

### Version and Stability Work

A number of existing mods were updated during internal testing for compatibility, stability, or bug fixes.

These included:

- ModernFix
- Simple Voice Chat
- Waystones
- Balm
- Sophisticated Core
- Sophisticated Storage
- Xaero’s World Map
- KubeJS
- ImmediatelyFast
- Create Aeronautics Discovery
- The Aether

Stable releases were preferred over beta builds whenever practical.

### Create Aeronautics Discovery

Updated to version 2.1.1.

Relevant fixes include:

- Pilots occasionally disappearing from aircraft
- Engines sometimes receiving infinite burn time
- Pins sometimes failing to appear correctly on assembled structures

### First Progression Balance Pass

Alpha 0.2.7 begins Ruinborne’s transition from mod assembly into intentional gameplay progression.

#### Waystones

Wild Waystones are now substantially less common.

Changed approximately:

**25 chunks → 64 chunks between wild Waystones**

Travel costs were also increased.

Same-dimension travel scaling:

**0.01 → 0.02**

Interdimensional travel cap:

**27 → 40**

Village Waystones remain enabled.

The goal is to keep teleportation useful without allowing it to completely replace exploration, rail transport, airships, and other transportation infrastructure.

#### Create Ore Excavation

Create Ore Excavation has been adjusted so it remains powerful without providing unlimited resources from a single location.

Changed:

**Infinite veins by default → Disabled**

Finite vein base amount:

**1,000 → 4,000**

Maximum extractors per vein:

**Unlimited → 1**

The goal is to make Ore Excavation valuable industrial infrastructure while still giving players reasons to explore for additional deposits.

### KubeJS

KubeJS is installed and prepared for custom Ruinborne progression scripting.

The default example script has been removed and replaced with a simple Ruinborne initialization message.

Recipe gating has intentionally not been implemented yet.

Exact item and recipe identifiers will be verified before progression recipes are modified.

Planned KubeJS work includes:

- Aeronautics progression
- Advanced technology gating
- Cross-mod recipe integration
- Custom progression materials
- Exploration-based requirements where appropriate
- Boss progression requirements where appropriate

### Current Development Status

Ruinborne Alpha 0.2.7 has reached the point where the primary mod roster is considered largely feature-complete.

Current development focus:

- Progression
- Recipe gating
- Loot balance
- Boss progression
- Structure frequency
- World-generation balance
- Transportation balance
- Performance
- Removing redundant content
- Gameplay polish

The goal moving forward is not simply to make Ruinborne larger.

The goal is to make its existing systems feel like parts of one connected adventure.

### Alpha Notice

Ruinborne is still under active development and has not yet entered public release.

Before release, expect:

- Balance changes
- Recipe changes
- Configuration adjustments
- Progression changes
- Additional compatibility testing
- World-generation tuning
- Loot tuning
- Performance testing

World compatibility between early alpha builds is not guaranteed until the pack reaches a more stable development stage.
