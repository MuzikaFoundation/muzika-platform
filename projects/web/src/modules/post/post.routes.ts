import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/components/layout/layout.component';
import { PostCommunityListComponent, PostMusicListComponent, PostVideoListComponent } from './pages/post-list/post-list';
import {
  PostCommunityItemDetailComponent,
  PostMusicItemDetailComponent,
  PostVideoItemDetailComponent
} from './pages/post-item-detail/post-item-detail';

const routes: Routes = [
  {
    path: 'board/community',
    component: PostCommunityListComponent,
    children: [{ path: ':id', component: PostCommunityItemDetailComponent }]
  },
  {
    path: 'board/music',
    children: [
      { path: '', component: PostMusicListComponent },
      { path: ':id', component: PostMusicItemDetailComponent }
    ]
  },
  {
    path: 'board/video',
    component: PostVideoListComponent,
    children: [{ path: ':id', component: PostVideoItemDetailComponent }]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'beta',
        component: LayoutComponent,
        children: routes
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppPostRouteModule {
}
