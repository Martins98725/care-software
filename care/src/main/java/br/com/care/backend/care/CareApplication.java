package br.com.care.backend.care;

import br.com.care.backend.care.config.JwtConfigProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableConfigurationProperties(JwtConfigProperties.class)
@EntityScan(basePackages = "br.com.care.backend.care.domain.model")
@EnableJpaRepositories(basePackages = "br.com.care.backend.care.domain.repositories")
public class CareApplication {

	public static void main(String[] args) {
		SpringApplication.run(CareApplication.class, args);
	}

}
