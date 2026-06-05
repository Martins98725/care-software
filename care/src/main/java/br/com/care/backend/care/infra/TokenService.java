package br.com.care.backend.care.infra;

import br.com.care.backend.care.config.JwtConfigProperties;
import br.com.care.backend.care.domain.model.User;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
@RequiredArgsConstructor
public class TokenService {
    private final JwtConfigProperties jwtProperties;

    public String generateToken(User user) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(jwtProperties.getSecretKey());

            return JWT.create()
                    .withIssuer("care-backend")
                    .withSubject(user.getEmail())
                    .withClaim("role", user.getRole().name())
                    .withExpiresAt(genExpirationDate())
                    .sign(algorithm);

        } catch (JWTCreationException exception) {
            throw new RuntimeException("Erro ao gerar token JWT", exception);
        }
    }

    public String validateToken(String token) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(jwtProperties.getSecretKey());

            return JWT.require(algorithm)
                    .withIssuer("care-backend")
                    .build()
                    .verify(token)
                    .getSubject();

        } catch (JWTVerificationException exception) {

            return "";
        }
    }

    private Instant genExpirationDate() {
        // Usa o expirationSize (em milissegundos) que vem do seu JwtConfigProperties
        return Instant.now().plusMillis(jwtProperties.getExpirationSize());
    }
}
