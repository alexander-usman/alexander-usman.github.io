// Stats
const modifiers = [
    [0, -3], [1, -2], [2, -2], [3, -1], [4, -1], [5, -1], [6, 0], [7, 0], [8, 0], [9, 1], [10, 1], [11, 1], [12, 2], [13, 2], [14, 2], [15, 3]
]

// Skills
const allSkills = new Map([
    [`Admin`, []],
    [`Advocate`, []],
    [`Animals`, [`Handling`, `Veterinary`, `Training`]],
    [`Art`, [`Performer`, `Holography`, `Instrument`, `Visual Media`, `Write`]],
    [`Astrogation`, []],
    [`Athletics`, [`Dexterity`, `Endurance`, `Strength`]],
    [`Broker`, []],
    [`Carouse`, []],
    [`Deception`, []],
    [`Diplomat`, []],
    [`Drive`, [`Hovercraft`, `Mole`, `Track`, `Walker`, `Wheel`]],
    [`Electronics`, [`Comms`, `Computers`, `Remote Ops`, `Sensors`]],
    [`Engineer`, [`M-Drive`, `J-Drive`, `Life Support`, `Power`]],
    [`Explosives`, []],
    [`Flyer`, [`Airship`, `Grav`, `Ornithopter`, `Rotor`, `Wings`]],
    [`gambler`, []],
    [`Gunner`, [`Turret`, `Ortillery`, `Screen`, `Capital`]],
    [`Gun Combat`, [`Archaic`, `Energy`, `Slug`]],
    [`Heavy Weapons`, [`Artillery`, `Portable`, `Vehicle`]],
    [`Investigate`, []],
    [`Jack of All Trades`, []],
    [`Language`, [`Ganlanglic`, `Vilani`, `Zdetl`, `Oynprith`, `Trokh`, `Gvegh`]],
    [`Leadership`, []],
    [`Mechanic`, []],
    [`Medic`, []],
    [`Melee`, [`Unarmed`, `Blade`, `Bludgeon`, `Natural`]],
    [`Navigation`, []],
    [`Persuade`, []],
    [`Pilot`, [`Small Craft`, `Spacecraft`, `Capital Ships`]],
    [`Profession`, [`Belter`, `Biologicals`, `Civil Engineering`, `Construction`, `Hydroponics`, `Polymers`]],
    [`Recon`, []],
    [`Science`, [`Archaeology`, `Astronomy`, `Biology`, `Chemistry`, `Cosmology`, `Cybernetics`, `Economics`, `Genetics`, `History`, `Linguistics`, `Philosophy`, `Physics`, `Planetology`, `Psionicology`, `Psychology`, `Robotics`, `Sophontology`, `Xenology`]],
    [`Seafarer`, [`Ocean Ships`, `Personal`, `Sail`, `Submarine`]],
    [`Stealth`, []],
    [`Steward`, []],
    [`Streetwise`, []],
    [`Survival`, []],
    [`Tactics`, [`Military`, `Naval`]],
    [`Vacc Suit`, []],
]);
const backgroundSkills = [`Admin`, `Animals`, `Art`, `Athletics`, `Carouse`, `Drive`, `Electronics`, `Flyer`, `Language`, `Mechanic`, `Medic`, `Profession`, `Science`, `Seafarer`, `Streetwise`, `Survival`, `Vacc Suit`,]
