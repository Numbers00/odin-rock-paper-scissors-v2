(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
exports.choose = choose;
exports.randomWord = randomWord;
exports.random = random;
exports.returnDict = returnDict;

function choose(separator) {
  if (typeof separator === 'undefined' || separator === null) {
    var separator = '-';
  } else if (typeof separator !== 'string') {
    var separator = separator.toString();
  }
  var adj = randomWord('adjective');
  var noun = randomWord('noun');
  if (adj !== undefined && noun !== undefined) {
    return adj + separator + noun;
  } else {
    console.log('Epithet Error: returned undefined.');
    return undefined;
  }
}

function randomWord(dict) {
  var words = returnDict(dict);
  if (words !== undefined) {
    var limit = words.length;
    return words[random(limit)];
  } else {
    return undefined
  }
}

function random(limit) {
  return Math.floor(Math.random() * limit);
}

function returnDict(dict) {
  adjectives = ["aback","abaft","abandoned","abashed","aberrant","abhorrent","abiding","abject","ablaze","able","abnormal","aboard","aboriginal","abortive","abounding","abrasive","abrupt","absent","absorbed","absorbing","abstracted","absurd","abundant","abusive","acceptable","accessible","accidental","accurate","acid","acidic","acoustic","acrid","actually","ad", "hoc","adamant","adaptable","addicted","adhesive","adjoining","adorable","adventurous","afraid","aggressive","agonizing","agreeable","ahead","ajar","alcoholic","alert","alike","alive","alleged","alluring","aloof","amazing","ambiguous","ambitious","amuck","amused","amusing","ancient","angry","animated","annoyed","annoying","anxious","apathetic","aquatic","aromatic","arrogant","ashamed","aspiring","assorted","astonishing","attractive","auspicious","automatic","available","average","awake","aware","awesome","awful","axiomatic","bad","barbarous","bashful","bawdy","beautiful","befitting","belligerent","beneficial","bent","berserk","best","better","bewildered","big","billowy","bite-sized","bitter","bizarre","black","black-and-white","bloody","blue","blue-eyed","blushing","boiling","boorish","bored","boring","bouncy","boundless","brainy","brash","brave","brawny","breakable","breezy","brief","bright","bright","broad","broken","brown","bumpy","burly","bustling","busy","cagey","calculating","callous","calm","capable","capricious","careful","careless","caring","cautious","ceaseless","certain","changeable","charming","cheap","cheerful","chemical","chief","childlike","chilly","chivalrous","chubby","chunky","clammy","classy","clean","clear","clever","cloistered","cloudy","closed","clumsy","cluttered","coherent","cold","colorful","colossal","combative","comfortable","common","complete","complex","concerned","condemned","confused","conscious","cooing","cool","cooperative","coordinated","courageous","cowardly","crabby","craven","crazy","creepy","crooked","crowded","cruel","cuddly","cultured","cumbersome","curious","curly","curved","curvy","cut","cute","cute","cynical","daffy","daily","damaged","damaging","damp","dangerous","dapper","dark","dashing","dazzling","dead","deadpan","deafening","dear","debonair","decisive","decorous","deep","deeply","defeated","defective","defiant","delicate","delicious","delightful","demonic","delirious","dependent","depressed","deranged","descriptive","deserted","detailed","determined","devilish","didactic","different","difficult","diligent","direful","dirty","disagreeable","disastrous","discreet","disgusted","disgusting","disillusioned","dispensable","distinct","disturbed","divergent","dizzy","domineering","doubtful","drab","draconian","dramatic","dreary","drunk","dry","dull","dusty","dusty","dynamic","dysfunctional","eager","early","earsplitting","earthy","easy","eatable","economic","educated","efficacious","efficient","eight","elastic","elated","elderly","electric","elegant","elfin","elite","embarrassed","eminent","empty","enchanted","enchanting","encouraging","endurable","energetic","enormous","entertaining","enthusiastic","envious","equable","equal","erect","erratic","ethereal","evanescent","evasive","even","excellent","excited","exciting","exclusive","exotic","expensive","extra-large","extra-small","exuberant","exultant","fabulous","faded","faint","fair","faithful","fallacious","false","familiar","famous","fanatical","fancy","fantastic","far","far-flung","fascinated","fast","fat","faulty","fearful","fearless","feeble","feigned","female","fertile","festive","few","fierce","filthy","fine","finicky","first","five","fixed","flagrant","flaky","flashy","flat","flawless","flimsy","flippant","flowery","fluffy","fluttering","foamy","foolish","foregoing","forgetful","fortunate","four","frail","fragile","frantic","free","freezing","frequent","fresh","fretful","friendly","frightened","frightening","full","fumbling","functional","funny","furry","furtive","future","futuristic","fuzzy","gabby","gainful","gamy","gaping","garrulous","gaudy","general","gentle","giant","giddy","gifted","gigantic","glamorous","gleaming","glib","glistening","glorious","glossy","godly","good","goofy","gorgeous","graceful","grandiose","grateful","gratis","gray","greasy","great","greedy","green","grey","grieving","groovy","grotesque","grouchy","grubby","gruesome","grumpy","guarded","guiltless","gullible","gusty","guttural","habitual","half","hallowed","halting","handsome","handsomely","handy","hanging","hapless","happy","hard","hard-to-find","harmonious","harsh","hateful","heady","healthy","heartbreaking","heavenly","heavy","hellish","helpful","helpless","hesitant","hideous","high","highfalutin","high-pitched","hilarious","hissing","historical","holistic","hollow","homeless","homely","honorable","horrible","hospitable","hot","huge","hulking","humdrum","humorous","hungry","hurried","hurt","hushed","husky","hypnotic","hysterical","icky","icy","idiotic","ignorant","ill","illegal","ill-fated","ill-informed","illustrious","imaginary","immense","imminent","impartial","imperfect","impolite","important","imported","impossible","incandescent","incompetent","inconclusive","industrious","incredible","inexpensive","infamous","innate","innocent","inquisitive","insidious","instinctive","intelligent","interesting","internal","invincible","irate","irritating","itchy","jaded","jagged","jazzy","jealous","jittery","jobless","jolly","joyous","judicious","juicy","jumbled","jumpy","juvenile","kaput","keen","kind","kindhearted","kindly","knotty","knowing","knowledgeable","known","labored","lackadaisical","lacking","lame","lamentable","languid","large","last","late","laughable","lavish","lazy","lean","learned","left","legal","lethal","level","lewd","light","like","likeable","limping","literate","little","lively","lively","living","lonely","long","longing","long-term","loose","lopsided","loud","loutish","lovely","loving","low","lowly","lucky","ludicrous","lumpy","lush","luxuriant","lying","lyrical","macabre","macho","maddening","madly","magenta","magical","magnificent","majestic","makeshift","male","malicious","mammoth","maniacal","many","marked","massive","married","marvelous","material","materialistic","mature","mean","measly","meaty","medical","meek","mellow","melodic","melted","merciful","mere","messy","mighty","military","milky","mindless","miniature","minor","miscreant","misty","mixed","moaning","modern","moldy","momentous","motionless","mountainous","muddled","mundane","murky","mushy","mute","mysterious","naive","nappy","narrow","nasty","natural","naughty","nauseating","near","neat","nebulous","necessary","needless","needy","neighborly","nervous","new","next","nice","nifty","nimble","nine","nippy","noiseless","noisy","nonchalant","nondescript","nonstop","normal","nostalgic","nosy","noxious","null","numberless","numerous","nutritious","nutty","oafish","obedient","obeisant","obese","obnoxious","obscene","obsequious","observant","obsolete","obtainable","oceanic","odd","offbeat","old","old-fashioned","omniscient","one","onerous","open","opposite","optimal","orange","ordinary","organic","ossified","outgoing","outrageous","outstanding","oval","overconfident","overjoyed","overrated","overt","overwrought","painful","painstaking","pale","paltry","panicky","panoramic","parallel","parched","parsimonious","past","pastoral","pathetic","peaceful","penitent","perfect","periodic","permissible","perpetual","petite","petite","phobic","physical","picayune","pink","piquant","placid","plain","plant","plastic","plausible","pleasant","plucky","pointless","poised","polite","political","poor","possessive","possible","powerful","precious","premium","present","pretty","previous","pricey","prickly","private","probable","productive","profuse","protective","proud","psychedelic","psychotic","public","puffy","pumped","puny","purple","purring","pushy","puzzled","puzzling","quack","quaint","quarrelsome","questionable","quick","quickest","quiet","quirky","quixotic","quizzical","rabid","racial","ragged","rainy","rambunctious","rampant","rapid","rare","raspy","ratty","ready","real","rebel","receptive","recondite","red","redundant","reflective","regular","relieved","remarkable","reminiscent","repulsive","resolute","resonant","responsible","rhetorical","rich","right","righteous","rightful","rigid","ripe","ritzy","roasted","robust","romantic","roomy","rotten","rough","round","royal","ruddy","rude","rural","rustic","ruthless","sable","sad","safe","salty","same","sassy","satisfying","savory","scandalous","scarce","scared","scary","scattered","scientific","scintillating","scrawny","screeching","second","second-hand","secret","secretive","sedate","seemly","selective","selfish","separate","serious","shaggy","shaky","shallow","sharp","shiny","shivering","shocking","short","shrill","shut","shy","sick","silent","silent","silky","silly","simple","simplistic","sincere","six","skillful","skinny","sleepy","slim","slimy","slippery","sloppy","slow","small","smart","smelly","smiling","smoggy","smooth","sneaky","snobbish","snotty","soft","soggy","solid","somber","sophisticated","sordid","sore","sore","sour","sparkling","special","spectacular","spicy","spiffy","spiky","spiritual","spiteful","splendid","spooky","spotless","spotted","spotty","spurious","squalid","square","squealing","squeamish","staking","stale","standing","statuesque","steadfast","steady","steep","stereotyped","sticky","stiff","stimulating","stingy","stormy","straight","strange","striped","strong","stupendous","stupid","sturdy","subdued","subsequent","substantial","successful","succinct","sudden","sulky","super","superb","superficial","supreme","swanky","sweet","sweltering","swift","symptomatic","synonymous","taboo","tacit","tacky","talented","tall","tame","tan","tangible","tangy","tart","tasteful","tasteless","tasty","tawdry","tearful","tedious","teeny","teeny-tiny","telling","temporary","ten","tender","tense","tense","tenuous","terrible","terrific","tested","testy","thankful","therapeutic","thick","thin","thinkable","third","thirsty","thirsty","thoughtful","thoughtless","threatening","three","thundering","tidy","tight","tightfisted","tiny","tired","tiresome","toothsome","torpid","tough","towering","tranquil","trashy","tremendous","tricky","trite","troubled","truculent","true","truthful","two","typical","ubiquitous","ugliest","ugly","ultra","unable","unaccountable","unadvised","unarmed","unbecoming","unbiased","uncovered","understood","undesirable","unequal","unequaled","uneven","unhealthy","uninterested","unique","unkempt","unknown","unnatural","unruly","unsightly","unsuitable","untidy","unused","unusual","unwieldy","unwritten","upbeat","uppity","upset","uptight","used","useful","useless","utopian","utter","uttermost","vacuous","vagabond","vague","valuable","various","vast","vengeful","venomous","verdant","versed","victorious","vigorous","violent","violet","vivacious","voiceless","volatile","voracious","vulgar","wacky","waggish","waiting","wakeful","wandering","wanting","warlike","warm","wary","wasteful","watery","weak","wealthy","weary","well-groomed","well-made","well-off","well-to-do","wet","whimsical","whispering","white","whole","wholesale","wicked","wide","wide-eyed","wiggly","wild","willing","windy","wiry","wise","wistful","witty","woebegone","womanly","wonderful","wooden","woozy","workable","worried","worthless","wrathful","wretched","wrong","wry","yellow","yielding","young","youthful","yummy","zany","zealous","zesty","zippy","zonked"];

  nouns = ["able","able","account","achieve","acoustics","act","action","activity","actor","addition","adjustment","advertisement","advice","aftermath","afternoon","afterthought","agreement","air","airplane","airport","alarm","amount","amusement","anger","angle","animal","answer","ant","ants","apparatus","apparel","apple","apples","appliance","approval","arch","argument","arithmetic","arm","army","art","attack","attempt","attention","attraction","aunt","authority","babies","baby","back","badge","bag","bait","balance","ball","balloon","balls","banana","band","base","baseball","basin","basket","basketball","bat","bath","battle","bead","beam","bean","bear","bears","beast","bed","bedroom","beds","bee","beef","beetle","beggar","beginner","behavior","belief","believe","bell","bells","berry","bike","bikes","bird","birds","birth","birthday","bit","bite","blade","blood","blow","board","boat","boats","body","bomb","bone","book","books","boot","border","bottle","boundary","box","boy","boys","brain","brake","branch","brass","bread","breakfast","breath","brick","bridge","brother","brothers","brush","bubble","bucket","building","bulb","bun","burn","burst","bushes","business","butter","button","cabbage","cable","cactus","cake","cakes","calculator","calendar","camera","camp","can","cannon","canvas","cap","caption","car","card","care","carpenter","carriage","cars","cart","cast","cat","cats","cattle","cause","cave","celery","cellar","cemetery","cent","chain","chair","chairs","chalk","chance","change","channel","cheese","cherries","cherry","chess","chicken","chickens","children","chin","church","circle","clam","class","clock","clocks","cloth","cloud","clouds","clover","club","coach","coal","coast","coat","cobweb","coil","collar","color","comb","comfort","committee","company","comparison","competition","condition","connection","control","cook","copper","copy","cord","cork","corn","cough","country","cover","cow","cows","crack","cracker","crate","crayon","cream","creator","creature","credit","crib","crime","crook","crow","crowd","crown","crush","cry","cub","cup","current","curtain","curve","cushion","dad","daughter","day","death","debt","decision","deer","degree","design","desire","desk","destruction","detail","development","digestion","dime","dinner","dinosaurs","direction","dirt","discovery","discussion","disease","disgust","distance","distribution","division","dock","doctor","dog","dogs","doll","dolls","donkey","door","downtown","drain","drawer","dress","drink","driving","drop","drug","drum","duck","ducks","dust","ear","earth","earthquake","edge","education","effect","egg","eggnog","eggs","elbow","end","engine","error","event","example","exchange","existence","expansion","experience","expert","eye","eyes","face","fact","fairies","fall","family","fan","fang","farm","farmer","father","father","faucet","fear","feast","feather","feeling","feet","fiction","field","fifth","fight","finger","finger","fire","fireman","fish","flag","flame","flavor","flesh","flight","flock","floor","flower","flowers","fly","fog","fold","food","foot","force","fork","form","fowl","frame","friction","friend","friends","frog","frogs","front","fruit","fuel","furniture","alley","game","garden","gate","geese","ghost","giants","giraffe","girl","girls","glass","glove","glue","goat","gold","goldfish","good"-"bye","goose","government","governor","grade","grain","grandfather","grandmother","grape","grass","grip","ground","group","growth","guide","guitar","gun","hair","haircut","hall","hammer","hand","hands","harbor","harmony","hat","hate","head","health","hearing","heart","heat","help","hen","hill","history","hobbies","hole","holiday","home","honey","hook","hope","horn","horse","horses","hose","hospital","hot","hour","house","houses","humor","hydrant","ice","icicle","idea","impulse","income","increase","industry","ink","insect","instrument","insurance","interest","invention","iron","island","jail","jam","jar","jeans","jelly","jellyfish","jewel","join","joke","journey","judge","juice","jump","kettle","key","kick","kiss","kite","kitten","kittens","kitty","knee","knife","knot","knowledge","laborer","lace","ladybug","lake","lamp","land","language","laugh","lawyer","lead","leaf","learning","leather","leg","legs","letter","letters","lettuce","level","library","lift","light","limit","line","linen","lip","liquid","list","lizards","loaf","lock","locket","look","loss","love","low","lumber","lunch","lunchroom","machine","magic","maid","mailbox","man","manager","map","marble","mark","market","mask","mass","match","meal","measure","meat","meeting","memory","men","metal","mice","middle","milk","mind","mine","minister","mint","minute","mist","mitten","mom","money","monkey","month","moon","morning","mother","motion","mountain","mouth","move","muscle","music","nail","name","nation","neck","need","needle","nerve","nest","net","news","night","noise","north","nose","note","notebook","number","nut","oatmeal","observation","ocean","offer","office","oil","operation","opinion","orange","oranges","order","organization","ornament","oven","owl","owner","page","pail","pain","paint","pan","pancake","paper","parcel","parent","park","part","partner","party","passenger","paste","patch","payment","peace","pear","pen","pencil","person","pest","pet","pets","pickle","picture","pie","pies","pig","pigs","pin","pipe","pizzas","place","plane","planes","plant","plantation","plants","plastic","plate","play","playground","pleasure","plot","plough","pocket","point","poison","police","polish","pollution","popcorn","porter","position","pot","potato","powder","power","price","print","prison","process","produce","profit","property","prose","protest","pull","pump","punishment","purpose","push","quarter","quartz","queen","question","quicksand","quiet","quill","quilt","quince","quiver","rabbit","rabbits","rail","railway","rain","rainstorm","rake","range","rat","rate","ray","reaction","reading","reason","receipt","recess","record","regret","relation","religion","representative","request","respect","rest","reward","rhythm","rice","riddle","rifle","ring","rings","river","road","robin","rock","rod","roll","roof","room","root","rose","route","rub","rule","run","sack","sail","salt","sand","scale","scarecrow","scarf","scene","scent","school","science","scissors","screw","sea","seashore","seat","secretary","seed","selection","self","sense","servant","shade","shake","shame","shape","sheep","sheet","shelf","ship","shirt","shock","shoe","shoes","shop","show","side","sidewalk","sign","silk","silver","sink","sister","sisters","size","skate","skin","skirt","sky","slave","sleep","sleet","slip","slope","smash","smell","smile","smoke","snail","snails","snake","snakes","sneeze","snow","soap","society","sock","soda","sofa","son","song","songs","sort","sound","soup","space","spade","spark","spiders","sponge","spoon","spot","spring","spy","square","squirrel","stage","stamp","star","start","statement","station","steam","steel","stem","step","stew","stick","sticks","stitch","stocking","stomach","stone","stop","store","story","stove","stranger","straw","stream","street","stretch","string","structure","substance","sugar","suggestion","suit","summer","sun","support","surprise","sweater","swim","swing","system","table","tail","talk","tank","taste","tax","teaching","team","teeth","temper","tendency","tent","territory","test","texture","theory","thing","things","thought","thread","thrill","throat","throne","thumb","thunder","ticket","tiger","time","tin","title","toad","toe","toes","tomatoes","tongue","tooth","toothbrush","toothpaste","top","touch","town","toy","toys","trade","trail","train","trains","tramp","transport","tray","treatment","tree","trees","trick","trip","trouble","trousers","truck","trucks","tub","turkey","turn","twig","twist","umbrella","uncle","underwear","unit","use","vacation","value","van","vase","vegetable","veil","vein","verse","vessel","vest","view","visitor","voice","volcano","volleyball","voyage","walk","wall","war","wash","waste","watch","water","wave","waves","wax","way","wealth","weather","week","weight","wheel","whip","whistle","wilderness","wind","window","wine","wing","winter","wire","wish","woman","women","wood","wool","word","work","worm","wound","wren","wrench","wrist","writer","writing","yak","yam","yard","yarn","year","yoke","zebra","zephyr","zinc","zipper","zoo"];
  if (dict === 'adjective') {
    return adjectives;
  } else if (dict === 'noun' || dict === undefined) {
    return nouns;
  } else {
    return undefined;
  }
}

},{}],2:[function(require,module,exports){
const adjectives = [
  "Able",
  "Abrupt",
  "Active",
  "Afraid",
  "Airy",
  "Alert",
  "Alone",
  "Aloof",
  "Amoral",
  "Angry",
  "Artful",
  "Aware",
  "Bad",
  "Bitchy",
  "Bland",
  "Blue",
  "Blunt",
  "Bold",
  "Bored",
  "Boring",
  "Bossy",
  "Boyish",
  "Brainy",
  "Brave",
  "Brazen",
  "Breezy",
  "Bright",
  "Brutal",
  "Busy",
  "Calm",
  "Candid",
  "Caring",
  "Casual",
  "Chaste",
  "Choosy",
  "Chummy",
  "Classy",
  "Clean",
  "Clever",
  "Clumsy",
  "Coarse",
  "Cocky",
  "Cold",
  "Coward",
  "Crafty",
  "Cranky",
  "Crass",
  "Crazy",
  "Crisp",
  "Cross",
  "Crude",
  "Cruel",
  "Cute",
  "Daffy",
  "Dainty",
  "Daring",
  "Dark",
  "Decent",
  "Deep",
  "Direct",
  "Dirty",
  "Dowdy",
  "Dreamy",
  "Droll",
  "Dry",
  "Dull",
  "Dumb",
  "Eager",
  "Earthy",
  "Evil",
  "Exotic",
  "Fair",
  "False",
  "Fancy",
  "Feisty",
  "Fickle",
  "Fierce",
  "Fiery",
  "Firm",
  "Fixed",
  "Folksy",
  "Formal",
  "Foul",
  "Frank",
  "Fresh",
  "Frigid",
  "Frugal",
  "Funny",
  "Fussy",
  "Gaudy",
  "Gentle",
  "Giddy",
  "Giving",
  "Gloomy",
  "Glum",
  "Godly",
  "Good",
  "Grand",
  "Greedy",
  "Grim",
  "Grumpy",
  "Guilty",
  "Happy",
  "Hardy",
  "Harsh",
  "Hearty",
  "Heroic",
  "Holy",
  "Honest",
  "Humble",
  "Inept",
  "Inert",
  "Jolly",
  "Jovial",
  "Joyful",
  "Jumpy",
  "Just",
  "Keen",
  "Kind",
  "Kindly",
  "Lazy",
  "Lewd",
  "Light",
  "Lively",
  "Lonely",
  "Loud",
  "Loving",
  "Loyal",
  "Lucky",
  "Macho",
  "Mature",
  "Mean",
  "Meek",
  "Mellow",
  "Messy",
  "Misfit",
  "Modern",
  "Modest",
  "Moody",
  "Moral",
  "Morbid",
  "Naive",
  "Nasty",
  "Natty",
  "Neat",
  "Nice",
  "Noble",
  "Noisy",
  "Normal",
  "Nosey",
  "Obese",
  "Odd",
  "Open",
  "Ornery",
  "Pert",
  "Petty",
  "Phony",
  "Picky",
  "Pious",
  "Placid",
  "Plain",
  "Plucky",
  "Poised",
  "Polite",
  "Pretty",
  "Prim",
  "Prompt",
  "Proper",
  "Proud",
  "Pure",
  "Pushy",
  "Quiet",
  "Quirky",
  "Rash",
  "Remote",
  "Rich",
  "Rigid",
  "Rough",
  "Rowdy",
  "Rude",
  "Ruined",
  "Rustic",
  "Sad",
  "Safe",
  "Sage",
  "Sane",
  "Sassy",
  "Saucy",
  "Saving",
  "Savvy",
  "Scared",
  "Scatty",
  "Secure",
  "Sedate",
  "Senile",
  "Serene",
  "Sexy",
  "Sharp",
  "Showy",
  "Shrewd",
  "Shy",
  "Silent",
  "Silly",
  "Simple",
  "Sleazy",
  "Sloppy",
  "Slow",
  "Sly",
  "Smart",
  "Smooth",
  "Smug",
  "Sneaky",
  "Snobby",
  "Sober",
  "Social",
  "Soft",
  "Solemn",
  "Solid",
  "Sordid",
  "Sorry",
  "Stable",
  "Steady",
  "Steely",
  "Stern",
  "Stiff",
  "Stingy",
  "Stoic",
  "Stolid",
  "Strict",
  "Stupid",
  "Suave",
  "Subtle",
  "Sullen",
  "Surly",
  "Sweet",
  "Tardy",
  "Tender",
  "Tense",
  "Tidy",
  "Timid",
  "Tired",
  "Touchy",
  "Tough",
  "Trendy",
  "Uneasy",
  "Unfair",
  "Unkind",
  "Unruly",
  "Untidy",
  "Unwise",
  "Upset",
  "Urbane",
  "Useful",
  "Vacant",
  "Vague",
  "Vain",
  "Venal",
  "Vulgar",
  "Warm",
  "Weak",
  "Weird",
  "Wicked",
  "Wild",
  "Wilful",
  "Wise",
  "Witty",
  "Wordy",
  "Wrong",
  "Zany"
];
const gamingTerms = [
  "Assasin",
  "Noob",
  "EasterEgg",
  "Aimbot",
  "Deathmatch",
  "Faceroll",
  "Feeder",
  "Alpha",
  "Assist",
  "Beta",
  "Boosting",
  "Camper",
  "Casual",
  "Console",
  "Controller",
  "Critical",
  "Hitmen",
  "CrowdController",
  "Debuff",
  "Death",
  "Driving",
  "Speeder",
  "Racer",
  "Wielder",
  "Exploit",
  "Emulator",
  "Fragger",
  "FragArtist",
  "Ghoster",
  "GodMode",
  "Guard",
  "GoodGame",
  "Hacker",
  "Healer",
  "HeadShot",
  "HolyTrinity",
  "Indie",
  "Kick",
  "KillStealer",
  "Level",
  "Mana",
  "ManicShooter",
  "MOBAPlayer",
  "FPSPlayer",
  "MagicPoints",
  "Model",
  "Nerf",
  "Nerfed",
  "NonPlayable",
  "OneShotKill",
  "OpenWorld",
  "PermaDeath",
  "QuickScope",
  "RageQuit",
  "Respawn",
  "RPGPlayer",
  "RTSPlayer",
  "SandBox",
  "ScreenPeeker",
  "ShootEmUp",
  "SideQuester",
  "Quester",
  "Smurf",
  "SpeedRunner",
  "SpeedRun",
  "Tank",
  "Trickshot",
  "Troll",
  "Trolling",
  "Tryhard",
  "Warrior",
  "WomboCombo",
  "AutoSave",
  "BulletHell",
  "Sponge",
  "Cheese",
  "Checkpoint",
  "Cooldown",
  "Boss",
  "CuttingEdge",
  "Cutscene",
  "DifficultLevel",
  "DLCFan",
  "DoubleJump",
  "EarlyAccess",
  "Exclusive",
  "WorldPremiere",
  "XboxPlayer",
  "PS4Player",
  "FallDamage",
  "Fog",
  "War",
  "Windows",
  "Immersive",
  "Instance",
  "Lagger",
  "Pusher",
  "Myst",
  "Overpowered",
  "Procederal",
  "Roguelike",
  "RocketJumping",
  "Replay",
  "Survival",
  "Wallhack",
  "Zombie",
  "Portal",
  "Gordon",
  "Freeman",
  "Uncharted",
  "Kingdom",
  "AFK",
  "Homebrew",
  "Leeroy",
  "Spawn",
  "Strafe",
  "Zerg",
  "Legendary",
  "ForTheWin",
  "Killer",
  "Ping",
  "Mario",
  "GMan",
  "LaraCroft",
  "MasterChief",
  "Link",
  "Pikachu",
  "Sonic",
  "Vaas",
  "Jade",
  "Agent",
  "Bayonetta",
  "Dovahkiin",
  "Elizabeth",
  "Garrus",
  "Ellie",
  "Faith",
  "Alyx",
  "Dante",
  "SamFisher",
  "Shephard",
  "Claptrap",
  "Pudge",
  "Cortana",
  "GLaDos",
  "Teemo",
  "Ezio",
  "Geralt",
  "Rivia",
  "Tracer",
  "Steve",
  "Kratos",
  "Nathan",
  "Bowser",
  "Luigi"
];
const nouns = [
  "Ace",
  "Acid",
  "Acne",
  "Ale",
  "Ally",
  "Ant",
  "Ape",
  "Arc",
  "Arch",
  "Arm",
  "Army",
  "Art",
  "Ash",
  "Aunt",
  "Ax",
  "Axe",
  "Axle",
  "Babe",
  "Baby",
  "Back",
  "Bag",
  "Bait",
  "Ball",
  "Balm",
  "Band",
  "Bank",
  "Bar",
  "Bark",
  "Barn",
  "Bass",
  "Bat",
  "Bath",
  "Bay",
  "Bead",
  "Beak",
  "Beam",
  "Bean",
  "Bear",
  "Bed",
  "Bee",
  "Beef",
  "Beer",
  "Bell",
  "Belt",
  "Bib",
  "Bike",
  "Bill",
  "Bin",
  "Bird",
  "Blob",
  "Boar",
  "Boat",
  "Body",
  "Bolt",
  "Bomb",
  "Bone",
  "Book",
  "Boot",
  "Boss",
  "Bow",
  "Bowl",
  "Box",
  "Boy",
  "Brow",
  "Buck",
  "Bud",
  "Bug",
  "Bulb",
  "Bum",
  "Bump",
  "Bun",
  "Bus",
  "Cab",
  "Cafe",
  "Cage",
  "Cake",
  "Calf",
  "Camp",
  "Can",
  "Cane",
  "Cap",
  "Cape",
  "Car",
  "Card",
  "Carp",
  "Case",
  "Cash",
  "Cat",
  "Cave",
  "Cell",
  "Chef",
  "Chin",
  "Chip",
  "City",
  "Clam",
  "Claw",
  "Clip",
  "Club",
  "Coal",
  "Coat",
  "Cod",
  "Cog",
  "Coin",
  "Colt",
  "Comb",
  "Cone",
  "Cook",
  "Cord",
  "Cork",
  "Corn",
  "Cove",
  "Cow",
  "Crab",
  "Crap",
  "Crib",
  "Crow",
  "Cub",
  "Cube",
  "Cue",
  "Cuff",
  "Cup",
  "Curb",
  "Curl",
  "Dart",
  "Dean",
  "Deck",
  "Deer",
  "Den",
  "Desk",
  "Dew",
  "Dial",
  "Dice",
  "Dime",
  "Dirt",
  "Disc",
  "Dish",
  "Disk",
  "Doe",
  "Dog",
  "Dolt",
  "Door",
  "Dot",
  "Dove",
  "Drop",
  "Drug",
  "Drum",
  "Duck",
  "Duct",
  "Dude",
  "Duet",
  "Dump",
  "Dune",
  "Dusk",
  "Dust",
  "Ear",
  "Eel",
  "Egg",
  "Elf",
  "Elk",
  "Elm",
  "Eve",
  "Ewe",
  "Eye",
  "Face",
  "Fan",
  "Fang",
  "Farm",
  "Faun",
  "Fawn",
  "Fax",
  "Feet",
  "Fern",
  "Fig",
  "File",
  "Fir",
  "Fire",
  "Fish",
  "Fizz",
  "Flab",
  "Flag",
  "Flax",
  "Flea",
  "Flu",
  "Fog",
  "Foil",
  "Font",
  "Food",
  "Fool",
  "Foot",
  "Ford",
  "Fork",
  "Form",
  "Fort",
  "Fowl",
  "Fox",
  "Frog",
  "Fur",
  "Fuzz",
  "Game",
  "Gang",
  "Gap",
  "Gas",
  "Gasp",
  "Gate",
  "Gear",
  "Geek",
  "Gel",
  "Gem",
  "Gent",
  "Gift",
  "Gill",
  "Gin",
  "Girl",
  "Glob",
  "Glue",
  "Gnat",
  "Gnu",
  "Goat",
  "Gold",
  "Golf",
  "Gong",
  "Goon",
  "Goth",
  "Gout",
  "Gown",
  "Gray",
  "Grey",
  "Grid",
  "Grin",
  "Grit",
  "Grub",
  "Gull",
  "Gum",
  "Gun",
  "Guru",
  "Gut",
  "Guy",
  "Gym",
  "Hag",
  "Hair",
  "Hall",
  "Halo",
  "Ham",
  "Hand",
  "Harp",
  "Hash",
  "Hat",
  "Hawk",
  "Hay",
  "Haze",
  "Head",
  "Heap",
  "Heat",
  "Hemp",
  "Hen",
  "Herb",
  "Herd",
  "Hill",
  "Hive",
  "Hobo",
  "Hog",
  "Home",
  "Hood",
  "Hoof",
  "Hook",
  "Horn",
  "Hose",
  "Ibex",
  "Ice",
  "Imp",
  "Inch",
  "Ink",
  "Iron",
  "Ivy",
  "Jack",
  "Jade",
  "Jail",
  "Jam",
  "Jar",
  "Jaw",
  "Jay",
  "Jazz",
  "Jeep",
  "Jet",
  "Jib",
  "Jibe",
  "Jig",
  "Jock",
  "Judo",
  "Jug",
  "Jury",
  "Kale",
  "Keg",
  "Kelp",
  "Key",
  "Kid",
  "Kiln",
  "Kilt",
  "King",
  "Kite",
  "Kiwi",
  "Knee",
  "Knob",
  "Knot",
  "Lace",
  "Lady",
  "Lake",
  "Lamb",
  "Lamp",
  "Lap",
  "Lark",
  "Lava",
  "Lawn",
  "Leaf",
  "Leak",
  "Leg",
  "Lens",
  "Liar",
  "Lice",
  "Life",
  "Limb",
  "Limo",
  "Link",
  "Lion",
  "Lip",
  "Loaf",
  "Lock",
  "Loft",
  "Log",
  "Logo",
  "Loop",
  "Loot",
  "Luck",
  "Lump",
  "Lung",
  "Mace",
  "Maid",
  "Mail",
  "Male",
  "Mall",
  "Malt",
  "Man",
  "Map",
  "Mark",
  "Mars",
  "Mask",
  "Mat",
  "Mate",
  "Math",
  "Matt",
  "Maze",
  "Meal",
  "Meat",
  "Memo",
  "Men",
  "Menu",
  "Mesh",
  "Mess",
  "Met",
  "Mice",
  "Milk",
  "Mill",
  "Mime",
  "Mind",
  "Mine",
  "Mink",
  "Mint",
  "Mitt",
  "Mole",
  "Moon",
  "Mop",
  "Moth",
  "Muck",
  "Mud",
  "Mule",
  "Murk",
  "Mush",
  "Mutt",
  "Myth",
  "Nag",
  "Nail",
  "Nap",
  "Narc",
  "Navy",
  "Neck",
  "Nerd",
  "Nest",
  "Net",
  "News",
  "Nose",
  "Nun",
  "Nut",
  "Oaf",
  "Oak",
  "Oar",
  "Oat",
  "Oats",
  "Oboe",
  "Ogre",
  "Okra",
  "Ore",
  "Owl",
  "Ox",
  "Oxen",
  "Page",
  "Pail",
  "Pain",
  "Pair",
  "Palm",
  "Pan",
  "Pane",
  "Paw",
  "Pawn",
  "Pea",
  "Peak",
  "Pear",
  "Peep",
  "Peg",
  "Pen",
  "Peon",
  "Pest",
  "Pet",
  "Pi",
  "Pick",
  "Pie",
  "Pig",
  "Pile",
  "Pill",
  "Pin",
  "Pink",
  "Pint",
  "Pipe",
  "Pit",
  "Pita",
  "Plan",
  "Plow",
  "Pod",
  "Poem",
  "Poet",
  "Polo",
  "Pony",
  "Pool",
  "Pope",
  "Pope",
  "Post",
  "Posy",
  "Pot",
  "Prey",
  "Pub",
  "Puck",
  "Puff",
  "Pug",
  "Pulp",
  "Puma",
  "Pun",
  "Punk",
  "Pup",
  "Quid",
  "Quiz",
  "Race",
  "Rack",
  "Raft",
  "Rag",
  "Rage",
  "Raid",
  "Rail",
  "Rain",
  "Rake",
  "Ram",
  "Ramp",
  "Rank",
  "Rant",
  "Rap",
  "Rash",
  "Rat",
  "Rave",
  "Ray",
  "Rear",
  "Reef",
  "Ref",
  "Rent",
  "Rib",
  "Rice",
  "Rig",
  "Rim",
  "Ring",
  "Rink",
  "Riot",
  "Risk",
  "Rite",
  "Road",
  "Rob",
  "Robe",
  "Rock",
  "Roof",
  "Room",
  "Root",
  "Rope",
  "Rose",
  "Row",
  "Ruby",
  "Rug",
  "Rule",
  "Rum",
  "Rump",
  "Runt",
  "Rust",
  "Rye",
  "Sack",
  "Safe",
  "Saga",
  "Sage",
  "Salt",
  "Sand",
  "Sap",
  "Sash",
  "Saw",
  "Sax",
  "Scab",
  "Scam",
  "Scar",
  "Scum",
  "Sea",
  "Seal",
  "Seam",
  "Seat",
  "Seed",
  "Serf",
  "Shag",
  "Shin",
  "Ship",
  "Shoe",
  "Shop",
  "Show",
  "Side",
  "Sign",
  "Silk",
  "Sin",
  "Sink",
  "Skin",
  "Skit",
  "Sky",
  "Slab",
  "Slip",
  "Slob",
  "Slot",
  "Slug",
  "Slum",
  "Butt",
  "Smog",
  "Snag",
  "Snap",
  "Snob",
  "Snot",
  "Snow",
  "Soap",
  "Sock",
  "Soda",
  "Sofa",
  "Soil",
  "Son",
  "Song",
  "Soul",
  "Soup",
  "Soy",
  "Spa",
  "Spat",
  "Spit",
  "Spot",
  "Spy",
  "Stag",
  "Star",
  "Stem",
  "Stew",
  "Stud",
  "Sty",
  "Sub",
  "Suds",
  "Suit",
  "Sun",
  "Surf",
  "Swag",
  "Swan",
  "Tack",
  "Taco",
  "Tag",
  "Tail",
  "Talc",
  "Tan",
  "Tang",
  "Tank",
  "Tape",
  "Tarp",
  "Tart",
  "Taxi",
  "Tea",
  "Tear",
  "Tech",
  "Teen",
  "Tent",
  "Test",
  "Text",
  "Thud",
  "Thug",
  "Tick",
  "Tide",
  "Tie",
  "Tile",
  "Tin",
  "Tire",
  "Toad",
  "Toe",
  "Tofu",
  "Tomb",
  "Tool",
  "Top",
  "Tour",
  "Town",
  "Toy",
  "Trap",
  "Tray",
  "Tree",
  "Trek",
  "Trio",
  "Trip",
  "Tuba",
  "Tube",
  "Tuna",
  "Turf",
  "Tutu",
  "Tux",
  "Tv",
  "Twig",
  "Twin",
  "Twit",
  "Tyke",
  "Type",
  "Typo",
  "Ufo",
  "Ump",
  "Unit",
  "User",
  "Van",
  "Vane",
  "Vase",
  "Vat",
  "Veal",
  "Veil",
  "Vein",
  "Vent",
  "Verb",
  "Vest",
  "Vet",
  "Vial",
  "Vice",
  "Vine",
  "Visa",
  "Void",
  "Volt",
  "Vow",
  "Wage",
  "Wall",
  "War",
  "Ware",
  "Wart",
  "Wasp",
  "Watt",
  "Wax",
  "Web",
  "Weed",
  "Week",
  "Welt",
  "Whey",
  "Whim",
  "Wife",
  "Wig",
  "Wile",
  "Wimp",
  "Wine",
  "Wing",
  "Wire",
  "Wish",
  "Wit",
  "Wolf",
  "Womb",
  "Wood",
  "Wool",
  "Word",
  "Worm",
  "Wuss",
  "Yak",
  "Yam",
  "Yard",
  "Yarn",
  "Yawn",
  "Year",
  "Yoga",
  "Yolk",
  "Zap",
  "Zeal",
  "Zen",
  "Zinc",
  "Zit",
  "Zoo"
];

module.exports = {
  adjectives,
  gamingTerms,
  nouns
};

},{}],3:[function(require,module,exports){
"use strict";
var { adjectives, gamingTerms, nouns } = require("./data");

/**
 * Returns a gaming related username
 */
const generateName = () => {
  const adjective =
    adjectives[Math.floor(Math.random() * (adjectives.length - 1))];
  const gamingTerm =
    gamingTerms[Math.floor(Math.random() * (gamingTerms.length - 1))];
  const noun = nouns[Math.floor(Math.random() * (nouns.length - 1))];
  return adjective + gamingTerm + noun;
};

module.exports = {
  generateName
};

},{"./data":2}],4:[function(require,module,exports){
window.addEventListener('keydown', (e) => {
  if (e.keyCode === 40) {
    $('.top-div').fadeOut(200);

    setTimeout(() => {
      $('.bottom-div').fadeIn(200).removeClass('invisible');
    }, 200);
  } else if (e.keyCode === 38) {
    $('.bottom-div').fadeOut(200);

    setTimeout(() => {
      $('.top-div').fadeIn(200);
    }, 200);
  }
});

// Credits: https://stackoverflow.com/a/53452241
function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms)
    }, ms)
  })
}


