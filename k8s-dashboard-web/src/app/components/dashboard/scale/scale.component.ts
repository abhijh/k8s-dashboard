import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Item} from '../../../model/deployment.model';
import {DeploymentService} from '../../../services/deployment.service';

interface Data {
  item: Item;
}

@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.css']
})
export class ScaleComponent implements OnInit {
  numberOfDesiredReplicas: number;

  constructor(public dialogRef: MatDialogRef<ScaleComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Data,
              private deploymentService: DeploymentService) {
    this.numberOfDesiredReplicas = this.data.item.status.replicas;
  }

  ngOnInit() {
  }

  onCancel() {
    this.dialogRef.close({
      status: false,
      message: 'Canceled'
    });
  }

  onScale() {
    this.deploymentService.scaleDeployment(this.data.item.metadata.name, this.numberOfDesiredReplicas)
      .subscribe((response: ScaleResponse) => {
        this.dialogRef.close({
          status: true,
          message: 'Scaled'
        });
      }, (error) => {
        console.error(error);
        this.dialogRef.close({
          status: true,
          message: 'Something went wrong, please check logs in console.'
        });
      });
  }
}
