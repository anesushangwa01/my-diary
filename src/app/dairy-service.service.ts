import { Injectable } from '@angular/core';
import { DiaryEntry} from './dairy-model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DairyServiceService {
  diarySubject = new Subject<DiaryEntry[]>();
  diaryEntry: DiaryEntry[] = [
    new DiaryEntry("jan 1st", "Entry 1"),
    new DiaryEntry("jan 1st", "Entry 1"),
    new DiaryEntry("jan 1st", "Entry 1"),
    new DiaryEntry("jansd 1st", "Entry 1")
  ]

  onDelete(index: number ){
    this.diaryEntry.splice(index,1)
    this.diarySubject.next(this.diaryEntry)
  }
  onAddDairyEntry(diaryEntry:DiaryEntry){
    this.diaryEntry.push(diaryEntry);
    this.diarySubject.next(this.diaryEntry)
  }

  getDiaryEntry(index: number){
    return{...this.diaryEntry[index]};
  }

  onUpdateEntry(paramId:number , newEntry: DiaryEntry){
   this.diaryEntry[paramId] = newEntry;
   this.diarySubject.next(this.diaryEntry)
  }

 




  constructor() { }
}