// Credits: https://stackoverflow.com/a/2450976
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

let gamerNamer = require('gamer-namer');
let epithetGiver = require('epithet');

let names = [];
let epithets = [];
let images = [];

let champions = [0];
let wins = [0];

let playerSelection = '';

let nonParticipants = [...Array(63+1).keys()].slice(1);
let advancingParticipants = [];

let playerIsEliminated = false;

function clickPlayerRock() {
  document.getElementById('player-rock').classList.add('selected-card');
  document.getElementById('player-paper').classList.remove('selected-card');
  document.getElementById('player-scissors').classList.remove('selected-card');
  playerSelection = 'rock';
}

function clickPlayerPaper() {
  document.getElementById('player-rock').classList.remove('selected-card');
  document.getElementById('player-paper').classList.add('selected-card');
  document.getElementById('player-scissors').classList.remove('selected-card');
  playerSelection = 'paper';
}

function clickPlayerScissors() {
  document.getElementById('player-rock').classList.remove('selected-card');
  document.getElementById('player-paper').classList.remove('selected-card');
  document.getElementById('player-scissors').classList.add('selected-card');
  playerSelection = 'scissors';
}

function addControlCardListeners() {
  document.getElementById('player-rock').addEventListener("click", clickPlayerRock);
  document.getElementById('player-paper').addEventListener("click", clickPlayerPaper);
  document.getElementById('player-scissors').addEventListener("click", clickPlayerScissors);

  window.addEventListener('keydown', (e) => {
    if (e.keyCode === 82 || e.keyCode === 49) clickPlayerRock();
    if (e.keyCode === 80 || e.keyCode === 50) clickPlayerPaper();
    if (e.keyCode === 83 || e.keyCode === 51) clickPlayerScissors();
  })
}

