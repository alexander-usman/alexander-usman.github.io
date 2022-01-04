"use strict";
// Random NPC Tables
// Race Tables
const randomNPCRace = new Map([
  [1, [`Dragonborn`]],
  [2, [`Dwarf`]],
  [3, [`Elf`]],
  [4, [`Gnome`]],
  [5, [`Half-Elf`]],
  [6, [`Halfling`]],
  [7, [`Half-Orc`]],
  [8, [`Human`]],
  [9, [`Tiefling`]],
]);
const randomHumanType = new Map([
  [1, `Calishite`],
  [2, `Chondathan`],
  [3, `Damaran`],
  [4, `Illuskan`],
  [5, `Mulan`],
  [6, `Rashemi`],
  [7, `Shou`],
  [8, `Tethyrian`],
  [9, `Turami`],
]);
// Name Lists
const namesDragonbornFemale = [
  `Akra`,
  `Asathra`,
  `Antara`,
  `Arava`,
  `Biri`,
  `Blendaeth`,
  `Burana`,
  `Chassath`,
  `Daar`,
  `Dentratha`,
  `Doudra`,
  `Driindar`,
  `Eggren`,
  `Farideh`,
  `Findex`,
  `Furrele`,
  `Gesrethe`,
  `Gilkass`,
  `Harann`,
  `Havilar`,
  `Hethress`,
  `Hillanot`,
  `Jaxi`,
  `Jezean`,
  `Jheri`,
  `Kadana`,
  `Kava`,
  `Korinn`,
  `Megren`,
  `Mijira`,
  `Mishann`,
  `Nala`,
  `Nuthra`,
  `Perra`,
  `Pogranix`,
  `Pyxrin`,
  `Quespa`,
  `Raiann`,
  `Rezena`,
  `Ruloth`,
  `Saphara`,
  `Savaran`,
  `Sora`,
  `Surina`,
  `Synthrin`,
  `Tatyan`,
  `Thava`,
  `Uadjit`,
  `Vezera`,
  `Zykroff`,
];
const namesDragonbornMale = [
  `Adrex`,
  `Arjhan`,
  `Azzakh`,
  `Balasar`,
  `Baradad`,
  `Bharash`,
  `Bidreked`,
  `Dadalan`,
  `Dazzazan`,
  `Direcris`,
  `Donaar`,
  `Fax`,
  `Gargax`,
  `Ghesh`,
  `Gorbundus`,
  `Greethen`,
  `Heskan`,
  `Hirrathak`,
  `Ildrex`,
  `Kaladan`,
  `Kerkad`,
  `Kiirith`,
  `Kriv`,
  `Maagog`,
  `Medrash`,
  `Mehen`,
  `Mozkith`,
  `Mreksh`,
  `Mugrunden`,
  `Nadarr`,
  `Nithther`,
  `Norkruuth`,
  `Nykkan`,
  `Pandjed`,
  `Paatrin`,
  `Pijjirik`,
  `Quarethon`,
  `Rathkran`,
  `Rhogar`,
  `Rivaan`,
  `Sethrekar`,
  `Shamash`,
  `Shedinn`,
  `Srorthen`,
  `Tarhun`,
  `Torinn`,
  `Trynnicus`,
  `Valorean`,
  `Vrondiss`,
  `Zedaar`,
];
const namesDragonbornClan = [
  `Akhamberylliax`,
  `Argenthrixus`,
  `baharoosh`,
  `Beryntolthropal`,
  `Benkhumbyrznaax`,
  `Caavylteradyn`,
  `Chumbyxirinnish`,
  `Clenthinthiallor`,
  `Daardendrian`,
  `Delmirev`,
  `Dhyrktelonis`,
  `Ebynichtomonis`,
  `Esstyrlynn`,
  `Fharngnarthnost`,
  `Ghaallixirn`,
  `Grrrmmballhyst`,
  `Gygazzylyshrift`,
  `Hashphronyxadyn`,
  `Hshhsstoroth`,
  `Imbixtellrhyst`,
  `Jerynomonis`,
  `Jharthraxyn`,
  `Kerrhylon`,
  `Kimbatuul`,
  `Lhamboldennish`,
  `Lixakasendalor`,
  `Mohradyllion`,
  `Mystan`,
  `Nemmonis`,
  `Norixius`,
  `Ophinshtalajiir`,
  `Orexijandilin`,
  `Pfaphnyrennish`,
  `Phradrandon`,
  `Pyraxtallinost`,
  `Qyxpahrgh`,
  `Ragthroknaar`,
  `Shestendeliath`,
  `Skaarzborroosh`,
  `Sumnarghthrysh`,
  `Tiammmanthyllish`,
  `Turnuroth`,
  `Umbyrphrael`,
  `Vangdondalor`,
  `Verthisathurgiesh`,
  `Wivvyrholdalphiax`,
  `Wystongjiir`,
  `Xephyrbahnor`,
  `Yarjerit`,
  `Zzzxaaxthroth`,
];
const namesDwarfFemale = [
  `Anbera`,
  `Arlin`,
  `Audhild`,
  `Balifra`,
  `Barbena`,
  `Bardryn`,
  `Bolhild`,
  `Oagnal`,
  `Oariff`,
  `Delre`,
  `Diesa`,
  `Eldeth`,
  `Eridred`,
  `Falkrunn`,
  `Fallthra`,
  `Finellen`,
  `Gillydd`,
  `Gunnloda`,
  `Gurdis`,
  `Helgret`,
  `Heja`,
  `Hlin`,
  `Ilde`,
  `Jarana`,
  `Kathra`,
  `Kilia`,
  `Kristryd`,
  `Liftrasa`,
  `Marastyr`,
  `Mardred`,
  `Morana`,
  `Nalaed`,
  `Nora`,
  `Nurkara`,
  `Oriff`,
  `Ovina`,
  `Riswynn`,
  `Sannl`,
  `Therlin`,
  `Thodris`,
  `Torbera`,
  `Tordrid`,
  `Torgga`,
  `Urshar`,
  `Valida`,
  `Vistra`,
  `Vonana`,
  `Werydd`,
  `Whurdred`,
  `Yurgunn`,
];
const namesDwarfMale = [
  `Adrik`,
  `Alberich`,
  `Baern`,
  `Barendd`,
  `Beloril`,
  `Brottor`,
  `Dain`,
  `Dalgal`,
  `Darrak`,
  `Delg`,
  `Duergath`,
  `Dworic`,
  `Eberk`,
  `Einkll`,
  `Elaim`,
  `Erias`,
  `Fallond`,
  `Fargrim`,
  `Gardain`,
  `Gilthur`,
  `Gimgen`,
  `Gimurt`,
  `Harbek`,
  `Kildrak`,
  `Kilvar`,
  `Morgran`,
  `Morkral`,
  `Nalral`,
  `Nordak`,
  `Nuraval`,
  `Oloric`,
  `Olunt`,
  `Orsik`,
  `Oskar`,
  `Rangrim`,
  `Reirak`,
  `Rurik`,
  `Taklinn`,
  `Thoradin`,
  `Thorin`,
  `Thradal`,
  `Tordek`,
  `Traubon`,
  `Travok`,
  `Ulfgar`,
  `Uraim`,
  `Veit`,
  `Vonbin`,
  `Vondal`,
  `Whurbin`,
];
const namesDwarfClan = [
  `Aranore`,
  `Balderk`,
  `Battlehammer`,
  `Bigtoe`,
  `Bloodkith`,
  `Bofdann`,
  `Brawnanvil`,
  `Brazzik`,
  `Broodfist`,
  `Burrowfound`,
  `Caebrek`,
  `Daerdahk`,
  `Dankil`,
  `Daraln`,
  `Deepdelver`,
  `Durthane`,
  `Eversharp`,
  `Fallack`,
  `Fireforge`,
  `Foamtankard`,
  `Frostbeard`,
  `Glanhig`,
  `Goblinbane`,
  `Goldfinder`,
  `Gorunn`,
  `Graybeard`,
  `Hammerstone`,
  `Helcral`,
  `Holderhek`,
  `Ironfist`,
  `Loderr`,
  `Lutgehr`,
  `Morigak`,
  `Orcfoe`,
  `Rakankrak`,
  `Ruby-Eye`,
  `Rumnaheim`,
  `Silveraxe`,
  `Silverstone`,
  `Steelfist`,
  `Stoutale`,
  `Strakeln`,
  `Strongheart`,
  `Thrahak`,
  `Torevir`,
  `Torunn`,
  `Trollbleeder`,
  `Trueanvil`,
  `Trueblood`,
  `Ungart`,
];
const namesElfChild = [
  `Ael`,
  `Ang`,
  `Ara`,
  `Ari`,
  `Arn`,
  `Aym`,
  `Broe`,
  `Bryn`,
  `Cael`,
  `Cy`,
  `Dae`,
  `Del`,
  `Eli`,
  `Eryn`,
  `Faen`,
  `Fera`,
  `Gael`,
  `Gar`,
  `Innll`,
  `Jar`,
  `Kan`,
  `Koeth`,
  `Lael`,
  `Lue`,
  `Mai`,
  `Mara`,
  `Mella`,
  `Mya`,
  `Naeris`,
  `Naill`,
  `Nim`,
  `Phann`,
  `Py`,
  `Rael`,
  `Raer`,
  `Ren`,
  `Rinn`,
  `Rua`,
  `Sael`,
  `Sai`,
  `Sumi`,
  `Syllin`,
  `Ta`,
  `Thia`,
  `Tia`,
  `Traki`,
  `Vall`,
  `Von`,
  `Wil`,
  `Za`,
];
const namesElfAdultFemale = [
  `Adre`,
  `Ahinar`,
  `Ahhaea`,
  `Anastrianna`,
  `Andraste`,
  `Antinua`,
  `Arara`,
  `Baelitae`,
  `Bethrynna`,
  `Birol`,
  `Caelynn`,
  `Chaedi`,
  `Claira`,
  `Dara`,
  `Drusilia`,
  `Elama`,
  `Enna`,
  `Faral`,
  `Felosial`,
  `Hatae`,
  `Ielenia`,
  `Ilanis`,
  `Irann`,
  `Jarsall`,
  `Jelenneth`,
  `Keyleth`,
  `Leshanna`,
  `Lia`,
  `Maiathah`,
  `Malquis`,
  `Meriele`,
  `Mialee`,
  `Myathethil`,
  `Naivara`,
  `Quelenna`,
  `Quillathe`,
  `Ridaro`,
  `Sariel`,
  `Shanairla`,
  `Shava`,
  `Silaqui`,
  `Sumnes`,
  `Theirastra`,
  `Thiala`,
  `Tiaathque`,
  `Traulam`,
  `Vadania`,
  `Valanthc`,
  `Valna`,
  `Xanaphia`,
];
const namesElfAdultMale = [
  `Adran`,
  `Aelar`,
  `Aerdeth`,
  `Ahvain`,
  `Aramil`,
  `Arannis`,
  `Aust`,
  `Azaki`,
  `Beiro`,
  `Berrian`,
  `Cacldrim`,
  `Carrie`,
  `Dayereth`,
  `Dreali`,
  `Efferil`,
  `Eiravel`,
  `Enialis`,
  `Erdan`,
  `Erevan`,
  `Fivin`,
  `Galinndan`,
  `Gennal`,
  `Hadarai`,
  `Halimath`,
  `Heian`,
  `Himo`,
  `Immeral`,
  `Ivellios`,
  `Korfel`,
  `Lamlis`,
  `Laucian`,
  `Lucan`,
  `Mindartis`,
  `Naal`,
  `Nutae`,
  `Paelias`,
  `Peren`,
  `Quarion`,
  `Riardon`,
  `Rolen`,
  `Soveliss`,
  `Suhnae`,
  `Thamior`,
  `Tharivol`,
  `Theren`,
  `Theriatis`,
  `Thervan`,
  `Uthemar`,
  `Vanuath`,
  `Varis`,
];
const namesElfFamily = [
  `Aloro`,
  `Amakiir`,
  `Amastaria`,
  `Ariessus`,
  `Arnuanna`,
  `Berevan`,
  `Caerdonel`,
  `Caphaxath`,
  `Casilltenirra`,
  `Cithreth`,
  `Dalanthan`,
  `Eathalena`,
  `Erenaeth`,
  `Ethanasath`,
  `Fasharash`,
  `Firahel`,
  `Floshem`,
  `Galanodel`,
  `Goltorah`,
  `Hanali`,
  `Holimion`,
  `Horineth`,
  `Iathrana`,
  `Ilphelkiir`,
  `Iranapha`,
  `Koehlanna`,
  `Lathalas`,
  `Liadon`,
  `Melamne`,
  `Mellerelel`,
  `Mystralath`,
  `Nailo`,
  `Netyoive`,
  `Ofandrus`,
  `Ostoroth`,
  `Othronus`,
  `Qualanthri`,
  `Raethran`,
  `Rothenel`,
  `Selevarun`,
  `Siannodel`,
  `Suithrasas`,
  `Sylvaranth`,
  `Teinithra`,
  `Tiltathana`,
  `Wasanthi`,
  `Withrethin`,
  `Xiloscient`,
  `Xistsrith`,
  `Yaeldrin`,
];
const namesGnomeFemale = [
  `Abalaba`,
  `Bimpnottin`,
  `Breena`,
  `Buvvie`,
  `Callybon`,
  `Caramip`,
  `Carlin`,
  `Cumpen`,
  `Dalaba`,
  `Donella`,
  `Duvamil`,
  `Ella`,
  `Ellyjoybell`,
  `Ellywick`,
  `Enidda`,
  `Lilli`,
  `loopmottin`,
  `Lorilla`,
  `Luthra`,
  `Mardnab`,
  `meena`,
  `Menny`,
  `Mumpena`,
  `Nissa`,
  `Numba`,
  `Nyx`,
  `Oda`,
  `Oppah`,
  `Orla`,
  `Panana`,
  `Pyntle`,
  `Quilla`,
  `Ranala`,
  `Reddlepop`,
  `Roywyn`,
  `Salanop`,
  `Shamil`,
  `Siffress`,
  `Symma`,
  `Tana`,
  `Tenena`,
  `Tevaround`,
  `Tippletoe`,
  `Ulla`,
  `Unvera`,
  `Veloptima`,
  `Virra`,
  `Waywocket`,
  `Yebe`,
  `Zanna`,
];
const namesGnomeMale = [
  `Alston`,
  `Alvyn`,
  `Anverth`,
  `Arumawann`,
  `Bilbron`,
  `Boddynock`,
  `Brocc`,
  `Burgell`,
  `Cockaby`,
  `Crampernap`,
  `Dabbledop`,
  `Delebean`,
  `Dimble`,
  `Eberdeb`,
  `Eldon`,
  `Erky`,
  `Fablen`,
  `Fibblestib`,
  `Fonkin`,
  `Frouse`,
  `Frug`,
  `Gerbo`,
  `Gimble`,
  `Glim`,
  `Igden`,
  `Jabble`,
  `Jabeddo`,
  `Kellen`,
  `Kipper`,
  `Namfoodle`,
  `Oppleby`,
  `Orryn`,
  `Paggen`,
  `Pallabar`,
  `Pog`,
  `Qualen`,
  `Ribbles`,
  `Rimple`,
  `Roondar`,
  `Sapply`,
  `Seebo`,
  `Senteq`,
  `Sindri`,
  `Umpen`,
  `Warryn`,
  `Wiggens`,
  `Wobbles`,
  `Wrenn`,
  `Zaffrab`,
  `Zook`,
];
const namesGnomeClan = [
  `Albaratie`,
  `Bafflestone`,
  `Beren`,
  `Boondiggles`,
  `Cobblelob`,
  `Daergel`,
  `Dunben`,
  `Fabblestabble`,
  `Fapplestamp`,
  `Fiddlefen`,
  `Folkor`,
  `Garrick`,
  `Gimlen`,
  `Glittergem`,
  `Gobblefern`,
  `Gummen`,
  `Horcusporcus`,
  `Humplebumple`,
  `Ironhide`,
  `Leffery`,
  `Lingenhall`,
  `Loofollue`,
  `Maekleferce`,
  `Miggledy`,
  `Munggen`,
  `Murning`,
  `Musgraben`,
  `Nackle`,
  `Ningel`,
  `Nopenstallen`,
  `Nucklestamp`,
  `Offund`,
  `Oomtrowl`,
  `Pilwicken`,
  `Pingun`,
  `Quillsharpener`,
  `Raulnor`,
  `Reese`,
  `Rofferton`,
  `Scheppen`,
  `Shadowcloak`,
  `Silverthread`,
  `Sympony`,
  `Tarkleby`,
  `Timbers`,
  `Turen`,
  `Umbodoben`,
  `Waggletop`,
  `Welber`,
  `Wildwander`,
];
const namesHalflingFemale = [
  `Alain`,
  `Andry`,
  `Anne`,
  `bella`,
  `Blossom`,
  `Bree`,
  `Callie`,
  `Chenna`,
  `Corra`,
  `Dree`,
  `Dell`,
  `Eida`,
  `Eran`,
  `Euphemia`,
  `Georgina`,
  `Gynnie`,
  `Harriet`,
  `Jasmine`,
  `Jillian`,
  `Jo`,
  `Kithri`,
  `Lavinia`,
  `Lidda`,
  `Maegan`,
  `Marigold`,
  `Merla`,
  `Myria`,
  `Nedda`,
  `Nikki`,
  `Nora`,
  `Olivia`,
  `Paela`,
  `Pearl`,
  `Pennie`,
  `Philomena`,
  `Portia`,
  `Robbie`,
  `Rose`,
  `Saral`,
  `Seraphina`,
  `Shaena`,
  `Stacee`,
  `Tawna`,
  `Thea`,
  `Trym`,
  `Tyna`,
  `Vani`,
  `Verna`,
  `Wella`,
  `Willow`,
];
const namesHalflingMale = [
  `Alton`,
  `Ander`,
  `Bernie`,
  `Bobbin`,
  `Cade`,
  `Callus`,
  `Corrin`,
  `Dannad`,
  `Daniel`,
  `Eddie`,
  `Egart`,
  `Eldon`,
  `Errich`,
  `Fildo`,
  `Finnan`,
  `Franklin`,
  `Garret`,
  `Garth`,
  `Gilbert`,
  `Gob`,
  `Harol`,
  `Igor`,
  `Jasper`,
  `Keith`,
  `Kevin`,
  `Lazam`,
  `Lerry`,
  `Lindal`,
  `Lyle`,
  `Merric`,
  `Mican`,
  `Milo`,
  `Morrin`,
  `Nebin`,
  `Nevil`,
  `Osborn`,
  `Ostran`,
  `Oswalt`,
  `Perrin`,
  `Poppy`,
  `Reed`,
  `Roscoe`,
  `Sam`,
  `Shardon`,
  `Tye`,
  `Ulmo`,
  `Wellby`,
  `Wendei`,
  `Wenner`,
  `Wes`,
];
const namesHalflingFamily = [
  `Appleblossom`,
  `Bigheart`,
  `Brightmoon`,
  `Brushgather`,
  `Cherrycheeks`,
  `Copperkettle`,
  `Deephollow`,
  `Elderberry`,
  `Fastfoot`,
  `Fatrabbit`,
  `Glenfellow`,
  `Goldfound`,
  `Goodbarrel`,
  `Goodearth`,
  `Greenbottle`,
  `Greenleaf`,
  `High-hill`,
  `Hilltopple`,
  `Hogcollar`,
  `Honeypot`,
  `Jamjar`,
  `Kettlewhistle`,
  `Leagallow`,
  `Littlefoot`,
  `Nimblefingers`,
  `Porridgepot`,
  `Quickstep`,
  `Reedfellow`,
  `Shadowquick`,
  `Silvereyes`,
  `Smoothhands`,
  `Stonebridge`,
  `Stoutbridge`,
  `Stoutman`,
  `Strongbones`,
  `Sunmeadow`,
  `Swiftwhistle`,
  `Tallfellow`,
  `Tealeaf`,
  `Tenpenny`,
  `Thistletop`,
  `Thorngage`,
  `Tosscobble`,
  `Underbough`,
  `Underfoot`,
  `Warmwater`,
  `Whispermouse`,
  `Wildcloak`,
  `Wildheart`,
  `Wiseacre`,
];
const namesOrcFemale = [
  `Ahra`,
  `Baggi`,
  `Bendoo`,
  `Bilga`,
  `Brakka`,
  `Creega`,
  `Drenna`,
  `Ekk`,
  `Emen`,
  `Engong`,
  `Fistula`,
  `Gaaki`,
  `Gorga`,
  `Grai`,
  `Greeba`,
  `Grigi`,
  `Gynk`,
  `Hrathy`,
  `Huru`,
  `Ilga`,
  `Kabbarg`,
  `Kansif`,
  `Lagazi`,
  `Lezre`,
  `Murgen`,
  `Murook`,
  `Myev`,
  `Nagrette`,
  `Neega`,
  `Nella`,
  `Nogu`,
  `Oolah`,
  `Ootah`,
  `Ovak`,
  `Ownka`,
  `Puyet`,
  `Reeza`,
  `Shautha`,
  `Silgre`,
  `Sutha`,
  `Tagga`,
  `Tawar`,
  `Tomph`,
  `Ubada`,
  `Vanchu`,
  `Vola`,
  `Volen`,
  `Vorka`,
  `Yevelda`,
  `Zagga`,
];
const namesOrcMale = [
  `Argran`,
  `Brak`,
  `Brug`,
  `Cagak`,
  `Dench`,
  `Dorn`,
  `Dren`,
  `Druuk`,
  `Feng`,
  `Gell`,
  `Gnarsh`,
  `Grumbar`,
  `Gubrash`,
  `Hagren`,
  `Henk`,
  `Hogar`,
  `Holg`,
  `Imsh`,
  `Karash`,
  `Karg`,
  `Keth`,
  `Korag`,
  `Krusk`,
  `Lubash`,
  `Megged`,
  `Mhurren`,
  `Mord`,
  `Morg`,
  `Ni`,
  `Nybarg`,
  `Odorr`,
  `Ohr`,
  `Rendar`,
  `Resh`,
  `Ront`,
  `Rrath`,
  `Sark`,
  `Scrag`,
  `Sheggen`,
  `Shump`,
  `Tanglar`,
  `Tarak`,
  `Thar`,
  `Thokk`,
  `Trag`,
  `Ugarth`,
  `Varg`,
  `Vilberg`,
  `Yurk`,
  `Zed`,
];
const namesTieflingFemale = [
  `Akta`,
  `Anakis`,
  `Armara`,
  `Astaro`,
  `Aym`,
  `Azza`,
  `Beleth`,
  `Bryseis`,
  `Bune`,
  `Criela`,
  `Damaia`,
  `Decarabia`,
  `Ea`,
  `Gadreel`,
  `Gomory`,
  `Hecat`,
  `Ishte`,
  `Jezebeth`,
  `Kali`,
  `Kallista`,
  `Kasdeya`,
  `Lerissa`,
  `Lilitll`,
  `Makana`,
  `Manea`,
  `Markosian`,
  `Mastema`,
  `Naamah`,
  `Nemeia`,
  `Nija`,
  `Orianna`,
  `Osah`,
  `Phelaia`,
  `Prosperine`,
  `Punh`,
  `Pyra`,
  `Rieta`,
  `Ronobe`,
  `Ronwe`,
  `Seddit`,
  `Seere`,
  `Sekhmet`,
  `Semyaza`,
  `Shava`,
  `Shax`,
  `Sorath`,
  `Uzza`,
  `Vapula`,
  `Vepar`,
  `Verin`,
];
const namesTieflingMale = [
  `Abad`,
  `Ahrim`,
  `Akmen`,
  `Amnon`,
  `Andram`,
  `Astar`,
  `Balam`,
  `Barakas`,
  `Bathin`,
  `Caim`,
  `Chem`,
  `Cimer`,
  `Cressel`,
  `Damakos`,
  `Ekemon`,
  `Euron`,
  `Fenriz`,
  `Forcas`,
  `Habor`,
  `Iados`,
  `Kairon`,
  `Leucis`,
  `Mamnen`,
  `Mantus`,
  `Marbas`,
  `Melech`,
  `Merihim`,
  `Modean`,
  `Mordai`,
  `Mormo`,
  `Morthos`,
  `Nicor`,
  `Nirgel`,
  `Oriax`,
  `Paymon`,
  `Pelaois`,
  `Purson`,
  `Qemuel`,
  `Raam`,
  `Rimmon`,
  `Sammal`,
  `Skamos`,
  `Tethren`,
  `Thamuz`,
  `Therai`,
  `Valafar`,
  `Vassago`,
  `Xappan`,
  `Zepar`,
  `Zephan`,
];
const namesTieflingVirtue = [
  `Ambition`,
  `Art`,
  `Carrion`,
  `Chant`,
  `Creed`,
  `Death`,
  `Debauchery`,
  `Despair`,
  `Doom`,
  `Doubt`,
  `Dread`,
  `Ecstacy`,
  `Ennui`,
  `Entropy`,
  `Excellence`,
  `Fear`,
  `Glory`,
  `Gluttony`,
  `Grief`,
  `Hate`,
  `Hope`,
  `Horror`,
  `Ideal`,
  `Ignominy`,
  `Laughter`,
  `Love`,
  `Lust`,
  `Mayhem`,
  `Mockery`,
  `Murder`,
  `Muse`,
  `Music`,
  `Mystery`,
  `Nowhere`,
  `Open`,
  `Pain`,
  `Passion`,
  `Poetry`,
  `Quest`,
  `Random`,
  `Reverance`,
  `Revulsion`,
  `Sorrow`,
  `Temerity`,
  `Torment`,
  `Tragedy`,
  `Vice`,
  `Virtue`,
  `Weary`,
  `Wit`,
];
const namesHumanCalishiteMale = [
  `Aseir`,
  `Bardeid`,
  `Haseid`,
  `Khemed`,
  ` Mehmen`,
  `Sudeiman`,
  `Zasheir,`,
];
const namesHumanCalishiteFemale = [
  `Atala`,
  `Ceidil`,
  `Hama`,
  `Jasmal`,
  `Meilil`,
  `Seipora`,
  `Yasheira`,
  `Zasheida`,
];
const namesHumanCalishiteSurname = [
  `Basha`,
  `Dumein`,
  `Jassan`,
  `Khalid`,
  `Mostana`,
  `Pashar`,
  `Rein`,
];
const namesHumanChondathanMale = [
  `Darvin`,
  `Dorn`,
  `Evendur`,
  `Gorstag`,
  `Grim`,
  `Helm`,
  `Malark`,
  `Morn`,
  `Randal`,
  `Stedd`,
];
const namesHumanChondathanFemale = [
  `Arveene`,
  `Esvele`,
  `Jhessail`,
  `Kerri`,
  `Lureene`,
  `Miri`,
  `Rowan`,
  `Shandri`,
  `Tessele`,
];
const namesHumanChondathanSurname = [
  `Amblecrown`,
  `Buckman`,
  `Dundragon`,
  `Evenwood`,
  `Greycastle`,
  `Tallstag`,
];
const namesHumanDamaranMale = [
  `Bor`,
  `Fodel`,
  `Glar`,
  `Grigor`,
  `Igan`,
  `Ivor`,
  `Kosef`,
  `Mival`,
  `Orel`,
  `Pavel`,
  `Sergor`,
];
const namesHumanDamaranFemale = [
  `Alethra`,
  `Kara`,
  `Katernin`,
  `Mara`,
  `Natali`,
  `Olma`,
  `Tana`,
  `Zora`,
];
const namesHumanDamaranSurname = [
  `Bersk`,
  `Chernin`,
  `Dotsk`,
  `Kulenov`,
  `Marsk`,
  `Nemetsk`,
  `Shemov`,
  `Starag`,
];
const namesHumanIlluskanMale = [
  `Ander`,
  `Blath`,
  `Bran`,
  `Frath`,
  `Geth`,
  `Lander`,
  `Luth`,
  `Malcer`,
  `Stor`,
  `Taman`,
  `Urth`,
];
const namesHumanIlluskanFemale = [
  `Amafrey`,
  `Betha`,
  `Cefrey`,
  `Kethra`,
  `Mara`,
  `Olga`,
  `Silifrey`,
  `Westra`,
];
const namesHumanIlluskanSurname = [
  `Brightwood`,
  `Helder`,
  `Hornraven`,
  `Lackman`,
  `Stormwind`,
  `Windrivver`,
];
const namesHumanMulanMale = [
  `Aoth`,
  `Bareris`,
  `Ehput-Ki`,
  `Kethoth`,
  `Mumed`,
  `Ramas`,
  `So- Kehur`,
  `Thazar-De`,
  `Urhur`,
];
const namesHumanMulanFemale = [
  `Arizima`,
  `Chathi`,
  `Nephis`,
  `Nulara`,
  `Murithi`,
  `Sefris`,
  `Thola`,
  `Umara`,
  `Zolis`,
];
const namesHumanMulanSurname = [
  `Ankhalab`,
  `Anskuld`,
  `Fezim`,
  `Hahpet`,
  `Nathandem`,
  `Sepret`,
  `Uuthrakt`,
];
const namesHumanRashemiMale = [
  `Borivik`,
  `Faurgar`,
  `Jandar`,
  `Kanithar`,
  `Madislak`,
  `Ralmevik`,
  `Shaumar`,
  `Vladislak`,
];
const namesHumanRashemiFemale = [
  `Fyevarra`,
  `Hulmarra`,
  `Immith`,
  `Imzel`,
  `Navarra`,
  `Shevarra`,
  `Tammith`,
  `Yuldra`,
];
const namesHumanRashemiSurname = [
  `Chergoba`,
  `Dyernina`,
  `Iltazyara`,
  `Murnyethara`,
  `Stayanoga`,
  `Ulmokina`,
];
const namesHumanShouMale = [
  `An`,
  `Chen`,
  `Chi`,
  `Fai`,
  `Jiang`,
  `Jun`,
  `Lian`,
  `Long`,
  `Meng`,
  `On`,
  `Shan`,
  `Shui`,
  `Wen`,
];
const namesHumanShouFemale = [
  `Bai`,
  `Chao`,
  `Jia`,
  `Lei`,
  `Mei`,
  `Qiao`,
  `Shui`,
  `Tai`,
];
const namesHumanShouSurname = [
  `Chien`,
  `Huang`,
  `Kao`,
  `Kung`,
  `Lao`,
  `Ling`,
  `Mei`,
  `Pin`,
  `Shin`,
  `Sum`,
  `Tan`,
  `Wan`,
];
const namesHumanTethyrianMale = namesHumanChondathanMale;
const namesHumanTethyrianFemale = namesHumanChondathanFemale;
const namesHumanTethyrianSurname = namesHumanChondathanSurname;
const namesHumanTuramiMale = [
  `Anton`,
  `Diero`,
  `Marcon`,
  `Pieron`,
  `Rimardo`,
  `Romero`,
  `Salazar`,
  `Umbero`,
];
const namesHumanTuramiFemale = [
  `Balama`,
  `Dona`,
  `Faila`,
  `Jalana`,
  `Luisa`,
  `Marta`,
  `Quara`,
  `Selise`,
  `Vonda`,
];
const namesHumanTuramiSurname = [
  `Agosto`,
  `Astorio`,
  `Calabra`,
  `Domine`,
  `Falone`,
  `Marivaldi`,
  `Pisacar`,
  `Ramondo`,
];
// Parent Tables
const parentsHalfElf = new Map([
  [5, `One parent was an elf and the other was a human.`],
  [6, `One parent was an elf and the other was a half-elf.`],
  [7, `One parent was a human and the other was a half-elf.`],
  [8, `Both parents were half-elves.`],
]);

