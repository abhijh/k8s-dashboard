import {Component, Input} from '@angular/core';
import {Container, DeploymentListResponse, Item} from '../../model/deployment.model';
import {MatDialog} from '@angular/material/dialog';
import {ScaleComponent} from './scale/scale.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {DeploymentService} from '../../services/deployment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @Input() deploymentResponse: DeploymentListResponse;
  displayedColumns: string[] = ['name', 'images', 'created-on', 'replicas', 'actions'];

  constructor(private deploymentService: DeploymentService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) { }

  getImageList(item: Item) {
    return item.spec.template.spec.containers
      .map((container: Container) => container.image)
      .join(', ');
  }

  onScale(item: Item) {
    const dialogRef = this.dialog.open(ScaleComponent, {
      width: '600px',
      data: { item }
    });
    dialogRef.afterClosed()
      .subscribe(response => response.status && this.snackBar.open(response.message, 'Dismiss', {
        duration: 3000
      }));
  }

  onDelete(item: Item) {
    this.deploymentService.deleteDeployment(item.metadata.name)
      .subscribe((response) => console.log(response));
  }
}