function removeControlCardListeners() {
  document.getElementById('player-rock').removeEventListener("click", clickPlayerRock);
  document.getElementById('player-paper').removeEventListener("click", clickPlayerPaper);
  document.getElementById('player-scissors').removeEventListener("click", clickPlayerScissors);
}

window.onload = () => {
  document.getElementById('name').placeholder = 'Name: ' + gamerNamer.generateName().match(/[A-Z][a-z]+/g).join(' ');
  document.getElementById('epithet').placeholder = 'Epithet: ' + epithetGiver.choose().split('-').map(elem => capitalizeFirstLetter(elem)).join(' ');

  console.log(nonParticipants);

  addControlCardListeners();
}

document.getElementById('input-container').addEventListener('keydown', e => {
  if (e.keyCode === 13) {
    if (document.getElementById('name').value === '') names.push(document.getElementById('name').placeholder.replace('Name: ', ''));
    else names.push(document.getElementById('name').value);

    if (document.getElementById('epithet').value === '') epithets.push(document.getElementById('epithet').placeholder.replace('Epithet: ', ''));
    else epithets.push(document.getElementById('epithet').value);

    const imageURL = document.getElementById('image').value;

    if (imageURL !== '' && imageURL !== null) images.push(imageURL);
    else images.push('imgs/template_avatar.png');

    startMatching();
  }
});

