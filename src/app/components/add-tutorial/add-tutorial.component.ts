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


}