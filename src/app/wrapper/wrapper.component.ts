import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrapperComponent implements OnInit {
  defaultFile: File;

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.http.get('assets/default.jpg', { responseType: 'blob' }).subscribe((defaultBlob: Blob) => {
      this.defaultFile = new File([defaultBlob], 'fileName');
      this.cdr.detectChanges();
    });
  }

}
