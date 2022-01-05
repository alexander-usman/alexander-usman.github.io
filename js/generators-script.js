"use strict";
// Individual Loot Tables
const individualLootTableCR0 = new Map([
  [30, [[5, 6, 1, `cp`]]], // Roll below 30 and recieve 5D6 * 1 Copper Pieces.
  [60, [[4, 6, 1, `sp`]]],
  [70, [[3, 6, 1, `ep`]]],
  [95, [[3, 6, 1, `gp`]]],
  [100, [[1, 6, 1, `pp`]]],
]);
const individualLootTableCR5 = new Map([
  [
    30,
    [
      [4, 6, 100, `cp`],
      [1, 6, 10, `ep`],
    ],
  ], // Roll 30 or less and recieve 4D6 * 10 Copper, and 1D6 * 10 Electrum Pieces.
  [
    60,
    [
      [6, 6, 10, `sp`],
      [2, 6, 10, `gp`],
    ],
  ],
  [
    70,
    [
      [3, 6, 10, `ep`],
      [2, 6, 10, `gp`],
    ],
  ],
  [95, [[4, 6, 10, `gp`]]],
  [
    100,
    [
      [2, 6, 10, `gp`],
      [3, 6, 1, `pp`],
    ],
  ],
]);
const individualLootTableCR11 = new Map([
  [
    20,
    [
      [4, 6, 100, `sp`],
      [1, 6, 100, `gp`],
    ],
  ],
  [
    35,
    [
      [1, 6, 100, `ep`],
      [1, 6, 100, `gp`],
    ],
  ],
  [
    75,
    [
      [2, 6, 100, `gp`],
      [1, 6, 10, `pp`],
    ],
  ],
  [
    100,
    [
      [2, 6, 100, `gp`],
      [2, 6, 10, `pp`],
    ],
  ],
]);
const individualLootTableCR17 = new Map([
  [
    15,
    [
      [2, 6, 1000, `ep`],
      [8, 6, 100, `gp`],
    ],
  ],
  [
    55,
    [
      [1, 6, 1000, `gp`],
      [1, 6, 100, `pp`],
    ],
  ],
  [
    100,
    [
      [1, 6, 1000, `gp`],
      [2, 6, 100, `pp`],
    ],
  ],
]);
// Hoard Loot Contents
const gemstones = new Map([
  [
    10,
    [
      `Azurite`,
      `Banded Agate`,
      `Blue Quartz`,
      `Eye Agate`,
      `Hematite`,
      `Lapis Lazuli`,
      `Malachite`,
      `Moss Agate`,
      `Obsidian`,
      `Rhondochrosite`,
      `Tiger Eye`,
      `Turquoise`,
    ],
  ],
  [
    50,
    [
      `Bloodstone`,
      `Carnelian`,
      `Chalcedony`,
      `Chrysoprase`,
      `Citrine`,
      `Jasper`,
      `Moonstone`,
      `Onyx`,
      `Quartz`,
      `Sardonyx`,
      `Star Rose Quartz`,
      `Zircon`,
    ],
  ],
  [
    500,
    [
      `Alexandrite`,
      `Aquamarine`,
      `Black Pearl`,
      `Blue Spinel`,
      `Peridot`,
      `Topaz`,
    ],
  ],
  [
    1000,
    [
      `Black Opal`,
      `Blue Sapphire`,
      `Emerald`,
      `Fire Opal`,
      `Opal`,
      `Star Ruby`,
      `Star Sapphire`,
      `Yellow Sapphire`,
    ],
  ],
  [5000, [`Black Sapphire`, `Diamond`, `Jacinth`, `Ruby`]],
]);
const artworks = new Map([
  [
    25,
    [
      `Silver Ewer`,
      `Carved Bone Statuette`,
      `Small Gold Bracelet`,
      `Cloth-of-Gold Vestments`,
      `Black Velvet Mask Stitched with Silver Thread`,
      `Copper Chalice with Silver Filigree`,
      `Pair of Engraved Bone Dice`,
      `Small Mirror Set in a Painted Wooden Frame`,
      `Embroidered Silk Handkerchief`,
      `Gold Locket with a Painted Portrait Inside`,
    ],
  ],
  [
    250,
    [
      `Gold Ring Set with Bloodstones`,
      `Carved Ivory Statuette`,
      `Large Gold Bracelet`,
      `Silver Necklace with a Gemstone Pendant`,
      `Bronze Crown`,
      `Silk Robe with Gold Embroidery`,
      `Large Well-Made Tapestry`,
      `Brass Mug with Jade Inlay`,
      `Box of Turquoise Animal Figurines`,
      `Gold Bird Cage with Electrum Filigree`,
    ],
  ],
  [
    750,
    [
      `Silver Chalice Set with Moonstones`,
      `Silver-Plated Steel Longsword with  Jet Set in Hilt`,
      `Carved Harp of Exotic Wood with Ivory Inlay and Zircon Gems`,
      `Small Gold Idol`,
      `Gold Dragon Comb Set with Red Garnets as Eyes`,
      `Bottle Stopper Cork Embossed with Gold Leaf and Set with Amethysts`,
      `Ceremonial Electrum Dagger with a Black Pearl in the Pommel`,
      `Silver and Gold Brooch`,
      `Obsidian Statuette with Gold Fittings and Inlay`,
      `Painted Gold War Mask`,
    ],
  ],
  [
    2500,
    [
      `Fine Gold Chain Set with a Fire Opal`,
      `Old Masterpiece Painting`,
      `Embroidered Silk and Velvet Mantle Set with Numerous Moonstones`,
      `Platinum Bracelet Set with a Sapphire`,
      `Embroidered Glove Set with Jewel Chips`,
      `Jeweled Anklet`,
      `Gold Music Box`,
      `Gold Circlet Set with Four Aquamarines`,
      `Eye Patch with a Mock Eye Set in Blue Sapphire and Moonstone`,
      `A Necklace with a String of Small Pink Pearls`,
    ],
  ],
  [
    7500,
    [
      `Jeweled Gold Crown`,
      `Jewled Platinum Ring`,
      `Small Gold Statuette Set with Rubies`,
      `Gold Cup Set with Emeralds`,
      `Gold Jewelery Box with Platinum Filigree`,
      `Painted Gold Child's Sarcophagus`,
      `Jade Game Board with Solid Gold Playing Pieces`,
      `Bejeweled Ivory Drinking Horn with Gold Filigree`,
    ],
  ],
]);
const magicItemTableA = new Map([
  [50, `Potion of Healing`],
  [60, `Spell Scroll (Cantrip)`],
  [70, `Potion of Climbing`],
  [90, `Spell Scroll (First Level)`],
  [94, `Spell Scroll (Second Level)`],
  [98, `Potion of Greater Healing`],
  [99, `Bag of Holding`],
  [100, `Driftglobe`],
]);
const magicItemTableB = new Map([
  [15, `Potion of Greater Healing`],
  [22, `Potion of Fire Breath`],
  [29, `Potion of Resistance`],
  [34, `Ammunition (Plus One)`],
  [39, `Potion of Animal Friendship`],
  [44, `Potion of Hill Giant Strength`],
  [49, `Potion of Growth`],
  [54, `Potion of Water Breathing`],
  [59, `Spell Scroll (Second Level)`],
  [64, `Spell Scroll (Third Level)`],
  [67, `Bag of Holding`],
  [70, `Keoghtom's Ointment`],
  [73, `Oil of Slipperiness`],
  [75, `Dust of Disappearance`],
  [77, `Dust of Dryness`],
  [79, `Dust of Sneezing and Choking`],
  [81, `Elemental Gem`],
  [83, `Philter of Love`],
  [84, `Alchemy Jug`],
  [85, `Cap of Water-Breathing`],
  [86, `Cloak of the Manta Ray`],
  [87, `Driftglobe`],
  [88, `Goggles of Night`],
  [89, `Helm of Comprehending Languages`],
  [90, `Immovable Rod`],
  [91, `Lantern of Revealing`],
  [92, `Mariner's Armour`],
  [93, `Mithril Armour`],
  [94, `Potion of Poison`],
  [95, `Ring of Swimming`],
  [96, `Robe of Useful Items`],
  [97, `Rope of Climbing`],
  [98, `Saddle of the Cavalier`],
  [99, `Wand of Magic Detection`],
  [100, `Wand of Secrets`],
]);
const magicItemTableC = new Map([
  [15, `Potion of Superior Healing`],
  [22, `Spell Scroll (Fourth Level)`],
  [27, `Ammunition (Plus Two)`],
  [32, `Potion of Clairvoyance`],
  [37, `Potion of Diminution`],
  [42, `Potion of Gaseous Form`],
  [47, `Potion of Frost Giant Strength`],
  [52, `Potion of Stone Giant Strength`],
  [57, `Potion of Heroism`],
  [62, `Potion of Invulnerablility`],
  [67, `Potion of Mind Reading`],
  [72, `Spell Scroll (Fifth Level)`],
  [75, `Elixir of Health`],
  [78, `Oil of Etherealness`],
  [81, `Potion of Fire Giant Strength`],
  [84, `Quaal's Feather Token`],
  [87, `Scroll of Protection`],
  [89, `Bag of Beans`],
  [91, `Bead of Force`],
  [92, `Chime of Opening`],
  [93, `Decanter of Endless Water`],
  [94, `Eyes of Minute Seeing`],
  [95, `Folding Boat`],
  [96, `Heward's Handy haversack`],
  [97, `Horseshoes of Speed`],
  [98, `Necklace of Fireballs`],
  [99, `Peripat of Health`],
  [100, `Sending Stones`],
]);
const magicItemTableD = new Map([
  [20, `Potion of Supreme Healing`],
  [30, `Potion of Invisibility`],
  [40, `Potion of Speed`],
  [50, `Spell Scroll (Sixth Level)`],
  [57, `Spell Scroll (Seventh Level)`],
  [62, `Ammunition (Plus Three)`],
  [67, `Oil of Sharpness`],
  [72, `Potion of Flying`],
  [77, `Potion of Cloud Giant Strength`],
  [82, `Potion of Longevity`],
  [87, `Potion of Vitality`],
  [92, `Spell Scroll (Eighth Level)`],
  [95, `Horseshoes of a Zephyr`],
  [98, `Nolzur's Marvelous Pigments`],
  [99, `Bag of Devouring`],
  [100, `Portable Hole`],
]);
const magicItemTableE = new Map([
  [30, `Spell Scroll (Eighth Level)`],
  [55, `Potion of Storm Giant Strength`],
  [70, `Potion of Supreme Healing`],
  [85, `Spell Scroll (Ninth Level)`],
  [93, `Universal Solvent`],
  [98, `Arrow of Slaying`],
  [100, `Sovereign Glue`],
]);
const magicItemTableF = new Map([
  [15, `Weapon (Plus One)`],
  [18, `Shield (Plus One)`],
  [21, `Sentinel Shield`],
  [23, `Amulet of Proof Against Detection and Location`],
  [25, `Boots of Elvenkind`],
  [27, `Boots of Striding and Springing`],
  [29, `Bracers of Archery`],
  [31, `Brooch of Shielding`],
  [33, `Broom of Flying`],
  [35, `Cloak of Elvenkind`],
  [37, `Cloak of Protection`],
  [39, `Gauntlets of Ogre Power`],
  [41, `Hat of Disguise`],
  [43, `Javelin of Lightning`],
  [45, `Pearl of Power`],
  [47, `Rod of the Pact Keeper (Plus One)`],
  [49, `Slippers of Spider Climbing`],
  [51, `Staff of the Adder`],
  [53, `Staff of the Python`],
  [55, `Sword of Vengance`],
  [57, `Trident of Fish Command`],
  [59, `Wand of Magic Missiles`],
  [61, `Wand of the War Mage (Plus One)`],
  [63, `Wand of Web`],
  [65, `Weapon of Warning`],
  [66, `Adamantine Armour (Chain Mail)`],
  [67, `Adamantine Armour (Chain Shirt)`],
  [68, `Adamantine Armour (Scale Mail)`],
  [69, `Bag of Tricks (Grey)`],
  [70, `Bag of Tricks (Rust)`],
  [71, `Bag of Tricks (Tan)`],
  [72, `Boots of the Winterlands`],
  [73, `Circlet of Blasting`],
  [74, `Deck of Illusions`],
  [75, `Eversmoking Bottle`],
  [76, `Eyes of Charming`],
  [77, `Eyes of the Eagle`],
  [78, `Figurine of Wondrous Power (Silver Raven)`],
  [79, `Gem of Brightness`],
  [80, `Gloves of Missile Snaring`],
  [81, `Gloves of Swimming and Climbing`],
  [82, `Gloves of Thievery`],
  [83, `Headband of Intellect`],
  [84, `Helm of Telepathy`],
  [85, `Instrument of the Bards (Doss Lute)`],
  [86, `Instrument of the Bards (Fochlucan Bandore)`],
  [87, `Instrument of the Bards (Mac-Fuimidh Cittern)`],
  [88, `Medallion of Thoughts`],
  [89, `Necklace of Adaption`],
  [90, `Periapt of Wound Closure`],
  [91, `Pipes of Haunting`],
  [92, `Pipes of the Sewers`],
  [93, `Ring of Jumping`],
  [94, `Ring of Mind Shielding`],
  [95, `Ring of Warmth`],
  [96, `Ring of Water Walking`],
  [97, `Quivr of Ehlonna`],
  [98, `Stone of Good Luck`],
  [99, `Wind Fan`],
  [100, `Winged Boots`],
]);
const magicItemTableG = new Map([
  [11, `Weapon (Plus Two)`],
  [14, `Figurine of Wondrous Power`],
  [15, `Adamantine Armour (Brastplate)`],
  [16, `Adamantine Armour (Splint)`],
  [17, `Amulet of Health`],
  [18, `Armour of Vulnerability`],
  [19, `Arrow-Catching Shield`],
  [20, `Belt of Dwarvenkind`],
  [21, `Belt of Hill Giant Strength`],
  [22, `Berserker Axe`],
  [23, `Boots of Levitation`],
  [14, `Boots of Speed`],
  [25, `Bowl of Commanding Water Elementals`],
  [26, `Bracers of Defence`],
  [27, `Brazier of Commanding Fire Elementals`],
  [28, `Cape of the Mountebank`],
  [29, `Censer of Controlling Air Elementals`],
  [30, `Armour (Plus One, Chain Mail)`],
  [31, `Armour of Resistance (Chain Mail)`],
  [32, `Armour (Plus One, Chain Shirt)`],
  [33, `Armour of Resistance (Chain Shirt)`],
  [34, `Cloak of Displacement`],
  [35, `Cloak of the Bat`],
  [36, `Cube of Force`],
  [37, `Daern's Instant Fortress`],
  [38, `Dagger of Venom`],
  [39, `Dimensional Shackles`],
  [40, `Dragon Slayer`],
  [41, `Elven Chain`],
  [42, `Flame Tongue`],
  [43, `Gem of Seeing`],
  [44, `Giant Slayer`],
  [45, `Glamoured Studded Leather`],
  [46, `Helm of Teleportation`],
  [47, `Horn of Blasting`],
  [48, `Horn of Valhalla (Silver or Brass)`],
  [49, `Instrument of the Bards (Canaith Mandolin)`],
  [50, `Instrument of the Bards (Cli Lyre)`],
  [51, `Ioun Stone (Awareness)`],
  [52, `Ioun Stone (Protection)`],
  [53, `Ioun Stone (Reserve)`],
  [54, `Ioun Stone (Sustenance)`],
  [55, `Iron Bands of Bilarro`],
  [56, `Armour (Plus One, Leather)`],
  [57, `Armour of Resistance (Leather)`],
  [58, `Mace of Distruption`],
  [59, `Mace of Smiting`],
  [60, `Mace of Terror`],
  [61, `Mantle of Spell Resistance`],
  [62, `Necklace of Prayer Beads`],
  [63, `Periapt of Proof Against Poison`],
  [64, `Ring of Animal Influence`],
  [65, `Ring of Evasion`],
  [66, `Ring of Feather Falling`],
  [67, `Ring of Free Action`],
  [68, `Ring of Protection`],
  [69, `Ring of Resistance`],
  [70, `Ring of Spell Storing`],
  [71, `Ring of the Ram`],
  [72, `Ring of X-Ray Vision`],
  [73, `Robe of Eyes`],
  [74, `Rod of Rulership`],
  [75, `Rod of the Pact Keeper (Plus Two)`],
  [76, `Rope of Entanglement`],
  [77, `Armour (Plus One, Scale Mail)`],
  [78, `Armour of Resistance (Scale Mail)`],
  [79, `Shield (Plus Two)`],
  [80, `Shield of Missile Attraction`],
  [81, `Staff of Charming`],
  [82, `Staff of Healing`],
  [83, `Staff of Swarming Insects`],
  [84, `Staff of the Woodlands`],
  [85, `Staff of Withering`],
  [86, `Stone of Controlling Earth Elementals`],
  [87, `Sun Blade`],
  [88, `Sword of Life Stealing`],
  [89, `Sword of Wounding`],
  [90, `Tentacle Rod`],
  [91, `Vicious Weapon`],
  [92, `Wand of Binding`],
  [93, `Wand of Enemy Detection`],
  [94, `Wand of Fear`],
  [95, `Wand of Fireballs`],
  [96, `Wand of Lightning Bolts`],
  [97, `Wand of Paralysis`],
  [98, `Wand of the War Mage`],
  [99, `Wand of Wonder`],
  [100, `Wings of Flying`],
]);
const magicItemTableH = new Map([
  [10, `Weapon (Plus Three)`],
  [12, `Amulet of the Planes`],
  [14, `Carpet of Flying`],
  [16, `Crystal Ball (Very Rare Version)`],
  [18, `Ring of Regeneration`],
  [20, `Ring of Shooting Stars`],
  [22, `Ring of Telekinesis`],
  [24, `Robe of Scintillating Colours`],
  [26, `Robe of Stars`],
  [28, `Rod of Absorbtion`],
  [30, `Rod of Alertness`],
  [32, `Rod of Security`],
  [34, `Rod of the Pact Keeper`],
  [36, `Scimitar of Speed`],
  [38, `Shield (Plus Three)`],
  [40, `Staff of Fire`],
  [42, `Staff of Frost`],
  [44, `Staff of Power`],
  [46, `Staff of Striking`],
  [48, `Staff of Thunder and Lightning`],
  [50, `Sword of Sharpness`],
  [52, `Wand of Polymorph`],
  [54, `Wand of the War MAge (Plus One)`],
  [55, `Adamantine Armour (Half Plate)`],
  [56, `Adamantine Armour (Plate)`],
  [57, `Animated Shield`],
  [58, `Belt of Fire Giant Strength`],
  [59, `Belt of Frost (or Stone) Giant Strength`],
  [60, `Armour (Plus One, Breastplate)`],
  [61, `Armour of Resistance (Breastplate)`],
  [62, `Candle of Invocation`],
  [63, `Armour (Plus Two, Chain Mail)`],
  [64, `Armour (Plus Two, Chain Shirt)`],
  [65, `Cloak of Arachnida`],
  [66, `Dancing Sword`],
  [67, `Demon Armour`],
  [68, `Dragon Scale Mail`],
  [69, `Dwarven Plate`],
  [70, `Dwarven Thrower`],
  [71, `Efreeti Bottle`],
  [72, `Figurine of Wondrous Power (Obsidian Steed)`],
  [73, `Frost Band`],
  [74, `Helm of Brilliance`],
  [75, `Horn of Valhalla (Bronze)`],
  [76, `Instrument of the Bards (Anstruth Harp)`],
  [77, `Ioun Stone (Absorbtion)`],
  [78, `Ioun Stone (Agility)`],
  [79, `Ioun Stone (Fortitude)`],
  [80, `Ioun Stone (Insight)`],
  [81, `Ioun Stone (Intellect)`],
  [82, `Ioun Stone (Leadership)`],
  [83, `Ioun Stone (Strength)`],
  [84, `Armour (Plus Two, Leather)`],
  [85, `Manual of Bodily Health`],
  [86, `Manual of Gainful Exercise`],
  [87, `Manual of Golems`],
  [88, `Manual of Quickness of Action`],
  [89, `Mirror of Life Trapping`],
  [90, `Nine Lives Stealer`],
  [91, `Oathbow`],
  [92, `Armour (Plus Two, Scale Mail)`],
  [93, `Spellguard Shield`],
  [94, `Armour (Plus One, Splint)`],
  [95, `Armour of Resistance (Splint)`],
  [96, `Armour (Plus One, Studded Leather)`],
  [97, `Armour of Resistance (Studded Leather)`],
  [98, `Tome of Clear Thought`],
  [99, `Tome of Leadership and Influence`],
  [100, `Tome of Understanding`],
]);
const magicItemTableI = new Map([
  [5, `Defender`],
  [10, `Hammer of Thunderbolts`],
  [15, `Luck Blade`],
  [20, `Sword of Answering`],
  [23, `Holy Avenger`],
  [26, `Ring of Djinni Summoning`],
  [29, `Ring of Invisibility`],
  [32, `Ring of Spell Turning`],
  [35, `Rod of Lordly Might`],
  [38, `Staff of the Magi`],
  [41, `Vorpal Sword`],
  [43, `Belt of Cloud Giant Strength`],
  [45, `Armour (Plus Two, Breastplate)`],
  [47, `Armour (Plus Three, Chain Mail)`],
  [49, `Armour (Plus Three, Chain Shirt)`],
  [51, `Cloak of Invisibility`],
  [53, `Crystal Ball (Legendary Version)`],
  [55, `Armour (Plus One, Half Plate)`],
  [57, `Iron Flask`],
  [59, `Armour (Plus Three, Leather)`],
  [61, `Armour (Plus One, Plate)`],
  [63, `Robe of the Archmagi`],
  [65, `Rod of Resurrection`],
  [67, `Armour (Plus One, Scale Mail)`],
  [69, `Scarab of Protection`],
  [71, `Armour (Plus Two, Splint)`],
  [73, `Armour (Plus Two, Studded Leather)`],
  [75, `Well of Many Worlds`],
  [76, `Magic armour (Roll 1D12)`],
  [77, `Apparatus of Kwalish`],
  [78, `Armour of Invulnerability`],
  [79, `Belt of Storm Giant Strength`],
  [80, `Cubic Gate`],
  [81, `Deck of Many Things`],
  [82, `Efreeti Chain`],
  [83, `Armour of Resistance (Half Plate)`],
  [84, `Horn of Valhalla (Iron)`],
  [85, `Instrument of the Bards (Ollamh Harp)`],
  [86, `Ioun Stone (Greater Absorption)`],
  [87, `Ioun Stone (Mastery)`],
  [88, `Ioun Stone (Regeneration)`],
  [89, `Plate Armour of Etherealness`],
  [90, `Plate Armour of Resistance`],
  [91, `Ring of Air Elemental Command`],
  [92, `Ring of Earth Elemental Command`],
  [93, `Ring of Fire Elemental Command`],
  [94, `Ring of Three Wishes`],
  [95, `Ring of Water Elemental Command`],
  [96, `Sphere of Annihilation`],
  [97, `Talisman of Pure Good`],
  [98, `Talisman of the Sphere`],
  [99, `Talisman of Ultimate Evil`],
  [100, `Tome of the Stilled Tongue`],
]);
const treasureHoardCoins = new Map([
  [
    0,
    [
      [6, 6, 100, `cp`],
      [3, 6, 100, `sp`],
      [2, 6, 10, `gp`],
    ],
  ],
  [
    5,
    [
      [2, 6, 100, `cp`],
      [2, 6, 1000, `sp`],
      [6, 6, 100, `gp`],
      [3, 6, 100, `pp`],
    ],
  ],
  [
    11,
    [
      [4, 6, 1000, `gp`],
      [5, 6, 100, `pp`],
    ],
  ],
  [
    17,
    [
      [12, 6, 1000, `gp`],
      [8, 6, 1000, `pp`],
    ],
  ],
]);
// Treasure Hoard Tables
const treasureHoardTable0 = new Map([
  [6, [[], []]],
  [16, [[2, 6, 10, `gems`], []]],
  [26, [[2, 4, 25, `art`], []]],
  [36, [[1, 6, 50, `gems`], []]],
  [
    44,
    [
      [2, 6, 10, `gems`],
      [6, `A`],
    ],
  ],
  [
    52,
    [
      [2, 4, 25, `art`],
      [6, `A`],
    ],
  ],
  [
    60,
    [
      [2, 6, 50, `gems`],
      [6, `A`],
    ],
  ],
  [
    65,
    [
      [2, 6, 10, `gems`],
      [4, `B`],
    ],
  ],
  [
    70,
    [
      [2, 4, 25, `art`],
      [4, `B`],
    ],
  ],
  [
    75,
    [
      [2, 6, 50, `gems`],
      [4, `B`],
    ],
  ],
  [
    78,
    [
      [2, 6, 10, `gems`],
      [4, `C`],
    ],
  ],
  [
    80,
    [
      [2, 4, 25, `art`],
      [4, `C`],
    ],
  ],
  [
    85,
    [
      [2, 6, 50, `gems`],
      [4, `C`],
    ],
  ],
  [
    92,
    [
      [2, 4, 25, `art`],
      [4, `F`],
    ],
  ],
  [
    97,
    [
      [2, 6, 50, `gems`],
      [4, `F`],
    ],
  ],
  [
    99,
    [
      [2, 4, 25, `art`],
      [0, `G`],
    ],
  ],
  [
    100,
    [
      [2, 6, 50, `gems`],
      [0, `G`],
    ],
  ],
]);
const treasureHoardTable5 = new Map([
  [4, [[], []]],
  [10, [[2, 4, 25, `art`], []]],
  [16, [[3, 6, 50, `gems`], []]],
  [22, [[3, 6, 100, `gems`], []]],
  [28, [[2, 4, 250, `art`], []]],
  [
    32,
    [
      [2, 4, 25, `art`],
      [6, `A`],
    ],
  ],
  [
    36,
    [
      [3, 6, 50, `gems`],
      [6, `A`],
    ],
  ],
  [
    40,
    [
      [3, 6, 100, `gems`],
      [6, `A`],
    ],
  ],
  [
    44,
    [
      [2, 4, 350, `art`],
      [6, `A`],
    ],
  ],
  [
    49,
    [
      [2, 4, 25, `art`],
      [4, `B`],
    ],
  ],
  [
    54,
    [
      [3, 6, 50, `gems`],
      [4, `B`],
    ],
  ],
  [
    59,
    [
      [3, 6, 100, `gems`],
      [4, `B`],
    ],
  ],
  [
    63,
    [
      [2, 4, 250, `art`],
      [4, `B`],
    ],
  ],
  [
    66,
    [
      [2, 4, 25, `art`],
      [4, `C`],
    ],
  ],
  [
    69,
    [
      [3, 6, 25, `art`],
      [4, `C`],
    ],
  ],
  [
    72,
    [
      [3, 6, 100, `gems`],
      [4, `C`],
    ],
  ],
  [
    74,
    [
      [2, 4, 250, `art`],
      [4, `C`],
    ],
  ],
  [
    76,
    [
      [2, 4, 25, `art`],
      [0, `D`],
    ],
  ],
  [
    78,
    [
      [3, 6, 50, `gems`],
      [0, `D`],
    ],
  ],
  [
    79,
    [
      [3, 6, 100, `gems`],
      [0, `D`],
    ],
  ],
  [
    80,
    [
      [2, 4, 250, `art`],
      [0, `D`],
    ],
  ],
  [
    84,
    [
      [2, 4, 25, `art`],
      [4, `F`],
    ],
  ],
  [
    88,
    [
      [3, 6, 50, `gems`],
      [4, `F`],
    ],
  ],
  [
    91,
    [
      [3, 6, 100, `gems`],
      [4, `F`],
    ],
  ],
  [
    94,
    [
      [2, 4, 250, `art`],
      [4, `F`],
    ],
  ],
  [
    96,
    [
      [3, 6, 100, `gems`],
      [4, `G`],
    ],
  ],
  [
    98,
    [
      [2, 4, 250, `art`],
      [4, `G`],
    ],
  ],
  [
    99,
    [
      [3, 6, 100, `gems`],
      [0, `H`],
    ],
  ],
  [
    100,
    [
      [2, 4, 250, `art`],
      [0, `H`],
    ],
  ],
]);
const treasureHoardTable11 = new Map([
  [3, [[], []]],
  [6, [[2, 4, 250, `art`], []]],
  [9, [[2, 4, 750, `art`], []]],
  [12, [[3, 6, 500, `gems`], []]],
  [15, [[3, 6, 1000, `gems`], []]],
  [
    19,
    [
      [2, 4, 250, `art`],
      [4, `A`],
      [6, `B`],
    ],
  ],
  [
    23,
    [
      [2, 4, 750, `art`],
      [4, `A`],
      [6, `B`],
    ],
  ],
  [
    26,
    [
      [3, 6, 500, `gems`],
      [4, `A`],
      [6, `B`],
    ],
  ],
  [
    29,
    [
      [3, 6, 1000, `gems`],
      [4, `A`],
      [6, `B`],
    ],
  ],
  [
    35,
    [
      [2, 4, 250, `art`],
      [6, `C`],
    ],
  ],
  [
    40,
    [
      [2, 4, 750, `art`],
      [6, `C`],
    ],
  ],
  [
    45,
    [
      [3, 6, 500, `gems`],
      [6, `C`],
    ],
  ],
  [
    50,
    [
      [3, 6, 1000, `gems`],
      [6, `C`],
    ],
  ],
  [
    54,
    [
      [2, 4, 250, `art`],
      [4, `D`],
    ],
  ],
  [
    58,
    [
      [2, 4, 750, `art`],
      [4, `D`],
    ],
  ],
  [
    62,
    [
      [3, 6, 500, `gems`],
      [4, `D`],
    ],
  ],
  [
    66,
    [
      [3, 6, 1000, `gems`],
      [4, `D`],
    ],
  ],
  [
    68,
    [
      [2, 4, 250, `art`],
      [0, `E`],
    ],
  ],
  [
    70,
    [
      [2, 4, 750, `art`],
      [0, `E`],
    ],
  ],
  [
    72,
    [
      [3, 6, 500, `gems`],
      [0, `E`],
    ],
  ],
  [
    74,
    [
      [3, 6, 1000, `gems`],
      [0, `E`],
    ],
  ],
  [
    76,
    [
      [2, 4, 250, `art`],
      [0, `F`],
      [4, `G`],
    ],
  ],
  [
    78,
    [
      [2, 4, 750, `art`],
      [0, `F`],
      [4, `G`],
    ],
  ],
  [
    80,
    [
      [3, 6, 500, `gems`],
      [0, `F`],
      [4, `G`],
    ],
  ],
  [
    82,
    [
      [3, 6, 1000, `gems`],
      [0, `F`],
      [4, `G`],
    ],
  ],
  [
    85,
    [
      [2, 4, 250, `art`],
      [4, `H`],
    ],
  ],
  [
    88,
    [
      [2, 4, 750, `art`],
      [4, `H`],
    ],
  ],
  [
    90,
    [
      [3, 6, 500, `gems`],
      [4, `H`],
    ],
  ],
  [
    92,
    [
      [3, 6, 1000, `gems`],
      [4, `H`],
    ],
  ],

  [
    94,
    [
      [2, 4, 250, `art`],
      [0, `I`],
    ],
  ],
  [
    96,
    [
      [2, 4, 750, `art`],
      [0, `I`],
    ],
  ],
  [
    98,
    [
      [3, 6, 500, `gems`],
      [0, `I`],
    ],
  ],
  [
    100,
    [
      [3, 6, 1000, `gems`],
      [0, `I`],
    ],
  ],
]);
const treasureHoardTable17 = new Map([
  [2, [[], []]],
  [
    5,
    [
      [3, 6, 1000, `gems`],
      [8, `C`],
    ],
  ],
  [
    8,
    [
      [1, 10, 2500, `art`],
      [8, `C`],
    ],
  ],
  [
    11,
    [
      [4, 2, 7500, `art`],
      [8, `C`],
    ],
  ],
  [
    14,
    [
      [1, 8, 5000, `gems`],
      [8, `C`],
    ],
  ],
  [
    22,
    [
      [3, 6, 1000, `gems`],
      [6, `D`],
    ],
  ],
  [
    30,
    [
      [1, 10, 2500, `art`],
      [6, `D`],
    ],
  ],
  [
    38,
    [
      [4, 2, 7500, `art`],
      [6, `D`],
    ],
  ],
  [
    46,
    [
      [1, 8, 5000, `gems`],
      [6, `D`],
    ],
  ],
  [
    52,
    [
      [3, 6, 1000, `gems`],
      [6, `E`],
    ],
  ],
  [
    58,
    [
      [1, 10, 2500, `art`],
      [6, `E`],
    ],
  ],
  [
    63,
    [
      [4, 2, 7500, `art`],
      [6, `E`],
    ],
  ],
  [
    68,
    [
      [1, 8, 5000, `gems`],
      [6, `E`],
    ],
  ],
  [
    69,
    [
      [3, 6, 1000, `gems`],
      [4, `G`],
    ],
  ],
  [
    70,
    [
      [1, 10, 2500, `art`],
      [4, `G`],
    ],
  ],
  [
    71,
    [
      [4, 2, 7500, `art`],
      [4, `G`],
    ],
  ],
  [
    72,
    [
      [1, 8, 5000, `gems`],
      [4, `G`],
    ],
  ],
  [
    74,
    [
      [3, 6, 1000, `gems`],
      [4, `H`],
    ],
  ],
  [
    76,
    [
      [1, 10, 2500, `art`],
      [4, `H`],
    ],
  ],
  [
    78,
    [
      [4, 2, 7500, `art`],
      [4, `H`],
    ],
  ],
  [
    80,
    [
      [1, 8, 5000, `gems`],
      [4, `H`],
    ],
  ],

  [
    85,
    [
      [3, 6, 1000, `gems`],
      [4, `I`],
    ],
  ],
  [
    90,
    [
      [1, 10, 2500, `art`],
      [4, `I`],
    ],
  ],
  [
    95,
    [
      [4, 2, 7500, `art`],
      [4, `I`],
    ],
  ],
  [
    100,
    [
      [1, 8, 5000, `gems`],
      [4, `I`],
    ],
  ],
]);
// Other Item Tables
const trinkets = [
  `A mummified goblin hand`,
  `A piece of crystal that faintly glows in the moonlight`,
  `A gold coin minted in an unknown land`,
  `A diary written in a language you don’t know`,
  `A brass ring that never tarnishes`,
  `An old chess piece made from glass`,
  `A pair of knucklebone dice, each with a skull symbol on the side that would normally show six pips`,
  `A small idol depicting a nightmarish creature that gives you unsettling dreams when you sleep near it`,
  `A rope necklace from which dangles four mummified elf fingers`,
  `The deed for a parcel of land in a realm unknown to you`,
  `A 1-ounce block made from an unknown material`,
  `A small cloth doll skewered with needles`,
  `A tooth from an unknown beast`,
  `An enormous scale, perhaps from a dragon`,
  `A bright green feather`,
  `An old divination card bearing your likeness`,
  `A glass orb filled with moving smoke`,
  `A 1-pound egg with a bright red shell`,
  `A pipe that blows bubbles`,
  `A glass jar containing a weird bit of flesh floating in pickling fluid`,
  `A tiny gnome-crafted music box that plays a song you dimly remember from your childhood`,
  `A small wooden statuette of a smug halfling`,
  `A brass orb etched with strange runes`,
  `A multicolored stone disk`,
  `A tiny silver icon of a raven`,
  `A bag containing forty-seven humanoid teeth, one of which is rotten`,
  `A shard of obsidian that always feels warm to the touch`,
  `A dragon's bony talon hanging from a plain leather necklace`,
  `A pair of old socks`,
  `A blank book whose pages refuse to hold ink, chalk, graphite, or any other substance or marking`,
  `A silver badge in the shape of a five-pointed star`,
  `A knife that belonged to a relative`,
  `A glass vial filled with nail clippings`,
  `A rectangular metal device with two tiny metal cups on one end that throws sparks when wet`,
  `A white, sequined glove sized for a human`,
  `A vest with one hundred tiny pockets`,
  `A small, weightless stone block`,
  `A tiny sketch portrait of a goblin`,
  `An empty glass vial that smells of perfume when opened`,
  `A gemstone that looks like a lump of coal when examined by anyone but you`,
  `A scrap of cloth from an old banner`,
  `A rank insignia from a lost legionnaire`,
  `A tiny silver bell without a clapper`,
  `A mechanical canary inside a gnome-crafted lamp`,
  `A tiny chest carved to look like it has numerous feet on the bottom`,
  `A dead sprite inside a clear glass bottle`,
  `A metal can that has no opening but sounds as if it is filled with liquid, sand, spiders, or broken glass (your choice`,
  `A glass orb filled with water, in which swims a clockwork goldfish`,
  `A silver spoon with an M engraved on the handle`,
  `A whistle made from gold-colored wood`,
  `A dead scarab beetle the size of your hand`,
  `Two toy soldiers, one with a missing head`,
  `A small box filled with different-sized buttons`,
  `A candle that can’t be lit`,
  `A tiny cage with no door`,
  `An old key`,
  `An indecipherable treasure map`,
  `A hilt from a broken sword`,
  `A rabbit’s foot`,
  `A glass eye`,
  `A cameo carved in the likeness of a hideous person`,
  `A silver skull the size of a coin`,
  `An alabaster mask`,
  `A pyramid of sticky black incense that smells very bad`,
  `A nightcap that, when worn, gives you pleasant dreams`,
  `A single caltrop made from bone`,
  `A gold monocle frame without the lens`,
  `A 1-inch cube, each side painted a different color`,
  `A crystal knob from a door`,
  `A small packet filled with pink dust`,
  `A fragment of a beautiful song, written as musical notes on two pieces of parchment`,
  `A silver teardrop earring made from a real teardrop`,
  `The shell of an egg painted with scenes of human misery in disturbing detail`,
  `A fan that, when unfolded, shows a sleeping cat`,
  `A set of bone pipes`,
  `A four-leaf clover pressed inside a book discussing manners and etiquette`,
  `A sheet of parchment upon which is drawn a complex mechanical contraption`,
  `An ornate scabbard that fits no blade you have found so far`,
  `An invitation to a party where a murder happened`,
  `A bronze pentacle with an etching of a rat's head in its center`,
  `A purple handkerchief embroidered with the name of a powerful archmage`,
  `Half of a floorplan for a temple, castle, or some other structure`,
  `A bit of folded cloth that, when unfolded, turns into a stylish cap`,
  `A receipt of deposit at a bank in a far-flung city`,
  `A diary with seven missing pages`,
  `An empty silver snuffbox bearing an inscription on the surface that says "dreams"`,
  `An iron holy symbol devoted to an unknown god`,
  `A book that tells the story of a legendary hero's rise and fall, with the last chapter missing`,
  `A vial of dragon blood`,
  `An ancient arrow of elven design`,
  `A needle that never bends`,
  `An ornate brooch of dwarven design`,
  `An empty wine bottle bearing a pretty label that says, "The Wizard of Wines Winery, Red Dragon Crush, 331422-W"`,
  `A mosaic tile with a multicolored, glazed surface`,
  `A petrified mouse`,
  `A black pirate flag adorned with a dragon's skull and crossbones`,
  `A tiny mechanical crab or spider that moves about when it’s not being observed`,
  `A glass jar containing lard with a label that reads, "Griffon Grease"`,
  `A wooden box with a ceramic bottom that holds a living worm with a head on each end of its body`,
  `A metal urn containing the ashes of a hero`,
];
const commonMagicalItems = [
  `Armour of Gleaming`,
  `Bead of Nourishment`,
  `Bead of Refreshment`,
  `Boots of False Tracks`,
  `Candle of the Deep`,
  `Cast-Off Armour`,
  `Charlatan's Die`,
  `Cloak of Billowing`,
  `Claok of Many Fashions`,
  `Clockwork Amulet`,
  `Clothes of Mending`,
  `Dark Shard Amulet`,
  `Dread Helm`,
  `Ear Horn of Hearing`,
  `Enduring Spellbook`,
  `Ersatz Eye`,
  `Hat of Vermin`,
  `Hat of Wizardry`,
  `Heward's Handy Spice Pouch`,
  `Horn of Silent Alarm`,
  `Instrument of Illusion`,
  `Instrument of Scribing`,
  `Lock of Trickery`,
  `Moon-Touched Sword`,
  `Mystery Key`,
  `Orb of Direction`,
  `Orb of Time`,
  `Perfume of Bewitching`,
  `Pipe of Smoke Monsters`,
  `Pole of Angling`,
  `Pole of Collapsing`,
  `Potion of Climbing`,
  `Potion of Healing`,
  `Rope of Mending`,
  `Ruby of the War Mage`,
  `Shield of Expression`,
  `Smoldering Armour`,
  `Spell Scroll (Cantrip)`,
  `Spell Scroll (First level)`,
  `Staff of Adornment`,
  `Staff of Birdcalls`,
  `Staff of Flowers`,
  `Talking Doll`,
  `Tankard of Sobriety`,
  `Unbreakable Arrow`,
  `Veteran's Cane`,
  `Walloping Ammunition`,
  `Wand of Conducting`,
  `Wand of Pyrotechnics`,
  `Wand of Scowls`,
  `Wand of Smiles`,
];
// Quest Hook Tables
const dungeonGoals = [
  `Stop the dungeon's monstrous inhabitants from raiding the surface world. `,
  `Foil a villain's evil scheme. `,
  `Destroy a magical threat inside the dungeon.`,
  `Acquire treasure . `,
  `Find a particular item for a specific purpose.`,
  `Retrieve a stolen item hidden in the dungeon. `,
  `Find information needed for a special purpose.`,
  `Rescue a captive.`,
  `Discover the fate of a previous adventuring party.`,
  `Find an NPC who disappeared in the area.`,
  `Slay a dragon or some other challenging monster`,
  `Discover the nature and origin of a strange location or phenomenon.`,
  `Pursue fleeing foes taking refuge in the dungeon. `,
  `Escape from captivity in the dungeon. `,
  `Clear a ruin so it can be rebuilt and reoccupied. `,
  `Discover why a villain is interested in the dungeon. `,
  `Win a bet or complete a rite of passage by surviving in the dungeon for a certain amount of time.`,
  `Parley with a villain in the dungeon. `,
  `Hide from a threat outside the dungeon. `,
  `Roll twice, ignoring resu lts of 20. `,
];
const wildernessGoals = [
  `Locate a dungeon or other site of interest (roll on the Dungeon Goals table to find out why).`,
  `Assess the scope of a natural or unnatural disaster.`,
  `Escort an NPC to a destination.`,
  `Arrive at a destination without being seen by the villain's forces.`,
  `Stop monsters from raiding caravans and farms.`,
  `Establish trade with a distant town.`,
  `Protect a caravan traveling to a distant town .`,
  `Map a new land.`,
  `Find a place to establish a colony.`,
  `Find a natural resource.`,
  `Hunt a specific monster.`,
  `Return home from a distant place.`,
  `Obtain information from a reclusive hermit.`,
  `Find an object that was lost in the wilds.`,
  `Discover the fate of a missing group of explorers.`,
  `Pursue fleeing foes.`,
  `Assess the size of an approaching army.`,
  `Escape the reign of a tyrant.`,
  `Protect a wilderness site from attackers.`,
  `Roll twice, ignoring results of 20.`,
];
const otherGoals = [
  `Seize control of a fortified location such as a fortress, town, or ship.`,
  `Defend a location from attackers.`,
  `Retrieve an object from inside a secure location in a settlement.`,
  `Retrieve an object from a caravan.`,
  `Salvage an object or goods from a lost vessel or caravan.`,
  `Break a prisoner out of a jail or prison camp.`,
  `Escape from a jail or prison camp. `,
  `Successfully travel through an obstacle course to gain recognition or reward.`,
  `Infiltrate a fortified location.`,
  `Find the source of strange occurrences in a haunted house or other location.`,
  `Interfere with the operation of a business.`,
  `Rescue a character, monster, or object from a natural or unnatural disaster.`,
];
// Tavern Name Tables
const tavernFirst = [
  `The Silver`,
  `The Golden`,
  `The Staggering`,
  `The Laughing`,
  `The Prancing`,
  `The Gilded`,
  `The Running`,
  `The Howling`,
  `The Slaughtered`,
  `The Leering`,
  `The Drunken`,
  `The Leaping`,
  `The Roaring`,
  `The Frowning`,
  `The Lonely`,
  `The Wandering`,
  `The Mysterious`,
  `The Barking`,
  `The Black`,
  `The Gleaming`,
];