const parentsHalfOrc = new Map([
  [3, `One parent was an orc and the other was a human.`],
  [5, `One parent was an orc and the other was a half-orc.`],
  [7, `One parent was a human and the other was a half-orc.`],
  [8, `Both parents were half-orcs.`],
]);

const parentsTiefling = new Map([
  [
    4,
    `Both parents were humans, their infernal heritage dormant until you came along.`,
  ],
  [6, `One parent was a tiefling and the other was a human.`],
  [7, `One parent was a tiefling and the other was a devil.`],
  [8, `One parent was a human and the other was a devil.`],
]);

const parentsOther = new Map([
  [95, `You know who your parents are or were.`],
  [100, `You do not know who your parents are or were.`],
]);
// Appearance Tables
const randomNPCAppearance = new Map([
  [1, `Distinctive jewelry: earrings, necklace, circlet, bracelets`],
  [2, `Piercings`],
  [3, `Flamboyant or outlandish clothes`],
  [4, `Formal, clean clothes`],
  [5, `Ragged, dirty clothes`],
  [6, `Pronounced scar`],
  [7, `Missing teeth`],
  [8, `Missing fingers`],
  [9, `Unusual eye color (or two different colors)`],
  [10, `Tattoos`],
  [11, `Birthmark`],
  [12, `Unusual skin color`],
  [13, `Bald`],
  [14, `Braided beard or hair`],
  [15, `Unusual hair color`],
  [16, `Nervous eye twitch`],
  [17, `Distinctive nose`],
  [18, `Distinctive posture (crooked or rigid)`],
  [19, `Exceptionally beautiful`],
  [20, `Exceptionally ugly`],
]);
// Ability Tables
const randomNPCHighAbility = new Map([
  [1, [`Strength`, `Powerful`, `Brawny`, `As strong as an ox`]],
  [2, [`Dexterity`, `Lithe`, `Agile`, `Graceful`]],
  [3, [`Constitution`, `Hardy`, `Hale`, `Healthy`]],
  [4, [`Intelligence`, `Studious`, `Learned`, `Inquisitive`]],
  [5, [`Wisdom`, `Perceptive`, `Spiritual`, `Insightful`]],
  [6, [`Charisma`, `Persuasive`, `Forceful`, `A born leader`]],
]);

