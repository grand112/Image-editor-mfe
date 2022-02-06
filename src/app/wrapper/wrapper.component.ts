import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrapperComponent implements OnInit, OnDestroy {
  defaultFile: File;

  private defaultFileSubscription: Subscription;

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.defaultFileSubscription =  this.http.get('assets/default.jpg', { responseType: 'blob' }).subscribe((defaultBlob: Blob) => {
      this.defaultFile = new File([defaultBlob], 'fileName');
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.defaultFileSubscription.unsubscribe();
  }
}
