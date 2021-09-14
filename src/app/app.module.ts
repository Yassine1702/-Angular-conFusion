import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule} from '@angular/material/select';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { MatDialogModule } from '@angular/material/dialog'
import { LoginComponent } from './login/login.component';


import { baseURL } from './shared/baseurl';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatListModule,
    MatGridListModule,
    MatCardModule ,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    HttpClientModule,
    
  ],
  entryComponents:[
    LoginComponent
  ],
  providers: [
    DishService,
    PromotionService,
    LeaderService,
    {provide: 'BaseURL', useValue: baseURL},
    ProcessHTTPMsgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
