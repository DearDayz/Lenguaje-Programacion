package com.lenguajesdeprogramacion.spring.api1.api_pokedex_springboot.controller;

import com.lenguajesdeprogramacion.spring.api1.api_pokedex_springboot.model.Pokemon;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/pokemon")
public class PokedexController {

    // Lista de Pokémon que actúa como una base de datos en memoria
    private List<Pokemon> pokedex = Arrays.asList(
    new Pokemon(1, "Bulbasaur", "Grass/Poison", "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"),
    new Pokemon(2, "Ivysaur", "Grass/Poison", "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"),
    new Pokemon(3, "Venusaur", "Grass/Poison", "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"),
    new Pokemon(4, "Charmander", "Fire", "The flame on its tail shows the strength of its life force. If it is weak, the flame also burns weakly.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"),
    new Pokemon(5, "Charmeleon", "Fire", "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"),
    new Pokemon(6, "Charizard", "Fire/Flying", "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"),
    new Pokemon(7, "Squirtle", "Water", "After birth, its back swells and hardens into a shell. It sprays a potent foam from its mouth.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"),
    new Pokemon(8, "Wartortle", "Water", "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"),
    new Pokemon(9, "Blastoise", "Water", "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"),
    new Pokemon(10, "Caterpie", "Bug", "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"),
    new Pokemon(11, "Metapod", "Bug", "This Pokémon is vulnerable to attack while its shell is soft, exposing its weak and tender body.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"),
    new Pokemon(12, "Butterfree", "Bug/Flying", "In battle, it flaps its wings at high speed to release highly toxic dust into the air.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"),
    new Pokemon(13, "Weedle", "Bug/Poison", "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"),
    new Pokemon(14, "Kakuna", "Bug/Poison", "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"),
    new Pokemon(15, "Beedrill", "Bug/Poison", "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"),
    new Pokemon(16, "Pidgey", "Normal/Flying", "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"),
    new Pokemon(17, "Pidgeotto", "Normal/Flying", "This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"),
    new Pokemon(18, "Pidgeot", "Normal/Flying", "This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"),
    new Pokemon(19, "Rattata", "Normal", "Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"),
    new Pokemon(20, "Raticate", "Normal", "Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"),
    new Pokemon(21, "Spearow", "Normal/Flying", "Inept at flying high. However, it can fly around very fast to protect its territory.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"),
    new Pokemon(22, "Fearow", "Normal/Flying", "A Pokémon that dates back many years. If it senses danger, it flies high and away, instantly.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"),
    new Pokemon(23, "Ekans", "Poison", "Moves silently and stealthily. Eats the eggs of birds, such as Pidgey and Spearow, whole.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png"),
    new Pokemon(24, "Arbok", "Poison", "The frightening patterns on its belly have been studied. Six variations have been confirmed.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"),
    new Pokemon(25, "Pikachu", "Electric", "When several of these Pokémon gather, their electricity could build and cause lightning storms.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"),
    new Pokemon(26, "Raichu", "Electric", "Its long tail serves as a ground to protect itself from its own high-voltage power.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"),
    new Pokemon(27, "Sandshrew", "Ground", "Burrows deep underground in arid locations far from water. It only emerges to hunt for food.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png"),
    new Pokemon(28, "Sandslash", "Ground", "Curls up into a spiny ball when threatened. It can roll while curled up to attack or escape.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png"),
    new Pokemon(29, "Nidoran♀", "Poison", "Although small, its venomous barbs render this Pokémon dangerous. The female has smaller horns.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png"),
    new Pokemon(30, "Nidorina", "Poison", "The female's horns develop slowly. Prefers physical attacks such as clawing and biting.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png"),
    new Pokemon(31, "Nidoqueen", "Poison/Ground", "Its hard scales provide strong protection. It uses its hefty bulk to execute powerful moves.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png"),
    new Pokemon(32, "Nidoran♂", "Poison", "Stiffens its ears to sense danger. The larger its horns, the more powerful its secreted venom.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png"),
    new Pokemon(33, "Nidorino", "Poison", "An aggressive Pokémon that is quick to attack. The horn on its head secretes a powerful venom.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png"),
    new Pokemon(34, "Nidoking", "Poison/Ground", "It uses its powerful tail in battle to smash, constrict, then break the prey's bones.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"),
    new Pokemon(35, "Clefairy", "Fairy", "Its magical and cute appeal has many admirers. It is rare and found only in certain areas.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"),
    new Pokemon(36, "Clefable", "Fairy", "A timid fairy Pokémon that is rarely seen. It will run and hide the moment it senses people.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png"),
    new Pokemon(37, "Vulpix", "Fire", "At the time of birth, it has just one tail. The tail splits from its tip as it grows older.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"),
    new Pokemon(38, "Ninetales", "Fire", "Very smart and very vengeful. Grabbing one of its many tails could result in a 1,000-year curse.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"),
    new Pokemon(39, "Jigglypuff", "Normal/Fairy", "When its huge eyes light up, it sings a mysteriously soothing melody that lulls its enemies to sleep.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"),
    new Pokemon(40, "Wigglytuff", "Normal/Fairy", "The body is soft and rubbery. When angered, it will suck in air and inflate itself to an enormous size.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png"),
    new Pokemon(41, "Zubat", "Poison/Flying", "Forms colonies in perpetually dark places. Uses ultrasonic waves to identify and approach targets.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png"),
    new Pokemon(42, "Golbat", "Poison/Flying", "Once it strikes, it will not stop draining energy from the victim even if it gets too heavy to fly.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png"),
    new Pokemon(43, "Oddish", "Grass/Poison", "During the day, it keeps its face buried in the ground. At night, it wanders around sowing its seeds.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png"),
    new Pokemon(44, "Gloom", "Grass/Poison", "The fluid that oozes from its mouth isn't drool. It is a nectar that is used to attract prey.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png"),
    new Pokemon(45, "Vileplume", "Grass/Poison", "The larger its petals, the more toxic pollen it contains. Its big head is heavy and hard to hold up.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png"),
    new Pokemon(46, "Paras", "Bug/Grass", "Burrows to suck tree roots. The mushrooms on its back grow by drawing nutrients from the bug host.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png"),
    new Pokemon(47, "Parasect", "Bug/Grass", "A host-parasite pair in which the parasite mushroom has taken over the host bug. Prefers damp places.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png"),
    new Pokemon(48, "Venonat", "Bug/Poison", "Its large eyes act as radar. In a bright place, you can see that they are clusters of many tiny eyes.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png"),
    new Pokemon(49, "Venomoth", "Bug/Poison", "The dust-like scales covering its wings are color coded to indicate the kinds of poison it has.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png"),
    new Pokemon(50, "Diglett", "Ground", "Lives about one yard underground where it feeds on plant roots. It sometimes appears above ground.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png"),
    new Pokemon(51, "Dugtrio", "Ground", "A team of Diglett triplets. It triggers huge earthquakes by burrowing 60 miles underground.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png"),
    new Pokemon(52, "Meowth", "Normal", "Adores circular objects. Wanders the streets on a nightly basis to look for dropped loose change.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png"),
    new Pokemon(53, "Persian", "Normal", "Although its fur has many admirers, it is tough to raise as a pet because of its fickle meanness.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png"),
    new Pokemon(54, "Psyduck", "Water", "While lulling its enemies with its vacant look, this wily Pokémon will use psychokinetic powers.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"),
    new Pokemon(55, "Golduck", "Water", "Often seen swimming elegantly by lake shores. It is often mistaken for the Japanese monster, Kappa.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png"),
    new Pokemon(56, "Mankey", "Fighting", "Extremely quick to anger. It could be docile one moment, then thrashing away the next instant.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png"),
    new Pokemon(57, "Primeape", "Fighting", "Always furious and tenacious to boot. It will not abandon chasing its quarry until it is caught.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png"),
    new Pokemon(58, "Growlithe", "Fire", "Very protective of its territory. It will bark and bite to repel intruders from its space.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png"),
    new Pokemon(59, "Arcanine", "Fire", "A Pokémon that has been admired since the past for its beauty. It runs agilely as if on wings.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"),
    new Pokemon(60, "Poliwag", "Water", "Its newly grown legs prevent it from running. It appears to prefer swimming than trying to stand.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png"),
    new Pokemon(61, "Poliwhirl", "Water", "Capable of living in or out of water. When out of water, it sweats to keep its body slimy.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png"),
    new Pokemon(62, "Poliwrath", "Water/Fighting", "An adept swimmer at both the front crawl and breaststroke. Easily overtakes the best human swimmers.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png"),
    new Pokemon(63, "Abra", "Psychic", "Using its ability to read minds, it will identify impending danger and teleport to safety.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png"),
    new Pokemon(64, "Kadabra", "Psychic", "It emits special alpha waves from its body that induce headaches just by being close by.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png"),
    new Pokemon(65, "Alakazam", "Psychic", "Its brain can outperform a supercomputer. Its IQ (intelligence quotient) is said to be around 5,000.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"),
    new Pokemon(66, "Machop", "Fighting", "Loves to build its muscles. It trains in all styles of martial arts to become even stronger.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png"),
    new Pokemon(67, "Machoke", "Fighting", "Its muscular body is so powerful, it must wear a power-save belt to be able to regulate its motions.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png"),
    new Pokemon(68, "Machamp", "Fighting", "Using its heavy muscles, it throws powerful punches that can send the victim clear over the horizon.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"),
    new Pokemon(69, "Bellsprout", "Grass/Poison", "A carnivorous Pokémon that traps and eats bugs. It uses its root feet to soak up needed moisture.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png"),
    new Pokemon(70, "Weepinbell", "Grass/Poison", "It spits out PoisonPowder to immobilize the enemy and then finishes it with a spray of Acid.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png"),
    new Pokemon(71, "Victreebel", "Grass/Poison", "Said to live in huge colonies deep in jungles, although no one has ever returned from there.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png"),
    new Pokemon(72, "Tentacool", "Water/Poison", "Drifts in shallow seas. Anglers who hook them by accident are often punished by its stinging acid.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png"),
    new Pokemon(73, "Tentacruel", "Water/Poison", "The tentacles are normally kept short. On hunts, they are extended to ensnare and immobilize prey.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png"),
    new Pokemon(74, "Geodude", "Rock/Ground", "Found in fields and mountains. Mistaking them for boulders, people often step or trip on them.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png"),
    new Pokemon(75, "Graveler", "Rock/Ground", "Rolls down slopes to move. It rolls over any obstacle without slowing or changing its direction.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png"),
    new Pokemon(76, "Golem", "Rock/Ground", "Its boulder-like body is extremely hard. It can easily withstand dynamite blasts without damage.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png"),
    new Pokemon(77, "Ponyta", "Fire", "Its hooves are 10 times harder than diamonds. It can trample anything completely flat in little time.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png"),
    new Pokemon(78, "Rapidash", "Fire", "Very competitive, this Pokémon will chase anything that moves fast in the hopes of racing it.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png"),
    new Pokemon(79, "Slowpoke", "Water/Psychic", "Incredibly slow and dopey. It takes 5 seconds for it to feel pain when under attack.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png"),
    new Pokemon(80, "Slowbro", "Water/Psychic", "The Shellder that is latched onto Slowpoke's tail is said to feed on the host's left-over scraps.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png"),
    new Pokemon(81, "Magnemite", "Electric/Steel", "Uses anti-gravity to stay suspended. Appears without warning and uses Thunder Wave and similar moves.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png"),
    new Pokemon(82, "Magneton", "Electric/Steel", "Formed by several Magnemites linked together. They frequently appear when sunspots flare up.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png"),
    new Pokemon(83, "Farfetch'd", "Normal/Flying", "The sprig of green onions it holds is its weapon. It is used much like a metal sword.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png"),
    new Pokemon(84, "Doduo", "Normal/Flying", "A bird that makes up for its poor flying with its fast foot speed. Leaves giant footprints.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png"),
    new Pokemon(85, "Dodrio", "Normal/Flying", "Uses its three brains to execute complex plans. While two heads sleep, one head stays awake.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png"),
    new Pokemon(86, "Seel", "Water", "The protruding horn on its head is very hard. It is used for bashing through thick icebergs.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png"),
    new Pokemon(87, "Dewgong", "Water/Ice", "Stores thermal energy in its body. Swims at a steady 8 knots even in intensely cold waters.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png"),
    new Pokemon(88, "Grimer", "Poison", "Appears in filthy areas. Thrives by sucking up polluted sludge that is pumped out of factories.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png"),
    new Pokemon(89, "Muk", "Poison", "Thickly covered with a filthy, vile sludge. It is so toxic, even its footprints contain poison.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png"),
    new Pokemon(90, "Shellder", "Water", "Its hard shell repels any kind of attack. It is vulnerable only when its shell is open.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png"),
    new Pokemon(91, "Cloyster", "Water/Ice", "When attacked, it launches its horns in quick volleys. Its innards have never been seen.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png"),
    new Pokemon(92, "Gastly", "Ghost/Poison", "Almost invisible, this gaseous Pokémon cloaks the target and puts it to sleep without notice.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png"),
    new Pokemon(93, "Haunter", "Ghost/Poison", "Because of its ability to slip through block walls, it is said to be from another dimension.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png"),
    new Pokemon(94, "Gengar", "Ghost/Poison", "Under a full moon, this Pokémon likes to mimic the shadows of people and laugh at their fright.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"),
    new Pokemon(95, "Onix", "Rock/Ground", "As it grows, the stone portions of its body harden to become similar to a diamond, but colored black.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png"),
    new Pokemon(96, "Drowzee", "Psychic", "Puts enemies to sleep, then eats their dreams. Occasionally gets sick from eating bad dreams.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png"),
    new Pokemon(97, "Hypno", "Psychic", "When it locks eyes with an enemy, it will use a mix of PSI moves such as Hypnosis and Confusion.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png"),
    new Pokemon(98, "Krabby", "Water", "Its pincers are not only powerful weapons, they are used for balance when walking sideways.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png"),
    new Pokemon(99, "Kingler", "Water", "The large pincer has 10,000 horsepower of crushing power. However, its huge size makes it unwieldy to use.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png"),
    new Pokemon(100, "Voltorb", "Electric", "Usually found in power plants. Easily mistaken for a Poké Ball, it has zapped many people.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png"),
    new Pokemon(101, "Electrode", "Electric", "It stores electric energy under very high pressure. It often explodes with little or no provocation.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png"),
    new Pokemon(102, "Exeggcute", "Grass/Psychic", "Often mistaken for eggs. When disturbed, they quickly gather and attack in swarms.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png"),
    new Pokemon(103, "Exeggutor", "Grass/Psychic", "Legend has it that on rare occasions, one of its heads will drop off and continue on as an Exeggcute.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png"),
    new Pokemon(104, "Cubone", "Ground", "Wears the skull of its deceased mother. Its cries echo inside the skull and come out as a sad melody.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png"),
    new Pokemon(105, "Marowak", "Ground", "Small and weak, this Pokémon is adept with its bone club. It has grown more vicious over the ages.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png"),
    new Pokemon(106, "Hitmonlee", "Fighting", "When in a hurry, its legs lengthen progressively. It runs smoothly with extra-long, loping strides.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png"),
    new Pokemon(107, "Hitmonchan", "Fighting", "While apparently doing nothing, it fires punches in lightning-fast volleys that are impossible to see.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png"),
    new Pokemon(108, "Lickitung", "Normal", "Its tongue can be extended like a chameleon's. It leaves a tingling sensation when it licks enemies.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png"),
    new Pokemon(109, "Koffing", "Poison", "Because it stores several kinds of toxic gases in its body, it is prone to exploding without warning.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png"),
    new Pokemon(110, "Weezing", "Poison", "Where two kinds of poison gases meet, two Koffings can fuse into a Weezing over many years.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png"),
    new Pokemon(111, "Rhyhorn", "Ground/Rock", "Its massive bones are 1,000 times harder than human bones. It can easily knock a trailer flying.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png"),
    new Pokemon(112, "Rhydon", "Ground/Rock", "Protected by an armor-like hide, it is capable of living in molten lava of 3,600 degrees Fahrenheit.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png"),
    new Pokemon(113, "Chansey", "Normal", "A rare and elusive Pokémon that is said to bring happiness to those who manage to catch it.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png"),
    new Pokemon(114, "Tangela", "Grass", "Its whole body is swathed with wide vines that are similar to seaweed. These vines shake as it walks.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png"),
    new Pokemon(115, "Kangaskhan", "Normal", "Raises its young in its belly pouch. Won't run from any fight to keep its young protected.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png"),
    new Pokemon(116, "Horsea", "Water", "Known to shoot down flying bugs with precision blasts of ink from the surface of the water.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png"),
    new Pokemon(117, "Seadra", "Water", "Capable of swimming backward by rapidly flapping its wing-like pectoral fins and stout tail.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png"),
    new Pokemon(118, "Goldeen", "Water", "Its tail fin billows like an elegant ballroom dress, giving it the nickname of the Water Queen.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png"),
    new Pokemon(119, "Seaking", "Water", "In the autumn spawning season, they can be seen swimming powerfully up rivers and creeks.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png"),
    new Pokemon(120, "Staryu", "Water", "An enigmatic Pokémon that can effortlessly regenerate any appendage it loses in battle.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png"),
    new Pokemon(121, "Starmie", "Water/Psychic", "Its central core glows with the seven colors of the rainbow. Some people value the core as a gem.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png"),
    new Pokemon(122, "Mr. Mime", "Psychic/Fairy", "A master of pantomime. Its gestures and motions convince watchers that something unseeable exists.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png"),
    new Pokemon(123, "Scyther", "Bug/Flying", "With ninja-like agility and speed, it can create the illusion that there is more than one of it.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png"),
    new Pokemon(124, "Jynx", "Ice/Psychic", "It seductively wiggles its hips as it walks. It can cause people to dance in unison with it.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png"),
    new Pokemon(125, "Electabuzz", "Electric", "Normally found near power plants, it can wander away and cause major blackouts in cities.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png"),
    new Pokemon(126, "Magmar", "Fire", "Found near the mouth of a volcano. This fire-breather's body temperature is nearly 2,200 degrees Fahrenheit.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png"),
    new Pokemon(127, "Pinsir", "Bug", "If it fails to crush the victim in its pincers, it will swing it around and toss it hard.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png"),
    new Pokemon(128, "Tauros", "Normal", "When it targets an enemy, it charges furiously while whipping its body with its long tails.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png"),
    new Pokemon(129, "Magikarp", "Water", "Famous for being very unreliable. It can be found swimming in seas, lakes, rivers, and shallow puddles.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png"),
    new Pokemon(130, "Gyarados", "Water/Flying", "Once it begins to rampage, a Gyarados will burn everything down, even in a harsh storm.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png"),
    new Pokemon(131, "Lapras", "Water/Ice", "A Pokémon that has been overhunted almost to extinction. It can ferry people across the water.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png"),
    new Pokemon(132, "Ditto", "Normal", "Capable of copying an enemy's genetic code to instantly transform itself into a duplicate of the enemy.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"),
    new Pokemon(133, "Eevee", "Normal", "Its genetic code is irregular. It may mutate if it is exposed to radiation from elemental stones.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"),
    new Pokemon(134, "Vaporeon", "Water", "Lives close to water. Its long tail is ridged with a fin that is often mistaken for a mermaid's.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"),
    new Pokemon(135, "Jolteon", "Electric", "It accumulates negative ions in the atmosphere to blast out 10,000-volt lightning bolts.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png"),
    new Pokemon(136, "Flareon", "Fire", "When storing thermal energy in its body, its temperature could soar to over 1,600 degrees Fahrenheit.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png"),
    new Pokemon(137, "Porygon", "Normal", "A Pokémon that consists entirely of programming code. It is capable of moving freely in cyberspace.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png"),
    new Pokemon(138, "Omanyte", "Rock/Water", "A prehistoric Pokémon that lived in the primordial sea, it swims by twisting its 10 tentacles about.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png"),
    new Pokemon(139, "Omastar", "Rock/Water", "Despite having strong fangs and tentacles, it went extinct when its heavy shell made it unable to catch prey.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png"),
    new Pokemon(140, "Kabuto", "Rock/Water", "A Pokémon that was resurrected from a fossil found in what was once the ocean floor eons ago.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png"),
    new Pokemon(141, "Kabutops", "Rock/Water", "A slim and fast swimmer. It slices its prey with its sharp sickles and drinks the body fluids.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png"),
    new Pokemon(142, "Aerodactyl", "Rock/Flying", "A ferocious, prehistoric Pokémon that goes for the enemy's throat with its serrated saw-like fangs.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png"),
    new Pokemon(143, "Snorlax", "Normal", "Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"),
    new Pokemon(144, "Articuno", "Ice/Flying", "A legendary bird Pokémon that is said to appear to doomed people who are lost in icy mountains.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png"),
    new Pokemon(145, "Zapdos", "Electric/Flying", "A legendary bird Pokémon that is said to appear from clouds while dropping enormous lightning bolts.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png"),
    new Pokemon(146, "Moltres", "Fire/Flying", "Known as the legendary bird of fire. Every flap of its wings creates a dazzling flare of flames.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png"),
    new Pokemon(147, "Dratini", "Dragon", "Long considered a mythical Pokémon until recently when a small colony was found living underwater.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png"),
    new Pokemon(148, "Dragonair", "Dragon", "A mystical Pokémon that exudes a gentle aura. Has the ability to change climate conditions.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png"),
    new Pokemon(149, "Dragonite", "Dragon/Flying", "An extremely rarely seen marine Pokémon. Its intelligence is said to match that of humans.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"),
    new Pokemon(150, "Mewtwo", "Psychic", "A Pokémon created by recombining Mew's genes. It's said to have the most savage heart among Pokémon.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"),
    new Pokemon(151, "Mew", "Psychic", "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png")
    );

    // Endpoint para obtener todos los Pokémon
    @GetMapping
    public List<Pokemon> getAllPokemon() {
        return pokedex;
    }

    // Endpoint para obtener un Pokémon por su ID
    @GetMapping("/{id}")
    public Pokemon getPokemonById(@PathVariable int id) {
        return pokedex.stream()
            .filter(pokemon -> pokemon.getId() == id)
            .findFirst()
            .orElseThrow(() -> new RuntimeException("Pokemon not found"));
    }
}
