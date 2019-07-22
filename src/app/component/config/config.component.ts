import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { Config } from 'src/app/service/config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styles: [],
  providers: [ConfigService]
})
export class ConfigComponent implements OnInit {
  config: Config;
  headers: string[];
  error: any;
  constructor(private configService: ConfigService) { }

  ngOnInit() {
  }

  clear() {
    this.config = undefined;
    this.headers = undefined;
    this.error = undefined;
  }

  showConfig() {
    this.configService.getConfig()
    .subscribe((data: Config) => this.config = {
      apiUrl: data['apiUrl'],
      textfile: data['textfile']
    });
  }

  showConfigV2() {
    this.configService.getConfigV2()
        .subscribe(
          (data:Config) => this.config = {...data}, //success path
          error => this.error = error               //error path
          );
  }

  showConfigResponse() {
    this.configService.getConfigResponse()
        .subscribe(response => {
          //display headers
          const keys = response.headers.keys();
          this.headers = keys.map(key => `${key}: ${response.headers.get(key)}`)
          //access the body directly, which is typed as `Config`
          this.config = {...response.body};
        })
  }

  makeError() {
    this.configService.makeIntentionalError().subscribe(null, error => this.error = error );
  }
}
