import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SoundPrivacyPageComponent } from './page/privacy/privacy.component';


const routes: Route[] = [
  {
    path: 'sound-privacy',
    component: SoundPrivacyPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SoundRoutingModule {
}