const randomNPCLowAbility = new Map([
  [1, [`Strength`, `Feeble`, `Scrawny`]],
  [2, [`Dexterity`, `Clumsy`, `Fumbling`]],
  [3, [`Constitution`, `Sickly`, `Pale`]],
  [4, [`Intelligence`, `Dim-witted`, `Slow`]],
  [5, [`Wisdom`, `Oblivious`, `Absentminded`]],
  [6, [`Charisma`, `Dull`, `Boring`]],
]);
// Trait Tables
const randomNPCTalents = new Map([
  [1, `Plays a musical instrument`],
  [2, `Speaks several languages fluently`],
  [3, `Unbelievably lucky`],
  [4, `Perfect memory`],
  [5, `Great with animals`],
  [6, `Great with children`],
  [7, `Great at solving puzzles`],
  [8, `Great at one game `],
  [9, `Great at impersonations`],
  [10, `Draws beautifully`],
  [11, `Paints beautifully`],
  [12, `Sings beautifully`],
  [13, `Drinks everyone under the table`],
  [14, `Expert carpenter`],
  [15, `Expert cook`],
  [16, `Expert dart thrower and rock skipper`],
  [17, `Expert juggler`],
  [18, `Skilled actor and master of disguise`],
  [19, `Skilled dancer`],
  [20, `Knows thieves' cant`],
]);

