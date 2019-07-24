import { Component, OnInit } from '@angular/core';
import { UploaderService } from 'src/app/service/uploader.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styles: []
})
export class UploaderComponent implements OnInit {
  message:string;
  constructor(private uploadService: UploaderService) { }

  ngOnInit() {
  }

  onPicked(input: HTMLInputElement) {
    const file = input.files[0];
    if (file) {
      this.uploadService.upload(file).subscribe(
        msg => {
          input.value = null;
          this.message = msg;
        }
      );
    }
  }

}
