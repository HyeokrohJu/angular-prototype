import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanonicalService } from './services';

/**
 * 공유 모듈
 *
 * @export
 * @class SharedModule
 */
@NgModule({
  imports: [CommonModule],
  providers: [{ provide: 'CANONICAL_SERVICE', useClass: CanonicalService }],
  declarations: [],
  exports: [],
})
export class SharedModule {}
