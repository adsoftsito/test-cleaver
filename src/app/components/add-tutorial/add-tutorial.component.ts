import { Component } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent {
  tutorial: Tutorial = new Tutorial();
  submitted = false;



  arrMD : Array<number> = [1,
    5,
    10,
    20,
    30,
    40,
    50,
    60,
    65,
    75,
    84,
    87,
    90,
    93,
    95,
    97,
    97,
    98,
    98,
    98,
    99];

arrMI : Array<number> = [
4,
10,
25,
40,
55,
70,
82,
90,
95,
96,
97,
97,
97,
97,
97,
97,
97,
99];

arrMS : Array<number> = [
5,
10,
16,
30,
40,
55,
63,
75,
84,
90,
95,
96,
97,
97,
97,
97,
98,
98,
98,
99]

arrMC : Array<number> = [
1,
5,
16,
30,
55,
70,
84,
93,
95,
97,
97,
97,
98,
98,
98,
99
]


arrLD : Array<number> = [
99,
95,
87,
80,
65,
55,
50,
35,
30,
20,
18,
15,
10,
6,
5,
4,
3,
2,
2,
2,
2,
1
];

arrLI : Array<number> = [
99,
95,
87,
75,
55,
40,
25,
16,
10,
5,
4,
4,
3,
3,
3,
2,
2,
2,
2,
1
];

arrLS : Array<number> = [
  99,
  97,
  95,
  87,
  80,
  65,
  55,
  35,
  28,
  18,
  10,
  5,
  4,
  3,
  3,
  3,
  2,
  2,
  2,
  1  
]

arrLC : Array<number> = [
  99,
  97,
  95,
  90,
  84,
  70,
  55,
  40,
  38,
  23,
  10,
  5,
  4,
  3,
  2,
  2,
  1
]

arrtempTC : number[][] = [
[-21,	1],
[-20,	2],
[-19,	2],
[-18,	2],
[-17,	2],
[-16,	2],
[-15,	2],
[-14,	2],
[-13,	4],
[-12,	5],
[-11,	5],
[-10,	9],
[-9,	13],
[-8,	15],
[-7,	16],
[-6,	20],
[-5,	25],
[-4,	29],
[-3,	35],
[-2, 40],
[-1,	45],
[0,	50],
[1,	55],
[2,	60],
[3,	65],
[4,	67],
[5,	70],
[6,	75],
[7,	80],
[8,	84],
[9,	85],
[10,	90],
[11,	91],
[12,	94],
[13,	95],
[14,	96],
[15,	97],
[16,	97],
[17,	98],
[18,	98],
[19,	98],
[20,	99]
]

arrTD  = {
  '-21':	1,
  '-20':	2,
  '-19':	2,
  '-18':	2,
  '-17':	2,
  '-16':	2,
  '-15':	2,
  '-14':	2,
  '-13':	4,
  '-12':	5,
  '-11':	5,
  '-10':	9,
  '-9':	13,
  '-8':	15,
  '-7':	16,
  '-6':	20,
  '-5':	25,
  '-4':	29,
  '-3':	35,
  '-2': 40,
  '-1':	45,
  '0':	50,
  '1':	55,
  '2':	60,
  '3':	65,
  '4':	67,
  '5':	70,
  '6':	75,
  '7':	80,
  '8': 84,
  '9':	85,
  '10':	90,
  '11':	91,
  '12':	94,
  '13':	95,
  '14':	96,
  '15':	97,
  '16':	97,
  '17':	98,
  '18':	98,
  '19':	98,
  '20':	99
};


arrTI  = {
  '-19':	1,
  '-18':	2,
  '-17':	2,
  '-16':	2,
  '-15':	2,
  '-14':	2,
  '-13':	2,
  '-12':	2,
  '-11':	2,
  '-10':	3,
  '-9':	4,
  '-8':	5,
  '-7':	6,
  '-6':	10,
  '-5':	16,
  '-4':	20,
  '-3':	29,
  '-2': 35,
  '-1':	45,
  '0':	55,
  '1':	60,
  '2':	70,
  '3':	75,
  '4':	85,
  '5':	90,
  '6':	95,
  '7':	96,
  '8': 97,
  '9':	97,
  '10':	98,
  '11':	98,
  '12':	98,
  '13':	98,
  '14':	98,
  '15':	98,
  '16':	98,
  '17':	99

};

arrTS  = {
  '-19':	1,
  '-18':	2,
  '-17':	2,
  '-16':	2,
  '-15':	2,
  '-14':	2,
  '-13':	2,
  '-12':	3,
  '-11':	4,
  '-10':	5,
  '-9':	8,
  '-8':	10,
  '-7':	15,
  '-6':	20,
  '-5':	25,
  '-4':	30,
  '-3':	35,
  '-2': 40,
  '-1':	50,
  '0':	57,
  '1':	60,
  '2':	70,
  '3':	75,
  '4':	80,
  '5':	84,
  '6':	87,
  '7':	91,
  '8': 94,
  '9':	96,
  '10':	97,
  '11':	97,
  '12':	98,
  '13':	98,
  '14':	98,
  '15':	98,
  '16':	98,
  '17':	98,
  '18':	98,
  '19':	99
};

arrTC  = {
  '-16':	1,
  '-15':	2,
  '-14':	2,
  '-13':	2,
  '-12':	2,
  '-11':	3,
  '-10':	4,
  '-9':	6,
  '-8':	9,
  '-7':	13,
  '-6':	20,
  '-5':	25,
  '-4':	30,
  '-3':	35,
  '-2': 55,
  '-1':	60,
  '0':	70,
  '1':	75,
  '2':	84,
  '3':	90,
  '4':	95,
  '5':	96,
  '6':	97,
  '7':	97,
  '8': 98,
  '9':	98,
  '10':	98,
  '11':	98,
  '12':	98,
  '13':	98,
  '14':	98,
  '15':	99
};


arrInter  = {
  '1':	'Persuasivo	el que tiene fuerza para hacer creer a otros una cosa, convencer de algo.',
  '2':	'Gentil	el que actúa con cortesía y soltura, con urbanidad. El amable, gallardo, con gracia.',
  '3':	'Humilde	sencillo, que no alardea (no interpretar como vida cristiana)',
  '4':	'Original	el que no es imitación de otro, el singular.',
  '5':	'Agresivo	el que demuestra empuje e iniciativa en una forma positiva, no es el propenso a ofender.',
  '6':	'Alma de la fiesta	el más popular, el que genera mayor atracción en  el grupo.',
  '7':	'Comodino	el amante de la comodidad, que busca caminos fáciles.',
  '8': 'Temeroso	el tímido, el cobarde, aprensivo.',
  '9':	'Agradable	el que agrada y complace, gusta a los demás.',
  '10':	'Temeroso de Dios	el que reconoce el poder de Dios sobre todas las cosas, religioso',
  '11':	'Tenaz	el obstinado y testarudo, con inquebrantable fuerza de voluntad para realizar algún objetivo.',
  '12':	'Atractivo	cualidad de la persona (encanto) que atrae la voluntad de los demás.',
  '13':	'Cauteloso	el reservado que actúa con cuidado, con precaución.',
  '14':	'Determinado	el atrevido, que toma resoluciones, preciso y decidido, que define.',
  '15': 'Convincente	el que sabe convencer y obligar a otro con razones a que reconozca una cosa o cambie de opinión.',
  '25': 'Fuerza de voluntad	determinación inquebrantable para lograr algo, firmeza.',
  '26': 'Mente abierta	cualidad para escuchar y recibir otro punto de vista diferente.',
  '27': 'Complaciente	el que procura ser agradable, servicial, solícito, comedido, conciliador o deferente.',
  '28': 'Animoso	el que demuestra valor, energía voluntad, intención y esfuerzo para la lucha o el trabajo.',
  '29': 'Confiado	el presumido y vanidoso, crédulo y sencillo. No el que confía en sí mismo.',
  '30': 'Simpatizador	el que manifiesta inclinación o afecto natural hacia otras personas.',
  '31': 'Tolerante	el que reconoce y respeta las opiniones, prácticas y comportamiento de otros, aunque sean diferentes a las de él. No el que sufre con paciencia o el que deja pasar cosas que no son lícitas.',
  '32': 'Afirmativo	el que responde en la mayoría de las ocasiones de una manera positiva. No el que se sostiene o ratifica lo dicho.',
  '33': 'Ecuánime	el calmado, sereno, imparcial, inalterable, paciente, prudente. Que tiene siempre el mismo ánimo.',
  '34': 'Preciso	el puntual y exacto, con claridad y determinado.',
  '35': 'Nervioso	el ansioso, al que le falta sentido de seguridad',
  '36': 'Jovial	el apacible, alegre y festivo.',
  '37': 'Disciplinado	el acostumbrado a la obediencia, a seguir las reglas.',
  '38': 'Generoso	el que obra con magnanimidad y nobleza, liberal dadivoso y franco.',
  '39': 'Animoso	el que demuestra valor, energía voluntad, intención y esfuerzo para la lucha o el trabajo.',
  '40': 'Persistente	el que supera obstáculos, el que es constante, y perseverante, el que se mantiene en un propósito.',
  '41': 'Competitivo	el que contiende o disputa con otros por una causa de superación común por perfección o por la posesión de propiedades.',
  '42': 'Alegre	el  que está lleno de alegría y la ocasiona en otros. Contento de animo, festivo.',
  '43': 'Considerado	el que obra con reflexión y que trata con respeto a los demás.',
  '44': 'Armonioso	el que tiene amistad y buena correspondencia, el que no tiene fricciones con otros.',
  '45': 'Admirable	que es digno de admiración. Notable.',
  '46': 'Bondadoso	el que es muy bueno, humanitario.',
  '47': 'Resignado	el que se conforma, se sujeta, el condescendiente. El que acepta estar bajo la voluntad de otro.',
  '48': 'Carácter firme	que no cambia fácilmente su punto de vista o su estilo de condición.',
  '49': 'Obediente	el que sabe seguir indicaciones sin poner su creatividad, cumple voluntad de quien manda, dócil, subordinado.',
  '50': 'Quisquilloso	el que fácilmente se agravia u ofende, demasiado delicado en el trato, meticuloso.',
  '51': 'Inconquistable	que no se deja vencer con ruegos, detalles o agasajos, susceptible.',
  '52': 'Juguetón	el que tiene buen sentido del humor, aficionado a bromas.',
  '53': 'Respetuoso	el que guarda reverencia, consideración y cortesía para los demás.',
  '54': 'Emprendedor	que muestra imaginación instintiva y empuje, que se dedica a resolver situaciones difíciles. Atrevido.',
  '55': 'Optimista	el que suele ver y juzgar las cosas bajo su aspecto más favorable.',
  '56': 'Servicial	el que sirve con diligencia, siempre dispuesto a complacer a otros, amable y colaborador.',
  '57': 'Valiente	el que manifiesta coraje y decisión. El fuerte, enérgico y animoso.',
  '58': 'Inspirador	el que anima la mente o las emociones de otros; infunde entusiasmo.',
  '59': 'Sumiso	el que permite por sí mismo estar sujeto a otro. Obediente y dócil.',
  '60': 'Tímido	callado, no busca sobresalir.',
  '61': 'Adaptable	el que se ajusta fácilmente a condiciones nuevas o diferentes.',
  '62': 'Disputador	dado a argüir o debatir razones para, por o contra algo. Discutidor.',
  '63': 'Indiferente	el que parece en forma sistemática no estar involucrado. No presenta motivo de preferencia.',
  '64': '"Sangre liviana"	el que a todo el mundo le cae bien, persona simpática.',
  '65': 'Amiguero	el que busca y goza la compañía de otros, muy sociable.',
  '66': 'Paciente	el que es capaz de soportar, sabe esperar con calma el momento oportuno.',
  '67': 'Confianza en sí mismo	confía en sus propias capacidades y recursos, autosuficiente.',
  '68': 'Mesurado para hablar	medido para hablar, habla lo necesario.',
  '69': 'Conforme	el satisfecho con lo que tiene, de acuerdo con el parecer de otros.',
  '70':	'Confiable	persona con la cual se tiene confianza.',
  '71':	'Pacífico	el que tiene calma y serenidad, amante de la paz.',
  '72':	'Positivo	optimista.',  
  '73': 'Aventurero	el que busca aventuras',
  '74': 'Receptivo	persona con capacidad de recibir, facilidad para captar algo',
  '75': 'Cordial	persona amable, afectuosa, cariñosa.',
  '76': 'Moderado	guarda medio entre dos extremos, que mantiene un equilibrio en sus acciones.',
  '77': 'Indulgente	el que perdona fácilmente, tolerante, conciliador.',
  '78': 'Esteta	el que es aficionado, percibe o cultiva la belleza. Busca en todo la elegancia.',
  '79': 'Vigoroso	el robusto y fuerte.',
  '80': 'Sociable	el que busca y necesita del compañerismo de otros, fácil de tratar con él.',
  '81': 'Parlanchín	persona locuaz, que tiene inclinación por hablar mucho, platicador.',
  '82': 'Controlado	ejerce influencia resultante en sí mismo y en otros, con dominio de sí.',
  '83': 'Convencional	el que se mantiene en una trayectoria de uso general.',
  '84': 'Decisivo	el resuelto, determinado e incuestionable.',
  '85': 'Cohibido	el que se limita, restringe o controla ante los demás.',
  '86': 'Exacto	justo, preciso, matemático, calculador.',
  '87': 'Franco	espontáneo, leal, sincero.',
  '88': 'Buen compañero	persona sociable, que mantiene armonía con otros.',
  '89': 'Diplomático	el que se caracteriza por el buen tacto en su trato con la gente.',
  '90':	'Audaz	el arrogante e insolente. No el osado ni atrevido.',
  '91': 'Refinado	el elegante y fino en su manera de ser, se distingue.',
  '92': 'Satisfecho	se contenta o conforma con lo que tiene.',
  '93': 'Inquieto	el que gusta de lo nuevo, versátil y cambiante.',
  '94': 'Popular	el que genera atracción en el grupo.',
  '95': 'Buen vecino	el que actúa con soltura y cortesía.',
  '96': 'Devoto	el sumiso y fiel.'
};

  MD: any;
  MI: any;
  MS: any;
  MC: any;
  
  LD: any;
  LI: any;
  LS: any;
  LC: any;
  
  TotD: any;
  TotI: any;
  TotS: any;
  TotC: any;

  ResultMD: any;
  ResultMI: any;
  ResultMS: any;
  ResultMC: any;
  
  ResultLD: any;
  ResultLI: any;
  ResultLS: any;
  ResultLC: any;
  
  ResultTotD: any;
  ResultTotI: any;
  ResultTotS: any;
  ResultTotC: any;

  FinalT: any;
  FinalM: any;
  FinalL: any;

  FinalResult: any;
  Result: any;

  message = '';


  constructor(private tutorialService: TutorialService) { }

  saveTutorial(): void {
    console.log(this.tutorial);

    this.message = '';

    // 7
    this.MD = Number(this.tutorial.agresivoM) + 
              Number(this.tutorial.tenazM) +
              Number(this.tutorial.determinadoM) + 
              Number(this.tutorial.atrevidoM) +
              Number(this.tutorial.afirmativoM) + 
              Number(this.tutorial.persistenteM) + 
              Number(this.tutorial.competitivoM) + 
              Number(this.tutorial.caracterfirmeM) +
              Number(this.tutorial.inconquistableM) + 
              Number(this.tutorial.emprendedorM) + 
              Number(this.tutorial.valienteM) + 
              Number(this.tutorial.disputadorM) + 
              Number(this.tutorial.confianzamismoM) + 
              Number(this.tutorial.positivoM)
              Number(this.tutorial.aventureroM) + 
              Number(this.tutorial.vigorosoM) + 
              Number(this.tutorial.decisivoM) +
              Number(this.tutorial.francoM) + 
              Number(this.tutorial.audazM) + 
              Number(this.tutorial.inquietoM);
    // 1          
    this.MI = Number(this.tutorial.persuasivoM) + 
              Number(this.tutorial.almafiestaM) + 
              Number(this.tutorial.atractivoM) + 
              Number(this.tutorial.convincenteM) +
              Number(this.tutorial.encantadorM) + 
              Number(this.tutorial.animosoM) + 
              Number(this.tutorial.confiadoM) + 
              Number(this.tutorial.admirableM) +
              Number(this.tutorial.juguetonM) +
              Number(this.tutorial.optimistaM) + 
              Number(this.tutorial.inspiradorM) + 
              Number(this.tutorial.sangrelivianaM) + 
              Number(this.tutorial.amigueroM) + 
              Number(this.tutorial.cordialM) +
              Number(this.tutorial.sociableM) + 
              Number(this.tutorial.parlanchinM) + 
              Number(this.tutorial.buencompaneroM) +
              Number(this.tutorial.popularM);
    //10         
    this.MS = Number(this.tutorial.gentilM) + 
              Number(this.tutorial.comodinoM) + 
              Number(this.tutorial.bonachonM) + 
              Number(this.tutorial.lealM) +
              Number(this.tutorial.dispuestoM) + 
              Number(this.tutorial.complacienteM) +
              Number(this.tutorial.ecuanimeM) + 
              Number(this.tutorial.generosoM) +
              Number(this.tutorial.consideradoM) + 
              Number(this.tutorial.bondadosoM) + 
              Number(this.tutorial.obedienteM) + 
              Number(this.tutorial.servicialM) + 
              Number(this.tutorial.pacienteM) + 
              Number(this.tutorial.confiableM) +
              Number(this.tutorial.moderadoM) + 
              Number(this.tutorial.indulgenteM) +
              Number(this.tutorial.controladoM) + 
              Number(this.tutorial.satisfechoM) + 
              Number(this.tutorial.buenvecinoM);
    // 2
    this.MC = Number(this.tutorial.humildeM) + 
              Number(this.tutorial.temerosodiosM) + 
              Number(this.tutorial.cautelosoM) + 
              Number(this.tutorial.consecuenteM) +
              Number(this.tutorial.menteabiertaM) + 
              Number(this.tutorial.precisoM) + 
              Number(this.tutorial.disciplinadoM) +
              Number(this.tutorial.respetuosoM) +
              Number(this.tutorial.adaptableM) + 
              Number(this.tutorial.mesuradohablarM) + 
              Number(this.tutorial.pacificoM) + 
              Number(this.tutorial.receptivoM) + 
              Number(this.tutorial.exactoM) +
              Number(this.tutorial.diplomaticoM) +
              Number(this.tutorial.devotoM);
              
    // 4
    this.LD = Number(this.tutorial.originalL) + 
              Number(this.tutorial.tenazL) + 
              Number(this.tutorial.atractivoL) + 
              Number(this.tutorial.entusiastaL) +
              Number(this.tutorial.fuerzavoluntadL) + 
              Number(this.tutorial.afirmativoL) + 
              Number(this.tutorial.nerviosoL) + 
              Number(this.tutorial.persistenteL) +
              Number(this.tutorial.competitivoL) + 
              Number(this.tutorial.emprendedorM) + 
              Number(this.tutorial.caracterfirmeL) + 
              Number(this.tutorial.inconquistableL) + 
              Number(this.tutorial.emprendedorL) + 
              Number(this.tutorial.disputadorL)
              Number(this.tutorial.confianzamismoL) + 
              Number(this.tutorial.positivoL) + 
              Number(this.tutorial.aventureroL) + 
              Number(this.tutorial.vigorosoL) + 
              Number(this.tutorial.decisivoL) + 
              Number(this.tutorial.francoL)+
              Number(this.tutorial.audazL) + 
              Number(this.tutorial.inquietoL);

    // 7
    this.LI = Number(this.tutorial.almafiestaL) + 
              Number(this.tutorial.atractivoL) + 
              Number(this.tutorial.convincenteL) + 
              Number(this.tutorial.encantadorL) +
              Number(this.tutorial.animosoL) + 
              Number(this.tutorial.jovialL) + 
              Number(this.tutorial.ani_mosoL) + 
              Number(this.tutorial.alegreL) +
              Number(this.tutorial.juguetonL) + 
              Number(this.tutorial.optimistaL) + 
              Number(this.tutorial.sangrelivianaL) +
              Number(this.tutorial.amigueroL) +
              Number(this.tutorial.confiableL) +
              Number(this.tutorial.cordialL) +
              Number(this.tutorial.sociableL) + 
              Number(this.tutorial.parlanchinL) +
              Number(this.tutorial.buencompaneroL) + 
              Number(this.tutorial.refinadoL) + 
              Number(this.tutorial.popularL);

    // 5
    this.LS = Number(this.tutorial.gentilL) + 
              Number(this.tutorial.comodinoL) + 
              Number(this.tutorial.agradableL) + 
              Number(this.tutorial.complacienteL) +
              Number(this.tutorial.simpatizadorL) + 
              Number(this.tutorial.ecuanimeL) + 
              Number(this.tutorial.generosoL) + 
              Number(this.tutorial.consideradoL) +
              Number(this.tutorial.servicialL) +
              Number(this.tutorial.sumisoL) + 
              Number(this.tutorial.indiferenteL) + 
              Number(this.tutorial.pacienteL) + 
              Number(this.tutorial.conformeL) + 
              Number(this.tutorial.moderadoL) +
              Number(this.tutorial.indulgenteL) + 
              Number(this.tutorial.controladoL) + 
              Number(this.tutorial.cohibidoL) + 
              Number(this.tutorial.satisfechoL) +
              Number(this.tutorial.buenvecinoL);

    // 3
    this.LC = Number(this.tutorial.humildeL) + 
              Number(this.tutorial.temerosoL) + 
              Number(this.tutorial.temerosodiosL) + 
              Number(this.tutorial.cautelosoL) +
              Number(this.tutorial.docilL) + 
              Number(this.tutorial.consecuenteL) + 
              Number(this.tutorial.toleranteL) + 
              Number(this.tutorial.precisoL) +
              Number(this.tutorial.armoniosoL) +
              Number(this.tutorial.resignadoL) +
              Number(this.tutorial.quisquillosoL) +
              Number(this.tutorial.timidoL) + 
              Number(this.tutorial.pacificoL) + 
              Number(this.tutorial.estetaL)
              Number(this.tutorial.convencionalL) + 
              Number(this.tutorial.devotoL);

    this.TotD = Number(this.MD) - Number(this.LD);
    this.TotI = Number(this.MI) - Number(this.LI);
    this.TotS = Number(this.MS) - Number(this.LS);
    this.TotC = Number(this.MC) - Number(this.LC);


    this.ResultMD = this.arrMD[this.MD];
    this.ResultMI = this.arrMI[this.MI];
    this.ResultMS = this.arrMS[this.MS];
    this.ResultMC = this.arrMC[this.MC];

    this.ResultLD = this.arrLD[this.LD];
    this.ResultLI = this.arrLI[this.LI];
    this.ResultLS = this.arrLS[this.LS];
    this.ResultLC = this.arrLC[this.LC];


    this.ResultTotD = this.arrTD[(this.TotD as number)];
    this.ResultTotI = this.arrTI[(this.TotI as number)];
    this.ResultTotS = this.arrTS[(this.TotS as number)];
    this.ResultTotC = this.arrTC[(this.TotC as number)];


    var arrTotalT : Array<number> = [
      this.ResultTotD,
      this.ResultTotI,
      this.ResultTotS,
      this.ResultTotC,
    ]

    var arrTotalM : Array<number> = [
      this.ResultMD,
      this.ResultMI,
      this.ResultMS,
      this.ResultMC,
    ]

    var arrTotalL : Array<number> = [
      this.ResultLD,
      this.ResultLI,
      this.ResultLS,
      this.ResultLC,
    ]

    var maxFinalT = Math.max(...arrTotalT.map(o=>o));     
    var maxFinalM = Math.max(...arrTotalM.map(o=>o));     
    var maxFinalL = Math.max(...arrTotalL.map(o=>o));     

    this.FinalT = maxFinalT;
    this.FinalM = maxFinalM;
    this.FinalL = maxFinalL;

    this.FinalResult = (this.FinalT + this.FinalM + this.FinalL) / 3;
    this.Result = this.FinalResult.toFixed(0);
    this.message = this.arrInter[(this.Result as number)];


    //this.submitted = true;

    this.tutorial.FinalT = this.FinalT;
    this.tutorial.FinalM = this.FinalM;
    this.tutorial.FinalL = this.FinalL;

    this.tutorial.FinalResult = this.FinalResult;
    this.tutorial.Result = this.Result;
    this.tutorial.message = this.message;


    
    this.tutorialService.create(this.tutorial).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
    
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = new Tutorial();
  }

  setM1(value: Number): Number {
    
    this.tutorial.persuasivoM = 0;
    this.tutorial.gentilM =0;
    this.tutorial.humildeM =0;
    this.tutorial.originalM =0;

    if  (value==0) 
      this.tutorial.persuasivoM = 1;
    if  (value==1) 
      this.tutorial.gentilM = 1;
    if  (value==2) 
      this.tutorial.humildeM = 1;
    if  (value==3) 
      this.tutorial.originalM = 1;

    return 1;
  }
  setL1(value: Number): void {

    this.tutorial.persuasivoL = 0;
    this.tutorial.gentilL =0;
    this.tutorial.humildeL =0;
    this.tutorial.originalL =0;

    if  (value==0) 
      this.tutorial.persuasivoL = 1;
    if  (value==1) 
      this.tutorial.gentilL = 1;
    if  (value==2) 
      this.tutorial.humildeL = 1;
    if  (value==3) 
      this.tutorial.originalL = 1;


  }


  setM2(value: Number): Number {
    
    this.tutorial.fuerzavoluntadM = 0;
    this.tutorial.menteabiertaM =0;
    this.tutorial.complacienteM =0;
    this.tutorial.animosoM =0;

    if  (value==0) 
      this.tutorial.fuerzavoluntadM = 1;
    if  (value==1) 
      this.tutorial.menteabiertaM = 1;
    if  (value==2) 
      this.tutorial.complacienteM = 1;
    if  (value==3) 
      this.tutorial.animosoM = 1;

    return 1;
  }

  setL2(value: Number): Number {
    
    this.tutorial.fuerzavoluntadL = 0;
    this.tutorial.menteabiertaL =0;
    this.tutorial.complacienteL =0;
    this.tutorial.animosoL =0;

    if  (value==0) 
      this.tutorial.fuerzavoluntadL = 1;
    if  (value==1) 
      this.tutorial.menteabiertaL = 1;
    if  (value==2) 
      this.tutorial.complacienteL = 1;
    if  (value==3) 
      this.tutorial.animosoL = 1;

    return 1;
  }

  setM3(value: Number): Number {
    
    this.tutorial.obedienteM = 0;
    this.tutorial.quisquillosoM =0;
    this.tutorial.inconquistableM =0;
    this.tutorial.juguetonM =0;

    if  (value==0) 
      this.tutorial.obedienteM = 1;
    if  (value==1) 
      this.tutorial.quisquillosoM = 1;
    if  (value==2) 
      this.tutorial.inconquistableM = 1;
    if  (value==3) 
      this.tutorial.juguetonM = 1;

    return 1;
  }

  setL3(value: Number): Number {
    
    this.tutorial.obedienteL = 0;
    this.tutorial.quisquillosoL =0;
    this.tutorial.inconquistableL =0;
    this.tutorial.juguetonL =0;

    if  (value==0) 
      this.tutorial.obedienteL = 1;
    if  (value==1) 
      this.tutorial.quisquillosoL = 1;
    if  (value==2) 
      this.tutorial.inconquistableL = 1;
    if  (value==3) 
      this.tutorial.juguetonL = 1;

    return 1;
  }

  setM4(value: Number): Number {
    
    this.tutorial.aventureroM = 0;
    this.tutorial.receptivoM =0;
    this.tutorial.cordialM =0;
    this.tutorial.moderadoM =0;

    if  (value==0) 
      this.tutorial.aventureroM = 1;
    if  (value==1) 
      this.tutorial.receptivoM = 1;
    if  (value==2) 
      this.tutorial.cordialM = 1;
    if  (value==3) 
      this.tutorial.moderadoM = 1;

    return 1;
  }

  setL4(value: Number): Number {
    
    this.tutorial.aventureroL = 0;
    this.tutorial.receptivoL =0;
    this.tutorial.cordialL =0;
    this.tutorial.moderadoL =0;

    if  (value==0) 
      this.tutorial.aventureroL = 1;
    if  (value==1) 
      this.tutorial.receptivoL = 1;
    if  (value==2) 
      this.tutorial.cordialL = 1;
    if  (value==3) 
      this.tutorial.moderadoL = 1;

    return 1;
  }


  setM5(value: Number): Number {

    this.tutorial.agresivoM = 0;
    this.tutorial.almafiestaM =0;
    this.tutorial.comodinoM =0;
    this.tutorial.temerosoM =0;

    if  (value==0) 
      this.tutorial.agresivoM = 1;
    if  (value==1) 
      this.tutorial.almafiestaM = 1;
    if  (value==2) 
      this.tutorial.comodinoM = 1;
    if  (value==3) 
      this.tutorial.temerosoM = 1;

    return 1;
  }

  setL5(value: Number): Number {
    
    this.tutorial.agresivoL = 0;
    this.tutorial.almafiestaL =0;
    this.tutorial.comodinoL =0;
    this.tutorial.temerosoL =0;

    if  (value==0) 
      this.tutorial.agresivoL = 1;
    if  (value==1) 
      this.tutorial.almafiestaL = 1;
    if  (value==2) 
      this.tutorial.comodinoL = 1;
    if  (value==3) 
      this.tutorial.temerosoL = 1;

    return 1;
  }

  setM6(value: Number): Number {

    this.tutorial.confiadoM = 0;
    this.tutorial.simpatizadorM =0;
    this.tutorial.toleranteM =0;
    this.tutorial.afirmativoM =0;

    if  (value==0) 
      this.tutorial.confiadoM = 1;
    if  (value==1) 
      this.tutorial.simpatizadorM = 1;
    if  (value==2) 
      this.tutorial.toleranteM = 1;
    if  (value==3) 
      this.tutorial.afirmativoM = 1;

    return 1;
  }

  setL6(value: Number): Number {

    this.tutorial.confiadoL = 0;
    this.tutorial.simpatizadorL =0;
    this.tutorial.toleranteL =0;
    this.tutorial.afirmativoL =0;

    if  (value==0) 
      this.tutorial.confiadoL = 1;
    if  (value==1) 
      this.tutorial.simpatizadorL = 1;
    if  (value==2) 
      this.tutorial.toleranteL = 1;
    if  (value==3) 
      this.tutorial.afirmativoL = 1;

    return 1;
  }



  setM7(value: Number): Number {

    
    this.tutorial.respetuosoM = 0;
    this.tutorial.emprendedorM =0;
    this.tutorial.optimistaM =0;
    this.tutorial.servicialM =0;

    if  (value==0) 
      this.tutorial.respetuosoM = 1;
    if  (value==1) 
      this.tutorial.emprendedorM = 1;
    if  (value==2) 
      this.tutorial.optimistaM = 1;
    if  (value==3) 
      this.tutorial.servicialM = 1;

    return 1;
  }

  setL7(value: Number): Number {

    
    this.tutorial.respetuosoL = 0;
    this.tutorial.emprendedorL =0;
    this.tutorial.optimistaL =0;
    this.tutorial.servicialL =0;

    if  (value==0) 
      this.tutorial.respetuosoL = 1;
    if  (value==1) 
      this.tutorial.emprendedorL = 1;
    if  (value==2) 
      this.tutorial.optimistaL = 1;
    if  (value==3) 
      this.tutorial.servicialL = 1;

    return 1;
  }

  setM8(value: Number): Number {

      
    this.tutorial.indulgenteM = 0;
    this.tutorial.estetaM =0;
    this.tutorial.vigorosoM =0;
    this.tutorial.sociableM =0;

    if  (value==0) 
      this.tutorial.indulgenteM = 1;
    if  (value==1) 
      this.tutorial.estetaM = 1;
    if  (value==2) 
      this.tutorial.vigorosoM = 1;
    if  (value==3) 
      this.tutorial.sociableM = 1;

    return 1;
  }

  setL8(value: Number): Number {

      
    this.tutorial.indulgenteL = 0;
    this.tutorial.estetaL =0;
    this.tutorial.vigorosoL =0;
    this.tutorial.sociableL =0;

    if  (value==0) 
      this.tutorial.indulgenteL = 1;
    if  (value==1) 
      this.tutorial.estetaL = 1;
    if  (value==2) 
      this.tutorial.vigorosoL = 1;
    if  (value==3) 
      this.tutorial.sociableL = 1;

    return 1;
  }

  setM9(value: Number): Number {

  
      
    this.tutorial.agradableM = 0;
    this.tutorial.temerosodiosM =0;
    this.tutorial.tenazM =0;
    this.tutorial.atractivoM =0;

    if  (value==0) 
      this.tutorial.agradableM = 1;
    if  (value==1) 
      this.tutorial.temerosodiosM = 1;
    if  (value==2) 
      this.tutorial.tenazM = 1;
    if  (value==3) 
      this.tutorial.atractivoM = 1;

    return 1;
  }

  setL9(value: Number): Number {

  
      
    this.tutorial.agradableL = 0;
    this.tutorial.temerosodiosL =0;
    this.tutorial.tenazL =0;
    this.tutorial.atractivoL =0;

    if  (value==0) 
      this.tutorial.agradableL = 1;
    if  (value==1) 
      this.tutorial.temerosodiosL = 1;
    if  (value==2) 
      this.tutorial.tenazL = 1;
    if  (value==3) 
      this.tutorial.atractivoL = 1;

    return 1;
  }

  setM10(value: Number): Number {

      
    this.tutorial.ecuanimeM = 0;
    this.tutorial.precisoM =0;
    this.tutorial.nerviosoM =0;
    this.tutorial.jovialM =0;

    if  (value==0) 
      this.tutorial.ecuanimeM = 1;
    if  (value==1) 
      this.tutorial.precisoM = 1;
    if  (value==2) 
      this.tutorial.nerviosoM = 1;
    if  (value==3) 
      this.tutorial.jovialM = 1;

    return 1;
  }

  setL10(value: Number): Number {

      
    this.tutorial.ecuanimeL = 0;
    this.tutorial.precisoL =0;
    this.tutorial.nerviosoL =0;
    this.tutorial.jovialL =0;

    if  (value==0) 
      this.tutorial.ecuanimeL = 1;
    if  (value==1) 
      this.tutorial.precisoL = 1;
    if  (value==2) 
      this.tutorial.nerviosoL = 1;
    if  (value==3) 
      this.tutorial.jovialL = 1;

    return 1;
  }

  setM11(value: Number): Number {


    this.tutorial.valienteM = 0;
    this.tutorial.inspiradorM =0;
    this.tutorial.sumisoM =0;
    this.tutorial.timidoM =0;

    if  (value==0) 
      this.tutorial.valienteM = 1;
    if  (value==1) 
      this.tutorial.inspiradorM = 1;
    if  (value==2) 
      this.tutorial.sumisoM = 1;
    if  (value==3) 
      this.tutorial.timidoM = 1;

    return 1;
  }

  setL11(value: Number): Number {


    this.tutorial.valienteL = 0;
    this.tutorial.inspiradorL =0;
    this.tutorial.sumisoL =0;
    this.tutorial.timidoL =0;

    if  (value==0) 
      this.tutorial.valienteL = 1;
    if  (value==1) 
      this.tutorial.inspiradorL = 1;
    if  (value==2) 
      this.tutorial.sumisoL = 1;
    if  (value==3) 
      this.tutorial.timidoL = 1;

    return 1;
  }

  setM12(value: Number): Number {

    
    this.tutorial.parlanchinM = 0;
    this.tutorial.controladoM =0;
    this.tutorial.convencionalM =0;
    this.tutorial.decisivoM =0;

    if  (value==0) 
      this.tutorial.parlanchinM = 1;
    if  (value==1) 
      this.tutorial.controladoM = 1;
    if  (value==2) 
      this.tutorial.convencionalM = 1;
    if  (value==3) 
      this.tutorial.decisivoM = 1;

    return 1;
  }

  setL12(value: Number): Number {

    
    this.tutorial.parlanchinL = 0;
    this.tutorial.controladoL =0;
    this.tutorial.convencionalL =0;
    this.tutorial.decisivoL =0;

    if  (value==0) 
      this.tutorial.parlanchinL = 1;
    if  (value==1) 
      this.tutorial.controladoL = 1;
    if  (value==2) 
      this.tutorial.convencionalL = 1;
    if  (value==3) 
      this.tutorial.decisivoL = 1;

    return 1;
  }

  setM13(value: Number): Number {

    
    this.tutorial.cautelosoM = 0;
    this.tutorial.determinadoM =0;
    this.tutorial.convincenteM =0;
    this.tutorial.bonachonM =0;

    if  (value==0) 
      this.tutorial.cautelosoM = 1;
    if  (value==1) 
      this.tutorial.determinadoM = 1;
    if  (value==2) 
      this.tutorial.convincenteM = 1;
    if  (value==3) 
      this.tutorial.bonachonM = 1;

    return 1;
  }


  setL13(value: Number): Number {

    
    this.tutorial.cautelosoL = 0;
    this.tutorial.determinadoL =0;
    this.tutorial.convincenteL =0;
    this.tutorial.bonachonL =0;

    if  (value==0) 
      this.tutorial.cautelosoL = 1;
    if  (value==1) 
      this.tutorial.determinadoL = 1;
    if  (value==2) 
      this.tutorial.convincenteL = 1;
    if  (value==3) 
      this.tutorial.bonachonL = 1;

    return 1;
  }


  setM14(value: Number): Number {

    
    this.tutorial.disciplinadoM = 0;
    this.tutorial.generosoM =0;
    this.tutorial.ani_mosoM =0;
    this.tutorial.persistenteM =0;

    if  (value==0) 
      this.tutorial.disciplinadoM = 1;
    if  (value==1) 
      this.tutorial.generosoM = 1;
    if  (value==2) 
      this.tutorial.ani_mosoM = 1;
    if  (value==3) 
      this.tutorial.persistenteM = 1;

    return 1;
  }

  setL14(value: Number): Number {

    
    this.tutorial.disciplinadoL = 0;
    this.tutorial.generosoL =0;
    this.tutorial.ani_mosoL =0;
    this.tutorial.persistenteL =0;

    if  (value==0) 
      this.tutorial.disciplinadoL = 1;
    if  (value==1) 
      this.tutorial.generosoL = 1;
    if  (value==2) 
      this.tutorial.ani_mosoL = 1;
    if  (value==3) 
      this.tutorial.persistenteL = 1;

    return 1;
  }

  setM15(value: Number): Number {

    this.tutorial.adaptableM = 0;
    this.tutorial.disputadorM =0;
    this.tutorial.indiferenteM =0;
    this.tutorial.sangrelivianaM =0;

    if  (value==0) 
      this.tutorial.adaptableM = 1;
    if  (value==1) 
      this.tutorial.disputadorM = 1;
    if  (value==2) 
      this.tutorial.indiferenteM = 1;
    if  (value==3) 
      this.tutorial.sangrelivianaM = 1;

    return 1;
  }

  setL15(value: Number): Number {

    this.tutorial.adaptableL = 0;
    this.tutorial.disputadorL =0;
    this.tutorial.indiferenteL =0;
    this.tutorial.sangrelivianaL =0;

    if  (value==0) 
      this.tutorial.adaptableL = 1;
    if  (value==1) 
      this.tutorial.disputadorL = 1;
    if  (value==2) 
      this.tutorial.indiferenteL = 1;
    if  (value==3) 
      this.tutorial.sangrelivianaL = 1;

    return 1;
  }

  setM16(value: Number): Number {

  
    this.tutorial.cohibidoM = 0;
    this.tutorial.exactoM =0;
    this.tutorial.francoM =0;
    this.tutorial.buencompaneroM =0;

    if  (value==0) 
      this.tutorial.cohibidoM = 1;
    if  (value==1) 
      this.tutorial.exactoM = 1;
    if  (value==2) 
      this.tutorial.francoM = 1;
    if  (value==3) 
      this.tutorial.buencompaneroM = 1;

    return 1;
  }

  setL16(value: Number): Number {

  
    this.tutorial.cohibidoL = 0;
    this.tutorial.exactoL =0;
    this.tutorial.francoL =0;
    this.tutorial.buencompaneroL =0;

    if  (value==0) 
      this.tutorial.cohibidoL = 1;
    if  (value==1) 
      this.tutorial.exactoL = 1;
    if  (value==2) 
      this.tutorial.francoL = 1;
    if  (value==3) 
      this.tutorial.buencompaneroL = 1;

    return 1;
  }

  setM17(value: Number): Number {

    this.tutorial.docilM = 0;
    this.tutorial.atrevidoM =0;
    this.tutorial.lealM =0;
    this.tutorial.encantadorM =0;

    if  (value==0) 
      this.tutorial.docilM = 1;
    if  (value==1) 
      this.tutorial.atrevidoM = 1;
    if  (value==2) 
      this.tutorial.lealM = 1;
    if  (value==3) 
      this.tutorial.encantadorM = 1;

    return 1;
  }

  setL17(value: Number): Number {

    this.tutorial.docilL = 0;
    this.tutorial.atrevidoL =0;
    this.tutorial.lealL =0;
    this.tutorial.encantadorL =0;

    if  (value==0) 
      this.tutorial.docilL = 1;
    if  (value==1) 
      this.tutorial.atrevidoL = 1;
    if  (value==2) 
      this.tutorial.lealL = 1;
    if  (value==3) 
      this.tutorial.encantadorL = 1;

    return 1;
  }

  setM18(value: Number): Number {

    this.tutorial.competitivoM = 0;
    this.tutorial.alegreM =0;
    this.tutorial.consideradoM =0;
    this.tutorial.armoniosoM =0;

    if  (value==0) 
      this.tutorial.competitivoM = 1;
    if  (value==1) 
      this.tutorial.alegreM = 1;
    if  (value==2) 
      this.tutorial.consideradoM = 1;
    if  (value==3) 
      this.tutorial.armoniosoM = 1;

    return 1;
  }


  setL18(value: Number): Number {

    this.tutorial.competitivoL = 0;
    this.tutorial.alegreL =0;
    this.tutorial.consideradoL =0;
    this.tutorial.armoniosoL =0;

    if  (value==0) 
      this.tutorial.competitivoL = 1;
    if  (value==1) 
      this.tutorial.alegreL = 1;
    if  (value==2) 
      this.tutorial.consideradoL = 1;
    if  (value==3) 
      this.tutorial.armoniosoL = 1;

    return 1;
  }

  setM19(value: Number): Number {
  
    this.tutorial.amigueroM = 0;
    this.tutorial.pacienteM =0;
    this.tutorial.confianzamismoM =0;
    this.tutorial.mesuradohablarM =0;

    if  (value==0) 
      this.tutorial.amigueroM = 1;
    if  (value==1) 
      this.tutorial.pacienteM = 1;
    if  (value==2) 
      this.tutorial.confianzamismoM = 1;
    if  (value==3) 
      this.tutorial.mesuradohablarM = 1;

    return 1;
  }

  setL19(value: Number): Number {
  
    this.tutorial.amigueroL = 0;
    this.tutorial.pacienteL =0;
    this.tutorial.confianzamismoL =0;
    this.tutorial.mesuradohablarL =0;

    if  (value==0) 
      this.tutorial.amigueroL = 1;
    if  (value==1) 
      this.tutorial.pacienteL = 1;
    if  (value==2) 
      this.tutorial.confianzamismoL = 1;
    if  (value==3) 
      this.tutorial.mesuradohablarL = 1;

    return 1;
  }

  setM20(value: Number): Number {
  
  
    this.tutorial.diplomaticoM = 0;
    this.tutorial.audazM =0;
    this.tutorial.refinadoM =0;
    this.tutorial.satisfechoM =0;

    if  (value==0) 
      this.tutorial.diplomaticoM = 1;
    if  (value==1) 
      this.tutorial.audazM = 1;
    if  (value==2) 
      this.tutorial.refinadoM = 1;
    if  (value==3) 
      this.tutorial.satisfechoM = 1;

    return 1;
  }

  setL20(value: Number): Number {
  
  
    this.tutorial.diplomaticoL = 0;
    this.tutorial.audazL =0;
    this.tutorial.refinadoL =0;
    this.tutorial.satisfechoL =0;

    if  (value==0) 
      this.tutorial.diplomaticoL = 1;
    if  (value==1) 
      this.tutorial.audazL = 1;
    if  (value==2) 
      this.tutorial.refinadoL = 1;
    if  (value==3) 
      this.tutorial.satisfechoL = 1;

    return 1;
  }

  setM21(value: Number): Number {
  

    this.tutorial.dispuestoM = 0;
    this.tutorial.deseosoM =0;
    this.tutorial.consecuenteM =0;
    this.tutorial.entusiastaM =0;

    if  (value==0) 
      this.tutorial.dispuestoM = 1;
    if  (value==1) 
      this.tutorial.deseosoM = 1;
    if  (value==2) 
      this.tutorial.consecuenteM = 1;
    if  (value==3) 
      this.tutorial.entusiastaM = 1;

    return 1;
  }

  setL21(value: Number): Number {
  

    this.tutorial.dispuestoL = 0;
    this.tutorial.deseosoL =0;
    this.tutorial.consecuenteL =0;
    this.tutorial.entusiastaL =0;

    if  (value==0) 
      this.tutorial.dispuestoL = 1;
    if  (value==1) 
      this.tutorial.deseosoL = 1;
    if  (value==2) 
      this.tutorial.consecuenteL = 1;
    if  (value==3) 
      this.tutorial.entusiastaL = 1;

    return 1;
  }

  setM22(value: Number): Number {

    this.tutorial.admirableM = 0;
    this.tutorial.bondadosoM =0;
    this.tutorial.resignadoM =0;
    this.tutorial.caracterfirmeM =0;

    if  (value==0) 
      this.tutorial.admirableM = 1;
    if  (value==1) 
      this.tutorial.bondadosoM = 1;
    if  (value==2) 
      this.tutorial.resignadoM = 1;
    if  (value==3) 
      this.tutorial.caracterfirmeM = 1;

    return 1;
  }


  setL22(value: Number): Number {

    this.tutorial.admirableL = 0;
    this.tutorial.bondadosoL =0;
    this.tutorial.resignadoL =0;
    this.tutorial.caracterfirmeL =0;

    if  (value==0) 
      this.tutorial.admirableL = 1;
    if  (value==1) 
      this.tutorial.bondadosoL = 1;
    if  (value==2) 
      this.tutorial.resignadoL = 1;
    if  (value==3) 
      this.tutorial.caracterfirmeL = 1;

    return 1;
  }

  setM23(value: Number): Number {  

    this.tutorial.conformeM = 0;
    this.tutorial.confiableM =0;
    this.tutorial.pacificoM =0;
    this.tutorial.positivoM =0;

    if  (value==0) 
      this.tutorial.conformeM = 1;
    if  (value==1) 
      this.tutorial.confiableM = 1;
    if  (value==2) 
      this.tutorial.pacificoM = 1;
    if  (value==3) 
      this.tutorial.positivoM = 1;

    return 1;
  }

  setL23(value: Number): Number {  

    this.tutorial.conformeL = 0;
    this.tutorial.confiableL =0;
    this.tutorial.pacificoL =0;
    this.tutorial.positivoL =0;

    if  (value==0) 
      this.tutorial.conformeL = 1;
    if  (value==1) 
      this.tutorial.confiableL = 1;
    if  (value==2) 
      this.tutorial.pacificoL = 1;
    if  (value==3) 
      this.tutorial.positivoL = 1;

    return 1;
  }

  setM24(value: Number): Number {  

    
    this.tutorial.inquietoM = 0;
    this.tutorial.popularM =0;
    this.tutorial.buenvecinoM =0;
    this.tutorial.devotoM =0;

    if  (value==0) 
      this.tutorial.inquietoM = 1;
    if  (value==1) 
      this.tutorial.popularM = 1;
    if  (value==2) 
      this.tutorial.buenvecinoM = 1;
    if  (value==3) 
      this.tutorial.devotoM = 1;

    return 1;
  }


  setL24(value: Number): Number {  

    
    this.tutorial.inquietoL = 0;
    this.tutorial.popularL =0;
    this.tutorial.buenvecinoL =0;
    this.tutorial.devotoL =0;

    if  (value==0) 
      this.tutorial.inquietoL = 1;
    if  (value==1) 
      this.tutorial.popularL = 1;
    if  (value==2) 
      this.tutorial.buenvecinoL = 1;
    if  (value==3) 
      this.tutorial.devotoL = 1;

    return 1;
  }

}