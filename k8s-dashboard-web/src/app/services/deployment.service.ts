import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeploymentListResponse } from '../model/deployment.model';
import {NamespaceService} from './namespace.service';

@Injectable({
  providedIn: 'root'
})
export class DeploymentService {
  private namespace: string;
  constructor(private httpClient: HttpClient,
              private namespaceService: NamespaceService) {
    this.namespaceService.namespace
      .subscribe(namespace => this.namespace = namespace);
  }

  public getDeploymentList() {
    return this.httpClient.get<DeploymentListResponse>(`/api/deployment/${this.namespace}`);
  }

  public deleteDeployment(name: string) {
    return this.httpClient.delete(`/api/deployment/${this.namespace}/${name}/`);
  }

  public scaleDeployment(name: string, numberOfReplicas: number) {
    return this.httpClient.post<ScaleResponse>(`/api/deployment/scale/${this.namespace}/${name}/`, {
      op: 'replace', path: '/spec/replicas', value: numberOfReplicas
    });
  }
}
