import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import {
  appConfigFactory,
  AppConfigProvider,
  OverrideConsole,
} from './shared/providers';
import { AppConfigService } from './shared/services';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/**
 * APP 모듈
 *
 * @export
 * @class AppModule
 */
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: OverrideConsole,
      deps: [],
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: appConfigFactory,
      deps: [AppConfigService, HttpClientModule],
      multi: true,
    },
    AppConfigProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