const randomNPCMannerisms = new Map([
  [1, `Prone to singing, whistling, or humming quietly `],
  [2, `Speaks in rhyme or some other peculiar way`],
  [3, `Particularly low or high voice`],
  [4, `Slurs words, lisps, or stutters`],
  [5, `Enunciates overly clearly`],
  [6, `Speaks loudly`],
  [7, `Whispers `],
  [8, `Uses flowery speech or long words`],
  [9, `Frequently uses the wrong word `],
  [10, `Uses colorful oaths and exclamations`],
  [11, `Makes constant jokes or puns`],
  [12, `Prone to predictions of doom`],
  [13, `Fidgets`],
  [14, `Squints`],
  [15, `Stares into the distance`],
  [16, `Chews something`],
  [17, `Paces`],
  [18, `Taps fingers`],
  [19, `Bites fingernails`],
  [20, `Twirls hair or tugs beard`],
]);

const randomNPCInteractionTraits = new Map([
  [1, `Argumentative`],
  [2, `Arrogant`],
  [3, `Blustering`],
  [4, `Rude`],
  [5, `Curious`],
  [6, `Friendly`],
  [7, `Honest`],
  [8, `Hot Tempered`],
  [9, `Irritable`],
  [10, `Ponderous`],
  [11, `Quiet`],
  [12, `Suspicious`],
]);
// Background Tables
const randomNPCIdeals = new Map([
  [
    `Good`,
    [`Beauty`, `Charity`, `Greater Good`, `Life`, `Respect`, `Self Sacrifice`],
  ],
  [
    `Evil`,
    [`Domination`, `Greed`, `Might`, `Pain`, `Retribution`, `Slaughter`],
  ],
  [
    `Lawful`,
    [`Community`, `Fairness`, `Honour`, `Logic`, `Responsibility`, `Tradition`],
  ],
  [
    `Chaotic`,
    [`Change`, `Creativity`, `Freedom`, `Independence`, `No Limits`, `Whimsy`],
  ],
  [
    `Neutral`,
    [
      `Balance`,
      `Knowledge`,
      `Live and Let Live`,
      `Moderation`,
      `Neutrality`,
      `People`,
    ],
  ],
  [
    `Other`,
    [
      `Aspiration`,
      `Discovery`,
      `Glory`,
      `Nation`,
      `Redemption`,
      `Self-Knowledge`,
    ],
  ],
]);

const randomNPCBonds = new Map([
  [1, `Dedicated to fulfilling a personal life goal`],
  [2, `Protective of close family members`],
  [3, `Protective of colleagues or compatriots`],
  [4, `Loyal to a benefactor, patron, or employer`],
  [5, `Captivated by a romantic interest`],
  [6, `Drawn to a special place`],
  [7, `Protective of a sentimental keepsake`],
  [8, `Protective of a valuable possession`],
  [9, `Out for revenge`],
  [10, `Roll twice, ignoring results of 10`],
]);

