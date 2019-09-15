interface ScaleResponse {
  kind: string;
  apiVersion: string;
  metadata: Metadata;
  spec: Spec;
  status: Status;
}

interface Status {
  replicas: number;
  selector: Selector;
  targetSelector: string;
}

interface Selector {
  app: string;
}

interface Spec {
  replicas: number;
}

interface Metadata {
  name: string;
  namespace: string;
  selfLink: string;
  uid: string;
  resourceVersion: string;
  creationTimestamp: string;
}
