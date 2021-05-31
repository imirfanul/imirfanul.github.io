import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DpLogoComponent } from './dp-logo/dp-logo.component';
import { KeySkillBtnsComponent } from './key-skill-btns/key-skill-btns.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsCardComponent } from './projects-card/projects-card.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TypingComponent } from './typing/typing.component';
import { EscCancelationDirective } from './directives/esc-cancelation.directive';
import { MaxLenghtPipe } from './pipes/max-lenght.pipe';
import { NoEmojiPipe } from './pipes/no-emoji.pipe';
import { BackIconComponent } from './ui/back-icon/back-icon.component';
import { CrossIconComponent } from './ui/cross-icon/cross-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    DpLogoComponent,
    KeySkillBtnsComponent,
    LandingPageComponent,
    NavigatorComponent,
    ProjectsComponent,
    ProjectsCardComponent,
    ProjectDetailsComponent,
    ProfileComponent,
    ProfileCardComponent,
    PortfolioComponent,
    TypingComponent,
    EscCancelationDirective,
    MaxLenghtPipe,
    NoEmojiPipe,
    BackIconComponent,
    CrossIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