const randomNPCFlaws = new Map([
  [1, `Forbidden love or susceptibility to romance`],
  [2, `Enjoys decadent pleasures`],
  [3, `Arrogance`],
  [4, `Envies another creature's possessions or station`],
  [5, `Overpowering greed`],
  [6, `Prone to rage`],
  [7, `Has a powerful enemy`],
  [8, `Specific phobia`],
  [9, `Shameful or scandalous history`],
  [10, `Secret crime or misdeed`],
  [11, `Possession of forbidden lore`],
  [12, `Foolhardy bravery`],
]);

const backgrounds = new Map([
  [
    `Acolyte`,
    {
      personality: [
        `I idolize a particular hero of my faith and constantly refer to that person's deeds and example.`,
        `I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.`,
        `I see omens in every event and action. The gods try to speak to us, we just need to listen.`,
        `Nothing can shake my optimistic attitude.`,
        `I quote (or misquote) the sacred texts and proverbs in almost every situation.`,
        `I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.`,
        `I've enjoyed fine food, drink, and high society among my temple's elite. Rough living grates on me.`,
        `I've spent so long in the temple that I have little practical experience dealing with people in the outside world.`,
      ],
      ideal: [
        `Faith. I trust that my deity will guide my actions. I have faith that if I work hard, things will go well. (Lawful)`,
        `Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)`,
        `Charity. I always try to help those in need, no matter what the personal cost. (Good)`,
        `Change. We must help bring about the changes the gods are constantly working in the world. (Chaotic)`,
        `Power. I hope to one day rise to the top of my faith's religious hierarchy. (Lawful)`,
        `Aspiration. I seek to prove my self worthy of my god's favor by matching my actions against his or her teachings. (Any)`,
      ],
      bond: [
        `I would die to recover an ancient artifact of my faith that was lost long ago.`,
        `I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.`,
        `I owe me life to the priest who took me in when my parents died.`,
        `Everything I do is for the common people.`,
        `I will do anything to protect the temple where I served.`,
        `I seek to preserve a sacred text that my enemies consider heretical and seek to destroy.`,
      ],
      flaw: [
        `I judge others harshly, and myself even more severely.`,
        `I put too much trust in those who wield power within my temple's hierarchy.`,
        `My piety sometimes leads me to blindly trust those that profess faith in my god.`,
        `I am inflexible in my thinking.`,
        `I am suspicious of strangers and suspect the worst of them.`,
        `Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.`,
      ],
    },
  ],
  [
    `Charlatan`,
    {
      personality: [
        `I fall in and out of love easily, and am always pursuing someone.`,
        `I have a joke for every occasion, especially occasions where humor is inappropriate.`,
        `Flattery is my preferred trick for getting what I want.`,
        `I'm a born gambler who can't resist taking a risk for a potential payoff.`,
        `I lie about almost everything, even when there's no good reason to.`,
        `Sarcasm and insults are my weapons of choice.`,
        `I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.`,
        `I pocket anything I see that might have some value.`,
      ],
      ideal: [
        `Independence. I am a free spirit--no one tells me what to do. (Chaotic)`,
        `Fairness. I never target people who can't afford to lose a few coins. (Lawful)`,
        `Charity. I distribute money I acquire to the people who really need it. (Good)`,
        `Creativity. I never run the same con twice. (Chaotic)`,
        `Friendship. Material goods come and go. Bonds of friendship last forever. (Good)`,
        `Aspiration. I'm determined to make something of myself. (Any)`,
      ],
      bond: [
        `I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.`,
        `I owe everything to my mentor--a horrible person who's probably rotting in jail somewhere.`,
        `Somewhere out there I have a child who doesn't know me. I'm making the world better for him or her.`,
        `I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.`,
        `A powerful person killed someone I love. Some day soon, I'll have my revenge.`,
        `I swindled and ruined a person who didn't deserve it. I seek to atone for my misdeeds but might never be able to forgive myself.`,
      ],
      flaw: [
        `I can't resist a pretty face.`,
        `I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.`,
        `I'm convinced that no one could ever fool me in the way I fool others.`,
        `I'm too greedy for my own good. I can't resist taking a risk if there's money involved.`,
        `I can't resist swindling people who are more powerful than me.`,
        `I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough.`,
      ],
    },
  ],
  [
    `Criminal`,
    {
      personality: [
        `I always have plan for what to do when things go wrong.`,
        `I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.`,
        `The first thing I do in a new place is note the locations of everything valuable--or where such things could be hidden.`,
        `I would rather make a new friend than a new enemy.`,
        `I am incredibly slow to trust. Those who seem the fairest often have the most to hide.`,
        `I don't pay attention to the risks in a situation. Never tell me the odds.`,
        `The best way to get me to do something is to tell me I can't do it.`,
        `I blow up at the slightest insult.`,
      ],
      ideal: [
        `Honor. I don't steal from others in the trade. (Lawful)`,
        `Freedom. Chains are meant to be broken, as are those who would forge them. (Chaotic)`,
        `Charity. I steal from the wealthy so that I can help people in need. (Good)`,
        `Greed. I will do whatever it takes to become wealthy. (Evil)`,
        `People. I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)`,
        `Redemption. There's a spark of good in everyone. (Good)`,
      ],
      bond: [
        `I'm trying to pay off an old debt I owe to a generous benefactor.`,
        `My ill-gotten gains go to support my family.`,
        `Something important was taken from me, and I aim to steal it back.`,
        `I will become the greatest thief that ever lived.`,
        `I'm guilty of a terrible crime. I hope I can redeem myself for it.`,
        `Someone I loved died because of a mistake I made. That will never happen again.`,
      ],
      flaw: [
        `When I see something valuable, I can't think about anything but how to steal it.`,
        `When faced with a choice between money and my friends, I usually choose the money.`,
        `If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.`,
        `I have a 'tell' that reveals when I'm lying.`,
        `I turn tail and run when things go bad.`,
        `An innocent person is in prison for a crime that I committed. I'm okay with that.`,
      ],
    },
  ],
  [
    `Entertainer`,
    {
      personality: [
        `I know a story relevant to almost every situation.`,
        `Whenever I come to a new place, I collect local rumors and spread gossip.`,
        `I'm a hopeless romantic, always searching for that 'special someone'.`,
        `Nobody stays angry at me or around me for long, since I can defuse any amount of tension.`,
        `I love a good insult, even one directed at me.`,
        `I get bitter if I'm not the center of attention.`,
        `I'll settle for nothing less than perfection.`,
        `I change my mood or my mind as quickly as I change key in a song.`,
      ],
      ideal: [
        `Beauty. When I perform, I make the world better than it was. (Good)`,
        `Tradition. The stories, legends, and songs of the past must never be forgotten. (Lawful)`,
        `Creativity. The world is in need of new ideas and bold action. (Chaotic)`,
        `Greed. I'm only in it for the money and fame. (Evil)`,
        `People. I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)`,
        `Honesty. Art should reflect the soul; it should come from within and reveal who we really are. (Any)`,
      ],
      bond: [
        `My instrument is my most treasured possession, and it reminds me of someone I love.`,
        `Someone stole my precious instrument, and someday I'll get it back.`,
        `I want to be famous, whatever it takes.`,
        `I idolize a hero of the old tales and measure my deeds against that person's.`,
        `I will do anything to prove myself superior to me hated rival.`,
        `I would do anything for the other members of my old troupe.`,
      ],
      flaw: [
        `I'll do anything to win fame and renown.`,
        `I'm a sucker for a pretty face.`,
        `A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.`,
        `I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.`,
        `I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.`,
        `Despite my best efforts, I am unreliable to my friends.`,
      ],
    },
  ],
  [
    `Folk Hero`,
    {
      personality: [
        `I judge people by their actions, not their words.`,
        `If someone is in trouble, I'm always willing to lend help.`,
        `When I set my mind to something, I follow through no matter what gets in my way.`,
        `I have a strong sense of fair play and always try to find the most equitable solution to arguments.`,
        `I'm confident in my own abilities and do what I can to instill confidence in others.`,
        `Thinking is for other people. I prefer action.`,
        `I misuse long words in an attempt to sound smarter.`,
        `I get bored easily. When am I going to get on with my destiny.`,
      ],
      ideal: [
        `Respect. People deserve to be treated with dignity and respect. (Good)`,
        `Fairness. No one should get preferential treatment before the law, and no one is above the law. (Lawful)`,
        `Freedom. Tyrants must not be allowed to oppress the people. (Chaotic)`,
        `Might. If I become strong, I can take what I want--what I deserve. (Evil)`,
        `Sincerity. There's no good pretending to be something I'm not. (Neutral)`,
        `Destiny. Nothing and no one can steer me away from my higher calling. (Any)`,
      ],
      bond: [
        `I have a family, but I have no idea where they are. One day, I hope to see them again.`,
        `I worked the land, I love the land, and I will protect the land.`,
        `A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.`,
        `My tools are symbols of my past life, and I carry them so that I will never forget my roots.`,
        `I protect those who cannot protect themselves.`,
        `I wish my childhood sweetheart had come with me to pursue my destiny.`,
      ],
      flaw: [
        `The tyrant who rules my land will stop at nothing to see me killed.`,
        `I'm convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.`,
        `The people who knew me when I was young know my shameful secret, so I can never go home again.`,
        `I have a weakness for the vices of the city, especially hard drink.`,
        `Secretly, I believe that things would be better if I were a tyrant lording over the land.`,
        `I have trouble trusting in my allies.`,
      ],
    },
  ],
  [
    `Guild Artisan`,
    {
      personality: [
        `I believe that everything worth doing is worth doing right. I can't help it--I'm a perfectionist.`,
        `I'm a snob who looks down on those who can't appreciate fine art.`,
        `I always want to know how things work and what makes people tick.`,
        `I'm full of witty aphorisms and have a proverb for every occasion.`,
        `I'm rude to people who lack my commitment to hard work and fair play.`,
        `I like to talk at length about my profession.`,
        `I don't part with my money easily and will haggle tirelessly to get the best deal possible.`,
        `I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me.`,
      ],
      ideal: [
        `Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)`,
        `Generosity. My talents were given to me so that I could use them to benefit the world. (Good)`,
        `Freedom. Everyone should be free to pursue his or her livelihood. (Chaotic)`,
        `Greed. I'm only in it for the money. (Evil)`,
        `People. I'm committed to the people I care about, not to ideals. (Neutral)`,
        `Aspiration. I work hard to be the best there is at my craft. (Any)`,
      ],
      bond: [
        `The workshop where I learned my trade is the most important place in the world to me.`,
        `I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.`,
        `I owe my guild a great debt for forging me into the person I am today.`,
        `I pursue wealth to secure someone's love.`,
        `One day I will return to my guild and prove that I am the greatest artisan of them all.`,
        `I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood.`,
      ],
      flaw: [
        `I'll do anything to get my hands on something rare or priceless.`,
        `I'm quick to assume that someone is trying to cheat me.`,
        `No one must ever learn that I once stole money from guild coffers.`,
        `I'm never satisfied with what I have--I always want more.`,
        `I would kill to acquire a noble title.`,
        `I'm horribly jealous of anyone who outshines my handiwork. Everywhere I go, I'm surrounded by rivals.`,
      ],
    },
  ],
  [
    `Hermit`,
    {
      personality: [
        `I've been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.`,
        `I am utterly serene, even in the face of disaster.`,
        `The leader of my community has something wise to say on every topic, and I am eager to share that wisdom.`,
        `I feel tremendous empathy for all who suffer.`,
        `I'm oblivious to etiquette and social expectations.`,
        `I connect everything that happens to me to a grand cosmic plan.`,
        `I often get lost in my own thoughts and contemplations, becoming oblivious to my surroundings.`,
        `I am working on a grand philosophical theory and love sharing my ideas.`,
      ],
      ideal: [
        `Greater Good. My gifts are meant to be shared with all, not used for my own benefit. (Good)`,
        `Logic. Emotions must not cloud our sense of what is right and true, or our logical thinking. (Lawful)`,
        `Free Thinking. Inquiry and curiosity are the pillars of progress. (Chaotic)`,
        `Power. Solitude and contemplation are paths toward mystical or magical power. (Evil)`,
        `Live and Let Live. Meddling in the affairs of others only causes trouble. (Neutral)`,
        `Self-Knowledge. If you know yourself, there're nothing left to know. (Any)`,
      ],
      bond: [
        `Nothing is more important than the other members of my hermitage, order, or association.`,
        `I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them`,
        `I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.`,
        `I entered seclusion because I loved someone I could not have.`,
        `Should my discovery come to light, it could bring ruin to the world.`,
        `My isolation gave me great insight into a great evil that only I can destroy.`,
      ],
      flaw: [
        `Now that I've returned to the world, I enjoy its delights a little too much.`,
        `I harbor dark bloodthirsty thoughts that my isolation failed to quell.`,
        `I am dogmatic in my thoughts and philosophy.`,
        `I let my need to win arguments overshadow friendships and harmony.`,
        `I'd risk too much to uncover a lost bit of knowledge.`,
        `I like keeping secrets and won't share them with anyone.`,
      ],
    },
  ],
  [
    `Noble`,
    {
      personality: [
        `My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.`,
        `The common folk love me for my kindness and generosity.`,
        `No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.`,
        `I take great pains to always look my best and follow the latest fashions.`,
        `I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.`,
        `Despite my birth, I do not place myself above other folk. We all have the same blood.`,
        `My favor, once lost, is lost forever.`,
        `If you do me an injury, I will crush you, ruin your name, and salt your fields.`,
      ],
      ideal: [
        `Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)`,
        `Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)`,
        `Independence. I must prove that I can handle myself without the coddling of my family. (Chaotic)`,
        `Power. If I can attain more power, no one will tell me what to do. (Evil)`,
        `Family. Blood runs thicker than water. (Any)`,
        `Noble Obligation. It is my duty to protect and care for the people beneath me. (Good)`,
      ],
      bond: [
        `I will face any challenge to win the approval of my family.`,
        `My house's alliance with another noble family must be sustained at all costs.`,
        `Nothing is more important that the other members of my family.`,
        `I am in love with the heir of a family that my family despises.`,
        `My loyalty to my sovereign is unwavering.`,
        `The common folk must see me as a hero of the people.`,
      ],
      flaw: [
        `I secretly believe that everyone is beneath me.`,
        `I hide a truly scandalous secret that could ruin my family forever.`,
        `I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.`,
        `I have an insatiable desire for carnal pleasures.`,
        `In fact, the world does revolve around me.`,
        `By my words and actions, I often bring shame to my family.`,
      ],
    },
  ],
  [
    `Outlander`,
    {
      personality: [
        `I'm driven by a wanderlust that led me away from home.`,
        `I watch over my friends as if they were a litter of newborn pups.`,
        `I once ran twenty-five miles without stopping to warn my clan of an approaching orc horde. I'd do it again if I had to.`,
        `I have a lesson for every situation, drawn from observing nature.`,
        `I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear.`,
        `I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them.`,
        `I feel far more comfortable around animals than people.`,
        `I was, in fact, raised by wolves.`,
      ],
      ideal: [
        `Change. Life is like the seasons, in constant change, and we must change with it. (Chaotic)`,
        `Greater Good. It is each person's responsibility to make the most happiness for the whole tribe. (Good)`,
        `Honor. If I dishonor myself, I dishonor my whole clan. (Lawful)`,
        `Might. The strongest are meant to rule. (Evil)`,
        `Nature. The natural world is more important than all the constructs of civilization. (Neutral)`,
        `Glory. I must earn glory in battle, for myself and my clan. (Any)`,
      ],
      bond: [
        `My family, clan, or tribe is the most important thing in my life, even when they are far from me.`,
        `An injury to the unspoiled wilderness of my home is an injury to me.`,
        `I will bring terrible wrath down on the evildoers who destroyed my homeland.`,
        `I am the last of my tribe, and it is up to me to ensure their names enter legend.`,
        `I suffer awful visions of a coming disaster and will do anything to prevent it.`,
        `It is my duty to provide children to sustain my tribe.`,
      ],
      flaw: [
        `I am too enamored of ale, wine, and other intoxicants.`,
        `There's no room for caution in a life lived to the fullest.`,
        `I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.`,
        `I am slow to trust members of other races.`,
        `Violence is my answer to almost any challenge.`,
        `Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish.`,
      ],
    },
  ],
  [
    `Sage`,
    {
      personality: [
        `I use polysyllabic words to convey the impression of great erudition.`,
        `I've read every book in the world's greatest libraries--or like to boast that I have.`,
        `I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others.`,
        `There's nothing I like more than a good mystery.`,
        `I'm willing to listen to every side of an argument before I make my own judgment.`,
        `I...speak...slowly...when talking...to idiots...which...almost...everyone...is...compared...to me.`,
        `I am horribly, horribly awkward in social situations.`,
        `I'm convinced that people are always trying to steal my secrets.`,
      ],
      ideal: [
        `Knowledge. The path to power and self-improvement is through knowledge. (Neutral)`,
        `Beauty. What is beautiful points us beyond itself toward what is true. (Good)`,
        `Logic. Emotions must not cloud our logical thinking. (Lawful)`,
        `No Limits. Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)`,
        `Power. Knowledge is the path to power and domination. (Evil)`,
        `Self-improvement. The goal of a life of study is the betterment of oneself. (Any)`,
      ],
      bond: [
        `It is my duty to protect my students.`,
        `I have an ancient text that holds terrible secrets that must not fall into the wrong hands.`,
        `I work to preserve a library, university, scriptorium, or monastery.`,
        `My life's work is a series of tomes related to a specific field of lore.`,
        `I've been searching my whole life for the answer to a certain question.`,
        `I sold my soul for knowledge. I hope to do great deeds and win it back.`,
      ],
      flaw: [
        `I am easily distracted by the promise of information.`,
        `Most people scream and run when they see a demon. I stop and take notes on its anatomy.`,
        `Unlocking an ancient mystery is worth the price of a civilization.`,
        `I overlook obvious solutions in favor of complicated ones.`,
        `I speak without really thinking through my words, invariably insulting others.`,
        `I can't keep a secret to save my life, or anyone else's.`,
      ],
    },
  ],
  [
    `Sailor`,
    {
      personality: [
        ` My friends know they can rely on me, no matter what.`,
        `I work hard so that I can play hard when the work is done.`,
        `I enjoy sailing into new ports and making new friends over a flagon of ale.`,
        `I stretch the truth for the sake of a good story.`,
        `To me, a tavern brawl is a nice way to get to know a new city.`,
        `I never pass up a friendly wager.`,
        `My language is as foul as an otyugh nest.`,
        `I like a job well done, especially if I can convince someone else to do it.`,
      ],
      ideal: [
        `Respect. The thing that keeps a ship together is mutual respect between captain and crew. (Good)`,
        `Fairness. We all do the work, so we all share in the rewards. (Lawful)`,
        `Freedom. The sea is freedom--the freedom to go anywhere and do anything. (Chaotic)`,
        `Master. I'm a predator, and the other ships on the sea are my prey. (Evil)`,
        `People. I'm committed to my crewmates, not to ideals. (Neutral)`,
        `Aspiration. Someday I'll own my own ship and chart my own destiny. (Any)`,
      ],
      bond: [
        `I'm loyal to my captain first, everything else second.`,
        `The ship is most important--crewmates and captains come and go.`,
        `I'll always remember my first ship.`,
        `In a harbor town, I have a paramour whose eyes nearly stole me from the sea.`,
        `I was cheated of my fair share of the profits, and I want to get my due.`,
        `Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine.`,
      ],
      flaw: [
        `I follow orders, even if I think they're wrong.`,
        `I'll say anything to avoid having to do extra work.`,
        `Once someone questions my courage, I never back down no matter how dangerous the situation.`,
        `Once I start drinking, it's hard for me to stop.`,
        `I can't help but pocket loose coins and other trinkets I come across.`,
        `My pride will probably lead to my destruction.`,
      ],
    },
  ],
  [
    `Soldier`,
    {
      personality: [
        `I'm always polite and respectful.`,
        `I'm haunted by memories of war. I can't get the images of violence out of my mind.`,
        `I've lost too many friends, and I'm slow to make new ones.`,
        `I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.`,
        `I can stare down a hellhound without flinching.`,
        `I enjoy being strong and like breaking things.`,
        `I have a crude sense of humor.`,
        `I face problems head-on. A simple direct solution is the best path to success.`,
      ],
      ideal: [
        `Greater Good. Our lot is to lay down our lives in defense of others. (Good)`,
        `Responsibility. I do what I must and obey just authority. (Lawful)`,
        `Independence. When people follow orders blindly they embrace a kind of tyranny. (Chaotic)`,
        `Might. In life as in war, the stronger force wins. (Evil)`,
        `Ideals aren't worth killing for or going to war for. (Neutral)`,
        `Nation. My city, nation, or people are all that matter. (Any)`,
      ],
      bond: [
        `I would lay down my life for the people I served with.`,
        `Someone saved my life on the battlefield. To this day, I will never leave a friend behind.`,
        `My honor is my life.`,
        `I'll never forget the crushing defeat my company suffered or the enemies who dealt it.`,
        `Those who fight beside me are those worth dying for.`,
        `I fight for those who cannot fight for themselves.`,
      ],
      flaw: [
        `The monstrous enemy we faced in battle still leaves me quivering with fear.`,
        `I have little respect for anyone who is not a proven warrior.`,
        `I made a terrible mistake in battle that cost many lives--and I would do anything to keep that mistake secret.`,
        `My hatred of my enemies is blind and unreasoning.`,
        `I obey the law, even if the law causes misery.`,
        `I'd rather eat my armor than admit when I'm wrong.`,
      ],
    },
  ],
  [
    `Urchin`,
    {
      personality: [
        `I hide scraps of food and trinkets away in my pockets.`,
        `I ask a lot of questions.`,
        `I like to squeeze into small places where no one else can get to me.`,
        `I sleep with my back to a wall or tree, with everything I own wrapped in a bundle in my arms.`,
        `I eat like a pig and have bad manners.`,
        `I think anyone who's nice to me is hiding evil intent.`,
        `I don't like to bathe.`,
        `I bluntly say what other people are hinting or hiding.`,
      ],
      ideal: [
        `Respect. All people, rich or poor, deserve respect. (Good)`,
        `Community. We have to take care of each other, because no one else is going to do it. (Lawful)`,
        `Change. The low are lifted up, and the high and mighty are brought down. Change is the nature of things. (Chaotic)`,
        `Retribution. The rich need to be shown what life and death are like in the gutters. (Evil)`,
        `People. I help people who help me--that's what keeps us alive. (Neutral)`,
        `Aspiration. I'm going to prove that I'm worthy of a better life. (Any)`,
      ],
      bond: [
        `My town or city is my home, and I'll fight to defend it.`,
        `I sponsor an orphanage to keep others from enduring what I was forced to endure.`,
        `I owe my survival to another urchin who taught me to live on the streets.`,
        `I owe a debt I can never repay to the person who took pity on me.`,
        `I escaped my life of poverty by robbing an important person, and I'm wanted for it.`,
        `No one else is going to have to endure the hardships I've been through.`,
      ],
      flaw: [
        `If I'm outnumbered, I always run away from a fight.`,
        `Gold seems like a lot of money to me, and I'll do just about anything for more of it.`,
        `I will never fully trust anyone other than myself.`,
        `I'd rather kill someone in their sleep than fight fair.`,
        `It's not stealing if I need it more than someone else.`,
        `People who don't take care of themselves get what they deserve.`,
      ],
    },
  ],
]);