const leftDiv = document.getElementsByClassName('left-div')[0];
const avatarCards = document.getElementsByClassName('avatar-cards')[0];

function addAvatarCards(index) {
  const avatarCard = document.createElement('div');
  avatarCard.classList.add("avatar-card");

  const avatarImg = document.createElement('img');
  avatarImg.src = images[index];
  avatarImg.alt = 'Avatar';
  avatarCard.appendChild(avatarImg);

  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');

  const h4 = document.createElement('h4');
  h4.style.margin = 2;
  h4.textContent = names[index];
  textContainer.appendChild(h4);

  const para = document.createElement('p');
  para.style.margin = 2;
  para.textContent = epithets[index];
  textContainer.appendChild(para);

  avatarCard.appendChild(textContainer);

  avatarCards.appendChild(avatarCard);
}

// Credits: https://stackoverflow.com/a/1026087
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Credits: https://stackoverflow.com/a/46774731
function weightedRandom(min, max) {
  return Math.round(max / (Math.random() * max + min));
}

// adds up to a total of 64 avatar cards including the player
async function startMatching() {
  document.getElementsByClassName('avatar-card')[0].remove();

  await $.ajax({
    url: 'https://randomuser.me/api/?results=63',
    dataType: 'json',
    success: (data) => {
      for (elem in data.results) {
        names.push(`${capitalizeFirstLetter(data.results[elem].name.first)} ${capitalizeFirstLetter(data.results[elem].name.last)}`);
        images.push(data.results[elem].picture.large);
      }
    }
  });

  addAvatarCards(0);

  // # of joined contestants in the matching phase will start at this number
  let randNum = Math.floor(Math.random() * 23) + 25;

  for (let i = 1; i < randNum; i++) {
    epithets.push(epithetGiver.choose().split('-').map(elem => capitalizeFirstLetter(elem)).join(' '));
    champions.push(weightedRandom(0,64));
    wins.push(champions[i] * 5 + weightedRandom(0,32));

    if (names[i] === undefined) {
      epithets.pop();
      champions.pop();
      wins.pop();
      i--;
      continue;
    }

    addAvatarCards(i);
  }

  document.getElementById('left-div-title').textContent = `Waiting for Other Players... (${epithets.length}/64)`;

  for (let i = randNum; i < 64; i++) {
    epithets.push(epithetGiver.choose().split('-').map(elem => capitalizeFirstLetter(elem)).join(' '));
    champions.push(weightedRandom(0,64));
    wins.push(champions[i] * 5 + weightedRandom(0,32));

    if (names[i] === undefined) {
      epithets.pop();
      champions.pop();
      wins.pop();
      i--;
      continue;
    }
    addAvatarCards(i);

    // at times, more than 1 new contestants will join
    if (Math.floor((Math.random() * 3) + 1) % 2 != 0) await wait(Math.random() * 400);

    document.getElementById('left-div-title').textContent = `Waiting for Other Players... (${epithets.length}/64)`;
  }

  for (let i = 1; i <= 5; i++) {
    await wait(800);
    if (i % 2 != 0) {
      document.getElementById('left-div-title').textContent = 'Starting Game...';
    } else document.getElementById('left-div-title').textContent = 'Starting Game..';

    if (i === 5) startGame();
  }
}

