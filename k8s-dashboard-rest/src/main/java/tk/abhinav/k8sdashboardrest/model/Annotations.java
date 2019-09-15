
package tk.abhinav.k8sdashboardrest.model;

import java.util.HashMap;
import java.util.Map;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "deployment.kubernetes.io/revision",
    "kubectl.kubernetes.io/last-applied-configuration"
})
public class Annotations {

    @JsonProperty("deployment.kubernetes.io/revision")
    private String deploymentKubernetesIoRevision;
    @JsonProperty("kubectl.kubernetes.io/last-applied-configuration")
    private String kubectlKubernetesIoLastAppliedConfiguration;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("deployment.kubernetes.io/revision")
    public String getDeploymentKubernetesIoRevision() {
        return deploymentKubernetesIoRevision;
    }

    @JsonProperty("deployment.kubernetes.io/revision")
    public void setDeploymentKubernetesIoRevision(String deploymentKubernetesIoRevision) {
        this.deploymentKubernetesIoRevision = deploymentKubernetesIoRevision;
    }

    @JsonProperty("kubectl.kubernetes.io/last-applied-configuration")
    public String getKubectlKubernetesIoLastAppliedConfiguration() {
        return kubectlKubernetesIoLastAppliedConfiguration;
    }

    @JsonProperty("kubectl.kubernetes.io/last-applied-configuration")
    public void setKubectlKubernetesIoLastAppliedConfiguration(String kubectlKubernetesIoLastAppliedConfiguration) {
        this.kubectlKubernetesIoLastAppliedConfiguration = kubectlKubernetesIoLastAppliedConfiguration;
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    @JsonAnySetter
    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

}