const tavernSecond = [
  `Eel`,
  `Dolphin`,
  `Dwarf`,
  `Pegasus`,
  `Pony`,
  `Rose`,
  `Stag`,
  `Wolf`,
  `Lamb`,
  `Demon`,
  `Goat`,
  `Spirit`,
  `Horde`,
  `Jester`,
  `Mountain`,
  `Eagle`,
  `Satyr`,
  `Dog`,
  `Spider`,
  `Star`,
];
// HTML Elements
const resultsDiv = document.querySelector(`.results`);
const btnGenerateIndividualLoot = document.querySelector(
  `.btnGenerateIndividualLoot`
);
const btnGenerateHoardLoot = document.querySelector(
  `.btnGenerateTreasureHoardLoot`
);
const btnGenerateRandomItem = document.querySelector(`.btnGenerateRandomItem`);
const btnGenerateQuestHook = document.querySelector(`.btnGenerateQuestHook`);
const btnGenerateTavernName = document.querySelector(`.btnGenerateTavernName`);

const generateIndividualLoot = function () {
  const numMonsters = Number(
    document.querySelector(`.individualLootGenerator .monsterCount`).value
  );
  const monsterCR = Number(
    document.querySelector(`.individualLootGenerator .monsterCR`).value
  );

  let result = ``;
  const roll = Math.trunc(Math.random() * 100) + 1; // Your loot roll on a D100.
  // Check CR and select the right coinage
  if (monsterCR >= 0 && monsterCR <= 4) {
    for (const [k, v] of individualLootTableCR0) {
      if (roll <= k) {
        // Select the correct row of the loot table
        for (let j = 0; j < v.length; j++) {
          result += getCoins(...v[j]); // Roll an amount for each currency in that row.
          result += getTrinket(); // Add a trinket for flavour.
        }
        break; // Only use the first row which is lower than your roll.
      }
    }
  } else if (monsterCR >= 5 && monsterCR <= 10) {
    for (const [k, v] of individualLootTableCR5) {
      if (roll <= k) {
        for (let j = 0; j < v.length; j++) {
          result += getCoins(...v[j]);
          result += getTrinket();
        }
        break;
      }
    }
  } else if (monsterCR >= 11 && monsterCR <= 16) {
    for (const [k, v] of individualLootTableCR11) {
      if (roll <= k) {
        for (let j = 0; j < v.length; j++) {
          result += getCoins(...v[j]);
          result += getTrinket();
        }
        break;
      }
    }
  } else if (monsterCR >= 17) {
    for (const [k, v] of individualLootTableCR17) {
      if (roll <= k) {
        for (let j = 0; j < v.length; j++) {
          result += getCoins(...v[j]);
          result += getTrinket();
        }
        break;
      }
    }
  }
  // Display the results
  resultsDiv.innerHTML = `
  <h3>Coins</h3>
  <ul>
  ${result}
  </ul>`;
};

