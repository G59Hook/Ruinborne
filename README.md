# Ruinborne

Ruinborne is a progression-focused Minecraft 1.21.1 NeoForge adventure and engineering modpack built around dangerous exploration, powerful loot, major bosses, Create machinery, advanced technology, character progression, and Create Aeronautics airships.

## Current Development Build

**Alpha 0.2.10**

Ruinborne is still under active development and has not yet entered public release.

## How to Download and Play

**Do not use GitHub's `Code -> Download ZIP` button to install Ruinborne.** That download contains the development repository, not a complete CurseForge-importable modpack.

Playable builds are distributed as CurseForge modpack ZIP files named like:

`Ruinborne-0.2.10.zip`

When a build is published, download the playable ZIP from either:

1. **GitHub Releases** for the matching Ruinborne version, or
2. **CurseForge** once the public CurseForge project files are available.

### Installing a GitHub Release build in CurseForge

1. Download the `Ruinborne-x.x.x.zip` file from the GitHub Releases page.
2. Open the CurseForge app.
3. Select Minecraft.
4. Choose **Create Custom Profile**.
5. Choose **Import**.
6. Select the downloaded `Ruinborne-x.x.x.zip` file.
7. CurseForge will read the included `manifest.json`, download the required hosted mods, and copy Ruinborne's custom files from the `overrides` folder.
8. Launch the newly created Ruinborne profile.

The CurseForge pack ZIP contains the manifest and Ruinborne-specific overrides. Most mod JARs are intentionally not bundled directly because CurseForge downloads them from their individual project pages during import.

### Development Repository vs Playable Release

This GitHub repository stores Ruinborne's development source and configuration, including:

- configs
- KubeJS scripts
- FTB Quest data
- talent-tree data
- documentation
- balancing changes
- changelogs

The repository itself is **not** the installer. Players should use a packaged `Ruinborne-x.x.x.zip` from Releases or CurseForge.

## Core Direction

Ruinborne is designed as an adventure-first pack rather than a kitchen-sink collection. Exploration, treasure, bosses, engineering, character growth, and airships form the core progression pillars.

Aeronautics is intended to appear throughout the game instead of existing only as a late-game unlock. Players should move from early flight concepts into mechanical aircraft, industrial vessels, powered mobile bases, and eventually armed war machines as the rest of their progression develops.

## RPG Progression

Alpha 0.2.10 expands the character-progression system into six separate Pufferfish Skills tabs:

- Combat
- Survival
- Exploration
- Arcane
- Engineering
- Aviation

The current build contains 93 talent nodes across those tabs. Talent tooltips show the exact effect, category-XP cost, skill-point cost, and rank. There are no classes and no permanent weapon or magic lockouts.

Combat, Survival, Exploration, Arcane, and Engineering have activity-based XP sources. Aviation is intentionally milestone-driven so ordinary grinding cannot replace the Aeronautics progression path.

Talent bonuses are intentionally restrained so character growth does not trivialize Ruinborne's bosses or exploration content.

## Quest Roadmap

FTB Quests provides an in-game roadmap rather than a mandatory checklist. Alpha 0.2.10 rebuilds the quest presentation with readable chapter names, quest titles, descriptions, task names, and proper icons.

Current chapters are:

- Main Journey
- Exploration
- Engineering & Flight
- Talents

The Engineering & Flight path now seeds Aeronautics throughout progression through envelope construction, hot-air lift, powered flight, and later armed-airship goals rather than treating flight as a single late-game unlock.

Future chapters will expand boss hunting, dimensions, magic, loot progression, Aeronautics milestones, and endgame content.

## Technology Path

The current technology direction is:

**Create → Immersive Engineering → Powah → Mekanism**

Aeronautics runs alongside that progression rather than simply sitting at the end of it.

## Major Adventure Systems

Ruinborne currently includes major content from systems such as:

- Create Aeronautics
- The Aether
- Twilight Forest
- L_Ender's Cataclysm
- Bosses of Mass Destruction
- Mowzie's Mobs
- Aquamirae
- When Dungeons Arise
- Dungeon Crawl
- YUNG's Better Dungeons
- Artifacts and Relics
- Iron's Spells 'n Spellbooks
- Modern Foundry

## Repository

CurseForge-hosted mod JAR files are intentionally not committed to the repository. Mod versions are distributed through the CurseForge manifest contained in each playable release ZIP.

## Versioning

Current alpha builds use versions such as `0.2.8`, `0.2.9`, and `0.2.10`. Larger milestones will advance the minor version, such as `0.3.0`.

## Status

Ruinborne is an alpha project. Balance, recipes, configs, progression, talents, quests, and world generation may change between releases, and early alpha worlds are not guaranteed to remain compatible.