// function setupGameLayout() {
//   const avatarCard = document.createElement('div');
//   avatarCard.classList.add("avatar-card");

//   const avatarImg = document.createElement('img');
//   avatarImg.src = images[index];
//   avatarImg.alt = 'Avatar';
//   avatarCard.appendChild(avatarImg);

//   const textContainer = document.createElement('div');
//   textContainer.classList.add('text-container');

//   const h4 = document.createElement('h4');
//   h4.style.margin = 2;
//   h4.textContent = names[index];
//   textContainer.appendChild(h4);

//   const para = document.createElement('p');
//   para.style.margin = 2;
//   para.textContent = epithets[index];
//   textContainer.appendChild(para);

//   avatarCard.appendChild(textContainer);
// }

function setupPlayer() {
  const roundLeftDiv = document.getElementsByClassName('round-left-div')[0];

  const leftContestantDetails = roundLeftDiv.querySelector('.left-contestant-details');

  leftContestantDetails.querySelectorAll('p')[0].innerHTML = '<b>Champions:</b> ' + champions[0];
  leftContestantDetails.querySelectorAll('p')[1].innerHTML = '<b>Wins:</b> ' + wins[0];
  
  const leftContestantCards = roundLeftDiv.querySelector('.left-contestant-cards');

  leftContestantCards.querySelector('img').src = images[0];

  const leftTextContainer = leftContestantCards.querySelector('.text-container');

  leftTextContainer.querySelector('b').textContent = names[0];
  leftTextContainer.querySelector('p').textContent = epithets[0];
}

