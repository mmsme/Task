import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { MaidCardComponent } from './Components/MaidCard/MaidCard.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { StepCardComponent } from './Components/step-card/step-card.component';
import { StepperComponent } from './Components/stepper/stepper.component';
import { ChooseMaidComponent } from './Pages/ChooseMaid/ChooseMaid.component';
import { OurServicesComponent } from './Pages/our-services/our-services.component';
import { MaidServicesService } from './Services/maidServices.service';
import { MaidDetailsComponent } from './Components/MaidDetails/MaidDetails.component';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OurServicesComponent,
    SideBarComponent,
    StepCardComponent,
    StepperComponent,
    MaidCardComponent,
    ChooseMaidComponent,
    MaidDetailsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, NgxSliderModule],
  providers: [MaidServicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
