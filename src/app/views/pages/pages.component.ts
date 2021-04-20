import { fromEvent, interval, Observable } from 'rxjs';

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagesComponent implements OnInit, AfterViewInit {
  public title = '';

  @ViewChild('mainEl', { static: false })
  public mainEl: ElementRef | undefined;

  @ViewChild('anyEl', { static: false })
  public anyEl: ElementRef | undefined;

  public secondsCounter$: Observable<number> = interval(1000);

  constructor(
    private router: Router,
    private changeDecRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.title = 'Page Component';
  }

  ngAfterViewInit(): void {
    fromEvent(this.mainEl?.nativeElement, 'click').subscribe(() => {
      this.router.navigate(['/page']);
    });
    fromEvent(this.anyEl?.nativeElement, 'click').subscribe(() => {
      this.router.navigate(['/any']);
    });

    this.secondsCounter$.pipe(untilDestroyed(this)).subscribe((num: number) => {
      this.title = `test : ${num}`;
      this.changeDecRef.detectChanges();
    });
  }
}
