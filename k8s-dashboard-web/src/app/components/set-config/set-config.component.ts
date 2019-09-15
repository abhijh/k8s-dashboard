import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../../services/config.service';
import {MatDialogRef} from '@angular/material/dialog';
import {Config} from '../../model/config.model';

@Component({
  selector: 'app-set-config',
  templateUrl: './set-config.component.html',
  styleUrls: ['./set-config.component.css']
})
export class SetConfigComponent implements OnInit {
  payload: Config = new Config();

  constructor(private configService: ConfigService,
              public dialogRef: MatDialogRef<SetConfigComponent>) { }

  ngOnInit() {
  }

  onSetConfig() {
    this.configService.setConfig(this.payload)
      .subscribe((response: Config) => this.dialogRef.close(response));
  }
}
