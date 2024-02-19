import { Routes } from '@angular/router';
import { HeaderComponent} from './header/header.component';
import {DiaryComponent} from  './diary/diary.component';
import {DairyFormComponent} from './dairy-form/dairy-form.component'

export const routes: Routes = [
    // { path: '', component:    HeaderComponent },
    { path: '', component:    DiaryComponent },
    { path: 'edit/:id', component:    DairyFormComponent },
    { path: 'edit', component:    DairyFormComponent }
];
