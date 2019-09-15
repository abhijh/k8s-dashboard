package tk.abhinav.k8sdashboardrest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import tk.abhinav.k8sdashboardrest.model.Config;
import tk.abhinav.k8sdashboardrest.model.DeploymentList;
import tk.abhinav.k8sdashboardrest.model.request.Scale;
import tk.abhinav.k8sdashboardrest.service.ConfigService;

import java.util.ArrayList;

@RestController
@RequestMapping("/config")
public class ConfigController {
    private final ConfigService configService;

    @Autowired
    public ConfigController(ConfigService configService) {
        this.configService = configService;
    }

    @GetMapping
    public Config getConfig() {
        return configService.getConfig();
    }

    @PostMapping
    public Config setConfig(@RequestBody Config config) {
        configService.setConfig(config);
        return configService.getConfig();
    }
}
