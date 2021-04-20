import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';

import { PagesRoutes } from './pages.routing';

@NgModule({
  imports: [CommonModule, SharedModule, PagesRoutes],
  declarations: [],
})
export class PagesModule {}
