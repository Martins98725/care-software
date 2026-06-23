package br.com.care.backend.care.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import java.util.List;

@Getter
@Setter
@ConfigurationProperties(prefix = "security.jwt")
public class JwtConfigProperties {
    private String secretKey;
    private Long expirationSize;
    private List<String> openUrls;
}
