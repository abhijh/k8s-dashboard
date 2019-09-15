import {Component, OnInit} from '@angular/core';
import {NamespaceService} from './services/namespace.service';
import {ConfigService} from './services/config.service';
import {MatDialog} from '@angular/material/dialog';
import {SetConfigComponent} from './components/set-config/set-config.component';
import {Config} from './model/config.model';
import {DeploymentService} from './services/deployment.service';
import {DeploymentListResponse} from './model/deployment.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  namespaces: string[];
  selectedNamespace: string;
  deploymentResponse: DeploymentListResponse;
  private intervalId;
  constructor(private deploymentService: DeploymentService,
              private namespaceService: NamespaceService,
              private configService: ConfigService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.configService.getConfig()
      .subscribe((config: Config) => {
        if (!config.api) {
          const dialogRef = this.dialog.open(SetConfigComponent);
          dialogRef.afterClosed()
            .subscribe(() => this.listNameSpaces());
        } else {
          this.listNameSpaces();
        }
      });
  }

  onNamespaceSelected(n?) {
    let namespace = n;
    if (!n) {
      namespace = this.selectedNamespace;
    } else {
      this.selectedNamespace = n;
    }
    this.namespaceService.setSelectedNameSpace(namespace);
    // tslint:disable-next-line:no-unused-expression
    this.intervalId && clearInterval(this.intervalId);
    setTimeout(() => this.deploymentService.getDeploymentList().subscribe((response) => this.deploymentResponse = response), 1000);
    this.intervalId = setInterval(
      () => this.deploymentService.getDeploymentList().subscribe((response) => this.deploymentResponse = response), 5000);
  }

  private listNameSpaces() {
    this.namespaceService.listNamespaces()
      .subscribe(namespaces => {
        this.namespaces = namespaces;
        this.onNamespaceSelected(this.namespaces[0]);
      });
  }
}
