import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AgmCoreModule} from '@agm/core';

import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ArchivesComponent } from './archives/archives.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { ConstatOneComponent } from './report/constat-one/constat-one.component';
import { ConstatTwoComponent } from './report/constat-two/constat-two.component';
import { ConstatThreeComponent } from './report/constat-three/constat-three.component';
import { ConstatFourComponent } from './report/constat-four/constat-four.component';
import { ConstatFiveComponent } from './report/constat-five/constat-five.component';
import { ConstatSixComponent } from './report/constat-six/constat-six.component';
import { CarDrawComponent } from './report/constat-six/car-draw/car-draw.component';
import { MotoDrawComponent } from './report/constat-six/moto-draw/moto-draw.component';
import { CarFormComponent } from './report/constat-three/vehicle-form/car-form.component';
import { DriverFormComponent } from './report/constat-three/driver-form/driver-form.component';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { ReportService } from './services/report.service';
import { DriverService } from './services/driver.service';
import { VehicleService } from './services/vehicle.service';
import { InsuredService } from './services/insured.service';
import { UpdateMyAccountComponent } from './insured/update-my-account/update-my-account.component';
import {MapService} from './services/map.service';
import { ManageMyProfilesComponent } from './insured/manage-my-profiles/manage-my-profiles.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { ContactAssistanceComponent } from './contact-assistance/contact-assistance.component';
import {AssistanceService} from './services/assistance.service';
import { MyProfilesComponent } from './insured/my-profiles/my-profiles.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { ConstatFourOneComponent } from './report/constat-four-one/constat-four-one.component';
import { ConstatSixOneComponent } from './report/constat-six-one/constat-six-one.component';
import { ConstatSevenOneComponent } from './report/take-pictures/constat-seven-one/constat-seven-one.component';
import { ConstatSevenTwoComponent } from './report/take-pictures/constat-seven-two/constat-seven-two.component';
import { ConstatSevenThreeComponent } from './report/take-pictures/constat-seven-three/constat-seven-three.component';
import {WebcamModule} from 'ngx-webcam';
import { ConstatEightComponent } from './report/constat-eight/constat-eight.component';
import { ReportTemplateComponent } from './report/report-template/report-template.component';
import { ConstatNineComponent } from './report/constat-nine/constat-nine.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'home', canActivate: [AuthGuardService], component: HomeComponent },
  { path: 'constat/one', canActivate: [AuthGuardService], component: ConstatOneComponent },
  { path: 'constat/two', canActivate: [AuthGuardService], component: ConstatTwoComponent },
  { path: 'constat/three', canActivate: [AuthGuardService], component: ConstatThreeComponent },
  { path: 'constat/three/car-form', canActivate: [AuthGuardService], component: CarFormComponent },
  { path: 'constat/three/driver-form', canActivate: [AuthGuardService], component: DriverFormComponent },
  { path: 'constat/four', canActivate: [AuthGuardService], component: ConstatFourComponent },
  { path: 'constat/four-one', canActivate: [AuthGuardService], component: ConstatFourOneComponent },
  { path: 'constat/five', canActivate: [AuthGuardService], component: ConstatFiveComponent },
  { path: 'constat/six', canActivate: [AuthGuardService], component: ConstatSixComponent },
  { path: 'constat/six-one', canActivate: [AuthGuardService], component: ConstatSixOneComponent },
  { path: 'constat/seven-one', canActivate: [AuthGuardService], component: ConstatSevenOneComponent },
  { path: 'constat/seven-two', canActivate: [AuthGuardService], component: ConstatSevenTwoComponent },
  { path: 'constat/seven-three', canActivate: [AuthGuardService], component: ConstatSevenThreeComponent },
  { path: 'constat/eight', canActivate: [AuthGuardService], component: ConstatEightComponent },
  { path: 'constat/nine', canActivate: [AuthGuardService], component: ConstatNineComponent },
  { path: 'constat/template', canActivate: [AuthGuardService], component: ReportTemplateComponent },
  { path: 'archives', canActivate: [AuthGuardService], component: ArchivesComponent },
  { path: 'how-to-use', canActivate: [AuthGuardService], component: HowToUseComponent },
  { path: 'help', canActivate: [AuthGuardService], component: HelpPageComponent },
  { path: 'contact-assistance', canActivate: [AuthGuardService], component: ContactAssistanceComponent },
  { path: 'user/my-account', canActivate: [AuthGuardService], component: UpdateMyAccountComponent },
  { path: 'user/manage-profiles', canActivate: [AuthGuardService], component: ManageMyProfilesComponent },
  { path: 'user/my-profiles', canActivate: [AuthGuardService], component: MyProfilesComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome' }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    WelcomeComponent,
    HomeComponent,
    ArchivesComponent,
    HowToUseComponent,
    ConstatOneComponent,
    ConstatTwoComponent,
    ConstatThreeComponent,
    ConstatFourComponent,
    ConstatFiveComponent,
    ConstatSixComponent,
    CarDrawComponent,
    MotoDrawComponent,
    CarFormComponent,
    DriverFormComponent,
    UpdateMyAccountComponent,
    ManageMyProfilesComponent,
    HelpPageComponent,
    ContactAssistanceComponent,
    MyProfilesComponent,
    HomeMenuComponent,
    ConstatFourOneComponent,
    ConstatSixOneComponent,
    ConstatSevenOneComponent,
    ConstatSevenTwoComponent,
    ConstatSevenThreeComponent,
    ConstatEightComponent,
    ReportTemplateComponent,
    ConstatNineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDttnHv4AFhA_AZ4K-oQIKtd3BAyiInU5I'
    }),
    WebcamModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    InsuredService,
    ReportService,
    DriverService,
    VehicleService,
    MapService,
    AssistanceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