const generateTreasureHoard = function () {
  const hoardCR = Number(
    document.querySelector(`.treasureHoardGenerator .treasureHoardCR`).value
  );
  let treasureHoardRow;
  let coinResult = ``;
  let gemResult = ``;
  let artResult = ``;
  let magicItemResult = ``;

  const roll = Math.trunc(Math.random() * 100) + 1; // Your loot roll on a D100.

  if (hoardCR >= 0 && hoardCR <= 4) {
    for (const row of treasureHoardCoins.get(0)) {
      coinResult += getCoins(...row);
    }

    for (const [k, v] of treasureHoardTable0) {
      if (roll <= k) {
        treasureHoardRow = treasureHoardTable0.get(k);
        break;
      }
    }

    if (treasureHoardRow[0][3] === `gems`) {
      gemResult += getGems(
        treasureHoardRow[0][0],
        treasureHoardRow[0][1],
        treasureHoardRow[0][2]
      );
    } else if (treasureHoardRow[0][3] === `art`) {
      artResult += getArt(
        treasureHoardRow[0][0],
        treasureHoardRow[0][1],
        treasureHoardRow[0][2]
      );
    } else {
      gemResult += `No Gems.`;
      artResult += `No art.`;
    }

    if (
      typeof treasureHoardRow[1][0] === `number` &&
      typeof treasureHoardRow[1][1] === `string`
    ) {
      magicItemResult += getMagicItems(
        treasureHoardRow[1][0],
        treasureHoardRow[1][1]
      );
    }
  } else if (hoardCR >= 5 && hoardCR <= 10) {
    for (const row of treasureHoardCoins.get(5)) {
      coinResult += getCoins(...row);
    }

    for (const [k, v] of treasureHoardTable5) {
      if (roll <= k) {
        treasureHoardRow = treasureHoardTable5.get(k);
        break;
      }
    }

    if (treasureHoardRow[0][3] === `gems`) {
      gemResult += getGems(
        treasureHoardRow[0][0],
        treasureHoardRow[0][1],
        treasureHoardRow[0][2]
      );
    } else if (treasureHoardRow[0][3] === `art`) {
      artResult += getArt(
        treasureHoardRow[0][0],
        treasureHoardRow[0][1],
        treasureHoardRow[0][2]
      );
    } else {
      gemResult += `No Gems.`;
      artResult += `No art.`;
    }

    if (
      typeof treasureHoardRow[1][0] === `number` &&
      typeof treasureHoardRow[1][1] === `string`
    ) {
      magicItemResult += getMagicItems(
        treasureHoardRow[1][0],
        treasureHoardRow[1][1]
      );
    }
  } else if (hoardCR >= 11 && hoardCR <= 16) {
    for (const row of treasureHoardCoins.get(11)) {
      coinResult += getCoins(...row);
    }

    for (const [k, v] of treasureHoardTable11) {
      if (roll <= k) {
        treasureHoardRow = treasureHoardTable11.get(k);
        break;
      }
    }

    if (treasureHoardRow[0][3] === `gems`) {
      gemResult += getGems(
        treasureHoardRow[0][0],
        treasureHoardRow[0][1],
        treasureHoardRow[0][2]
      );
    } else if (treasureHoardRow[0][3] === `art`) {
      artResult += getArt(
        treasureHoardRow[0][0],
        treasureHoardRow[0][1],
        treasureHoardRow[0][2]
      );
    } else {
      gemResult += `No Gems.`;
      artResult += `No art.`;
    }

    if (
      typeof treasureHoardRow[1][0] === `number` &&
      typeof treasureHoardRow[1][1] === `string`
    ) {
      magicItemResult += getMagicItems(
        treasureHoardRow[1][0],
        treasureHoardRow[1][1]
      );
    }

    if (treasureHoardRow.length === 3) {
      if (
        typeof treasureHoardRow[2][0] === `number` &&
        typeof treasureHoardRow[2][1] === `string`
      ) {
        magicItemResult += getMagicItems(
          treasureHoardRow[2][0],
          treasureHoardRow[2][1]
        );
      }
    }
  } else if (hoardCR >= 17) {
    for (const row of treasureHoardCoins.get(17)) {
      coinResult += getCoins(...row);
    }

    for (const [k, v] of treasureHoardTable17) {
      if (roll <= k) {
        treasureHoardRow = treasureHoardTable17.get(k);
        break;
      }
    }

    if (treasureHoardRow[0][3] === `gems`) {
      gemResult += getGems(
        treasureHoardRow[0][0],
        treasureHoardRow[0][1],
        treasureHoardRow[0][2]
      );
    } else if (treasureHoardRow[0][3] === `art`) {
      artResult += getArt(
        treasureHoardRow[0][0],
        treasureHoardRow[0][1],
        treasureHoardRow[0][2]
      );
    } else {
      gemResult += `No gems.`;
      artResult += `No art.`;
    }

    if (
      typeof treasureHoardRow[1][0] === `number` &&
      typeof treasureHoardRow[1][1] === `string`
    ) {
      magicItemResult += getMagicItems(
        treasureHoardRow[1][0],
        treasureHoardRow[1][1]
      );
    }
  }

  resultsDiv.innerHTML = `
  <h3>Coins</h3>
  <ul>
  ${coinResult}
  </ul>
  <h3>Art and Gemstones</h3>
  <ul>
  ${artResult} ${gemResult}
  </ul>
  <h3>Magic Items</h3>
  <ul>
  ${magicItemResult || `<li>No Magic Items</li>`}
  </ul>
  `;
};

