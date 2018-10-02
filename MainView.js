var Observable = require('FuseJS/Observable');
var phone = require("FuseJS/Phone");

function HomeMain() {
    router.goto("Home");
}

/* fonction de redirection */
function redirect(arg){
	console.log(JSON.stringify(arg.data));
	router.push('Detail', arg.data);
}

/* pour appeler */
function call(arg){
    //console.log(JSON.stringify(arg.data.phone1));
    phone.call(arg.data.phone1);
}

/* permet de faire un retour en arriere */
function returnBack(){
	router.goBack();
}

function medicalCard(arg){
    console.log(JSON.stringify(arg.data));
    router.push('ViewCard', arg.data);
}

function autoRoute(arg){
  console.log(JSON.stringify(arg.data));
  router.push(arg.data.route, arg.data);
}

var partenaire = [
  {
    "name":"Hopital du point G",
    "ville":"Bamako",
    "phone1":"20225003",
    "phone2":"20225002"
  },
  {
    "name": "Hopital Gabriel Touré",
    "ville": "Bamako",
    "phone1": "20222712",
    "phone2":"20230780"
  },
  {
    "name": "Hopital régional",
    "ville": "Kayes",
      "phone1": "215211606",
      "phone2": "0"
  },
  {
    "name": "Hopital du point G",
    "ville": "Bamako",
      "phone1": "20225003",
      "phone2": "20225002"
  }
]
var science = [
    {
        "title": "Cancer",
        "extract":"C'est quoi le cancer?",
        "description": "Un cancer(ou tumeur maligne) est une maladie caractérisée par une prolifération cellulaire(tumeur) anormalement importante au sein d'un tissu normal de l'organisme, de telle manière que la survie de ce dernier est menacée.Toutes ces cellules dérivent d'un même clone, cellule initiatrice du cancer qui a acquis certaines caractéristiques lui permettant de se diviser indéfiniment. Au cours de l'évolution de la maladie, certaines cellules peuvent migrer de leur lieu de production et former des métastases.Pour ces deux raisons, le dépistage du cancer doit être le plus précoce possible.",
        "background":"Green"
    },
    {
        "title": "Le cold de l'utérus",
        "extract":"Qu'est ce que c'est que cet organe?",
        "description": "Le col de l'utérus se mesure en moyenne 2,5 cm de long, 3 cm de large et 2 cm d'épaisseur. L'utérus est le principal organe de l'appareil reproductif de la femme: c'est un organe de musculaire creux destiné à accueillir l'œuf fécondé et à expulser quand il est arrivé à maturité est l'avis Dr Madani LY.",
        "background":"Red"
    },
    {
        "title": "Cancer du col de l'utérus",
        "extract":"C'est quoi exactement?",
        "description": "Un cancer du col de l’utérus est une maladie qui se développe sur la muqueuse du col de l’utérus, autrement dit sur le tissu qui le recouvre. Plus précisément, elle prend naissance dans la première couche de la muqueuse qui porte le nom d’épithélium",
        "background":"Blue"
    },
    {
        "title": "Personnes concernées",
        "extract":"Suis-je concerné?",
        "description": "",
        "background":"Green"
    },
    {
        "title": "Pourquoi faire le dépistage maitenant.",
        "extract":"Suis-je concerné?",
        "description": "le virus HPV se développe silencieusement pendant sept ans et la septième année le virus se déclenche et les facteurs de risque se présentent ( le décès) à ce stade le docteur a peu de chance pour sauver le patient.Je vais bien, je ne sais pas si je porte le virus, quel stade? je vais faire mon dépistage pour éviter le cancer du col.le dépistage se fait gratuitement à tous les centres de santé de références et les hôpitaux.",
        "background":"Green"
    },
]


var content = [
    {
        "title": "Actualités",
        "content": "",
        "description":"Au Mali, 2144 cas de cancers ont été colligés dans le registre de 1998 à 2002 avec une prédominance chez les femmes, descancers du col de l’utérus (33,59%) et du sein (23%) et chez les hommes, les cancers du foie (26,6%)suivis des cancers de l’estomac (22,3%). Ces données sont fournies par les hôpitaux du Point G, Gabriel Touré, Kati et l’Institut national de recherche en santé publique (INRSP).Selon les estimations du Centre international de lutte contre le cancer (GLOBOCAN), le nombre de nouveaux cas de cancers de col attendus au Mali était pour 2012 de 1862 cas dont 1565 cas chez les moins de 65 ans et 297 cas pour les 65 ans et plus. En 2015, l’incidence prévisionnelle était de 1884 cas répartis entre 1542 cas pour les femmes de moins de 65 ans et 342 cas pour les femmes d’âge supérieur ou égal à 65 ans. Conséquence : la létalité par cancer du col passerait de 1261 décès en 2012 à 1297 décès en 2015.Le ministre de la Santé et de l’Hygiène publique a indiqué que pour faire face à cette situation, des actions concrètes de prévention et de lutte ont été menées par le gouvernement. Il s’agit entre autres, de la mise en place d’un registre national de cancer qui fonctionne depuis 1986, la création d’un service d’anatomopathologie pour le diagnostic cytologique et historique à l’Institut national de recherche en santé publique et à l’hôpital du Point G, la mise  à disposition gratuite de médicaments anticancéreux à la pharmacie de l’hôpital du Point G parune subvention de l’Etat d’un montant qui a évolué de 200 millionspar an en 2008 à 324.276.491 Fcfa en 2015.Le ministre Togo a félicité Orange Mali pour son soutien constant aux activités du système de santé et assuré de l’accompagnement de sondépartement pour que l’initiative soit couronnée de succès.L’épouse du chef de l’Etat a déploré que malgré l’existence des moyens pour prévenir et dépister le cancer du col de l’utérus, la maladie continue de faire des ravages. Beaucoup d’adolescentes et de jeunes succombent à cette maladie, créant ainsi un déséquilibre familial, facteur inéluctable d’un déséquilibre sociétal.",
        "image": "Assets/Images/1.jpg",
        "route":""
    },
    {
        "title": "Centres médicaux partenaires",
        "content": "",
        "description": "",
        "image": "Assets/Images/7.jpeg",
        "route":"Partenaire"
    },
    {
        'title': 'Le Cancer du Col de l Utérus',
        'content': '',
        'description': '',
        'image': 'Assets/Images/3.jpeg',
        "route":""
    },
    {
        'title': '',
        'content': '',
        'description': '',
        'image': 'Assets/Images/4.jpeg',
        "route":""
    },
    {
        'title': '',
        'content': '',
        'description': '',
        'image': 'Assets/Images/5.jpeg',
        "route":""
    }
]
module.exports = {
    HomeMain: HomeMain,
    content: content,
    science: science,
    redirect: redirect,
    returnBack: returnBack,
    medicalCard: medicalCard,
    partenaire: partenaire,
    autoRoute: autoRoute,
    call: call
};
