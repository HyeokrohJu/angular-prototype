import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { APP_CONFIG } from './shared/providers';
import { AppConfig } from './shared/interfaces';
import { OauthUtils } from './shared/utils';
import { CanonicalService, Oauth2Service } from './shared/services';

/**
 * APP Component
 *
 * @export
 * @class AppComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(APP_CONFIG) private appConfig: AppConfig,
    private metaTagServ: Meta,
    private canonicalServ: CanonicalService,
    private oAuthServ: Oauth2Service
  ) {}

  ngOnInit(): void {
    this.metaTagServ.addTags([
      {
        name: 'keywords',
        content: 'Angular SEO Integration, Music CRUD, Angular Universal',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Digamber Singh' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
    ]);
    this.canonicalServ.setCanonicalURL();

    this.oAuthServ
      .getOAuth2Jwt({ username: 'admin', password: '1234' })
      .subscribe((data) => {
        OauthUtils.addToken(data);
      });
  }
}
