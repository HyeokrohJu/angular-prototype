import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
];

export const PagesRoutes = RouterModule.forChild(routes);