const generateRandomItem = function () {
  const itemType = document.querySelector(
    `.randomItemGenerator .randomItemType`
  ).value;

  let itemChoice = ``;

  switch (itemType) {
    case `Trinket`:
      itemChoice += getTrinket();
      break;
    case `Common Magical Item`:
      itemChoice += getCommonMagicalItem();
      break;
    default:
      break;
  }

  resultsDiv.innerHTML = `
    <h3>${itemType}</h3> 
    <ul>
    ${itemChoice}
    </ul>
  `;
};

const generateQuestHook = function () {
  const hookType = document.querySelector(
    `.questHookGenerator .questHookType`
  ).value;

  let questTable = [];
  let dWhat = 0;

  if (hookType === `Wilderness`) {
    questTable = wildernessGoals;
  } else if (hookType === `Dungeon`) {
    questTable = dungeonGoals;
  } else if (hookType === `Other`) {
    questTable = otherGoals;
  }

  dWhat = questTable.length;
  const roll = Math.trunc(Math.random() * dWhat);

  if (hookType != `Other` && roll === 10) {
    const firstRoll = Math.trunc(Math.random() * dWhat);
    const secondRoll = Math.trunc(Math.random() * dWhat);
    return `<li>${questTable[firstRoll]}, ${questTable[secondRoll]}</li>`;
  }

  resultsDiv.innerHTML = `
    <h3>Quest Hook</h3> <ul><li>${questTable[roll]}</li></ul>
  `;
};