function setupLeft(leftIndex) {
  const roundLeftDiv = document.getElementsByClassName('round-left-div')[0];

  const leftContestantDetails = roundLeftDiv.querySelector('.left-contestant-details');

  leftContestantDetails.querySelectorAll('p')[0].innerHTML = '<b>Champions:</b> ' + champions[leftIndex];
  leftContestantDetails.querySelectorAll('p')[1].innerHTML = '<b>Wins:</b> ' + wins[leftIndex];
  
  const leftContestantCards = roundLeftDiv.querySelector('.left-contestant-cards');

  leftContestantCards.querySelector('img').src = images[leftIndex];

  const leftTextContainer = leftContestantCards.querySelector('.text-container');

  leftTextContainer.querySelector('b').textContent = names[leftIndex];
  leftTextContainer.querySelector('p').textContent = epithets[leftIndex];
}

function setupRight(rightIndex) {
  const roundLeftDiv = document.getElementsByClassName('round-left-div')[0];

  const rightContestantDetails = roundLeftDiv.querySelector('.right-contestant-details');

  rightContestantDetails.querySelectorAll('p')[0].innerHTML = '<b>Champions:</b> ' + champions[rightIndex];
  rightContestantDetails.querySelectorAll('p')[1].innerHTML = '<b>Wins:</b> ' + wins[rightIndex];

  const rightContestantCards = roundLeftDiv.querySelector('.right-contestant-cards');

  rightContestantCards.querySelector('img').src = images[rightIndex];

  const rightTextContainer = rightContestantCards.querySelector('.text-container');

  rightTextContainer.querySelector('b').textContent = names[rightIndex];
  rightTextContainer.querySelector('p').textContent = epithets[rightIndex];
}

function startGame() {
  $('.avatar-cards').fadeOut(200);

  let roundDiv = document.querySelector('.round-div');
  roundDiv.classList.remove('removed');

  startRound(1);
}

function startRound(roundNum) {
  document.getElementById('left-score').querySelector('b').textContent = 0;
  document.getElementById('right-score').querySelector('b').textContent = 0;

  const playerRoundHistory = document.querySelector('.round-history ul');
  
  let child = playerRoundHistory.firstElementChild;
  while (child) {
    playerRoundHistory.removeChild(child);
    child = playerRoundHistory.firstElementChild;
  }

  const overarchingHistory = document.querySelector('.round-right-div ul');

  child = overarchingHistory.firstElementChild;
  while (child) {
    overarchingHistory.removeChild(child);
    child = overarchingHistory.firstElementChild;
  }

  const playerRock = document.getElementById('player-rock');
  const playerPaper = document.getElementById('player-paper');
  const playerScissors = document.getElementById('player-scissors');

  const enemyRock = document.getElementById('enemy-rock');
  const enemyPaper = document.getElementById('enemy-paper');
  const enemyScissors = document.getElementById('enemy-scissors');

  if (!playerIsEliminated) {
    playerRock.classList = 'control-card player-card';
    playerPaper.classList = 'control-card player-card';
    playerScissors.classList = 'control-card player-card';
    addControlCardListeners();
  } else {
    playerRock.classList = 'control-card';
    playerPaper.classList = 'control-card';
    playerScissors.classList = 'control-card';
  }
  

  enemyRock.classList = 'control-card enemy-card';
  enemyPaper.classList = 'control-card enemy-card';
  enemyScissors.classList = 'control-card enemy-card';

  advancingParticipants = [];

  let randNonParticipants = [];

  if (nonParticipants.includes(0)) {
    randNonParticipants.push(nonParticipants.shift());
    randNonParticipants = randNonParticipants.concat(shuffle(nonParticipants));
  } else {
    randNonParticipants = shuffle(nonParticipants);
  }

  if (playerIsEliminated) showNonPlayerRound(roundNum, randNonParticipants.pop(), randNonParticipants.pop());
  else startPlayerRound(roundNum, randNonParticipants.pop());

  for (let i = 0; i < (names.length/(2 ** roundNum)) - 1; i++) {
    startOtherRounds(roundNum, randNonParticipants.pop(), randNonParticipants.pop());
  }
}

