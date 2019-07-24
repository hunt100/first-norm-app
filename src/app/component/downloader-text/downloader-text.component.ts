import { Component, OnInit } from '@angular/core';
import { DownloaderTextService } from 'src/app/service/downloader-text.service';

@Component({
  selector: 'app-downloader-text',
  templateUrl: './downloader-text.component.html',
  styles: []
})
/**How work without server ? ? ? :-) */
export class DownloaderTextComponent implements OnInit {
  content: string;
  constructor(private downloaderService: DownloaderTextService) { }

  getText() {
    this.downloaderService.getTextFile('assets/textfile.txt').subscribe(results => this.content = results);
  }

  clear() {
    this.content = undefined;
  }

  ngOnInit() {
  }

}
