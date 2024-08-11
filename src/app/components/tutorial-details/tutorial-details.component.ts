import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {
  @Input()
  tutorial: Tutorial = new Tutorial;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentTutorial: Tutorial = {
    appPaterno: '',
    appMaterno: '',
    nombre: '',
    persuasivoM: 0,
    persuasivoL:  0,
    gentilM:  0,
  gentilL:  0,
  humildeM:  0,
  humildeL:  0,
  originalM:  0,
  originalL:  0,

  fuerzavoluntadM:  0,
  fuerzavoluntadL:  0,
  menteabiertaM:  0,
  menteabiertaL:  0,
  complacienteM:  0,
  complacienteL:  0,
  animosoM:  0,
  animosoL:  0,


  obedienteM:  0,
  obedienteL:  0,
  quisquillosoM:  0,
  quisquillosoL:  0,
  inconquistableM:  0,
  inconquistableL:  0,
  juguetonM:  0,
  juguetonL:  0,


  aventureroM:  0,
  aventureroL:  0,
  receptivoM:  0,
  receptivoL:  0,
  cordialM:  0,
  cordialL:  0,
  moderadoM:  0,
  moderadoL:  0,

  agresivoM:  0,
  agresivoL:  0,
  almafiestaM:  0,
  almafiestaL:  0,
  comodinoM:  0,
  comodinoL:  0,
  temerosoM:  0,
  temerosoL:  0,

  confiadoM:  0,
  confiadoL:  0,
  simpatizadorM:  0,
  simpatizadorL:  0,
  toleranteM:  0,
  toleranteL:  0,
  afirmativoM:  0,
  afirmativoL:  0,

  respetuosoM:  0,
  respetuosoL:  0,
  emprendedorM:  0,
  emprendedorL:  0,
  optimistaM:  0,
  optimistaL:  0,
  servicialM:  0,
  servicialL:  0,

  indulgenteM:  0,
  indulgenteL:  0,
  estetaM:  0,
  estetaL:  0,
  vigorosoM:  0,
  vigorosoL:  0,
  sociableM:  0,
  sociableL:  0,

  agradableM:  0,
  agradableL:  0,
  temerosodiosM:  0,
  temerosodiosL:  0,
  tenazM:  0,
  tenazL:  0,
  atractivoM:  0,
  atractivoL:  0,

  ecuanimeM:  0,
  ecuanimeL:  0,
  precisoM:  0,
  precisoL:  0,
  nerviosoM:  0,
  nerviosoL:  0,
  jovialM:  0,
  jovialL:  0,

  valienteM:  0,
  valienteL:  0,
  inspiradorM:  0,
  inspiradorL:  0,
  sumisoM:  0,
  sumisoL:  0,
  timidoM:  0,
  timidoL:  0,

  parlanchinM:  0,
  parlanchinL:  0,
  controladoM:  0,
  controladoL:  0,
  convencionalM:  0,
  convencionalL:  0,
  decisivoM:  0,
  decisivoL:  0,

  cautelosoM:  0,
  cautelosoL:  0,
  determinadoM:  0,
  determinadoL:  0,
  convincenteM:  0,
  convincenteL:  0,
  bonachonM:  0,
  bonachonL:  0,

  disciplinadoM:  0,
  disciplinadoL:  0,
  generosoM:  0,
  generosoL:  0,
  ani_mosoM:  0,
  ani_mosoL:  0,
  persistenteM:  0,
  persistenteL:  0,

  adaptableM:  0,
  adaptableL:   0,
  disputadorM:  0,
  disputadorL:  0,
  indiferenteM:  0,
  indiferenteL:  0,
  sangrelivianaM:  0,
  sangrelivianaL:  0,

  cohibidoM:  0,
  cohibidoL:  0,
  exactoM:  0,
  exactoL:  0,
  francoM:  0,
  francoL:  0,
  buencompaneroM:  0,
  buencompaneroL:  0,
  
  docilM:  0,
  docilL:  0,
  atrevidoM:  0,
  atrevidoL:  0,
  lealM:  0,
  lealL:  0,
  encantadorM:  0,
  encantadorL:  0,
  
  competitivoM:  0,
  competitivoL:  0,
  alegreM:  0,
  alegreL:  0,
  consideradoM:  0,
  consideradoL:  0,
  armoniosoM:  0,
  armoniosoL:  0,

  amigueroM:  0,
  amigueroL:  0,
  pacienteM:  0,
  pacienteL:  0,
  confianzamismoM:  0,
  confianzamismoL:  0,
  mesuradohablarM:  0,
  mesuradohablarL:  0,

  diplomaticoM:  0,
  diplomaticoL:  0,
  audazM:  0,
  audazL:  0,
  refinadoM:  0,
  refinadoL:  0,
  satisfechoM:  0,
  satisfechoL:  0,

  dispuestoM:  0,
  dispuestoL:  0,
  deseosoM:  0,
  deseosoL:  0,
  consecuenteM:  0,
  consecuenteL:  0,
  entusiastaM:  0,
  entusiastaL:  0,

  admirableM:  0,
  admirableL:  0,
  bondadosoM:  0,
  bondadosoL:  0,
  resignadoM:  0,
  resignadoL:  0,
  caracterfirmeM:  0,
  caracterfirmeL:  0,

  conformeM:  0,
  conformeL:  0,
  confiableM:  0,
  confiableL:  0,
  pacificoM:  0,
  pacificoL:  0,
  positivoM:  0,
  positivoL:  0,

  inquietoM:  0,
  inquietoL:  0,
  popularM:  0,
  popularL:  0,
  buenvecinoM:  0,
  buenvecinoL:  0,
  devotoM:  0,
  devotoL:  0

  };

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


  message = '';
  r1:number[][] = [[0,0,0,0],
                   [0,0,0,0],
                   [0,0,0,0]]  

  r2:number[][] = [[0,0,0,0],
                   [0,0,0,0],
                   [0,0,0,0]]  

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentTutorial = { ...this.tutorial };

    this.MD = 7;
              /*Number(this.currentTutorial.agresivoM) + Number(this.tutorial.tenazM) + Number(this.tutorial.determinadoM) + Number(this.tutorial.atrevidoM) +
              Number(this.currentTutorial.afirmativoM) + Number(this.tutorial.persistenteM) + Number(this.tutorial.competitivoM) + Number(this.tutorial.caracterfirmeM) +
              Number(this.currentTutorial.inconquistableM) + Number(this.tutorial.emprendedorM) + Number(this.tutorial.valienteM) + Number(this.tutorial.disputadorM) + Number(this.tutorial.confianzamismoM) + Number(this.tutorial.positivoM)
              Number(this.currentTutorial.aventureroM) + Number(this.tutorial.vigorosoM) + Number(this.tutorial.decisivoM) + Number(this.tutorial.francoM) + + Number(this.tutorial.audazM) + + Number(this.tutorial.inquietoM);
              */
    this.MI = 1; 
              /*Number(this.currentTutorial.agresivoM) + Number(this.tutorial.tenazM) + Number(this.tutorial.determinadoM) + Number(this.tutorial.atrevidoM) +
              Number(this.currentTutorial.afirmativoM) + Number(this.tutorial.persistenteM) + Number(this.tutorial.competitivoM) + Number(this.tutorial.caracterfirmeM) +
              Number(this.currentTutorial.inconquistableM) + Number(this.tutorial.emprendedorM) + Number(this.tutorial.valienteM) + Number(this.tutorial.disputadorM) + Number(this.tutorial.confianzamismoM) + Number(this.tutorial.positivoM)
              Number(this.currentTutorial.aventureroM) + Number(this.tutorial.vigorosoM) + Number(this.tutorial.decisivoM) + Number(this.tutorial.francoM) + + Number(this.tutorial.audazM) + + Number(this.tutorial.inquietoM);
              */
    this.MS = 10; 
    /*Number(this.currentTutorial.agresivoM) + Number(this.tutorial.tenazM) + Number(this.tutorial.determinadoM) + Number(this.tutorial.atrevidoM) +
              Number(this.currentTutorial.afirmativoM) + Number(this.tutorial.persistenteM) + Number(this.tutorial.competitivoM) + Number(this.tutorial.caracterfirmeM) +
              Number(this.currentTutorial.inconquistableM) + Number(this.tutorial.emprendedorM) + Number(this.tutorial.valienteM) + Number(this.tutorial.disputadorM) + Number(this.tutorial.confianzamismoM) + Number(this.tutorial.positivoM)
              Number(this.currentTutorial.aventureroM) + Number(this.tutorial.vigorosoM) + Number(this.tutorial.decisivoM) + Number(this.tutorial.francoM) + + Number(this.tutorial.audazM) + + Number(this.tutorial.inquietoM);
*/
    this.MC = 2; 
              /*Number(this.currentTutorial.agresivoM) + Number(this.tutorial.tenazM) + Number(this.tutorial.determinadoM) + Number(this.tutorial.atrevidoM) +
              Number(this.currentTutorial.afirmativoM) + Number(this.tutorial.persistenteM) + Number(this.tutorial.competitivoM) + Number(this.tutorial.caracterfirmeM) +
              Number(this.currentTutorial.inconquistableM) + Number(this.tutorial.emprendedorM) + Number(this.tutorial.valienteM) + Number(this.tutorial.disputadorM) + Number(this.tutorial.confianzamismoM) + Number(this.tutorial.positivoM)
              Number(this.currentTutorial.aventureroM) + Number(this.tutorial.vigorosoM) + Number(this.tutorial.decisivoM) + Number(this.tutorial.francoM) + + Number(this.tutorial.audazM) + + Number(this.tutorial.inquietoM);
*/
    this.LD = 4;
    /*
     Number(this.currentTutorial.agresivoM) + Number(this.tutorial.tenazM) + Number(this.tutorial.determinadoM) + Number(this.tutorial.atrevidoM) +
              Number(this.currentTutorial.afirmativoM) + Number(this.tutorial.persistenteM) + Number(this.tutorial.competitivoM) + Number(this.tutorial.caracterfirmeM) +
              Number(this.currentTutorial.inconquistableM) + Number(this.tutorial.emprendedorM) + Number(this.tutorial.valienteM) + Number(this.tutorial.disputadorM) + Number(this.tutorial.confianzamismoM) + Number(this.tutorial.positivoM)
              Number(this.currentTutorial.aventureroM) + Number(this.tutorial.vigorosoM) + Number(this.tutorial.decisivoM) + Number(this.tutorial.francoM) + + Number(this.tutorial.audazM) + + Number(this.tutorial.inquietoM);
*/

    this.LI = 7;
    /*
    Number(this.currentTutorial.agresivoM) + Number(this.tutorial.tenazM) + Number(this.tutorial.determinadoM) + Number(this.tutorial.atrevidoM) +
              Number(this.currentTutorial.afirmativoM) + Number(this.tutorial.persistenteM) + Number(this.tutorial.competitivoM) + Number(this.tutorial.caracterfirmeM) +
              Number(this.currentTutorial.inconquistableM) + Number(this.tutorial.emprendedorM) + Number(this.tutorial.valienteM) + Number(this.tutorial.disputadorM) + Number(this.tutorial.confianzamismoM) + Number(this.tutorial.positivoM)
              Number(this.currentTutorial.aventureroM) + Number(this.tutorial.vigorosoM) + Number(this.tutorial.decisivoM) + Number(this.tutorial.francoM) + + Number(this.tutorial.audazM) + + Number(this.tutorial.inquietoM);
*/

    this.LS = 5;
    /*
    Number(this.currentTutorial.agresivoM) + Number(this.tutorial.tenazM) + Number(this.tutorial.determinadoM) + Number(this.tutorial.atrevidoM) +
              Number(this.currentTutorial.afirmativoM) + Number(this.tutorial.persistenteM) + Number(this.tutorial.competitivoM) + Number(this.tutorial.caracterfirmeM) +
              Number(this.currentTutorial.inconquistableM) + Number(this.tutorial.emprendedorM) + Number(this.tutorial.valienteM) + Number(this.tutorial.disputadorM) + Number(this.tutorial.confianzamismoM) + Number(this.tutorial.positivoM)
              Number(this.currentTutorial.aventureroM) + Number(this.tutorial.vigorosoM) + Number(this.tutorial.decisivoM) + Number(this.tutorial.francoM) + + Number(this.tutorial.audazM) + + Number(this.tutorial.inquietoM);
*/

    this.LC = 3;
    
    /*
    Number(this.currentTutorial.agresivoM) + Number(this.tutorial.tenazM) + Number(this.tutorial.determinadoM) + Number(this.tutorial.atrevidoM) +
              Number(this.currentTutorial.afirmativoM) + Number(this.tutorial.persistenteM) + Number(this.tutorial.competitivoM) + Number(this.tutorial.caracterfirmeM) +
              Number(this.currentTutorial.inconquistableM) + Number(this.tutorial.emprendedorM) + Number(this.tutorial.valienteM) + Number(this.tutorial.disputadorM) + Number(this.tutorial.confianzamismoM) + Number(this.tutorial.positivoM)
              Number(this.currentTutorial.aventureroM) + Number(this.tutorial.vigorosoM) + Number(this.tutorial.decisivoM) + Number(this.tutorial.francoM) + + Number(this.tutorial.audazM) + + Number(this.tutorial.inquietoM);
*/

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
    this.ResultTotS = this.arrTD[0];
    this.ResultTotC = this.arrTD[0];

  }

  updatePublished(status: boolean): void {
    if (this.currentTutorial.id) {
      this.tutorialService.update(this.currentTutorial.id, { published: status })
      .then(() => {
        // this.currentTutorial.published = status;
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }

  updateTutorial(): void {
    const data = {
      title: this.currentTutorial.appPaterno,
      description: this.currentTutorial.appMaterno
    };

    if (this.currentTutorial.id) {
      this.tutorialService.update(this.currentTutorial.id, data)
        .then(() => this.message = 'The tutorial was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteTutorial(): void {
    if (this.currentTutorial.id) {
      this.tutorialService.delete(this.currentTutorial.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }
}