function randomSelect() {
  return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
}

function compareSelect(leftSelection, rightSelection) {
  let result = '';

    switch (leftSelection) {
        case 'rock':
            rightSelection === 'rock' ? result = 'It\'s a Tie! You\'re both Rocks!' :
                rightSelection === 'paper' ? result = 'You Lose! Paper beats Rock!' :
                    result = 'You Win! Rock beats Scissors!';
            break;
        case 'paper':
            rightSelection === 'rock' ? result = 'You Win! Paper beats Rock!' :
                rightSelection === 'paper' ? result = 'It\s a Tie! You\'re both Papers!' :
                    result = 'You Lose! Scissors beats Paper!';
            break;
        case 'scissors':
            rightSelection === 'rock' ? result = 'You Lose! Rock beats Scissors!' :
                rightSelection === 'paper' ? result = 'You Win! Scissors beats Paper!' :
                    result = 'It\'s a Tie! You\'re both Scissors!';
            break;
        default:
            rightSelection === 'rock' ? result = 'It\'s a Tie! You\'re both Rocks!' :
                rightSelection === 'paper' ? result = 'You Lose! Paper beats Rock!' :
                    result = 'You Win! Rock beats Scissors!';
    }

    return result;
}

function cardsColorSwitch(result, playerSelection) {
  const playerRock = document.getElementById('player-rock');
  const playerPaper = document.getElementById('player-paper');
  const playerScissors = document.getElementById('player-scissors');

  const enemyRock = document.getElementById('enemy-rock');
  const enemyPaper = document.getElementById('enemy-paper');
  const enemyScissors = document.getElementById('enemy-scissors');

  if (result === 'win') {
    if (playerSelection === 'rock') {
      playerRock.classList.add('previous-win-card');
      enemyScissors.classList.add('previous-loss-card');
    } else if (playerSelection === 'paper') {
      playerPaper.classList.add('previous-win-card');
      enemyRock.classList.add('previous-loss-card');
    } else {
      playerScissors.classList.add('previous-win-card');
      enemyPaper.classList.add('previous-loss-card');
    }
  } else if (result === 'loss') {
    if (playerSelection === 'rock') {
      playerRock.classList.add('previous-loss-card');
      enemyPaper.classList.add('previous-win-card');
    } else if (playerSelection === 'paper') {
      playerPaper.classList.add('previous-loss-card');
      enemyScissors.classList.add('previous-win-card');
    } else {
      playerScissors.classList.add('previous-loss-card');
      enemyRock.classList.add('previous-win-card');
    }
  } else {
    if (playerSelection === 'rock') {
      playerRock.classList.add('previous-tie-card');
      enemyRock.classList.add('previous-tie-card');
    } else if (playerSelection === 'paper') {
      playerPaper.classList.add('previous-tie-card');
      enemyPaper.classList.add('previous-tie-card');
    } else {
      playerScissors.classList.add('previous-tie-card');
      enemyScissors.classList.add('previous-tie-card');
    }
  }
}

// async function getNonParticipant() {
//   let randIndex;

//   while (randIndex !== undefined && nonParticipants.includes(randIndex)) {
//     randIndex = Math.floor(Math.random() * 64) + 1;
//   }
//   nonParticipants.push(randIndex);
// }

async function startPlayerRound(roundNum, enemyIndex) {

  setupPlayer();
  setupRight(enemyIndex);

  if (roundNum < 6) document.getElementById('left-div-title').textContent = `Round ${roundNum}`;
  else document.getElementById('left-div-title').textContent = 'Final Round';

  const playerRock = document.getElementById('player-rock');
  const playerPaper = document.getElementById('player-paper');
  const playerScissors = document.getElementById('player-scissors');

  const enemyRock = document.getElementById('enemy-rock');
  const enemyPaper = document.getElementById('enemy-paper');
  const enemyScissors = document.getElementById('enemy-scissors');

  let playerScore = 0;
  let enemyScore = 0;

  let enemySelection = '';
  
  const leftScore = document.getElementById('left-score').querySelector('b');
  const rightScore = document.getElementById('right-score').querySelector('b');
  const roundHistory = document.querySelector('.round-history');

  const playerRoundHistory = roundHistory.querySelector('ul');
  let playerLi = document.createElement('li');

  const overarchingHistory = document.querySelector('.round-right-div ul');
  let overarchingLi = document.createElement('li');

  for (let i = 0; playerScore < 5 && enemyScore < 5; i++) {
    let selectTimer = Math.max(2, 11 - roundNum - i);

    let enemySelectDelay = Math.floor((Math.random() * ((11 - roundNum) * 0.7)) + 1);

    playerSelection = '';
    enemySelection = '';
    
    let result = '';

    do {
      if (roundNum < 6) document.getElementById('left-div-title').innerHTML = `Round ${roundNum}<br>Timer: ${selectTimer}`;
      else document.getElementById('left-div-title').innerHTML = `Final Round<br>Timer: ${selectTimer}`;

      selectTimer--;
      enemySelectDelay--;

      enemySelectDelay = Math.min(selectTimer, enemySelectDelay);

      if (playerSelection === '' && selectTimer === 0) {
        playerSelection = randomSelect();
      }

      if (enemySelection === '' && enemySelectDelay === 0) {
        enemySelection = randomSelect();
      }

      if (playerSelection !== '' && enemySelection !== '') break;

      await wait(1000);
    } while (selectTimer > 0);

    if (playerSelection !== '' && enemySelection !== '') {
      result = compareSelect(playerSelection, enemySelection);
      
      playerLi.textContent = result;

      playerRock.classList = 'control-card player-card';
      playerPaper.classList = 'control-card player-card';
      playerScissors.classList = 'control-card player-card';

      enemyRock.classList = 'control-card enemy-card';
      enemyPaper.classList = 'control-card enemy-card';
      enemyScissors.classList = 'control-card enemy-card';

      if (result.includes('Win')) {
        playerScore++;
        leftScore.textContent = playerScore;

        playerLi.style.color = '#1e90ff';
        cardsColorSwitch('win', playerSelection);

        overarchingLi.textContent = `${names[0]} beats ${names[enemyIndex]} w/ ${capitalizeFirstLetter(playerSelection)}`;
        overarchingLi.style.color = '#1e90ff';
      } else if (result.includes('Lose')) {
        enemyScore++;
        rightScore.textContent = enemyScore;

        playerLi.style.color = '#dc143c';
        cardsColorSwitch('loss', playerSelection);

        overarchingLi.textContent = `${names[enemyIndex]} beats ${names[0]} w/ ${capitalizeFirstLetter(enemySelection)}`;
        overarchingLi.style.color = '#dc143c';
      } else {
        playerLi.style.color = '#3e3e3e';
        cardsColorSwitch('tie', playerSelection);
      }

      playerRoundHistory.prepend(playerLi);
      
      if (overarchingLi.textContent.length > 0) overarchingHistory.prepend(overarchingLi);
    }
  }

  if (playerScore === 5) {
    wins[0]++;
    advancingParticipants.unshift(0);

    playerLi.textContent = `You eliminated ${names[enemyIndex]} w/ ${capitalizeFirstLetter(playerSelection)}!!`;
    playerLi.style.color = '#3e8e41';

    overarchingLi.textContent = `${names[0]} eliminates ${names[enemyIndex]} w/ ${capitalizeFirstLetter(playerSelection)}`;
    overarchingLi.style.color = '#3e8e41';

    waitForNextRound(roundNum);
  } else {
    wins[enemyIndex]++;

    playerIsEliminated = true;

    advancingParticipants.push(enemyIndex);

    playerLi.textContent = `${names[enemyIndex]} eliminated you w/ ${capitalizeFirstLetter(enemySelection)}....`;
    playerLi.style.color = '#dc143c';
    
    overarchingLi.textContent = `${names[enemyIndex]} eliminates ${names[0]} w/ ${capitalizeFirstLetter(enemySelection)}`;
    overarchingLi.style.color = '#dc143c';

    waitForNextRound(roundNum);
  }

  playerRoundHistory.prepend(playerLi);

  overarchingHistory.prepend(overarchingLi);
}

