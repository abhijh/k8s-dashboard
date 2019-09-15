package tk.abhinav.k8sdashboardrest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import tk.abhinav.k8sdashboardrest.service.ConfigService;

@RestController
@RequestMapping("/namespace")
public class NamespaceController {
    private final RestTemplate restTemplate;
    private final ConfigService configService;

    @Autowired
    public NamespaceController(RestTemplate restTemplate, ConfigService configService) {
        this.restTemplate = restTemplate;
        this.configService = configService;
    }

    @GetMapping
    public String listNamespace() {
        return restTemplate.getForObject(String.format("%s/api/v1/namespaces", configService.getConfig().getApi()), String.class);
    }
}
