package tk.abhinav.k8sdashboardrest.model;

public class Config {
    private String api;
    private String token;

    public String getApi() {
        return api;
    }

    public void setApi(String api) {
        this.api = api;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Config(String api, String token) {
        this.api = api;
        this.token = token;
    }
}
