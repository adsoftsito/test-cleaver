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

  constructor(private tutorialService: TutorialService) { }

  saveTutorial(): void {
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

}