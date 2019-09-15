import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NamespaceService {
  private namespaceSubject: BehaviorSubject<string>;
  public namespace: Observable<string>;

  constructor(private httpClient: HttpClient) {
    this.namespaceSubject = new BehaviorSubject<string>(null);
    this.namespace = this.namespaceSubject.asObservable();
  }

  listNamespaces() {
    return this.httpClient.get('/api/namespace')
      .pipe(map((response: Namespace) => response.items.map((namespace: Item) => namespace.metadata.name).sort()));
  }

  setSelectedNameSpace(namespace: string) {
    this.namespaceSubject.next(namespace);
  }
}
