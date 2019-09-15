interface Namespace {
  kind: string;
  apiVersion: string;
  metadata: Metadata;
  items: Item[];
}

interface Item {
  metadata: Metadata2;
  spec: Spec;
  status: Status;
}

interface Status {
  phase: string;
}

interface Spec {
  finalizers: string[];
}

interface Metadata2 {
  name: string;
  selfLink: string;
  uid: string;
  resourceVersion: string;
  creationTimestamp: string;
}

interface Metadata {
  selfLink: string;
  resourceVersion: string;
}