const generateTavernName = function () {
  const firstRoll = Math.trunc(Math.random() * tavernFirst.length);
  const secondRoll = Math.trunc(Math.random() * tavernSecond.length);

  resultsDiv.innerHTML = `
    <h3>Tavern Name</h3> <ul><li>${
      tavernFirst[firstRoll] + ` ` + tavernSecond[secondRoll]
    }</li></ul>
  `;
};

const getCoins = function (numRolls, dWhat, multiplier, currency) {
  let total = 0;
  let resultString = ``;
  for (let i = 0; i < numRolls; i++) {
    const roll = Math.trunc(Math.random() * dWhat) + 1;
    total += roll;
  }
  total *= multiplier;
  resultString = `<li>${total} ${currency}</li>`;
  return resultString;
};

const getGems = function (numRolls, dWhat, value) {
  let result = ``;
  let totalRolls = 0;
  for (let i = 0; i < numRolls; i++) {
    totalRolls += Math.trunc(Math.random() * dWhat) + 1;
  }

  for (let j = 0; j < totalRolls; j++) {
    const roll = Math.trunc(Math.random() * gemstones.get(value).length);
    result += `<li>${gemstones.get(value)[roll]} - ${value} gp</li>`;
  }

  return result;
};

const getArt = function (numRolls, dWhat, value) {
  let result = ``;
  let totalRolls = 0;
  for (let i = 0; i < numRolls; i++) {
    totalRolls += Math.trunc(Math.random() * dWhat) + 1;
  }

  for (let j = 0; j < totalRolls; j++) {
    const roll = Math.trunc(Math.random() * artworks.get(value).length);
    result += `<li>${artworks.get(value)[roll]} - ${value} gp</li>`;
  }

  return result;
};