const resultsDiv = document.querySelector(`.results`);
const btnGenerateSimpleNPC = document.querySelector(`.btnGenerateSimpleNPC`);
const btnGenerateComplexNPC = document.querySelector(`.btnGenerateComplexNPC`);

const stripListMarkup = function (input) {
  return input.slice(4, -5);
};

const generateSimpleNPC = function () {
  const race = getNPCRace();
  const trimmedRace = stripListMarkup(race);
  const gender = getNPCGender();
  const trimmedGender = stripListMarkup(gender);
  const name = getNPCName(trimmedRace, trimmedGender);
  const parents = getNPCParents(trimmedRace);
  const appearance = getSimpleAppearance();
  const highScore = getNPCHighAbility();
  const lowScore = getNPCLowAbility(highScore[0]);
  const talent = getNPCTalent();
  const mannerism = getNPCMannerism();
  const interactionTrait = getNPCInteractionTrait();
  const ideal = getNPCIdeal();
  const bond = getNPCBond();
  const flaw = getNPCFlaw();

  resultsDiv.innerHTML = `
    <ul>
    ${race}
    ${gender}
    ${name}
    ${parents}
    ${appearance}
    ${highScore[0]}: ${highScore[1]}
    ${lowScore[0]}: ${lowScore[1]}
    ${talent}
    ${mannerism}
    ${interactionTrait}
    ${ideal}
    ${bond}
    ${flaw}
    </ul>
  `;
};

