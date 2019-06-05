import moment from 'moment';

// Hardcode days for the sake of simplicity
const days = [ 'Today', 'Tomorrow', moment().add(2, 'days').format('ddd, MMM D') ];
// Same for times
const times = [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ];

export const musea = [
  {
    title: 'Sint-Pietersabdij',
    logo: 'http://degentsemusea.be/assets/files/made/assets/files/logos/logo-sintpieters_342_170_s_c1_c_c_0_0_1.jpg',
    adres: 'Sint-Pietersplein 9, 9000 Gent',
    description: 'De Sint-Pietersabdij is een van de topmonumenten van Gent. Achter haar statige gevels gaat een verrassend grote tuin schuil met een wijngaard, kruidentuin, fruitbomen en ruïnes. De huidige gebouwen dateren uit de 17de en 18de eeuw, de indrukwekkende refter uit de middeleeuwen. De Sint-Pietersabdij presenteert cultuurhistorische exposities, literatuur- en fotografietentoonstellingen van nationaal en internationaal niveau.',
    days,
    times,
  },
  {
    title: 'STAM',
    logo: 'http://degentsemusea.be/assets/files/made/assets/files/logos/logo-stam_342_170_s_c1_c_c_0_0_1.jpg',
    adres: 'Godshuizenlaan 2, 9000 Gent',
    description: 'Ben je in en into Gent? Dan mag je zeker het STAM niet missen, het Gentse stadsmuseum op de Bijlokesite. Reis door de tijd en ontdek wat Gent tot Gent maakt en heeft gemaakt. Publiekslievelingen: de lichtgevende luchtfoto op een glazen vloer, het oudste geschilderde stadsgezicht, de aanklikbare kaarten met een schat aan beeldmateriaal over de stad, de Gentse torens in witte LEGO.',
    days,
    times,
  },
  {
    title: 'Het Huis van Alijn',
    logo: 'http://degentsemusea.be/assets/files/made/assets/files/logos/schildje_342_342_s_c1_c_c_0_0_1.jpg',
    adres: 'Kraanlei 65 9000 Gent',
    description: 'Dagelijkse en bijzondere gebeurtenissen bepalen het ritme van ons leven. Dagen worden weken, maanden worden jaren. Het nieuwe Huis van Alijn legt gewoontes, tradities en rituelen bloot die herinneren aan een recent of verder verleden.',
    days,
    times,
  },
  {
    title: 'MSK',
    logo: 'http://degentsemusea.be/assets/files/made/assets/files/logos/MSKGENT_LOGO_02_342_155_s_c1_c_c_0_0_1.jpg',
    adres: 'Fernand Scribedreef 1 Citadelpark 9000 Gent',
    description: 'In het Museum voor Schone Kunsten (MSK) Gent ontdek je ruim 400 topstukken uit de Europese schilder- en beeldhouwkunst, van de middeleeuwen tot heden. In het iconische gebouw vind je Oude Meesters als Jheronimus Bosch, Peter Paul Rubens en Anthony van Dyck terug, maar evengoed werk van impressionisten, surrealisten en modernisten. Met namen als James Ensor, Emile Claus, George Minne en Constant Permeke is ook de Belgische kunst ruim vertegenwoordigd. Je kan bovendien de restauratoren van het Lam Gods live aan het werk zien, terwijl ze het Gentse meesterwerk van de gebroeders Van Eyck paneel per paneel onder handen nemen. De museumshop, de bar annex restaurant en de gevarieerde programmatie met ook ruimte voor actuele kunst, maken het museum tot een levendige plek waar je makkelijk een paar uur kan doorbrengen, omring door schoonheid. En wie nadien even wil uitwaaien, heeft het Citadelpark voor de deur.',
    days,
    times,
  },
  {
    title: 'S.M.A.K.',
    logo: 'http://degentsemusea.be/assets/files/made/assets/files/logos/logo-smak_342_170_s_c1_c_c_0_0_1.jpg',
    adres: 'Jan Hoetplein 1, 9000 Gent',
    description: 'Dynamisch en eigenzinnig, dat is S.M.A.K. Het museum focust op solo-tentoonstellingen van gevestigde en jonge kunstenaars en stelt hen centraal. De vaste collectie van nationale en internationale topwerken wordt gepresenteerd in wisselwerking met originele, vaak gedurfde tentoonstellingen. S.M.A.K. is een plek voor experiment en vernieuwing, maar schenkt ook aandacht aan de publieke ruimte.',
    days,
    times,
  },
  {
    title: 'Museum Dr. Guislain',
    logo: 'http://degentsemusea.be/assets/files/made/assets/files/logos/logo-guislain_342_170_s_c1_c_c_0_0_1.jpg',
    adres: 'Jozef Guislainstraat 43, 9000 Gent',
    description: 'Woudmannen, onnozelen, zotten: woorden voor waanzin. Wat is lijden aan de zwarte gal? Hoe behandelde men een hysterische vrouw? Omgaan met waanzin door de tijden heen: een mengeling van magie, religie, dwang en zorg, controle en wetenschap. In Gent organiseerde dr. Jozef Guislain in de 19de eeuw de moderne psychiatrie. In het oude Hospice Guislain, het eerste Belgische krankzinnigentehuis (1857), is nu het Museum Dr. Guislain gevestigd.',
    days,
    times,
  },
  {
    title: 'De wereld van Kina',
    logo: 'http://degentsemusea.be/assets/files/made/assets/files/logos/logo-kina_342_170_s_c1_c_c_0_0_1.jpg',
    adres: 'Sint-Pietersplein 14, 9000 Gent',
    description: 'In musea valt altijd wat te ontdekken en te beleven. Zeker in de wereld van Kina! Wist je dat er schelpen bestaan die bijna 200 kilo wegen? Kijk ook eens naar de vloer, want daar kun je tientallen fossielen ontdekken. Of vergelijk het dijbeen van een mammoet met het jouwe. De zachte paddenstoelen vragen om een knuffel. Verbaas je over de slimme spinnen en de ijverige bijen... Hier ontdek je meer dan je voor mogelijk hield',
    days,
    times,
  },
  {
    title: ' Design Museum Gent',
    logo: 'http://degentsemusea.be/assets/files/made/assets/files/logos/logo-designmuseumgent_342_170_s_c1_c_c_0_0_1.jpg',
    adres: 'Jan Breydelstraat 5, 9000 Gent',
    description: 'Design Museum Gent is het enige Belgische designmuseum met zowel historische als hedendaagse collecties. In het hart van Gent, achter de statige gevel van een 18e-eeuws stadspaleis, vind je een afwisselende selectie van toegepaste kunsten, industrieel design en artistiek design, van Henry van de Velde tot vandaag.',
    days,
    times,
  },
  {
    title: 'Industriemuseum',
    logo: 'http://degentsemusea.be/assets/files/made/assets/files/logos/20180502_AV_Industriemuseum_logo_342_275_s_c1_c_c_0_0_1.jpg',
    adres: 'Minnemeers 10 9000 Gent',
    description: 'In het centrum van Gent, op een boogscheut van de Vrijdagmarkt, huist het Industriemuseum in een indrukwekkend fabrieksgebouw. In de voormalige katoenfabriek – je kan er de machineolie nog ruiken! – wekken grote en kleine verhalen de veelbewogen industriële geschiedenis weer helemaal tot leven. Verschillende generaties van ondernemers, handelaars en arbeiders nemen je mee in een universeel verhaal over mensen en machines en hoe die de wereld rondom ons veranderden.',
    days,
    times,
  },
];