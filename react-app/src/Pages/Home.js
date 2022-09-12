import SearchBar from '../Components/SearchBar'; 
import GenreBar from '../Components/GenreBar';
import ScoreBar from '../Components/ScoreBar'; 
import ProducerBar from '../Components/ProducerBar';
import anime_name from '../anime.json';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './Home.css';
import axios from 'axios';
const Home = () => {
    const genres = ['7.18R Million Live!', 'Action', 'Adventure', 'Cars', 'Comedy', 'Dementia', 'Demons', 'Drama', 'Ecchi', 'Fantasy', 'Game', 
    'Harem', 'Hentai', 'Historical', 'Horror', 'Josei', 'Kids', 'Magic', 'Martial Arts', 'Mecha', 'Military', 'Music', 'Mystery', 'Parody', 'Police', 
    'Psychological', 'Romance', 'Samurai', 'School', 'Sci-Fi', 'Seinen', 'Shoujo', 'Shoujo Ai', 'Shounen', 'Shounen Ai', 'Slice of Life', 'Space', 'Sports', 
    'Super Power', 'Supernatural', 'Thriller', 'Unknown', 'Vampire', 'Yaoi', 'Yuri'];
    const studios = ['Gauge','12 Diary Holders','1IN ','1st PLACE ','1theK ','2: AM Animation ', 
    '33 Collective ','3xCube ','4Kids Entertainment','5 Inc. ','5pb. ','1 Produce ',
    'bit ','A-1 Pictures ','A-Craft ','A-Line ','A-Real ','A-Sketch ','A.C.G.T. ','A3 ',
    'ABC Animation ','Abe Shuuji Jimusho ','AbemaTV ','AC Create ','AC-Bu ','Academy Productions ',
    'ACC Production ','Acca effe ','ACiD FiLM ','Actas ','Active ','ADK ','ADK Emotions ','ADK Marketing Solutions ',
    'Adores ','Adult Source Media ','ADV Films ','Advance Syakujii ','Aeon Entertainment ','AG-ONE ','Age ','Age Global Networks ',
    'Agent 21 ','AHA Entertainment ','Ai Addiction ','Ai ga areba Daijobu ','Ai Si Animation Studio ','AIC ','AIC ASTA ','AIC Build ',
    'AIC Classic ','AIC Frontier ','AIC PLUS+ ','AIC Rights ','AIC Spirits ','AIC Takarazuka ','Aikikaku Center ','AIR AGENCY ','Ajia-Do ',
    'Akabanten ','AKABEiSOFT2 ','Akatsuki ','Akita Shoten ','AKOM ','Albacrow ','Alchemist ','Alchemy Bros. ','Allure ','Alpha Animation ',
    'Alpha Group Co. Ltd. ','Alpha Pictures ','Amber Film Works ','AMG Entertainment ','AMG MUSIC ','Amino ','Amuse ','Amuse Pictures ','Amusement Media Academy ',
    'An DerCen ','AN Entertainment ','Anchor Bay Films ','Angelfish ','ANIDO FILM ','ANIK ','Anima ','Anima&Co. ','Animac ','AniMan ','Animaruya ','animate ',
    'animate Film ','Animatic ','Animation 21 ','Animation Do ','Animation Lab Japan ','Animation Planet ','Animation Staff Room ','Animatsu Entertainment ',
    'Animax ','Anime Antenna Iinkai ','Anime Beans ','Anime Consortium Japan ','Anime Friend ','Anime Midstream ','Anime R ','AnimEigo ','Aniplex ','Aniplex of America ',
    'Ankama ','Ankama Animations ','Annapuru ','Anon Pictures ','Anpro ','Aoi Studio ','AOMG ','Aoni Entertainment ','Aoni Production ','APDREAM ','Apollon ',
    'APPP ','AQUA ARIS ','Aquamarine ','AQUAPLUS ','Arcs Create ','Arcturus ','ARECT ','Ark ','arma bianca ','Armor ','Arms ','Arplants ','Arquebuse ',
    'Artist Management Office ','Artland ','Artmic ','Arts Magic ','Arvo Animation ','Asahi Broadcasting ','Asahi Production ','Asahi Shimbun ','Asatsu DK ',
    'Ascension ','ASCII Media Works ','Asgard ','Ashi Production ','Ashisuto ','ASIA Documentary Productions ','ASK Animation Studio ','Asmik Ace ','asread. ',
    'Assez Finaud Fabric ','Asura Film ','AT-2 ','AT-X ','Atelier Musa ','AtelierPontdarc ','Atlus ','Aubec ','Audio Graphics Institute ','Audio Highs ',
    'Audio Planning U ','Audio Tanaka ','Aurum Production ','Automatic Flowers Studio ','Avaco Creative Studios ','Avex Entertainment ','Avex Pictures ',
    'Avex Technologies ','AXsiZ ','AYCO ','AZ Creative ','Azeta Pictures ','Azumaker ','B&T ','B.CMAY PICTURES ','Bakken Record ','Baku Enterprise ','Bandai ',
    'Bandai Channel ','Bandai Entertainment ','Bandai Namco Arts ','Bandai Namco Entertainment ','Bandai Namco Games ','Bandai Namco Live Creative ','Bandai Namco Online ',
    'Bandai Namco Pictures ','Bandai Namco Rights Marketing ','Bandai Spirits ','Bandai Visual ','Bandai Visual USA ','Banpresto ','Baramiri ','Barnum Studio ','BEAM Entertainment ',
    'Beat Frog ','Bee Media ','Bee Train ','BeeWorks ','Beijing Enlight Pictures ','Beijing Huihuang Animation Company ','Beijing IMMG ','Beijing Rocen Digital ',
    'Beijing Sharaku Art ','Beijing Sunchime Happy Culture Company ','Being ','Benesse Corporation ','Benlai Pictures ','BeSTACK ','Beyond C. ','Bianyue Culture ',
    'Bibury Animation Studios ','Big Bang ','Big West ','BIGFACE ','BigFireBird Animation ','BIGLOBE ','bilibili ','Bishop ','Bit grooove promotion ','Bit Promotion ',
    'Bitgang ','blackflag ','Blade ','Bliss Pictures ','BloomZ ','Blue Cat ','Blue Eyes ','Blue Impact ','BMG Japan ','BOMB! CUTE! BOMB! ','Bones ','BookLive ','BOOTLEG ',
    'Borutong ','Bouncy ','Boyan Pictures ','Brains Base ','Brave group ','Brave Hearts ','BreakBottle ','Bridge ','Brio Animation ','Broccoli ','BS Asahi ','BS Fuji ',
    'BS Japan ','BS NTV ','BS-i ','BS-TBS ','BS11 ','Buemon ','BUILD DREAM ','Bulls Eye ','Bungeishunjuu ','Bushiroad ','Bushiroad Move ','Bushiroad Music ','Buzz Wave ',
    'Byakuya Shobo ','BYMENT ','C & I entertainment ','C-one ','C-Station ','C2C ','CA-Cygames Anime Fund ','Cafe de Jeilhouse ','Calf Studio ','Cammot ','CANDY BOX ',
    'Capcom ','Carp Studio ','Casio Entertainment ','CBC Radio ','CBC Television ','CBS ','CCTV Animation ','CEKAI ','Celsys ','Central Park Media ','CG Year ',
    'CGCG Studio ','CHANCE iN ','Chaos Project ','chara-ani.com ','Charaction ','CherryLips ','Chiba TV ','ChiChinoya ','Childrens Playground Entertainment ',
    'China Animation Characters ','China Film Animation ','China Literature Limited ','Chippai ','Chiptune ','Christmas Holly ','Chrono Gear Creative ',
    'ChuChu ','Chugai Mining ','Chukong Technologies ','Chukyo TV Broadcasting ','Chungeorahm Film ','Chuubu Nihon Kyouei ','CIC ','Cinelicious Pics ',
    'Cinema Tohoku ','CinePix ','Circle Tribute ','CLAP ','Clarion ','Cloud22 ','CloverWorks ','CMAY Animation ','Coamix ','Coastline Animation Studio ',
    'Cocoro Free ','Code ','Collaboration Works ','COLOPL ','Colored Pencil Animation ','Comic Animation ','Comic Umenohone ','comico ','COMICSMART ',
    'CoMix Wave Films ','Company AZA ','Composition Inc. ','Comstock, Ltd. ','Congzhuo Animation ','Connect ','Contents Seed ','Cookie Jar Entertainment ',
    'Coolism Productions ','Cosmic Ray ','Cosmos ','Cospa ','Cotton Doll ','Craftar Studios ','Cranberry ','Creative Bridge ','Creative Power Entertaining ',
    'Creators Dot Com ','Creators in Pack ','Creatures Inc. ','Creek & River ','CREi ','Crimson Star Media ','Critical Mass Video ','Cromea ','Crossphere ','Crown Records ',
    'Crunchyroll ','Crunchyroll SC Anime Fund ','CTW ','CUCURI ','Culture Entertainment ','Culture Publishers ','CyberAgent ','CyberConnect2 ','CyberStep ','Cyclone Graphics ',
    'Cygames ','CygamesPictures ','D & D Pictures ','d-rights ','D-techno ','D.A.S.T. ','D.N. Dream Partners ','D3 ','Da Huoniao Donghua ','Daewon Media ','Dai Nippon Printing ',
    'Dai-Ichi Douga ','Daiei ','Daiichi Shokai ','Daiichikosho ','Daiko ','Dancing CG Studio ','DandeLion Animation Studio ','Dangun Pictures ','Darts ','Datam Polystar ',
    'Datama Film ','Daume ','David Production ','Dawn Animation ','DAX Production ','Dazzling Star ','Dear Stage inc. ','Decovocal ','Deho Gallery ','Delfi Sound ',
    'Delight Animation ','Delightworks ','DeNA ','Dentsu ','Dentsu Eigasha Tokyo ','Dentsu Entertainment USA ','Dentsu Meitetsu Communications ','Dentsu Razorfish ',
    'Dentsu Tec ','Design Factory ','DiC Entertainment ','Digital Frontier ','Digital Media Lab ','Digital Network Animation ','Digital Works ','Digiturbo ','Diomedéa ',
    'Directions ','Discotek Media ','Discovery ','DIVE II Entertainment ','Diwphalanx Records ','DJI ','Djinn Power ','DLE ','DMM Music ','DMM pictures ','DMM.com ',
    'DMM.com Labo ','DMM.futureworks ','Docomo Anime Store ','Doga Kobo ','DOGA Productions ','Dokidoki Factory ','domerica ','Dongwoo A&E ','Dongyang Animation ',
    'Donuts ','DR Movie ','Drawing and Manual ','DRAWIZ ','Dream Creation ','Dream Entertainment ','Dream Force ','Dream Shift ','DreamWorks ','Drecom ','Drive ',
    'drop ','Duckbill Entertainment ','dugout ','Durufix ','Dwango ','Dwango Music Entertainment ','dwarf ','Dynamic Planning ','Dynamo Pictures ','E&G Films ',
    'e-notion ','Earth Design Works ','Earth Star Entertainment ','eBooK Initiative Japan ','EBS ','Echo ','Echoes ','EDGE ','Egg ','Egg Firm ','eigoMANGA ',
    'Eiken ','EKACHI EPILKA ','Ekakiya ','Ekura Animal ','ElectromagneticWave ','Eleven Arts ','ELF-IN ','EMI ','Emon ','EMT Squared ','Encourage Films ','ENGI ',
    'Enishiya ','Enjin Productions ','Enoki Films ','ensky ','entama ','Enterbrain ','Epicross ','Epoch ','Eswood ','Ether Kitten ','Evil Line Records ',
    'Exa International ','Exit Tunes ','EXNOA ','Eye Move ','Ezόla ','F.M.F ','f4samurai ','FABTONE ','Fairy Dust ','famima.com ','Fan Company ','FanFan Inc. ',
    'Fanworks ','FBC ','feel. ','Felicity ','Felix Film ','feng ','Fenz ','Fields ','Fifth Avenue ','Film Workshop ','Filmlink International ','FILMONY ',
    'FIREBUG ','Five Ways ','FLAGSHIP LINE ','Flat Studio ','Flatiron Film Company ','Flavors Soft ','Flex Comix ','flying DOG ','foodunited. ',
    'Forecast Communications ','FOREST Hunting One ','Fosun Entertainment Japan ','Four Some ','Free-Will ','Frencel ','Friendly Land ','Front Line ',
    'Front Wing ','Frontier Works ','Fuji Creative ','Fuji TV ','Fuji Video ','Fuji&gumi Games ','Fujiko F. Fujio Pro ','Fujimi Shobo ','Fujio Production ',
    'Fujipacific Music ','Fujishouji ','FUJIYAMA PROJECT JAPAN ','Fukuoka Broadcasting System ','Fukushima Gaina ','Funimation ','FuRyu ','Futabasha ',
    'FUTURE LEAP ','Future Planet ','G holdings ','G&G Entertainment ','G-angle ','G-Lam ','G-mode ','GAGA ','Gaina ','Gainax ','Gainax Kyoto ','Gakken ',
    'Gakken Eigakyoku ','Gallop ','Gambit ','Gamegate ','GANSIS ','Garden Culture ','GARDEN LODGE ','Gathering ','GDH ','GEEK TOYS ','Geidai Animation ',
    'Geijutsu Eigasha ','GEMBA ','GEN Productions ','Genei ','Genco ','Gendai Production ','Geneon Entertainment USA ','Geneon Universal Entertainment ','Genie Music ',
    'Geno Studio ','Gentosha Comics ','GIFTanimation ','Giga Production ','Gigno Systems ','gimik ','Ginga Ya ','GKIDS ','Glams ','Global Solutions ','Glovision ',
    'GODxDOG Production ','GoGo Visual Planning ','GoHands ','Gold Bear ','Gonzo ','Good Smile Company ','Good Smile Film ','GOON TRAX ','Gosay Studio ',
    'Graduate School of Film Producing ','GRANTdesign ','Graphinica ','Grasshoppa! ','GREE ','GREE Entertainment ','Green Bunny ','Green Monster Team ',
    'Greenwood ','GRIZZLY ','Grom ','Grooove ','Group TAC ','Grouper Productions ','Guton Animation Studio ','GYAO! ','Gyorai Eizo Inc. ','Gzbrain ',
    'Hai An Xian Donghua Gongzuo Shi ','Hakoniwa Academy Student Council ','Hakuhodo ','Hakuhodo DY Media Partners ','Hakuhodo DY Music & Pictures ',
    'Hakusensha ','Hal Film Maker ','Half H.P Studio ','Haoliners Animation League ','Happinet ','Happinet Pictures ','Happy Elements ','Harappa ',
    'Harmony Gold ','Hasbro ','Hawkeye ','Hayakawa Shobou ','Heart Company ','HeART-BIT ','Heewon Entertainment ','Heiwa ','helo.inc ','Hero Communication ',
    'Heroz ','Hexagon Pictures ','HIDEHOMARE ','Higa Brothers Production ','High Kick Entertainment ','Highlights Entertainment ','Hikari TV ',
    'Himajin Planning ','Himeyuri Alumnae Incorporated Foundation ','Hipland Music Corporation ','Hirameki International ','Hiro Media ','Hiroshi Planning ',
    'Hiroshima Television ','Hisashishi Videos ','HJ Holdings ','HOBBY BASE Yellow Submarine ','Hobby Japan ','Hobi Animation ','Hobibox ','Hochi Shimbun ',
    'Hokkaido Azmacy ','Hokkaido Cultural Broadcasting ','Hololive Production ','Hoods Drifters Studio ','Hoods Entertainment ','Horannabi ',
    'Horgos Coloroom Pictures Co., Ltd. ','HoriPro ','HoriPro International ','HORNETS ','Hoso Seisaku Doga ','Hot Bear ','Hotline ','HOTZIPANG ',
    'Houbunsha ','HS Pictures Studio ','Hulu ','Husio Studio ','I was a Ballerina ','I Will ','Im Enterprise ','I-move ','I.Gzwei ','I.Toon ','i0+ ',
    'ibis Capital Partners ','Ichigo Animation ','Ichijinsha ','Idea Factory ','Idol ','iDRAGONS Creative Studio ','ILCA ','Illumitoon Entertainment ',
    'Ima Group ','Image House ','Image Kei ','Imagi ','Imagica ','Imagica Imageworks ','IMAGICA Lab. ','Imagica West ','Imagin ','ImaginAsian Entertainment ',
    'Imagine ','Imagineer ','Include P.D. ','INCS toenter ','Indeprox ','Index ','indigo line ','Indivision ','Infinite ','ING ','Innocent Grey ','International Digital Artist ',
    'Inugoya ','iQIYI ','Irawias ','Ishikawa Pro ','Ishimori Entertainment ','Ishimori Pro ','Issen ','its ','Itasca Studio ','Iwatobi High School Swimming Club ','ixtl ',
    'Iyasakadou Film ','J.C.Staff ','Jade Animation ','Jam ','Japan Home Video ','Japan Sleeve ','Japan Taps ','Japan Vistec ','Japan Volleyball Association ',
    'JapanAnime ','Jay Zone Comic ','JCF ','jeux deau ','Jichitai Anime ','Jidaigeki Channel ','Jinnan Studio ','Jinnis Animation Studios ','JJJOY Animation Studios ',
    'JM Animation ','Joker Films ','JP Room ','JR East Marketing & Communications ','JTB Entertainment ','JTB Next Creation ','Jules Bass ','Jumondo ','Jumonji ',
    'Just Production ','JY Animation ','K-Factory ','Kaca Entertainment ','Kachidoki Studio ','Kadokawa ','Kadokawa Animation ','Kadokawa Contents Gate ',
    'Kadokawa Daiei Studio ','Kadokawa Games ','Kadokawa Haruki Corporation ','Kadokawa Media  ','Kadokawa Media House ','Kadokawa Pictures Japan ','Kadokawa Pictures USA ',
    'Kadokawa Shoten ','Kaeruotoko Shokai ','KAGAYA Studio ','Kaibutsu ','Kakao Japan ','Kamikaze Douga ','Kamio Japan ','Kamitsubaki Studio ','Kanaban Graphics ','Kanade Creative ',
    'Kaname Productions ','Kanetsu Investment ','Kanon Sound ','Kansai Telecasting ','Karaku ','Karasfilms ','Kate Arrow ','Katsudou-manga-kan ','Kawade Shobo Shinsha ',
    'Kawamoto Productions ','Kazami Gakuen Koushiki Douga-bu ','Kazuki Production ','KBS ','KDDI ','Keica ','Keisei Electric Railway ','KEN ON ','Kenji Studio ','KENMedia ',
    'Ketchup Entertainment ','KeyEast ','Khara ','Ki/oon Music ','Kids Station ','Kinema Citrus ','King Bee ','King Records ','Kino Production ','Kinoshita Group Holdings ',
    'Kinoshita Koumuten ','Kinoshita Management ','Kinyosha ','Kitty Film Mitaka Studio ','Kitty Films ','Kitty Media ','Kiyosumi High School Mahjong Club ','KIZAWA Studio ',
    'KJJ Animation ','KLab ','KlockWorx ','KMMJ Studios ','Knack Animation ','Knack Productions ','Kobunsha ','Kodansha ','Koei ','Koei Tecmo Games ',
    'Kojiro Shishido Animation Works ','Kokusai Eigasha ','Konami ','Konami Digital Entertainment ','KOO-KI ','Korean Academy of Film Arts ','Kotobukiya ','KSS ',
    'Kujou-kun no Bonnou wo Mimamoru-kai ','Kuri Jikken Manga Kobo ','Kyodo Eiga ','Kyoraku Industrial Holdings ','Kyoto Animation ','Kyotoma ','Kyowa Film ','l-a-unch・BOX ',
    'L. ','Lambert ','LandQ studios ','Langmaor ','Lantis ','Lapin Track ','Lapis ','Larx Entertainment ','Lastrum Music ','Lawson ','Lawson Entertainment ',
    'Lawson HMV Entertainment ','Lay-duce ','L²Studio ','Legs ','Lemon Heart ','Lerche ','Lesprit ','Level-5 ','LEVELS ','Liber Entertainment ','Liberty Animation Studio ',
    'Libre ','LICO ','Lide ','LIDENFILMS ','LIDENFILMS Kyoto Studio ','LIDENFILMS Osaka Studio ','Life Work ','Light Chaser Animation Studios ','Lilix ','LINE Corporation ',
    'Ling San Wu Donghua ','LinkedBrain ','Links ','Live Viewing Japan ','Live2D Creative Studio ','Liverpool ','LMD ','Lucent Pictures Entertainment ','Lucky Paradise ',
    'Lune Pictures ','Lute ','LX Animation Studio ','m.o.e. ','M.S.C ','Maboroshi Koubou ','Mad Box ','Madhouse ','Mag Garden ','MAGES. ','Magia Doraglier ','Magic Bus ',
    'Magic Capsule ','Magic Lantern Film ','Magma Studio ','MAGNET ','Maho Film ','Maiden Japan ','Maikaze ','Mainichi Broadcasting System ','Mainichi Shimbun ','Majin ',
    'Making Animation ','Manga Entertainment ','Manga Productions ','Manglobe ','MAPPA ','Marine Entertainment ','Maro Studio ','Marone ','Maru Production ','Marubeni ',
    'Marui Group ','Marvel Entertainment ','Marvelous ','Marvelous AQL ','Marvy Jack ','Mary Jane ','Marza Animation Planet ','MASTER LIGHTS ','MAT ','Mattel Creations ',
    'Maxell E-Cube ','Maxilla ','MAZRI ','Möbius Tone ','Media Blasters ','Media Castle ','Media Do ','Media Factory ','Media Rings ','Mediabank ','MediaLink Entertainment Limited ',
    'MediaNet ','MediaNet Pictures ','Medicos Entertainment ','Medicrie ','Meiji Seika ','Mellow Head ','Melonbooks ','Memory-Tech ','Meruhensha ','Micro Magazine Publishing ',
    'Midorimatsu ','MiHoYoAnime ','Milestone Music Publishing ','Mili Pictures ','Milkshake ','Milky Animation Label ','Milky Cartoon ','Mill Creek Entertainment ','Millepensee ',
    'Mime Corporation ','Mimoid ','Minakata Laboratory ','Minami Machi Bugyousho ','Ministry of the Navy ','Mippei Eigeki Kiryuukan ','Miracle Bus ','Miracle Robo ','Mirai Film ',
    'Mirai Records ','Mirai-Kojo ','Miraicha Records ','Miramax Films ','Misseri Studio ','Mistral Japan ','Mitsubishi ','Mixer ','Miyagi Television Broadcasting ',
    'Miyazaki Broadcasting ','MK Pictures ','MMDGP ','MMT Technology ','Mobcast ','Mokai Technology ','monofilmo ','Monomusik ','Monsters Egg ','MooGoo ','Mook Animation ',
    'Mook DLE ','Moonbell ','Moonstone Cherry ','MORIE Inc. ','Moss Design Unit ','Motion Magic ','Mousou Senka ','Movic ','MS Pictures ','Muse Communication ','Muse International ',
    'Mushi Production ','Music Rayn ','My Theater D.D. ','Myrica Music ','Myung Films ','N&G Production ','NADA Holdings ','Nagoya Broadcasting Network ','Nakamura Production ',
    'Namisokan ','Namu Animation ','Natural High ','Naver Webtoons ','NAZ ','NBCUniversal Entertainment Japan ','NEC Avenue ','Neft Film ','Nelke Planning ','Nelvana ','NetEase ',
    'Netflix ','Network ','Network Kouenji Studio ','New Generation ','NewGin ','Nexon ','Next ','Next Media Animation ','Nexus ','NHK ','NHK Enterprises ',
    'NHK-BS2 ','NHN PlayArt ','NIANTIC ','Nice Boat Animation ','Nichiei Agency ','NichiNare ','Nichion ','Nihikime no Dozeu ','Nihon Ad Systems ','Nihon Eizo ',
    'Nihon Falcom ','Nihon Hoso Eigasha ','Nihon Keizai Koukokusha ','Nikkatsu ','Nikkatsu Mukojima ','Nintendo ','Nintendo of America ','Nippon Animation ','Nippon Columbia ',
    'Nippon Cultural Broadcasting ','Nippon Ichi Software ','Nippon Ramayana Film Co. ','Nippon Shuppan Hanbai  K.K. ','Nippon Television Music ','Nippon Television Network ',
    'NIS America, Inc. ','Nishiki Studio ','Nishinippon Broadcasting ','Nitroplus ','Nobel ','Nomad ','Noovo ','North Stars Pictures ','Nostalook ','Notes ','NOTTV ','Nozomi Entertainment ','NTT Docomo ','NTT Plala ','Nur ','Nut ','NuTech Digital ','NYAV Post ','OB Planning ','Obtain Future ','OCC ','October Media ','Oddjob ','Odolttogi ','Office AO ','Office DCI ','Office ENDLESS ','Office No.  ','Office Nobu ','Office Take Off ','Office Takeout ','Oh! Production ','Okuruto Noboru ','OLE-M ','Olive Studio ','OLM ','OLM Digital ','Omnibus Japan ','On The Run ','On-Lead ','ONEMUSIC ','Ongaq ','Onionskin ','Opera House ','ORADA COMPANY ','Orange ','Orchid Seed ','Ordet ','ORENDA ','Original Dream ','Original Force ','Orix ','Osaka University of Arts ','Otogi Production ','Overlap ','Oxybot ','OZ ','Oz Inc. ','P Productions ','P-Vine Records ','P.A. Works ','P.I.C.S. ','Painting Dream ','Palm Studio ','Panasonic Digital Contents ','Pancake ','Panda Factory ','Panmedia ','PansonWorks ','Paper Animation ','Paper Plane Animation Studio ','Parco ','Pashmina ','Passione ','Pastel ','Pazzy Entertainment ','Pb Animation Co. Ltd. ','Peak Hunt ','Pencil ','Penta Show Studios ','PERIMETRON ','Peter Pan Creation ','pH Studio ','Phoenix Entertainment ','Pia ','Picante Circus ','Picograph ','Picona ','Picture Magic ','Pie in the sky ','Pied Piper ','Pierrot Plus ','Piko Studio ','Pine Jam ','Pink Pineapple ','Pioneer LDC ','Piso Studio ','Pixy ','Planet ','Planet Nemo Animation ','Platinum Vision ','Plum ','Plus Heads ','Plus One ','Potial ','Point Pictures ','Pollyanna Graphics ','Poly Animation ','Polygon Magic ','Polygon Pictures ','Polygram Japan ','Poncotan ','PONOS Corporation ','Pony Canyon ','Pony Canyon Enterprise ','Ponycan USA ','PoPoCo ','Pops Inc. ','PoRO ','Postgal Workshop ','PPM ','PPP ','PRA ','Presidio ','Primastea ','PrimeTime ','Procidis ','Production +h. ','Production Ace ','Production D.M.H ','production doA ','Production GoodBook ','Production I.G ','Production IMS ','Production Reed ','project lights ','Project No.9 ','Project Team Eikyuu Kikan ','Project Team Sarah ','PSG ','Public & Basic ','Purple Cow Studio Japan ','Puzzle Animation Studio Limited ','Q-Tec ','Qianqi Animation ','Qiying Animation ','QREAZY ','Quad ','Qualia Animation ','Quaras ','Quatre Stella ','Qubic Pictures ','Quebico ','Queen Bee ','Quick Corporation ','Qzil.la ','RAB Aomori Broadcasting ','Rabbit Gate ','Rabbit Machine ','Radio Osaka ','Radix ','Raku High Student Council ','Rakuonsha ','Rakuten ','Rambling Records ','RAMS ','Rankin/Bass ','RAY ','RCC Chugoku Broadcasting ','REALTHING ','Red Dog Culture House ','Reddog Culture House ','Reiki Eyes Animation ','Remic ','Revoroot ','Rex Entertainment ','RG Animation Studios ','Rialto Entertainment ','Right Gauge ','RightTracks ','Rikuentai ','Ripple Film ','Ripromo ','Rironsha ','Rising Force ','RME ','Robot Communications ','Rocen ','Rockwell Eyes ','RoiVisual ','Romanov Films ','Romantica club !! ','Rondo Robe ','Royal Limousine ','RTHK ','Ruby-Spears Productions ','Ruo Hong Culture ','RX-RECORDS ','Ryukyu Asahi Broadcasting ','S-TAR7 ','Saban Brands ','Saban Entertainment ','Saetta ','Saigo no Shudan ','Sakura Color Film ','Sakura Create ','Sakura Motion Picture ','Sakura Production ','SamBakZa ','Sammy ','Samsara Animation Studio ','Samsung ','San-X ','Sanctuary ','Sankyo Planning ','Sanrio ','Sanrio Digital ','Sanyo ','Sanyo Bussan ','SANZIGEN ','Sapporo Television Broadcasting ','Satelight ','Sav! The World Productions ','SB Creative ','SBS TV Production ','Schoolzone ','Science SARU ','SEDIC International ','Sega ','Sega Interactive ','Seikaisha ','SEK Studios ','SELFISH ','Sentai Filmworks ','Seta Corporation ','Seven ','Seven Arcs ','Seven Arcs Pictures ','Seven Stone Entertainment ','Shaft ','Shanghai Animation Film Studio ','Shanghai Foch Film and TV Culture Investment ','Shanghai Hippo Animation ','Shanghai Jump Network Technology ','Shanghai Tiantan Culture & Media ','Sharefun Studio ','Shelty ','Shenying Animation ','Shimogumi ','Shin-Ei Animation ','Shinano Kikaku ','Shinchosha ','Shinkuukan ','Shinshokan ','Shinwon Productions ','Shinyusha ','Shirogumi ','Shizuoka Asahi Television ','Shizuoka Broadcasting System ','Shizuoka Daiichi Television ','Shochiku ','Shochiku Animation Institute ','Shochiku Media Division ','Shochiku Music Publishing ','Shodensha ','Shogakukan ','Shogakukan Music & Digital Entertainment ','Shogakukan-Shueisha Productions ','Shounen Gahousha ','Shout! Factory ','Show Corporation ','Showgate ','Showten ','Shueisha ','Shufunotomo ','Shuka ','Shun Produce ','Shuuhei Morita ','SIDO LIMITED ','Signal.MD ','Silky’s ','Silver ','SILVER LINK. ','SJYNEXCUS ','Skouras ','Sky Perfect Communications ','SKY Perfect Well Think ','SKY PerfecTV! ','Slow Curve ','SME Records ','SME Visual Works ','Smile Company ','Smiral Animation ','Soeishinsha ','Soft Garage ','Soft on Demand ','SoftBank Creative ','SoftCel Pictures ','SoftX ','Sogo Vision ','Sol Blade ','Sola Digital Arts ','Sola Entertainment ','Solid Vox ','Sonilude ','Sony Creative Products ','Sony Interactive Entertainment ','Sony Music Communications ','Sony Music Entertainment ','Sony Music Solutions ','Sony PCL ','Sony Pictures Entertainment ','Sony Pictures Worldwide Acquisitions ','Sotsu ','Sotsu Music Publishing ','Sound Team Don Juan ','Souten no Ken ','Souten Studio ','Sovat Theater ','Soyep ','Soyuzmultfilm ','Space Neko Company ','Space Shower Music ','Spacey Music Entertainment ','Sparkly Key Animation Studio ','Sparky Animation ','SPEED ','Speed Inc. ','Spell Bound ','SPO Entertainment ','Spooky graphic ','Spoon ',
    'Sprite Animation Studios ','Square Enix ','Square Enix Visual Works ','Starchild Records ','Stardust Promotion ','Starry Cube ','Stella Promotion ',
    'Steve N\' Steven ','Stingray ','STORY ','Story Effect ','StoryRiders Co. Ltd. ','Straight Edge ','Strawberry Meets Pictures ','Stray Cats ',
    'Studio 1st ','Studio 3Hz ','Studio 4°C ','Studio  ','Studio 9 Maiami ','Studio A-CAT ','Studio Animal ','Studio Arch Inc. ','Studio AWAKE ',
    'Studio Bind ','Studio Binzo ','Studio Blanc ','Studio Bogey ','Studio CA ','Studio Cab ','Studio Carbuncle ','Studio CHANT ','Studio Chizu ','Studio Coa ','Studio Cockpit ',
    'Studio Colorido ','Studio Comet ','Studio Compile ','Studio Core ','Studio Crocodile ','Studio Curtain ','Studio Dadashow ','Studio Daisy ','Studio Deen ','Studio Deva Loka ','Studio Drive ','Studio DURIAN ','Studio Egg ','Studio elle ','Studio Eromatick ','Studio Fantasia ','Studio Flad ','Studio Flag ','Studio G-1Neo ','Studio GDW ','Studio Ghibli ','Studio Gohan ','Studio Gokumi ','Studio GOONEYS ','Studio Gram ','Studio Guts ','Studio Hakk ','studio hb ','Studio Hibari ','Studio Hokiboshi ','Studio Izena ','Studio Jack ','Studio Jam ','Studio Jemi ','Studio Junio ','Studio Kaab ','Studio Kafka ','Studio Kai ','Studio Kajino ','Studio Kelmadick ','Studio Khronos ','Studio Kikan ','Studio Kingyoiro ','Studio Korumi ','Studio Kuma ','Studio Kyuuma ','Studio LAN ','Studio Liberty ','Studio Lings ','Studio Live ','Studio Lotus ','Studio M2 ','Studio March ','Studio Matrix ','Studio Mausu ','Studio Meditation With a Pencil ','Studio Mir ','Studio Mirai ','Studio Moriken ','studio MOTHER ','Studio MWP ','Studio Nanahoshi ','Studio Nem ','Studio NOIX ','Studio Nuck ','Studio Nue ','Studio OX ','Studio Palette ','Studio Pastoral ','Studio Pierrot ','Studio Ponoc ','Studio Ppuri ','Studio PuYUKAI ','Studio RE:Map ','Studio Rikka ','Studio Saki Makura ','Studio Shamrock ','Studio Shelter ','Studio Sign ','Studio Signal ','Studio Signpost ','Studio Take Off ','Studio Ten Carat ','Studio Tron ','Studio Tulip ','Studio UGOKI ','Studio Unicorn ','Studio VOLN ','Studio W.Baba ','Studio WHO ','Studio Wombat ','Studio World ','Studio Z5 ','Studio Zain ','Studio Zealot ','Studio Zero ','Studio! Cucuri ','studioGONG ','StudioRF Inc. ','SUBARU ','Sublimation ','Success Corp. ','Sugar Boy ','Suiseisha ','Sumitomo ','Sumzap ','Sun TV ','Suna Kouhou ','Sunny Side Up ','Sunrise ','Sunrise Beyond ','Sunrise Music Publishing ','Sunwoo Entertainment ','SUPA LOVE ','Super Brain ','Super Normal Studio ','Super Techno Arts ','Suspenders ','Suzuki Mirano ','syn Sophia ','Synch-Point ','Synergy Japan ','SynergySP ','T-JOY ','T-Rex ','T.O Entertainment ','T.P.O ','Tablier Communications ','Taikong Works ','Takahashi Studio ','Takara ','Takara Tomy A.R.T.S ','Takeshobo ','TAKI Corporation ','Takun Manga Box ','Tama Production ','Tamabi ','tamakoshi ','Tamura Shigeru Studio ','TANOsim ','Taomee ','TAP ','Tapioca ','Tatsunoko Production ','Tavac ','TBS ','TC Entertainment ','TCJ ','TEAM Entertainment Inc. ','Team TillDawn ','Team YokkyuFuman ','teamKG ','Tear Studio ','Teatro Nishi Tokyo Studio ','Tecarat ','Techno Sound ','Teichiku Entertainment ','Tele-Cartoon Japan ','Telecom Animation Film ','Telescreen ','Ten Tails Animation ','Tencent Animation & Comics ','Tencent Games ','Tencent Japan ','Tencent Penguin Pictures ','Tengu Kobo ','Terada Mokei ','Tezuka Productions ','The Answer Studio ','The Berich ','The Monk Studios ','The National Film Center Japan ','The Pokemon Company International ','The Village of Marchen ','Think Corporation ','THINKR ','Three Fat Samurai ','Three-d ','Thundray ','Tin House ','TIS ','TMS Entertainment ','TMS Music ','TMS-Kyokuchi ','TNK ','TO Books ','Tochigi TV ','TOCSIS ','Toei Agency ','Toei Animation ','Toei Video ','Tohan Corporation ','Toho ','TOHO animation ','Toho Interactive Animation ','Toho Music ','Toho Visual Entertainment ','Toho-Towa ','Tohokushinsha Film Corporation ','Tokai Television ','Tokuma Japan ','Tokuma Japan Communications ','Tokuma Shoten ','Tokyo Animation Film ','Tokyo Animator Gakuin ','Tokyo FM Broadcasting ','Tokyo Kids ','Tokyo Media Connections ','Tokyo Movie ','Tokyo Movie Shinsha ','Tokyo MX ','Tokyo Theatres ','Tokyopop ','Tokyu Recreation ','Tomason ','Tomovies ','Tomoyasu Murata Company ','TOMY Company ','Tong Ming Xuan ','Tonko House ','Top Marshal ','Top-Insight International ','Topcraft ','Toppan Printing ','Toranoana ','Tose ','Toshiba Digital Frontiers ','Toshiba EMI ','Toshiba Entertainment ','Toshima Entertainment ','Tosho Printing ','Tower Records ',
    'Toy\'s Factory ','Toyo Recording ','Trans Arts ','Trans Cosmos ','Transcendence Picture ','Trash Studio ','Tri-Slash ','Triangle Staff ','Trick Block ','TriF Studio ','Trigger ','Trilogy Future Studio ','Trinet Entertainment ','Trinity Sound ','TrioPen Studio ','Triple X ','TROYCA ','TRUSS ','Tsubasa Entertainment ','Tsuburaya Productions ','Tsuchida Productions ','Tsukimidou ','Tsukuru no Mori ','Tsumugi Akita Animation Lab ','TSUTAYA ','TthunDer Animation ','TUBA ','TV Aichi ','TV Asahi ','TV Asahi Music ','TV Osaka ','TV Saitama ','TV Setouchi ','TV Tokyo ','TV Tokyo Music ','Twilight Studio ','Twin Engine ','Twin Planet ','TYMOTE ','TYO ','TYO Animations ','Typhoon Graphics ','U-NEXT ','U/M/A/A Inc. ','ufotable ','UK.PROJECT INC. ','Ultra Super Pictures ','UM Productions ','Union Cho ','Universal Entertainment ','Universal Music Japan ','Universal Pictures Japan ','Universal Radio Studio ','Universal Studios ','Urban Product ','Urban Vision ','Usagi Ou ','USEN ','UWAN Pictures ','V-sign ','Valkyria ','Vanguard Sound ','Vanikey ','VAP ','Vasoon Animation ','Vega Entertainment ','Venet ','Venus Vangard ','Victor Entertainment ','Victor Studio ','Video Market ','View Works ','Viki ','Virgin Babylon Records ','Visual 0 ','Visual Arts ','Visual Flight ','Visual Vision ','VIZ Media ','Volks ','voque ting ','Voyager Entertainment ','VV-ALKLINE ','W+K Tokyo ','W-Toon Studio ','Wako Productions ','Walkers Company ','Walt Disney Japan ','Walt Disney Studios ','Wan Wei Mao Donghua ','WAO World ','Wargaming Japan ','Warner Bros. Japan ','Warner Bros. Pictures ','Warner Music Japan ','Watermark ','Wawayu Animation ','Wei Chuang Jiang Xin ','Welz Animation Studios ','WField ','White Bear ','White Fox ','WHOPPERS ','Wicky.Records ','Will Palette ','Wise Guy ','Wit Studio ','Wolf Smoke Studio ','Wolfsbane ','Wonder Kids ','World Cosplay Summit ','WOWOW ','Wulifang Digital ','Xanthus Media ','Xebec ','XEBEC M2 ','XFLAG ','XFLAG Pictures ','Xing ','Xuni Yinxiang Gongzuo Shi ','Y&N Brothers ','Y.O.U.C ','Yahoo! Japan ','Yamaha Music Communications ','Yamamura Animation, Inc. ','Yamasa ','Yamato Works ','Yaoqi ','Yaoyorozu ','Yellow Film ','YHKT Entertainment ','Yi Chen Animation ','Yili Animation Studio ','Yokohama Animation Lab ','Yomiko Advertising ','Yomiuri Advertising ','Yomiuri Shimbun ','Yomiuri Telecasting ','Yomiuri TV Enterprise ','Yonago Gainax ',
    'Yoon\'s Color ','Yoshimoto Creative Agency ','Yostar Pictures ','Youmex ','YTV ','Yuhodo ','YUKE\'S ','Yumearu ','Yumeta Company ','Zack Promotion ','Zelico Film ','ZERO-A ','Zero-G ','Zero-G Room ','Zexcs ','Zipang ','ZIZ Entertainment  ','ZOOM ENTERPRISE ','Zyc '	];
    const scores = ['1','2','3','4','5','6','7','8','9','10']
    function handleSubmit(event) {
        event.preventDefault();
    
        // do something with form values, and then
        axios.post('http://localhost:8000/app/postmsg', {
        msg: "Signal Received from client"
        }).then(response => {
        // do something with response, and on response
        
        }).catch(error => {
        console.log(error);
        // do something when request was unsuccessful

        });
    }
    function modify(event) {
      event.preventDefault();
      window.open(
        "http://localhost:3000/modify/","_self"
      );
    };
    function analytics(event) {
      event.preventDefault();
      window.open(
        "http://localhost:3000/analytics/","_self"
      );
    };

    return (
    <div className="App">
      <div class="container">
        <Stack spacing={2} direction="row">
          <Button onClick={modify} 
            style={{
                backgroundColor: "#f39133",
            }}
            variant="contained">Go to Modify Page</Button>
          <Button onClick={analytics}
            style={{
              backgroundColor: "#f39133",
          }}
            variant="contained">Go to Analytics Page</Button>
        </Stack>
      </div>

      <SearchBar placeholder= "Enter an anime you want to search up: " data={anime_name}/>
      <form
        method="post"
        onSubmit={event => handleSubmit(event)}>  
      </form>


      <GenreBar placeholder= "Enter a genre you want to search up: " data={genres}/>
      <form
        method="post"
        onSubmit={event => handleSubmit(event)}>
      </form>

      <ProducerBar placeholder= "Enter a studio you want to search up: " data={studios}/>

      <ScoreBar placeholder= "Enter a score of an anime you want to search up: " data={scores}/>
      <p>Press the button below to send a message</p>
        <button type="submit">Press To Send Signal</button>
    
    </div>
    )
}
export default Home;