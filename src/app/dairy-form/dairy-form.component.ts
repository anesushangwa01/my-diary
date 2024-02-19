import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import {DairyServiceService} from  '../dairy-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DiaryEntry } from '../dairy-model';

@Component({
  selector: 'app-dairy-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './dairy-form.component.html',
  styleUrl: './dairy-form.component.css'
})
export class DairyFormComponent {
//  dairyForm?: FormGroup;
dairyForm: FormGroup = new FormGroup({});

editMode = false;
diaryEntry?:DiaryEntry;
paramId?: number | string ;
 constructor (private dairyServiceService: DairyServiceService, private router: Router, private activatedRoute: ActivatedRoute) {}

//  ngOnInit(): void {
//   this.dairyForm = new FormGroup ({
//     "date": new FormControl(null, [Validators.required]),
//     "entry": new FormControl(null, [Validators.required])
//   })
//  }


ngOnInit(): void {

  this.activatedRoute.paramMap.subscribe((paramMap  ) => {
    if(paramMap.has('id')){
      this.editMode = true;
      this.paramId = +paramMap.get('id')!;
      this.diaryEntry = this. dairyServiceService.getDiaryEntry(this.paramId);
    }
    else{
      this.editMode = false;
    }
  })
  this.dairyForm = new FormGroup({
    date: new FormControl(this.editMode ?  this.diaryEntry!.date :null, [Validators.required]),
    entry: new FormControl(this.editMode ?  this.diaryEntry!.entry : null, [Validators.required])
  });
}

 onSubmit(){
  // console.log(this.dairyForm)
 

  const newEntry = new DiaryEntry(this.dairyForm.value.date, this.dairyForm.value.entry);

//   if(this.editMode){
//     this.dairyServiceService.onUpdateEntry(this.paramId , newEntry);
//   } else{
//     this.dairyServiceService.onAddDairyEntry(newEntry);
//   }

//   this.router.navigateByUrl("")
//  }
if (this.editMode && typeof this.paramId === 'number') {
  this.dairyServiceService.onUpdateEntry(this.paramId, newEntry);
} else {
  this.dairyServiceService.onAddDairyEntry(newEntry);
}

this.router.navigateByUrl("");

}
}
