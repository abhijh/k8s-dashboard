package tk.abhinav.k8sdashboardrest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import tk.abhinav.k8sdashboardrest.model.DeploymentList;
import tk.abhinav.k8sdashboardrest.model.request.Scale;
import tk.abhinav.k8sdashboardrest.service.ConfigService;

import java.util.ArrayList;

@RestController
@RequestMapping("/deployment")
public class DeploymentController {
    private final ConfigService configService;
    private final RestTemplate restTemplate;

    @Autowired
    public DeploymentController(RestTemplate restTemplate, ConfigService configService) {
        this.restTemplate = restTemplate;
        this.configService = configService;
    }

    @GetMapping("/{namespace}")
    public DeploymentList listDeployment(@PathVariable String namespace) {
        return restTemplate.getForObject(String.format("%s/apis/extensions/v1beta1/namespaces/%s/deployments", configService.getConfig().getApi(), namespace), DeploymentList.class);
    }

    @PostMapping("/{namespace}")
    public String createDeployment(@RequestBody String payload, @PathVariable String namespace) {
        return restTemplate.postForObject(String.format("%s/api/v1/namespaces/%s/deployments", configService.getConfig().getApi(), namespace), payload, String.class);
    }

    @DeleteMapping("/{namespace}/{name}/")
    public void deleteDeployment(@PathVariable String namespace, @PathVariable String name) {
        restTemplate.delete(String.format("%s/apis/extensions/v1beta1/namespaces/%s/deployments/%s", configService.getConfig().getApi(), namespace, name));
    }

    @PostMapping("/scale/{namespace}/{name}/")
    public ResponseEntity<String> scaleDeployment(@RequestBody Scale scale, @PathVariable String namespace, @PathVariable String name) {
        ArrayList arrayList = new ArrayList();
        arrayList.add(scale);
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(new MediaType("application", "json-patch+json"));
        return restTemplate.exchange(
                String.format("%s/apis/extensions/v1beta1/namespaces/%s/deployments/%s/scale", configService.getConfig().getApi(), namespace, name),
                HttpMethod.PATCH,
                new HttpEntity<>(arrayList, httpHeaders),
                String.class
        );
    }
}