async function showNonPlayerRound(roundNum, leftIndex, rightIndex) {
  setupLeft(leftIndex);
  setupRight(rightIndex);

  if (roundNum < 6) document.getElementById('left-div-title').textContent = `Round ${roundNum}`;
  else document.getElementById('left-div-title').textContent = 'Final Round';

  const leftRock = document.getElementById('player-rock');
  const leftPaper = document.getElementById('player-paper');
  const leftScissors = document.getElementById('player-scissors');

  const rightRock = document.getElementById('enemy-rock');
  const rightPaper = document.getElementById('enemy-paper');
  const rightScissors = document.getElementById('enemy-scissors');

  let leftSelection = '';
  let rightSelection = '';

  const leftScore = document.getElementById('left-score').querySelector('b');
  const rightScore = document.getElementById('right-score').querySelector('b');
  
  let playerScore = 0;
  let enemyScore = 0;

  const roundHistory = document.querySelector('.round-history');

  const playerRoundHistory = roundHistory.querySelector('ul');
  let playerLi = document.createElement('li');

  const overarchingHistory = document.querySelector('.round-right-div ul');
  let overarchingLi = document.createElement('li');

  for (let i = 0; playerScore < 5 && enemyScore < 5; i++) {
    let selectTimer = Math.max(2, 11 - roundNum - i);

    let leftSelectDelay = Math.floor((Math.random() * ((11 - roundNum) * 0.7)) + 1);
    let rightSelectDelay = Math.floor((Math.random() * ((11 - roundNum) * 0.7)) + 1);

    leftSelection = '';
    rightSelection = '';
    
    let result = '';

    do {
      if (roundNum < 6) document.getElementById('left-div-title').innerHTML = `Round ${roundNum}<br>Timer: ${selectTimer}`;
      else document.getElementById('left-div-title').innerHTML = `Final Round<br>Timer: ${selectTimer}`;

      selectTimer--;
      leftSelectDelay--;
      rightSelectDelay--;

      leftSelectDelay = Math.min(selectTimer, leftSelectDelay);
      rightSelectDelay = Math.min(selectTimer, rightSelectDelay);

      if (leftSelection === '' && leftSelectDelay === 0) {
        leftSelection = randomSelect();
      }

      if (rightSelection === '' && rightSelectDelay === 0) {
        rightSelection = randomSelect();
      }

      if (leftSelection !== '' && rightSelection !== '') break;

      await wait(1000);
    } while (selectTimer > 0);

    if (leftSelection !== '' && rightSelection !== '') {
      result = compareSelect(leftSelection, rightSelection);

      playerLi.textContent = result;

      leftRock.classList = 'control-card';
      leftPaper.classList = 'control-card';
      leftScissors.classList = 'control-card';

      rightRock.classList = 'control-card enemy-card';
      rightPaper.classList = 'control-card enemy-card';
      rightScissors.classList = 'control-card enemy-card';

      if (result.includes('Win')) {
        playerScore++;
        leftScore.textContent = playerScore;

        playerLi.style.color = '#1e90ff';
        cardsColorSwitch('win', playerSelection);

        overarchingLi.textContent = `${names[leftIndex]} beats ${names[rightIndex]} w/ ${capitalizeFirstLetter(leftSelection)}`;
      } else if (result.includes('Lose')) {
        enemyScore++;
        rightScore.textContent = enemyScore;

        playerLi.style.color = '#dc143c';
        cardsColorSwitch('loss', playerSelection);

        overarchingLi.textContent = `${names[rightIndex]} beats ${names[leftIndex]} w/ ${capitalizeFirstLetter(rightSelection)}`;
      } else {
        playerLi.style.color = '#3e3e3e';
        cardsColorSwitch('tie', playerSelection);
      }

      playerRoundHistory.prepend(playerLi);
      
      if (overarchingLi.textContent.length > 0) overarchingHistory.prepend(overarchingLi);
    }
  }

  if (leftScore === 5) {
    wins[leftIndex]++;

    advancingParticipants.push(leftIndex);

    overarchingLi.textContent = `${names[leftIndex]} eliminates ${names[rightIndex]} w/ ${capitalizeFirstLetter(leftSelection)}`;

    waitForNextRound(roundNum);
  } else {
    wins[rightIndex]++;

    advancingParticipants.push(rightIndex);

    overarchingLi.textContent = `${names[rightIndex]} eliminates ${names[leftIndex]} w/ ${capitalizeFirstLetter(rightSelection)}`;

    waitForNextRound(roundNum);
  }

  overarchingLi.style.color = 'orange';
  overarchingHistory.prepend(overarchingLi);
}

async function startOtherRounds(roundNum, leftIndex, rightIndex) {
  let leftSelection = '';
  let rightSelection = '';
  
  let leftScore = 0;
  let rightScore = 0;

  const overarchingHistory = document.querySelector('.round-right-div ul');
  let overarchingLi = document.createElement('li');

  for (let i = 0; leftScore < 5 && rightScore < 5; i++) {
    let selectTimer = Math.max(2, 11 - roundNum - i);

    let leftSelectDelay = Math.floor((Math.random() * ((11 - roundNum) * 0.7)) + 1);
    let rightSelectDelay = Math.floor((Math.random() * ((11 - roundNum) * 0.7)) + 1);

    leftSelection = '';
    rightSelection = '';
    
    let result = '';

    do {
      selectTimer--;
      leftSelectDelay--;
      rightSelectDelay--;

      leftSelectDelay = Math.min(selectTimer, leftSelectDelay);
      rightSelectDelay = Math.min(selectTimer, rightSelectDelay);

      if (leftSelection === '' && leftSelectDelay === 0) {
        leftSelection = randomSelect();
      }

      if (rightSelection === '' && rightSelectDelay === 0) {
        rightSelection = randomSelect();
      }

      if (leftSelection !== '' && rightSelection !== '') break;

      await wait(1000);
    } while (selectTimer > 0);

    if (leftSelection !== '' && rightSelection !== '') {
      result = compareSelect(leftSelection, rightSelection);

      if (result.includes('Win')) {
        leftScore++;

        overarchingLi.textContent = `${names[leftIndex]} beats ${names[rightIndex]} w/ ${capitalizeFirstLetter(leftSelection)}`;
      } else if (result.includes('Lose')) {
        rightScore++;

        overarchingLi.textContent = `${names[rightIndex]} beats ${names[leftIndex]} w/ ${capitalizeFirstLetter(rightSelection)}`;
      }
      
      if (overarchingLi.textContent.length > 0) overarchingHistory.prepend(overarchingLi);
    }
  }

  if (leftScore === 5) {
    wins[leftIndex]++;

    advancingParticipants.push(leftIndex);

    overarchingLi.textContent = `${names[leftIndex]} eliminates ${names[rightIndex]} w/ ${capitalizeFirstLetter(leftSelection)}`;
  } else {
    wins[rightIndex]++;

    advancingParticipants.push(rightIndex);

    overarchingLi.textContent = `${names[rightIndex]} eliminates ${names[leftIndex]} w/ ${capitalizeFirstLetter(rightSelection)}`;
  }

  //if (playerIsEliminated) waitForNextRound(roundNum);

  overarchingLi.style.color = 'orange';
  overarchingHistory.prepend(overarchingLi);
}

function displayChampion(championIndex) {
  document.querySelector('.round-div').classList.add('removed');

  const championDiv = document.querySelector('.champion-div');

  const championDetails = championDiv.querySelector('.champion-details');

  championDetails.querySelectorAll('p')[0].innerHTML = '<b>Champions:</b> ' + champions[championIndex];
  championDetails.querySelectorAll('p')[1].innerHTML = '<b>Wins:</b> ' + wins[championIndex];
  
  const championCard = championDiv.querySelector('.champion-card');

  championCard.querySelector('img').src = images[championIndex];

  const textContainer = championCard.querySelector('.text-container');

  textContainer.querySelector('b').textContent = names[championIndex];
  textContainer.querySelector('p').textContent = epithets[championIndex];

  championDiv.classList.remove('removed');
}

async function waitForNextRound(roundNum) {
  if (roundNum === 6) {
    if (!playerIsEliminated) document.getElementById('left-div-title').textContent = 'Congratulations! You are the Champion!';
    else document.getElementById('left-div-title').textContent = `${names[advancingParticipants[0]]} is the Champion!`;

    champions[advancingParticipants[0]]++;

    displayChampion(advancingParticipants[0]);
  } else {
    const playerRock = document.getElementById('player-rock');
    const playerPaper = document.getElementById('player-paper');
    const playerScissors = document.getElementById('player-scissors');
    
    const enemyRock = document.getElementById('enemy-rock');
    const enemyPaper = document.getElementById('enemy-paper');
    const enemyScissors = document.getElementById('enemy-scissors');
    
    playerRock.classList = 'control-card';
    playerPaper.classList = 'control-card';
    playerScissors.classList = 'control-card';
    
    enemyRock.classList = 'control-card enemy-card';
    enemyPaper.classList = 'control-card enemy-card';
    enemyScissors.classList = 'control-card enemy-card';
    
    removeControlCardListeners();
    
    while (advancingParticipants.length < names.length/(2 ** roundNum)) {
      document.getElementById('left-div-title').textContent = `Waiting for Other Players... (${advancingParticipants.length}/${names.length/(2 ** roundNum)})`;
      await wait(300);
    }
  
    nonParticipants = [...advancingParticipants];
    
    startRound(++roundNum);
  }
}

},{"epithet":1,"gamer-namer":3}]},{},[4]);