const getComplexNPC = function () {
  const race = getNPCRace();
  const trimmedRace = stripListMarkup(race);
  const gender = getNPCGender();
  const trimmedGender = stripListMarkup(gender);
  const name = getNPCName(trimmedRace, trimmedGender);
  const parents = getNPCParents(trimmedRace);
  const appearance = getSimpleAppearance();
  const highScore = getNPCHighAbility();
  const lowScore = getNPCLowAbility(highScore[0]);
  const talent = getNPCTalent();
  const mannerism = getNPCMannerism();
  const interactionTrait = getNPCInteractionTrait();
  const background = getNPCBackground();

  resultsDiv.innerHTML = `
    <ul>
    ${race}
    ${gender}
    ${name}
    ${parents}
    ${appearance}
    ${highScore[0]}: ${highScore[1]}
    ${lowScore[0]}: ${lowScore[1]}
    ${talent}
    ${mannerism}
    ${interactionTrait}
    ${background}
    </ul>
  `;
};

const getNPCRace = function () {
  const roll = Math.trunc(Math.random() * randomNPCRace.size) + 1;

  if (randomNPCRace.get(roll)[0] === `Human`) {
    const humanType = randomHumanType.get(
      Math.trunc(Math.random() * randomHumanType.size) + 1
    );
    return `<li>${randomNPCRace.get(roll)} - ${humanType}</li>`;
  }

  return `<li>${randomNPCRace.get(roll)}</li>`;
};

const getNPCGender = function () {
  const roll = Math.trunc(Math.random() * 2);

  if (roll === 0) {
    return `<li>Male</li>`;
  } else if (roll === 1) {
    return `<li>Female</li>`;
  }
};

