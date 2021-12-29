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
  ], // Roll below 30 and recieve 4D6 * 10 Copper, and 1D6 * 10 Electrum Pieces.
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
//Gemstones
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
// Art Objects
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
// Magic Item Tables
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
  [87, `Instrument of tthe Bards (Mac-Fuimidh Cittern)`],
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
// Treasure Hoard Coins
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
      [86, `E`],
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
// HTML Elements
const resultsDiv = document.querySelector(`.results`);
const btnGenerateIndividualLoot = document.querySelector(
  `.btnGenerateIndividualLoot`
);
const btnGenerateHoardLoot = document.querySelector(
  `.btnGenerateTreasureHoardLoot`
);

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
        }
        break; // Only use the first row which is lower than your roll.
      }
    }
  } else if (monsterCR >= 5 && monsterCR <= 10) {
    for (const [k, v] of individualLootTableCR5) {
      if (roll <= k) {
        for (let j = 0; j < v.length; j++) {
          result += getCoins(...v[j]);
        }
        break;
      }
    }
  } else if (monsterCR >= 11 && monsterCR <= 16) {
    for (const [k, v] of individualLootTableCR11) {
      if (roll <= k) {
        for (let j = 0; j < v.length; j++) {
          result += getCoins(...v[j]);
        }
        break;
      }
    }
  } else if (monsterCR >= 17) {
    for (const [k, v] of individualLootTableCR17) {
      if (roll <= k) {
        for (let j = 0; j < v.length; j++) {
          result += getCoins(...v[j]);
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
    if (
      typeof treasureHoardRow[2][0] === `number` &&
      typeof treasureHoardRow[2][1] === `string`
    ) {
      magicItemResult += getMagicItems(
        treasureHoardRow[2][0],
        treasureHoardRow[2][1]
      );
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
  }

  resultsDiv.innerHTML = `
  <h3>coins</h3>
  <ul>
  ${coinResult}
  </ul>
  <h3>Art and Gemstones</h3>
  <ul>
  ${artResult} ${gemResult}
  </ul>
  <h3>Magic Items</h3>
  <ul>
  ${magicItemResult || `<li></li>No Magic Items</li>`}
  </ul>
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
    result += `<li>${gemstones.get(value)[roll]}</li>`;
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
    result += `<li>${artworks.get(value)[roll]}</li>`;
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
          result += `<li>${v}</li>`;
          break;
        }
      }
    } else if (table === `B`) {
      for (const [k, v] of magicItemTableB) {
        if (roll <= k) {
          result += `<li>${v}</li>`;
          break;
        }
      }
    } else if (table === `C`) {
      for (const [k, v] of magicItemTableC) {
        if (roll <= k) {
          result += `<li>${v}</li>`;
          break;
        }
      }
    } else if (table === `D`) {
      for (const [k, v] of magicItemTableD) {
        if (roll <= k) {
          result += `<li>${v}</li>`;
          break;
        }
      }
    } else if (table === `E`) {
      for (const [k, v] of magicItemTableE) {
        if (roll <= k) {
          result += `<li>${v}</li>`;
          break;
        }
      }
    } else if (table === `F`) {
      for (const [k, v] of magicItemTableF) {
        if (roll <= k) {
          result += `<li>${v}</li>`;
          break;
        }
      }
    } else if (table === `G`) {
      for (const [k, v] of magicItemTableG) {
        if (roll <= k) {
          result += `<li>${v}</li>`;
          break;
        }
      }
    } else if (table === `H`) {
      for (const [k, v] of magicItemTableH) {
        if (roll <= k) {
          result += `<li>${v}</li>`;
          break;
        }
      }
    } else if (table === `I`) {
      for (const [k, v] of magicItemTableI) {
        if (roll <= k) {
          result += `<li>${v}</li>`;
          break;
        }
      }
    }
  }
  return result;
};

btnGenerateIndividualLoot.addEventListener(`click`, generateIndividualLoot);
btnGenerateHoardLoot.addEventListener(`click`, generateTreasureHoard);
