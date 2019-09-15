package tk.abhinav.k8sdashboardrest.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.web.client.RestTemplate;

@Configuration
public class ApplicationConfiguration {
//    @Bean
//    public CoreV1Api coreV1Api() {
//        // loading the out-of-cluster config, a kubeconfig from token
//        ApiClient client = Config.fromToken(
//                "https://10.152.183.1",
//                "eyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJkZWZhdWx0LXRva2VuLWpremdsIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImRlZmF1bHQiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiI4YzMwMTc2Yi1kNGE2LTExZTktOTMzOS04YzE2NDViYzk3OGMiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZS1zeXN0ZW06ZGVmYXVsdCJ9.M-I0PzuN7vBsuyPa6W2zu9AOxYuqdVflw91wdcWCZ2X4p6YJrbwgdAsovPKgkvXDppXxE-Vuq7p_cfMqkHwggs54wk9Q4bXRaFtnN9j1Ial_Qa1jguHq7vzuHd2GAib7ZbNy0d9SRNJj9z1welC46Gm4s_eYeDXuDHAruLSEmJisJv6VzX9RbTZoPBAFHld0Cl7B7rp96BkVWh-5BbViE53MjPeXCEWNxHy8sncSMvhRCG-fRbH5YkFdiuswkzhCnl-vT6efBcVsJx6yl_q59prhpPJnZW2oTsk7SQo_Q7fLMpLNFEk_psHgwCMlgwsHZ1GzSQ0ASeKv9L_jiGnevA",
//                false
//        );
//
//        // set the global default api-client to the in-cluster one from above
//        io.kubernetes.client.Configuration.setDefaultApiClient(client);
//
//        // the CoreV1Api loads default api-client from global configuration.
//        return new CoreV1Api();
//    }

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate(new HttpComponentsClientHttpRequestFactory());
    }
}
