package br.com.care.backend.care.config;

import br.com.care.backend.care.filter.JwtRequestFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
    private final UserDetailsService userDetailsService;

    private final JwtRequestFilter jwtRequestFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                // Desabilita CSRF pois a autenticação é via token (Stateless)
                .csrf(csrf -> csrf.disable())
                // Configura a sessão como Stateless (não guarda sessão no servidor)
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                // Configuração das rotas de acesso
                .authorizeHttpRequests(authorize -> authorize
                        // Rotas públicas (Login e Cadastro não precisam de token)
                        .requestMatchers(HttpMethod.POST, "/auth/login").permitAll()
                        .requestMatchers(HttpMethod.POST, "/auth/register/**").permitAll()

                        // Exemplos de rotas protegidas por Perfil (Role)
                        // O Spring Security exige que no Enum a role seja "RESPONSIBLE", mas no hasRole ele entende "ROLE_RESPONSIBLE" se você tiver configurado assim,
                        // ou apenas usa hasAuthority se o mapeamento for exato. Aqui usamos hasRole que é o padrão.
                        .requestMatchers(HttpMethod.POST, "/api/patients/**").hasRole("RESPONSIBLE")
                        .requestMatchers(HttpMethod.PUT, "/api/patients/**").hasRole("RESPONSIBLE")

                        // Rotas que tanto o Cuidador quanto o Responsável podem acessar
                        .requestMatchers(HttpMethod.GET, "/api/patients/**").hasAnyRole("RESPONSIBLE", "CAREGIVER")

                        // Qualquer outra requisição precisa estar apenas autenticada (token válido)
                        .anyRequest().authenticated()
                )
                // Adiciona o filtro do JWT ANTES do filtro padrão do Spring Security
                .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        // Expõe o AuthenticationManager para podermos usá-lo no nosso Controller de Login
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        // Define o algoritmo de hash das senhas (BCrypt é o padrão de mercado)
        return new BCryptPasswordEncoder();
    }

}
