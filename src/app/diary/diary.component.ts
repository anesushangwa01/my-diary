import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import { Router } from '@angular/router';
import {DairyServiceService} from '../dairy-service.service'
import {DiaryEntry} from '../dairy-model'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.css'
})
export class DiaryComponent {
 diaryEntries?: DiaryEntry[];
 diarySubcription = new Subscription();

 constructor(private diaryDataService: DairyServiceService, private router: Router ){}




  ngOnInit(): void {
    this.diarySubcription = this.diaryDataService.diarySubject.subscribe(diaryEntries => {
    this.diaryEntries = diaryEntries;
    })
    this.diaryEntries = this.diaryDataService.diaryEntry
  }

  ngOnDestroy(): void {
   this.diarySubcription.unsubscribe();
  }

  onDelete(index: number): void {
  this.diaryDataService.onDelete(index);
  // this.diaryEntries = this.diaryDataService.diaryEntry
  }


  onEdit(index: number ){
    this.router.navigate(["edit" , index])
 }

 getDiaryEntry(index: number){
  return{...this.diaryEntries![index] } 
}
} 
