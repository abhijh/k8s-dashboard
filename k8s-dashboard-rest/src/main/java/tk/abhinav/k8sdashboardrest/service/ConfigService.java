package tk.abhinav.k8sdashboardrest.service;

import org.springframework.stereotype.Service;
import tk.abhinav.k8sdashboardrest.model.Config;

@Service
public class ConfigService {
    private Config config;

    public Config getConfig() {
        return config;
    }

    public void setConfig(Config config) {
        this.config = config;
    }
}
