import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    // redirect to 'home'
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    // wildcard route for a 404 page
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
