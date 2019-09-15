

export interface Metadata {
  selfLink: string;
  resourceVersion: string;
}

export interface Labels {
  app: string;
}

export interface Annotations {
  'deployment.kubernetes.io/revision': string;
  'kubectl.kubernetes.io/last-applied-configuration': string;
}

export interface Metadata2 {
  name: string;
  namespace: string;
  selfLink: string;
  uid: string;
  resourceVersion: string;
  generation: number;
  creationTimestamp: Date;
  labels: Labels;
  annotations: Annotations;
}

export interface MatchLabels {
  app: string;
}

export interface Selector {
  matchLabels: MatchLabels;
}

export interface Labels2 {
  app: string;
}

export interface Metadata3 {
  labels: Labels2;
}

export interface Port {
  containerPort: number;
  protocol: string;
}

// export interface Resources {
// }

export interface Container {
  name: string;
  image: string;
  ports: Port[];
  resources: any;
  terminationMessagePath: string;
  terminationMessagePolicy: string;
  imagePullPolicy: string;
}

// export interface SecurityContext {
// }

export interface Spec2 {
  containers: Container[];
  restartPolicy: string;
  terminationGracePeriodSeconds: number;
  dnsPolicy: string;
  securityContext: any;
  schedulerName: string;
}

export interface Template {
  metadata: Metadata3;
  spec: Spec2;
}

export interface RollingUpdate {
  maxUnavailable: number;
  maxSurge: number;
}

export interface Strategy {
  type: string;
  rollingUpdate: RollingUpdate;
}

export interface Spec {
  replicas: number;
  selector: Selector;
  template: Template;
  strategy: Strategy;
  revisionHistoryLimit: number;
  progressDeadlineSeconds: number;
}

export interface Condition {
  type: string;
  status: string;
  lastUpdateTime: Date;
  lastTransitionTime: Date;
  reason: string;
  message: string;
}

export interface Status {
  observedGeneration: number;
  replicas: number;
  updatedReplicas: number;
  readyReplicas: number;
  availableReplicas: number;
  conditions: Condition[];
}

export interface Item {
  metadata: Metadata2;
  spec: Spec;
  status: Status;
}

export interface DeploymentListResponse {
  kind: string;
  apiVersion: string;
  metadata: Metadata;
  items: Item[];
}


