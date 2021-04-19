import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseSelectComponent } from './components/course-select/course-select.component';
import { HttpClientModule} from  '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { FoxHollowComponent } from './components/fox-hollow/fox-hollow.component';
import { ThanksgivingPointComponent } from './components/thanksgiving-point/thanksgiving-point.component';
import { SpanishOaksComponent } from './components/spanish-oaks/spanish-oaks.component';
import {MatSelectModule} from '@angular/material/select';
import { PlayerComponent } from './components/player/player.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    CourseSelectComponent,
    FoxHollowComponent,
    ThanksgivingPointComponent,
    SpanishOaksComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
