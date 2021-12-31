"use strict";
// Random NPC Tables
// Race stuff
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
  [4, `Illluskan`],
  [5, `Mulan`],
  [6, `Rashemi`],
  [7, `Shou`],
  [8, `Tethyrian`],
  [9, `Turami`],
]);
// Name stuff
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
  ``,
  ``,
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

const resultsDiv = document.querySelector(`.results`);
const btnGenerateRandomNPC = document.querySelector(`.btnGenerateRandomNPC`);

const generateSimpleNPC = function () {
  const race = getNPCRace();
  const trimmedRace = race.slice(4, -5);
  const gender = getNPCGender();
  const trimmedGender = gender.slice(4, -5);
  const name = getNPCName(trimmedRace, trimmedGender);
  const appearance = getSimpleAppearance();
  const highScore = getNPCHighAbility();
  const lowScore = getNPCLowAbility();
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
    ${appearance}
    ${highScore}
    ${lowScore}
    ${talent}
    ${mannerism}
    ${interactionTrait}
    ${ideal}
    ${bond}
    ${flaw}
    </ul>
  `;
};
const getNPCRace = function () {
  const roll = Math.trunc(Math.random() * randomNPCRace.size) + 1;

  if (randomNPCRace.get(roll) === `Human`) {
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
      } else {
        result += getNPCName(`Elf`, gender);
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
        result += getNPCName(`Human - ${randomHumanType.get(namedBy)}`, gender);
        result += ` (${getNPCName(`Orc`, gender)})`;
      } else {
        result += getNPCName(`Orc`, gender);
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
        result += `${namesDragonbornFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(
        Math.random() * namesHumanCalishiteSurname.length
      );
      result += `${namesHumanCalishiteSurname[lastNameRoll]}`;
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
          firstNameRoll = Math.trunc(Math.random() * namesTeiflingMale.length);
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

const getSimpleAppearance = function () {
  const roll = Math.trunc(Math.random() * randomNPCAppearance.size) + 1;
  return `<li>${randomNPCAppearance.get(roll)}</li>`;
};

const getNPCHighAbility = function () {
  const roll = Math.trunc(Math.random() * randomNPCHighAbility.size) + 1;
  const getAdjective = Math.trunc(
    Math.random() * randomNPCHighAbility.get(roll).length
  );
  return `<li>${randomNPCHighAbility.get(roll)[getAdjective]}</li>`;
};

const getNPCLowAbility = function () {
  const roll = Math.trunc(Math.random() * randomNPCLowAbility.size) + 1;
  const getAdjective = Math.trunc(
    Math.random() * randomNPCLowAbility.get(roll).length
  );
  return `<li>${randomNPCLowAbility.get(roll)[getAdjective]}</li>`;
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
      result += `<li>Other: ${randomNPCIdeals.get(`Other`)[secondRoll]}</li>`;
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

btnGenerateRandomNPC.addEventListener(`click`, generateSimpleNPC);