const getMagicItems = function (dWhat, table) {
  let result = ``;
  const totalRolls = Math.trunc(Math.random() * dWhat) + 1;

  for (let i = 0; i < totalRolls; i++) {
    const roll = Math.trunc(Math.random() * 100) + 1;
    if (table === `A`) {
      for (const [k, v] of magicItemTableA) {
        if (roll <= k) {
          result += `<li>${v} (Table ${table} - ${roll})</li>`;
          break;
        }
      }
    } else if (table === `B`) {
      for (const [k, v] of magicItemTableB) {
        if (roll <= k) {
          result += `<li>${v} (Table ${table} - ${roll})</li>`;
          break;
        }
      }
    } else if (table === `C`) {
      for (const [k, v] of magicItemTableC) {
        if (roll <= k) {
          result += `<li>${v} (Table ${table} - ${roll})</li>`;
          break;
        }
      }
    } else if (table === `D`) {
      for (const [k, v] of magicItemTableD) {
        if (roll <= k) {
          result += `<li>${v} (Table ${table} - ${roll})</li>`;
          break;
        }
      }
    } else if (table === `E`) {
      for (const [k, v] of magicItemTableE) {
        if (roll <= k) {
          result += `<li>${v} (Table ${table} - ${roll})</li>`;
          break;
        }
      }
    } else if (table === `F`) {
      for (const [k, v] of magicItemTableF) {
        if (roll <= k) {
          result += `<li>${v} (Table ${table} - ${roll})</li>`;
          break;
        }
      }
    } else if (table === `G`) {
      for (const [k, v] of magicItemTableG) {
        if (roll <= k) {
          result += `<li>${v} (Table ${table} - ${roll})</li>`;
          break;
        }
      }
    } else if (table === `H`) {
      for (const [k, v] of magicItemTableH) {
        if (roll <= k) {
          result += `<li>${v} (Table ${table} - ${roll})</li>`;
          break;
        }
      }
    } else if (table === `I`) {
      for (const [k, v] of magicItemTableI) {
        if (roll <= k) {
          result += `<li>${v} (Table ${table} - ${roll})</li>`;
          break;
        }
      }
    }
  }
  return result;
};

const getTrinket = function () {
  let result = ``;
  const roll = Math.trunc(Math.random() * trinkets.length);
  result = `<li>${trinkets[roll]}</li>`;
  return result;
};

const getCommonMagicalItem = function () {
  let result = ``;
  const roll = Math.trunc(Math.random() * commonMagicalItems.length);
  result = `<li>${commonMagicalItems[roll]}</li>`;
  return result;
};

btnGenerateIndividualLoot.addEventListener(`click`, generateIndividualLoot);
btnGenerateHoardLoot.addEventListener(`click`, generateTreasureHoard);
btnGenerateRandomItem.addEventListener(`click`, generateRandomItem);
btnGenerateQuestHook.addEventListener(`click`, generateQuestHook);
btnGenerateTavernName.addEventListener(`click`, generateTavernName);
