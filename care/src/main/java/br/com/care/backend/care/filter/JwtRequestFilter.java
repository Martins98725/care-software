package br.com.care.backend.care.filter;

import br.com.care.backend.care.config.JwtConfigProperties;
import br.com.care.backend.care.domain.repositories.UserRepository;
import br.com.care.backend.care.infra.TokenService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Slf4j
@Component
@RequiredArgsConstructor
public class JwtRequestFilter extends OncePerRequestFilter {

    private final TokenService tokenService;
    private final UserRepository userRepository;
    private final JwtConfigProperties jwtProperties;

    private final AntPathMatcher pathMatcher = new AntPathMatcher();

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
        String path = request.getRequestURI();

        // Se a lista de openUrls estiver vazia ou nula, não ignora nada
        if (jwtProperties.getOpenUrls() == null || jwtProperties.getOpenUrls().isEmpty()) {
            return false;
        }

        // Verifica se a rota atual (path) combina com alguma das rotas abertas configuradas
        return jwtProperties.getOpenUrls().stream()
                .anyMatch(pattern -> pathMatcher.match(pattern, path));
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        try {
            // 1. Extrai o token do cabeçalho
            String token = this.recoverToken(request);

            if (token != null) {
                // 2. O TokenService valida a assinatura e a expiração, e devolve o email
                String email = tokenService.validateToken(token);

                if (email != null && !email.isEmpty()) {
                    // 3. Busca o usuário no banco de dados (que implementa UserDetails)
                    UserDetails user = userRepository.findByEmail(email);

                    if (user != null) {
                        // 4. Cria o objeto de autenticação que o Spring entende
                        var authentication = new UsernamePasswordAuthenticationToken(
                                user,
                                null,
                                user.getAuthorities()
                        );

                        // 5. Injeta o usuário no contexto da requisição atual
                        SecurityContextHolder.getContext().setAuthentication(authentication);
                    } else {
                        log.warn("Tentativa de acesso: Token válido, mas usuário não existe no banco: {}", email);
                    }
                }
            }
        } catch (Exception e) {
            // Se der erro na extração ou validação, não trava a aplicação.
            // Apenas logamos e deixamos o Spring Security bloquear por falta de autenticação.
            log.error("Erro interno ao processar o filtro JWT: {}", e.getMessage());
        }
    }

    private String recoverToken(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");

        // Valida se o cabeçalho existe e se começa com o prefixo correto
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return null;
        }

        // Corta os 7 primeiros caracteres ("Bearer ") e limpa espaços vazios
        return authHeader.substring(7).trim();
    }

}