const getNPCName = function (race = `Human`, gender = `Male`) {
  let result = ``;
  let firstNameRoll = 0;
  let lastNameRoll = 0;
  let childNameRoll = 0;
  let namedBy = 0;

  switch (race) {
    case `Dragonborn`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(Math.random() * namesDragonbornMale.length);
        result += `${namesDragonbornMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesDragonbornFemale.length
        );
        result += `${namesDragonbornFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(Math.random() * namesDragonbornClan.length);
      result += `${namesDragonbornClan[lastNameRoll]}`;
      break;

    case `Dwarf`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(Math.random() * namesDwarfMale.length);
        result += `${namesDwarfMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(Math.random() * namesDwarfFemale.length);
        result += `${namesDwarfFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(Math.random() * namesDwarfClan.length);
      result += `${namesDwarfClan[lastNameRoll]}`;
      break;

    case `Elf`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(Math.random() * namesElfAdultMale.length);
        result += `${namesElfAdultMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(Math.random() * namesElfAdultFemale.length);
        result += `${namesElfAdultFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(Math.random() * namesElfFamily.length);
      result += `${namesElfFamily[lastNameRoll]}`;
      childNameRoll = Math.trunc(Math.random() * namesElfChild.length);
      result += ` (Child name: ${namesElfChild[childNameRoll]})`;
      break;

    case `Gnome`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(Math.random() * namesGnomeMale.length);
        result += `${namesGnomeMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(Math.random() * namesGnomeFemale.length);
        result += `${namesGnomeFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(Math.random() * namesGnomeClan.length);
      result += `${namesGnomeClan[lastNameRoll]}`;
      break;

    case `Half-Elf`:
      namedBy = Math.trunc(Math.random() * 18) + 1;
      if (namedBy <= 9) {
        result += getNPCName(`Human - ${randomHumanType.get(namedBy)}`, gender);
        return result;
      } else {
        result += getNPCName(`Elf`, gender);
        return result;
      }

      break;

    case `Halfling`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(Math.random() * namesHalflingMale.length);
        result += `${namesHalflingMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(Math.random() * namesHalflingFemale.length);
        result += `${namesHalflingFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(Math.random() * namesHalflingFamily.length);
      result += `${namesHalflingFamily[lastNameRoll]}`;
      break;

    case `Half-Orc`:
      namedBy = Math.trunc(Math.random() * 18) + 1;
      if (namedBy <= 9) {
        result += `${stripListMarkup(
          getNPCName(`Human - ${randomHumanType.get(namedBy)}`, gender)
        )}`;
        result += ` (${stripListMarkup(getNPCName(`Orc`, gender))})`;
        return `<li>${result}</li>`;
      } else {
        result += getNPCName(`Orc`, gender);
        return result;
      }
      break;

    case `Human - Calishite`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesHumanCalishiteMale.length
        );
        result += `${namesHumanCalishiteMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesHumanCalishiteFemale.length
        );
        result += `${namesHumanCalishiteFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(
        Math.random() * namesHumanCalishiteSurname.length
      );
      result += `${namesHumanCalishiteSurname[lastNameRoll]}`;
      break;

    case `Human - Chondathan`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesHumanChondathanMale.length
        );
        result += `${namesHumanChondathanMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesHumanChondathanFemale.length
        );
        result += `${namesHumanChondathanFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(
        Math.random() * namesHumanChondathanSurname.length
      );
      result += `${namesHumanChondathanSurname[lastNameRoll]}`;
      break;

    case `Human - Damaran`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesHumanDamaranMale.length
        );
        result += `${namesHumanDamaranMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesHumanDamaranFemale.length
        );
        result += `${namesHumanDamaranFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(
        Math.random() * namesHumanDamaranSurname.length
      );
      result += `${namesHumanDamaranSurname[lastNameRoll]}`;
      break;

    case `Human - Illuskan`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesHumanIlluskanMale.length
        );
        result += `${namesHumanIlluskanMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesHumanIlluskanFemale.length
        );
        result += `${namesHumanIlluskanFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(
        Math.random() * namesHumanIlluskanSurname.length
      );
      result += `${namesHumanIlluskanSurname[lastNameRoll]}`;
      break;

    case `Human - Mulan`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(Math.random() * namesHumanMulanMale.length);
        result += `${namesHumanMulanMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesHumanMulanFemale.length
        );
        result += `${namesHumanMulanFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(Math.random() * namesHumanMulanSurname.length);
      result += `${namesHumanMulanSurname[lastNameRoll]}`;
      break;

    case `Human - Rashemi`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesHumanRashemiMale.length
        );
        result += `${namesHumanRashemiMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesHumanRashemiFemale.length
        );
        result += `${namesHumanRashemiFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(
        Math.random() * namesHumanRashemiSurname.length
      );
      result += `${namesHumanRashemiSurname[lastNameRoll]}`;
      break;

    case `Human - Shou`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(Math.random() * namesHumanShouMale.length);
        result += `${namesHumanShouMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(Math.random() * namesHumanShouFemale.length);
        result += `${namesHumanShouFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(Math.random() * namesHumanShouSurname.length);
      result += `${namesHumanShouSurname[lastNameRoll]}`;
      break;

    case `Human - Tethyrian`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesHumanTethyrianMale.length
        );
        result += `${namesHumanTethyrianMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesHumanTethyrianFemale.length
        );
        result += `${namesHumanTethyrianFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(
        Math.random() * namesHumanTethyrianSurname.length
      );
      result += `${namesHumanTethyrianSurname[lastNameRoll]}`;
      break;

    case `Human - Turami`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(Math.random() * namesHumanTuramiMale.length);
        result += `${namesHumanTuramiMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesHumanTuramiFemale.length
        );
        result += `${namesHumanTuramiFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(Math.random() * namesHumanTuramiSurname.length);
      result += `${namesHumanTuramiSurname[lastNameRoll]}`;
      break;

    case `Orc`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(Math.random() * namesOrcMale.length);
        result += `${namesOrcMale[firstNameRoll]}`;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(Math.random() * namesOrcFemale.length);
        result += `${namesOrcFemale[firstNameRoll]}`;
      }
      break;

    case `Tiefling`:
      namedBy = Math.trunc(Math.random() * 18) + 1;

      if (namedBy <= 6) {
        firstNameRoll = Math.trunc(Math.random() * namesTieflingVirtue.length);
        result += `${namesTieflingVirtue[firstNameRoll]} `;
      } else {
        if (gender === `Male`) {
          firstNameRoll = Math.trunc(Math.random() * namesTieflingMale.length);
          result += `${namesTieflingMale[firstNameRoll]} `;
        } else if (gender === `Female`) {
          firstNameRoll = Math.trunc(
            Math.random() * namesTieflingFemale.length
          );
          result += `${namesTieflingFemale[firstNameRoll]} `;
        }
      }

      break;

    default:
      break;
  }

  return `<li>${result}</li>`;
};

const getNPCParents = function (race) {
  let parents = ``;
  let roll = 0;
  switch (race) {
    case `Half-Elf`:
      roll = Math.trunc(Math.random() * parentsHalfElf.size) + 1;
      for (const [k, v] of parentsHalfElf) {
        if (roll <= k) {
          parents += parentsHalfElf.get(k);
          break;
        }
      }
      break;
    case `Half-Orc`:
      roll = Math.trunc(Math.random() * parentsHalfElf.size) + 1;
      for (const [k, v] of parentsHalfOrc) {
        if (roll <= k) {
          parents += parentsHalfOrc.get(k);
          break;
        }
      }
      break;
    case `Tiefling`:
      roll = Math.trunc(Math.random() * parentsHalfElf.size) + 1;
      for (const [k, v] of parentsTiefling) {
        if (roll <= k) {
          parents += parentsTiefling.get(k);
          break;
        }
      }
      break;

    default:
      roll = Math.trunc(Math.random() * parentsOther.size) + 1;
      for (const [k, v] of parentsOther) {
        if (roll <= k) {
          parents += parentsOther.get(k);
          break;
        }
      }
      break;
  }
};

const getSimpleAppearance = function () {
  const roll = Math.trunc(Math.random() * randomNPCAppearance.size) + 1;
  return `<li>${randomNPCAppearance.get(roll)}</li>`;
};

const getNPCHighAbility = function () {
  const roll = Math.trunc(Math.random() * randomNPCHighAbility.size) + 1;
  const getAdjective =
    Math.trunc(Math.random() * randomNPCHighAbility.get(roll).length - 1) + 1; // Get an index from 1 to 3, skipping the unwanted 0th item.
  return [
    randomNPCHighAbility.get(roll)[0],
    `<li>${randomNPCHighAbility.get(roll)[getAdjective]}</li>`,
  ];
};

const getNPCLowAbility = function (highAbility) {
  const roll = Math.trunc(Math.random() * randomNPCLowAbility.size) + 1;
  const getAdjective =
    Math.trunc(Math.random() * randomNPCLowAbility.get(roll).length - 1) + 1;

  if (randomNPCLowAbility.get(roll)[0] === highAbility) {
    return getNPCLowAbility(highAbility);
  }
  return [
    randomNPCLowAbility.get(roll)[0],
    `<li>${randomNPCLowAbility.get(roll)[getAdjective]}</li>`,
  ];
};

const getNPCTalent = function () {
  const roll = Math.trunc(Math.random() * randomNPCTalents.size) + 1;
  return `<li>${randomNPCTalents.get(roll)}</li>`;
};

const getNPCMannerism = function () {
  const roll = Math.trunc(Math.random() * randomNPCMannerisms.size) + 1;
  return `<li>${randomNPCMannerisms.get(roll)}</li>`;
};

const getNPCInteractionTrait = function () {
  const roll = Math.trunc(Math.random() * randomNPCInteractionTraits.size) + 1;
  return `<li>${randomNPCInteractionTraits.get(roll)}</li>`;
};

const getNPCIdeal = function () {
  let result = ``;

  const rollGNE = Math.trunc(Math.random() * 3);
  const rollLNC = Math.trunc(Math.random() * 3);
  const firstRoll = Math.trunc(Math.random() * 6);
  const secondRoll = Math.trunc(Math.random() * 6);

  switch (rollLNC) {
    case 0:
      result += `<li>Lawful: ${randomNPCIdeals.get(`Lawful`)[secondRoll]}</li>`;
      break;
    case 1:
      result += `<li>Neutral: ${randomNPCIdeals.get(`Other`)[secondRoll]}</li>`;
      break;
    case 2:
      result += `<li>Chaotic: ${
        randomNPCIdeals.get(`Chaotic`)[secondRoll]
      }</li>`;
      break;
    default:
      break;
  }

  switch (rollGNE) {
    case 0:
      result += `<li>Good: ${randomNPCIdeals.get(`Good`)[firstRoll]}</li>`;
      break;
    case 1:
      result += `<li>Neutral: ${
        randomNPCIdeals.get(`Neutral`)[firstRoll]
      }</li>`;
      break;
    case 2:
      result += `<li>Evil:  ${randomNPCIdeals.get(`Evil`)[firstRoll]}</li>`;
      break;
    default:
      break;
  }

  return `${result}`;
};

const getNPCBond = function () {
  const roll = Math.trunc(Math.random() * randomNPCBonds.size) + 1;

  if (roll === 10) {
    const firstRoll = Math.trunc(Math.random() * randomNPCBonds.size - 1) + 1;
    const secondRoll = Math.trunc(Math.random() * randomNPCBonds.size - 1) + 1;
    return `<li>${randomNPCBonds.get(firstRoll)}, ${randomNPCBonds.get(
      secondRoll
    )}</li>`;
  }

  return `<li>${randomNPCBonds.get(roll)}</li>`;
};

const getNPCFlaw = function () {
  const roll = Math.trunc(Math.random() * randomNPCFlaws.size) + 1;
  return `<li>${randomNPCFlaws.get(roll)}`;
};

const getNPCBackground = function () {
  const roll = Math.trunc(Math.random() * backgrounds.keys().length);
  return `<li>${backgrounds.get(backgrounds.keys()[roll])}</li>`;
};

btnGenerateSimpleNPC.addEventListener(`click`, generateSimpleNPC);
btnGenerateComplexNPC.addEventListener(`click`, generateComplexNPC);
