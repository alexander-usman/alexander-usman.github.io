// Stats
const modifiers = [
  [0, -3],
  [1, -2],
  [2, -2],
  [3, -1],
  [4, -1],
  [5, -1],
  [6, 0],
  [7, 0],
  [8, 0],
  [9, 1],
  [10, 1],
  [11, 1],
  [12, 2],
  [13, 2],
  [14, 2],
  [15, 3],
];

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
  [`Gambler`, []],
  [`Gunner`, [`Turret`, `Ortillery`, `Screen`, `Capital`]],
  [`Gun Combat`, [`Archaic`, `Energy`, `Slug`]],
  [`Heavy Weapons`, [`Artillery`, `Portable`, `Vehicle`]],
  [`Investigate`, []],
  [`Jack of All Trades`, []],
  [`Language`, [`Galanglic`, `Vilani`, `Zdetl`, `Oynprith`, `Trokh`, `Gvegh`]],
  [`Leadership`, []],
  [`Mechanic`, []],
  [`Medic`, []],
  [`Melee`, [`Unarmed`, `Blade`, `Bludgeon`, `Natural`]],
  [`Navigation`, []],
  [`Persuade`, []],
  [`Pilot`, [`Small Craft`, `Spacecraft`, `Capital Ships`]],
  [
    `Profession`,
    [
      `Belter`,
      `Biologicals`,
      `Civil Engineering`,
      `Construction`,
      `Hydroponics`,
      `Polymers`,
    ],
  ],
  [`Recon`, []],
  [
    `Science`,
    [
      `Archaeology`,
      `Astronomy`,
      `Biology`,
      `Chemistry`,
      `Cosmology`,
      `Cybernetics`,
      `Economics`,
      `Genetics`,
      `History`,
      `Linguistics`,
      `Philosophy`,
      `Physics`,
      `Planetology`,
      `Psionicology`,
      `Psychology`,
      `Robotics`,
      `Sophontology`,
      `Xenology`,
    ],
  ],
  [`Seafarer`, [`Ocean Ships`, `Personal`, `Sail`, `Submarine`]],
  [`Stealth`, []],
  [`Steward`, []],
  [`Streetwise`, []],
  [`Survival`, []],
  [`Tactics`, [`Military`, `Naval`]],
  [`Vacc Suit`, []],
]);
const backgroundSkills = [
  `Admin`,
  `Animals`,
  `Art`,
  `Athletics`,
  `Carouse`,
  `Drive`,
  `Electronics`,
  `Flyer`,
  `Language`,
  `Mechanic`,
  `Medic`,
  `Profession`,
  `Science`,
  `Seafarer`,
  `Streetwise`,
  `Survival`,
  `Vacc Suit`,
];
const careerAssignments = new Map([
  ["Agent", ["Law Inforcement", "Intelligence", "Corporate"]],
  ["Army", ["Support", "Infantry", "Cavalry"]],
  ["Citizen", ["Corporate", "Worker", "Colonist"]],
  ["Drifter", ["Barbarian", "Wanderer", "Scavenger"]],
  ["Entertainer", ["Artist", "Journalist", "Performer"]],
  ["Marine", ["Support", "Star Marine", "Ground Assault"]],
  ["Merchant", ["Merchant Marine", "Free Trader", "Broker"]],
  ["Navy", ["Line/Crew", "Engineer/Gunner", "Flight"]],
  ["Noble", ["Administrator", "Diplomat", "Dilettante"]],
  ["Rogue", ["Thief", "Enforcer", "Pirate"]],
  ["Scholar", ["Field Researcher", "Scientist", "Physician"]],
  ["Scout", ["Courier", "Surveyor", "Explorer"]],
]);
const careers = new Map([
  [
    `Agent`,
    {
      name: `Agent`,
      qualification: [`INT`, 6],
      careerProgress: new Map([
        [
          "Law Enforcement",
          [
            [`END`, 6],
            [`INT`, 6],
          ],
        ],
        [
          "Intelligence",
          [
            [`INT`, 7],
            [`INT`, 5],
          ],
        ],
        [
          "Corporate",
          [
            [`INT`, 5],
            [`INT`, 7],
          ],
        ],
      ]),
      musteringOutBenefits: new Map([
        [(1)[(`Cr1000`, `Scientific Equipment`)]],
        [2, [`Cr2000`, `INT + 1`]],
        [3, [`Cr5000`, `Ship Share`]],
        [4, [`Cr7500`, `Weapon`]],
        [5, [`Cr10000`, `Cybernetic Implant`]],
        [6, [`Cr25000`, `SOC + 1 or Cybernetic Implant`]],
        [7, [`Cr50000`, `TAS Membership`]],
      ]),
      skillsAndTraining: new Map([
        [
          "Personal Development",
          [`Gun Combat`, `DEX + 1`, `END + 1`, `Melee`, `INT + 1`, `Athletics`],
        ],
        [
          "Service Skills",
          [
            `Streetwise`,
            `Drive`,
            `Investigate`,
            `Flyer`,
            `Recon`,
            `Gun Combat`,
          ],
        ],

        [
          "Advanced Education",
          [
            `Advocate`,
            `Language`,
            `Explosives`,
            `Medic`,
            `Vacc Suit`,
            `Electronics`,
          ],
        ],
        [
          "Law Enforcement",
          [
            `Investigate`,
            `Recon`,
            `Streetwise`,
            `Stealth`,
            `Melee`,
            `Advocate`,
          ],
        ],
        [
          "Intelligence",
          [
            `Investigate`,
            `Recon`,
            `Electronics - Comms`,
            `Stealth`,
            `Persuade`,
            `Deception`,
          ],
        ],
        [
          "Corporate",
          [
            `Investigate`,
            `Electronics - Computers`,
            `Stealth`,
            `Carouse`,
            `Deception`,
            `Streetwise`,
          ],
        ],
      ]),
      ranksAndBonuses: new Map([
        [
          `Law Enforcement`,
          [
            [`Rookie`, ``],
            [`Corporal`, `Streetwise 1`],
            [`Sergeant`, ``],
            [`Detective`, ``],
            [`Lieutenant`, `Investigate 1`],
            [`Chief`, `Admin 1`],
            [`Commissioner`, `SOC + 1`],
          ],
        ],
        [
          `Intelligence`,
          [
            [``, ``],
            [`Agent`, `Deception 1`],
            [`Field Agent`, `Investigate 1`],
            [``, ``],
            [`Special Agent`, `Gun Combat 1`],
            [`Assistant  Director`, ``],
            [`Director`, ``],
          ],
        ],
        [
          `Corporate`,
          [
            [``, ``],
            [`Agent`, `Deception 1`],
            [`Field Agent`, `Investigate 1`],
            [``, ``],
            [`Special Agent`, `Gun Combat 1`],
            [`Assistant  Director`, ``],
            [`Director`, ``],
          ],
        ],
      ]),
      mishapsText: [
        `Severly injured (This is the same as a result of 2 on the injury table). Alternatively, roll twice on  the Injury Table and take the lower result.`,
        `A criminal or other figure under investigation offers you a deal. Accept and you leave this career without further penalty (although you lose the Benefit roll as normal). Refuse and you must roll twice on the Injury table and take the lower result. You gain an Enemy and one level in any skill you choose.`,
        `An investigation goes critically wrong or leads to the top, ruining your career. Roll Advocate 8+/ If you succeed, you may keep the Benefit roll this term. If you roll 2, you must take the Prisoner career in your next term.`,
        `You learn something you should not know and people want to kill you for it. Gain an Enemy and Deception 1.`,
        `Your work ends up coming home with you and someone gets hurt. Choose one of your Contacts, Al;llies, or family members and roll twice on the Injury table for them, taking the lower result.`,
        `Injured. Roll on the Injury table.`,
      ],
      eventsText: new Map([
        [
          2,
          `Disaster! Roll on the Mishap table but you are not ejected from this career.`,
        ],
        [
          3,
          `An investigation takes on a dangerous turn. Roll Investigate 8+ or Streetwise 8+. If you fail, roll on the Mishap table. If you succeed, increase one of these skills by one level: Deception, Jack-of-all-Trades, Persuade or Tactics.`,
        ],
        [
          4,
          `You complete a mission for your superiors and are suitably rewarded. Gain DM+1 to any one Benefit roll from this career.`,
        ],
        [5, `You establish a network of contacts. Gain D3 Contacts.`],
        [
          6,
          `You are given advanced training in a specialist field. Roll EDU 8+ to increase any one skill you already have by one level.`,
        ],
        [7, `Life Event. Roll on the Life Events table.`],
        [
          8,
          `You go undercover to investigate an enemy. Roll Deception 8+. If you succeed, roll immediately on the Rogue or Citizen Events table and make one roll on any Specialist skill table for that career. If you fail, roll immediately on the Rogue or Citizen Mishap table.`,
        ],
        [
          9,
          `You go above and beyond the call of duty. Gain DM+2 to your next advancement roll.`,
        ],
        [
          10,
          `You are given specialist training in vehicles. Gain one of Drive 1, Flyer 1, Pilot 1 or Gunner 1.`,
        ],
        [
          11,
          `You are befriended by a senior agent. Either increase Investigate by one level or DM+4 to an advancement roll thanks to their aid.`,
        ],
        [
          12,
          `Your efforts uncover a major conspiracy against your employers. You are automatically promoted.`,
        ],
      ]),
    },
  ],
]);
