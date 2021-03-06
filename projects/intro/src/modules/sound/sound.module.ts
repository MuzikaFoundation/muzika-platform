import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuzikaIntroModule } from '../intro/intro.module';
import { TranslateModule } from '@ngx-translate/core';
import { MuzikaIntroSharedModule } from '../shared/shared.module';
import { SoundRoutingModule } from './sound.route';
import { SoundPrivacyPageComponent } from './page/privacy/privacy.component';
import { SoundMainPageComponent } from './page/main/main.component';
import { SoundNavbarComponent } from './component/sound-navbar/sound-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    MuzikaIntroSharedModule,
    MuzikaIntroModule,
    TranslateModule,
    SoundRoutingModule
  ],
  declarations: [
    SoundPrivacyPageComponent,
    SoundMainPageComponent,
    SoundNavbarComponent
  ]
})
export class SoundModule {
}
