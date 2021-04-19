import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourseSelectComponent } from '../components/course-select/course-select.component'
import { AppComponent } from '../app.component';
import {FoxHollowComponent} from '../components/fox-hollow/fox-hollow.component';
import {ThanksgivingPointComponent} from '../components/thanksgiving-point/thanksgiving-point.component';
import {SpanishOaksComponent} from '../components/spanish-oaks/spanish-oaks.component';


const routes: Routes = [
  {path: '', redirectTo: 'app-course-select', pathMatch: 'full'},
  {path: 'app-course-select', component: CourseSelectComponent},
  {path: '18300', component: FoxHollowComponent},
  {path: '11819', component: ThanksgivingPointComponent},
  {path: '19002', component: SpanishOaksComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
